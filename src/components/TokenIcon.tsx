import React from "react";
import classNames from "classnames";
import styles from "@/styles/Button.module.css";
import Image from "next/image";

interface Props {
  symbol: string;
  className?: string;
}

const TokenIcon: React.FC<Props> = ({ symbol, className }) => {
  return (
    <Image 
      src={`/images/tokens/${symbol.toLowerCase()}.svg`} 
      width={24}
      height={22}
      alt=""
      className={className}
    />
  );
};

export default TokenIcon;
