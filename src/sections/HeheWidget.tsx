import { useNetwork } from '@/hooks/NetworkContext';
// @ts-ignore
import { Widget } from "@kyberswap/widgets";
import { init, useWallets, useConnectWallet } from "@web3-onboard/react";
import { useEffect } from 'react';
import { ethers } from 'ethers';
import walletConnectModule from "@web3-onboard/walletconnect";
import injectedModule from "@web3-onboard/injected-wallets";
import { ETH_TOKENS, BSC_TOKENS } from '@/utils/tokens';

const injected = injectedModule();
const walletConnect = walletConnectModule({
    projectId: '1fda3af914357c73ce1abdd1e3968ce7',
});

// initialize Onboard
init({
    wallets: [injected, walletConnect],
    chains: [
      {
        id: "0x1",
        token: "ETH",
        label: "Ethereum Mainnet",
        rpcUrl: "https://ethereum.kyberengineering.io",
      },
      {
        id: "0x38",
        token: "BNB",
        label: "BNB Smart Chain Mainnet",
        rpcUrl: "https://bsc.kyberengineering.io",
      },
      {
        id: "0x89",
        token: "BNB",
        label: "Polygon",
        rpcUrl: "https://polygon.kyberengineering.io",
      },
    ],
});

const defaultTokenOut = {
    1: "0xdAC17F958D2ee523a2206206994597C13D831ec7",
    56: "0x55d398326f99059fF775485246999027B3197955",
};

const HeheWidget: React.FC = () => {
    const { chainId, changeNetwork } = useNetwork();
    const [{ wallet }, connect] = useConnectWallet();
    const connectedWallets = useWallets();

    // create an ethers provider
    let ethersProvider: any;

    if (wallet) {
        ethersProvider = new ethers.providers.Web3Provider(wallet.provider, "any");
    }
    useEffect(() => {
        ethersProvider?.getNetwork().then((res: any) => changeNetwork(res.chainId));
      }, [ethersProvider]);
    
      useEffect(() => {
        if (!connectedWallets.length) return;
    
        const connectedWalletsLabelArray = connectedWallets.map(
          ({ label }) => label
        );
        window.localStorage.setItem(
          "connectedWallets",
          JSON.stringify(connectedWalletsLabelArray)
        );
      }, [connectedWallets, wallet]);
    
      useEffect(() => {
        const previouslyConnectedWallets = JSON.parse(
          window.localStorage.getItem("connectedWallets") || "[]"
        );
    
        if (previouslyConnectedWallets?.length) {
          async function setWalletFromLocalStorage() {
            const walletConnected = await connect({
              autoSelect: previouslyConnectedWallets[0],
            });
          }
          setWalletFromLocalStorage();
        }
      }, [connect]);

    return (
        <>
            <Widget
                client="Hehe"
                theme={undefined}
                enableRoute = {true}
                enableDexes={""}
                tokenList={chainId == 1 ? ETH_TOKENS : BSC_TOKENS}
                title={<div>Hehe Widget</div>}
                width = {450}
                provider={ethersProvider}
                // @ts-ignore
                defaultTokenOut={defaultTokenOut[chainId]}
                showRate={true}
                showDetail={true}
            />
        </>
    )
}

export default HeheWidget;