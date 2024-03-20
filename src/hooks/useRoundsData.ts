import { useRef, useEffect, useMemo } from "react";
import {
  useContractReads,
} from "wagmi";
import { presaleConfig } from "../assets/contracts/presale";

export interface ContractRound {
  amount: bigint;
  price: bigint;
  endTime: bigint;
}

export interface Round {
  amount: bigint;
  price: bigint;
  endTime: bigint;
  endPoint: bigint;
}

export function useRoundsData() {
  let roundsCount = 13;
  let configs = [];
  for (let i = 0; i < roundsCount; i++) {
    configs.push({
      ...presaleConfig,
      functionName: "roundDetails",
      args: [BigInt(i)],
      chainId: process.env.NEXT_PUBLIC_ENV == "prod" ? 1 : 5,
    })
  }

  const { data } = useContractReads({
    contracts: configs,
    cacheTime: 600_000
  });
  let _rounds = data?.map(res => (res.result ?? { amount: 0n, price: 0n, endTime: 0n }) as ContractRound) ?? []
  let rounds = _rounds.map((_round, i) => {
    const prev = _rounds[i - 1] ?? { amount: 0n };
    return {
      amount: _round.amount - prev.amount,
      price: _round.price,
      endTime: _round.endTime,
      endPoint: _round.amount,
    } as Round
  });
  return rounds;
}
