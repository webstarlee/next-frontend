import { useRef, useEffect, useMemo } from "react";
import {
  useContractReads,
} from "wagmi";
import { presaleConfig } from "../assets/contracts/presale";
import { CHAIN_LIST } from "@/const";

export function useSumUsdRaised() {
  let configs = CHAIN_LIST.map(chain => ({
    ...presaleConfig,
    functionName: "usdRaised",
    chainId: chain.id,
  }));
  
  const { data } = useContractReads({
    contracts: configs,
    cacheTime: 5_000
  });
  let sum = data?.reduce((sum, res) => sum + ((res.result || 0n) as bigint), 0n) ?? 0n;
  return sum;
}
