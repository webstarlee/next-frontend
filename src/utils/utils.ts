import bs58 from "bs58"

export const addrTobs58 = (addr: string) => {
  // Remove the '0x' prefix if present
  if (addr.startsWith('0x')) {
    addr = addr.slice(2);
  }
  
  // Convert the hex address to bytes
  const bytes = Buffer.from(addr, 'hex');
  
  // Encode to Base58
  const res = bs58.encode(bytes);
  
  return res;
}

export const bs58Toaddr = (bs: string) => {
  const bytes = bs58.decode(bs);
  
  // Convert the bytes to a hexadecimal string
  const addr = '0x' + Buffer.from(bytes).toString('hex');
  
  return addr;
}

export const getRefCode = (id: number) => {
  const paddingId = '0'.repeat(6 - String(id).length) + id;
  const referralCode = bs58.encode(Buffer.from(paddingId))
  return referralCode;
}