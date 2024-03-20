import React, { useState, useRef } from 'react';
import classNames from 'classnames';
import styles from '@/styles/TokenSelect.module.css';
import { Token, ZERO_ADDRESS } from '@/const';
import { useAccount } from 'wagmi';
import TokenIcon from './TokenIcon';

import { readContract, fetchBalance } from '@wagmi/core';
import { presaleConfig } from '../assets/contracts/presale';
import { div } from '@/utils/math';
import Image from 'next/image';

interface TokenSelectProps {
  tokens: Array<Token>;
  selected: Token | undefined;
  onSelect: (token: Token) => void;
}

const TokenSelect: React.FC<TokenSelectProps> = ({ tokens, selected, onSelect }) => {
  const { address } = useAccount();

  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = async (token: Token) => {
    setIsOpen(false);
    if (!token.price) {
      const _price = await readContract({
        ...presaleConfig,
        functionName: 'getTokenPrice',
        args: [token.address],
      });
      token.price = div(_price, BigInt(10 ** 18), 8);
    }
    if (address && !token.balance) {
      const _balance = await fetchBalance({
        address,
        token: token.address != ZERO_ADDRESS ? token.address : undefined,
      });
      token.balance = Number(_balance?.formatted);
    }
    onSelect(token);
  };

  return (
    <div className={classNames(styles.dropdownContainer)}>
      <button className={classNames(styles.dropdownBtn)} onClick={() => setIsOpen(!isOpen)}>
        {selected ? (
          <>
            <TokenIcon symbol={selected.symbol} />
            {selected.symbol}
          </>
        ) : (
          <span>Select Coin</span>
        )}
        <Image src="/images/dropdownArrow.png" alt="downArrow" height={10} width={10} />
      </button>
      {isOpen && (
        <ul className={classNames(styles.menuContainer)}>
          {tokens.map((token, index) => {
            return (
              <li
                key={index}
                className={classNames(styles.menuItem)}
                onClick={() => handleSelect(token)}
              >
                <TokenIcon symbol={token.symbol} />
                {token.symbol}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default TokenSelect;
