"use client"
import React, { useEffect, useRef, useState } from "react";
import { init, useConnectWallet } from "@web3-onboard/react";
import { useAccount, useDisconnect } from 'wagmi';

interface WalletPopoverProps {
    children: React.ReactNode;
    trigger: string;
}

const WalletPopover: React.FC<WalletPopoverProps> = ({ children, trigger }) =>{
  const { disconnect } = useDisconnect();
  const { address, isConnected } = useAccount();
  const [show, setShow] = useState(false);
  const wrapperRef = useRef(null);

  const handleMouseOver = () => {
    if (trigger === "hover") {
      setShow(true);
    };
  };

  const handleMouseLeft = () => {
    if (trigger === "hover") {
      setShow(false);
    };
  };

  useEffect(() => {
    function handleClickOutside(event: any) {
    // @ts-ignore
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setShow(false);
      }
    }

    if (show) {
      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }
  }, [show, wrapperRef]);

  return (
    <div
      ref={wrapperRef}
      onMouseEnter={handleMouseOver}
      onMouseLeave={handleMouseLeft}
      className="w-fit h-fit relative flex justify-center">
      <div
        onClick={() => setShow(!show)}
      >
        {children}
      </div>
      <div
        hidden={!show}
        className="min-w-fit w-[200px] h-fit absolute top-[100%] z-50 transition-all">
        <div className="rounded bg-black p-3 text-[#fde048] text-xl mt-[5px] font-[Baloo] shadow-[10px_30px_150px_rgba(46,38,92,0.25)]">
            <button onClick={() => isConnected && disconnect()}>Disconnect</button>
        </div>
      </div>
    </div>
  );
};

export default WalletPopover;