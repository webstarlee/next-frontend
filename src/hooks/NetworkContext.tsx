import React, { createContext, useContext, useState } from 'react';
import { switchNetwork } from '@wagmi/core'

interface NetworkContextType {
  chainId: number | 1;
  netMenuOpen: boolean | false;
  toggleNetMenuOpen: () => void;
  changeNetwork: (id: number) => void;
  openModal: boolean | false;
  toggleOpenModal: () => void;
}

const networkContext = createContext<NetworkContextType | undefined>(undefined);

interface NetProviderProps {
  children: React.ReactNode;
}

export const NetworkProvider: React.FC<NetProviderProps> = ({ children }) => {
  const [chainId, setChainId] = useState<number>(1);
  const [netMenuOpen, setNetMenuOpen] = useState<boolean>(false);
  const [openModal, setOpenModal] = useState<boolean>(false);

  const changeNetwork = async (id: number) => {
    setChainId(id);
    await switchNetwork({chainId: id})
  };

  const toggleNetMenuOpen = () => {
    setNetMenuOpen((prev) => !prev);
  };

  function toggleOpenModal() {
    setOpenModal((prev) => !prev);
  }

  return (
    <networkContext.Provider
      value={{
        chainId,
        netMenuOpen,
        changeNetwork,
        toggleNetMenuOpen,
        openModal,
        toggleOpenModal
      }}
    >
      {children}
    </networkContext.Provider>
  );
};

export const useNetwork = () => {
  const context = useContext(networkContext);
  if (!context) {
    throw new Error('useRoot must be used within a RootProvider');
  }
  return context;
};
