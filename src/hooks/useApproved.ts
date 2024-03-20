import React, { useRef, useEffect } from "react";
import {
  useToken,
  useContractRead,
  erc20ABI,
} from "wagmi";

export function useApproved(
  token?: `0x${string}`, 
  user?: `0x${string}`, 
  spender?: `0x${string}`,
  amount?: number
) {
  const { data: tokenData } = useToken({
    address: token,
  });
  const decimals = tokenData?.decimals ?? 18;
  const { data: allowance = 0n, refetch: refetchAllowance } = useContractRead(
    token && user && spender && {
      address: token,
      abi: erc20ABI,
      functionName: 'allowance',
      args: [user, spender],
    }
  );
  const refetch = () => {
    refetchAllowance();
  }
  return {
    approved: Number(allowance) > (amount ?? 0) * 10 ** decimals,
    refetch
  };  
}
