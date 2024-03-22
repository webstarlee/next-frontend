import React, { createContext, useContext, useState } from 'react';
import { switchNetwork } from '@wagmi/core'
import { useAccount, useNetwork } from 'wagmi';

interface NetworkContextType {
  chainId: number;
  netMenuOpen: boolean | false;
  toggleNetMenuOpen: () => void;
  changeNetwork: (id: number) => void;
  openModal: boolean | false;
  toggleOpenModal: () => void;
  changeProvider: () => void;
  connectedProvider: any;
}

const networkContext = createContext<NetworkContextType | undefined>(undefined);

interface NetProviderProps {
  children: React.ReactNode;
}

export const NetworkProvider: React.FC<NetProviderProps> = ({ children }) => {
  const {connector} = useAccount()
  const {chain} = useNetwork();
  // @ts-ignore
  const [chainId, setChainId] = useState<number>(chain?.id || 1);
  const [netMenuOpen, setNetMenuOpen] = useState<boolean>(false);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [connectedProvider, setProvider] = useState<any>();

  const changeNetwork = async (id: number) => {
    try {
      const network = await switchNetwork({chainId: id})
      setChainId(network.id);
    } catch (error) {
      console.log(error)
    }
  };

  const toggleNetMenuOpen = () => {
    setNetMenuOpen((prev) => !prev);
  };

  function toggleOpenModal() {
    setOpenModal((prev) => !prev);
  }

  const changeProvider = async () => {
    const provider = await connector?.getProvider()
    setProvider(provider);
  }

  return (
    <networkContext.Provider
      value={{
        chainId,
        netMenuOpen,
        changeNetwork,
        toggleNetMenuOpen,
        openModal,
        toggleOpenModal,
        connectedProvider,
        changeProvider
      }}
    >
      {children}
    </networkContext.Provider>
  );
};

export const useNetworkCon = () => {
  const context = useContext(networkContext);
  if (!context) {
    throw new Error('useRoot must be used within a RootProvider');
  }
  return context;
};
