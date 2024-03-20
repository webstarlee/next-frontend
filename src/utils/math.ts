export const sm = (num: number) => {
  return num.toFixed(10).replace(/\.?0+$/, "");
}

export const div = (first: bigint, second: bigint, numOfDecimals: number) => {
  if(!first || !second) return 0;
  const n = 10 ** numOfDecimals;
  return Number(first * BigInt(n) / second) / n;
}