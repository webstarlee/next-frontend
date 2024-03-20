import { EthereumClient, w3mConnectors, w3mProvider } from '@web3modal/ethereum'
import { Web3Modal } from '@web3modal/react'
import { configureChains, createConfig, WagmiConfig } from 'wagmi'
import { 
  mainnet, 
  goerli, 
  bsc, 
  bscTestnet, 
  polygon, 
  polygonMumbai,
  optimism,
  arbitrum,
  avalanche,
  gnosis,
  fantom,
  harmonyOne,
} from 'wagmi/chains'
import { publicProvider } from 'wagmi/providers/public'
import { infuraProvider } from 'wagmi/providers/infura'
import { jsonRpcProvider } from 'wagmi/providers/jsonRpc'
import { alchemyProvider } from 'wagmi/providers/alchemy'

const chains = [
  mainnet, 
  goerli, 
  bsc, 
  bscTestnet, 
  polygon, 
  polygonMumbai,
  optimism,
  arbitrum,
  avalanche,
  gnosis,
  fantom,
  harmonyOne
]
const projectId = '05fa9164c267cb728f126acf9ddf54cf'
const infuraApiKey = '0e9def5528444c968fd4d37b9278b65f'
const alchemyApiKey = 't80dXI00wo1oJlJJ6Zpc-HA7Ffcmj3cp'

const ANKR_NETWORKS: Record<number, string> = {
  1: 'eth',
  56: 'bsc',
  137: 'polygon',
  10: 'optimism',
  42161: 'arbitrum',
  43114: 'avalanche',
  100: 'gnosis',
  250: 'fantom',
  1666600000: 'harmony'
};

const { publicClient } = configureChains(
  chains, 
  [
    alchemyProvider({ apiKey: alchemyApiKey }),
    infuraProvider({ apiKey: infuraApiKey }),
    jsonRpcProvider({
      rpc: (chain) => ({
        http: `https://rpc.ankr.com/${ANKR_NETWORKS[chain.id]}/6299f442ab697d4c5e2f974121f01af8e79940ea7c92ffc539e6eb809858dfba`,
      })
    }),
    w3mProvider({ projectId }),
    publicProvider()
  ]
)
const wagmiConfig = createConfig({
  autoConnect: true,
  connectors: w3mConnectors({ projectId, chains }),
  publicClient
})
const ethereumClient = new EthereumClient(wagmiConfig, chains)

interface Web3ConfigProps {
  children: React.ReactNode;
}

export const Web3Config: React.FC<Web3ConfigProps> = ({children}) => {
  return (
    <>
      <WagmiConfig config={wagmiConfig}>
        {children}
      </WagmiConfig>

      <Web3Modal projectId={projectId} ethereumClient={ethereumClient} />
    </>
  )
}

