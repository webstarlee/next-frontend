import { useNetworkCon } from '@/hooks/NetworkContext';
// @ts-ignore
import { Widget } from "@kyberswap/widgets";
import { init, useWallets, useConnectWallet } from "@web3-onboard/react";
import { useEffect, useState } from 'react';
import { ethers } from 'ethers';
import walletConnectModule from "@web3-onboard/walletconnect";
import injectedModule from "@web3-onboard/injected-wallets";
import { ETH_TOKENS, BSC_TOKENS } from '@/utils/tokens';
import Image from 'next/image';
import loadingImg from '@/assets/loading.svg'
import '@/styles/widget.css'
import { useAccount, useDisconnect } from 'wagmi';

const injected = injectedModule();
const walletConnect = walletConnectModule({
    projectId: '1fda3af914357c73ce1abdd1e3968ce7'
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
    ],
});

const defaultTokenOut = {
    1: "0x488cF9905CD9f5dEa7212B4571c8b1052631Ab8d",
    56: "0x488cF9905CD9f5dEa7212B4571c8b1052631Ab8d",
};

const HeheWidget: React.FC = () => {
    const { chainId, changeNetwork, connectedProvider } = useNetworkCon();
    const [{ wallet }, connect] = useConnectWallet();
    const connectedWallets = useWallets();
    const [isLoaded, setLoaded] = useState(false);
    const { address, isConnected } = useAccount();
    const {connector} = useAccount()

    useEffect(() => {
        setTimeout(() => {
            setLoaded(true);
        }, 2000);
    }, [wallet])

    // useEffect(() => {
    //   getProvider()
    // }, [])

    // create an ethers provider
    let ethersProvider: any;

    // const getProvider = async () => {
    //   const connectedProvider = await connector?.getProvider()
      
      if (connectedProvider) {
          ethersProvider = new ethers.providers.Web3Provider(connectedProvider, "any");
      }
    //   console.log("ethersProvider ===========>", ethersProvider);
      
    // }

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
    }, [connectedWallets]);
    
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
    }, [isConnected]);

    return (
        <>
            {
                isLoaded
                ? <div className={'heheWidgetContainer'}>
                        <Widget
                            client="Hehe"
                            theme={undefined}
                            enableRoute = {true}
                            enableDexes={""}
                            tokenList={chainId == 1 ? ETH_TOKENS : BSC_TOKENS}
                            title={<div>Hehe Widget</div>}
                            width = {350}
                            provider={ethersProvider}
                            // @ts-ignore
                            defaultTokenOut={defaultTokenOut[chainId]}
                            showRate={true}
                            showDetail={true}
                        />
                    </div>
                : <div style={{width: '375px', height: '615px'}}>
                    <Image
                        style={{ width: 25, height: 25, position: 'absolute', left: '49%', top: '46%' }}
                        src={require(`@/assets/loading.svg`)}
                        alt="flag"
                    />
                </div>
            }
        </>
    )
}

export default HeheWidget;