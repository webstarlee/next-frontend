import { useRef, useEffect } from "react";
import {
  useAccount,
  useNetwork,
  useSwitchNetwork,
  useContractWrite,
  useContractRead,
  useBalance,
  useFeeData,
} from "wagmi";
import { presaleConfig } from "../assets/contracts/presale";
import { div } from "@/utils/math";

export interface PresaleData {
  usdRaised: bigint,
  price: number,
  nativePrice: number,
  currentStep: number,
  checkPoint: bigint,
}

export function usePresaleData(chainId: number) {
  const { data: usdRaised = 0n } = useContractRead({
    ...presaleConfig,
    functionName: "usdRaised",
    chainId,
  });

  const { data: _price = 0n } = useContractRead({
    ...presaleConfig,
    functionName: "calculatePrice",
    args: [BigInt(1)],
    chainId,
  });
  const price = div(_price, BigInt(10 ** 18), 8);

  const { data: _nativePrice = 0n } = useContractRead({
    ...presaleConfig,
    functionName: "getLatestPrice",
    chainId,
  });
  const nativePrice = div(_nativePrice, BigInt(10 ** 18), 5);

  const { data: _currentStep = 0n } = useContractRead({
    ...presaleConfig,
    functionName: "currentStep",
    chainId,
  });
  const currentStep = Number(_currentStep);

  const { data: checkPoint = 0n } = useContractRead({
    ...presaleConfig,
    functionName: "checkPoint",
    chainId,
  });

  return {
    usdRaised,
    price,
    nativePrice,
    currentStep,
    checkPoint,
  } as PresaleData;
}
