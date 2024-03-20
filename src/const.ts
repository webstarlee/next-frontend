export const CHAIN_LIST =
  process.env.NEXT_PUBLIC_ENV == 'prod' ? 
    [
      { title: 'ETH Mainnet', id: 1 },
      { title: 'BNB Smart Chain', id: 56 },
      { title: 'Polygon', id: 137 },
      { title: 'Optimism', id: 10 },
      { title: 'Arbitrum', id: 42161 },
      { title: 'Avalanche', id: 43114 },
      { title: 'Gnosis', id: 100 },
      { title: 'Fantom', id: 250 },
      { title: 'Harmony', id: 1666600000 },
    ]
    : 
    [
      { title: 'ETH Goerli', id: 5 },
      { title: 'BSC Testnet', id: 97 },
      { title: 'Polygon Mumbai', id: 80001 },
    ];
export const MAIN_CHAIN_ID = process.env.NEXT_PUBLIC_ENV == 'prod' ? 1 : 5;

export const MaxUint256 = '0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff';

export const ZERO_ADDRESS = "0x0000000000000000000000000000000000000000";

export interface Token 
{
  name: string, 
  symbol: string, 
  address: `0x${string}`,
  price?: number,
  balance?: number,
  decimals?: number,
  allowance?: number,
};

export const TOKEN_LIST: Record<number, Array<Token>> = 
{
  5: [
    {name: 'ETH', symbol: 'ETH', address: ZERO_ADDRESS},
    {name: 'USDT', symbol: 'USDT', address: '0x1b68F74394f7f85a89286dC7f6F366d78d4152D4'},
    {name: 'USDC', symbol: 'USDC', address: '0x742aE1Dd19fA7F2bd652751A25818cECFf82807f'},
  ],
  1: [
    {name: 'ETH', symbol: 'ETH', address: ZERO_ADDRESS},
    {name: 'USDT', symbol: 'USDT', address: '0xdac17f958d2ee523a2206206994597c13d831ec7'},
    {name: 'USDC', symbol: 'USDC', address: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48'},
    {name: 'DAI', symbol: 'DAI', address: '0x6b175474e89094c44da98b954eedeac495271d0f'},
    {name: 'TUSD', symbol: 'TUSD', address: '0x0000000000085d4780b73119b644ae5ecd22b376'},
    {name: 'BUSD', symbol: 'BUSD', address: '0x4fabb145d64652a948d72533023f6e7a623c7c53'},
    {name: 'USDD', symbol: 'USDD', address: '0x0c10bf8fcb7bf5412187a595ab97a3609160b5c6'},
    {name: 'LINK', symbol: 'LINK', address: '0x514910771af9ca656af840dff83e8264ecf986ca'},
    {name: 'WBTC', symbol: 'WBTC', address: '0x2260fac5e5542a773aa44fbcfedf7c193bc2c599'},
    {name: 'AAVE', symbol: 'AAVE', address: '0x7fc66500c84a76ad7e9c93437bfc5ac33e2ddae9'},
    {name: 'CRV', symbol: 'CRV', address: '0xd533a949740bb3306d119cc777fa900ba034cd52'},
    {name: 'UNI', symbol: 'UNI', address: '0x1f9840a85d5af5bf1d1762f925bdaddc4201f984'},
    {name: 'MKR', symbol: 'MKR', address: '0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2'},
  ],

  56: [
    {name: 'BNB', symbol: 'BNB', address: ZERO_ADDRESS},
    {name: 'USDT', symbol: 'USDT', address: '0x55d398326f99059ff775485246999027b3197955'},
    {name: 'USDC', symbol: 'USDC', address: '0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d'},
    {name: 'DAI', symbol: 'DAI', address: '0x1af3f329e8be154074d8769d1ffa4ee058b1dbc3'},
    {name: 'TUSD', symbol: 'TUSD', address: '0x40af3827f39d0eacbf4a168f8d4ee67c121d11c9'},
    {name: 'BUSD', symbol: 'BUSD', address: '0xe9e7cea3dedca5984780bafc599bd69add087d56'},
    {name: 'USDD', symbol: 'USDD', address: '0xd17479997f34dd9156deef8f95a52d81d265be9c'},
    {name: 'LINK', symbol: 'LINK', address: '0xf8a0bf9cf54bb92f17374d9e9a321e6a111a51bd'},
    {name: 'AAVE', symbol: 'AAVE', address: '0xfb6115445bff7b52feb98650c87f44907e58f802'},
    {name: 'UNI', symbol: 'UNI', address: '0xbf5140a22578168fd562dccf235e5d43a02ce9b1'},
  ],

  137: [
    {name: 'MATIC', symbol: 'MATIC', address: ZERO_ADDRESS},
    {name: 'USDT', symbol: 'USDT', address: '0xc2132d05d31c914a87c6611c10748aeb04b58e8f'},
    {name: 'USDC', symbol: 'USDC', address: '0x2791bca1f2de4661ed88a30c99a7a9449aa84174'},
    {name: 'DAI', symbol: 'DAI', address: '0x8f3cf7ad23cd3cadbd9735aff958023239c6a063'},
    {name: 'BUSD', symbol: 'BUSD', address: '0x9c9e5fd8bbc25984b178fdce6117defa39d2db39'},
    {name: 'LINK', symbol: 'LINK', address: '0x53e0bca35ec356bd5dddfebbd1fc0fd03fabad39'},
    {name: 'WBTC', symbol: 'WBTC', address: '0x1bfd67037b42cf73acf2047067bd4f2c47d9bfd6'},
    {name: 'AAVE', symbol: 'AAVE', address: '0xd6df932a45c0f255f85145f286ea0b292b21c90b'},
    {name: 'CRV', symbol: 'CRV', address: '0x172370d5cd63279efa6d502dab29171933a610af'},
    {name: 'UNI', symbol: 'UNI', address: '0xb33eaad8d922b1083446dc23f610c2567fb5180f'},
    {name: 'MKR', symbol: 'MKR', address: '0x6f7c932e7684666c9fd1d44527765433e01ff61d'},
  ],
  10: [
    {name: 'ETH', symbol: 'ETH', address: ZERO_ADDRESS},
    {name: 'USDT', symbol: 'USDT', address: '0x94b008aa00579c1307b0ef2c499ad98a8ce58e58'},
    {name: 'USDC', symbol: 'USDC', address: '0x0b2c639c533813f4aa9d7837caf62653d097ff85'},
    {name: 'DAI', symbol: 'DAI', address: '0xda10009cbd5d07dd0cecc66161fc93d7c9000da1'},
    {name: 'BUSD', symbol: 'BUSD', address: '0x9c9e5fd8bbc25984b178fdce6117defa39d2db39'},
    {name: 'LINK', symbol: 'LINK', address: '0x350a791bfc2c21f9ed5d10980dad2e2638ffa7f6'},
    {name: 'WBTC', symbol: 'WBTC', address: '0x68f180fcce6836688e9084f035309e29bf0a2095'},
    {name: 'AAVE', symbol: 'AAVE', address: '0x76fb31fb4af56892a25e32cfc43de717950c9278'},
    {name: 'CRV', symbol: 'CRV', address: '0x0994206dfe8de6ec6920ff4d779b0d950605fb53'},
    {name: 'UNI', symbol: 'UNI', address: '0x6fd9d7ad17242c41f7131d257212c54a0e816691'},
  ],

  42161: [
    {name: 'ETH', symbol: 'ETH', address: ZERO_ADDRESS},
    {name: 'USDT', symbol: 'USDT', address: '0xfd086bc7cd5c481dcc9c85ebe478a1c0b69fcbb9'},
    {name: 'USDC', symbol: 'USDC', address: '0xaf88d065e77c8cc2239327c5edb3a432268e5831'},
    {name: 'DAI', symbol: 'DAI', address: '0xda10009cbd5d07dd0cecc66161fc93d7c9000da1'},
    {name: 'USDD', symbol: 'USDD', address: '0x680447595e8b7b3aa1b43beb9f6098c79ac2ab3f'},
    {name: 'LINK', symbol: 'LINK', address: '0xf97f4df75117a78c1a5a0dbb814af92458539fb4'},
    {name: 'WBTC', symbol: 'WBTC', address: '0x2f2a2543b76a4166549f7aab2e75bef0aefc5b0f'},
    {name: 'CRV', symbol: 'CRV', address: '0x11cdb42b0eb46d95f990bedd4695a6e3fa034978'},
    {name: 'UNI', symbol: 'UNI', address: '0xfa7f8980b0f1e64a2062791cc3b0871572f1f7f0'},
  ],

  43114: [
    {name: 'AVAX', symbol: 'AVAX', address: ZERO_ADDRESS},
    {name: 'USDT', symbol: 'USDT', address: '0x9702230A8Ea53601f5cD2dc00fDBc13d4dF4A8c7'},
    {name: 'USDC', symbol: 'USDC', address: '0xB97EF9Ef8734C71904D8002F8b6Bc66Dd9c48a6E'},
    {name: 'DAI', symbol: 'DAI', address: '0xd586E7F844cEa2F87f50152665BCbc2C279D8d70'},
    {name: 'TUSD', symbol: 'TUSD', address: '0x1c20e891bab6b1727d14da358fae2984ed9b59eb'},
    {name: 'BUSD', symbol: 'BUSD', address: '0x9c9e5fd8bbc25984b178fdce6117defa39d2db39'},
    {name: 'LINK', symbol: 'LINK', address: '0x5947BB275c521040051D82396192181b413227A3'},
    {name: 'WBTC', symbol: 'WBTC', address: '0x50b7545627a5162F82A992c33b87aDc75187B218'},
    {name: 'AAVE', symbol: 'AAVE', address: '0x63a72806098bd3d9520cc43356dd78afe5d386d9'},
    {name: 'UNI', symbol: 'UNI', address: '0x8ebaf22b6f053dffeaf46f4dd9efa95d89ba8580'},
    {name: 'MKR', symbol: 'MKR', address: '0x88128fd4b259552a9a1d457f435a6527aab72d42'},
  ],

  100: [
    {name: 'XDAI', symbol: 'XDAI', address: ZERO_ADDRESS},
    {name: 'USDT', symbol: 'USDT', address: '0x4ecaba5870353805a9f068101a40e0f32ed605c6'},
    {name: 'USDC', symbol: 'USDC', address: '0xddafbb505ad214d7b80b1f830fccc89b60fb7a83'},
    {name: 'LINK', symbol: 'LINK', address: '0xe2e73a1c69ecf83f464efce6a5be353a37ca09b2'},
    {name: 'WBTC', symbol: 'WBTC', address: '0x8e5bbbb09ed1ebde8674cda39a0c169401db4252'},
    {name: 'UNI', symbol: 'UNI', address: '0x4537e328bf7e4efa29d05caea260d7fe26af9d74'},
  ],

  250: [
    {name: 'FTM', symbol: 'FTM', address: ZERO_ADDRESS},
    {name: 'USDT', symbol: 'USDT', address: '0x049d68029688eabf473097a2fc38ef61633a3c7a'},
    {name: 'USDC', symbol: 'USDC', address: '0x04068da6c83afcfa0e13ba15a6696662335d5b75'},
    {name: 'DAI', symbol: 'DAI', address: '0x8d11ec38a3eb5e956b052f67da8bdc9bef8abf3e'},
    {name: 'LINK', symbol: 'LINK', address: '0xb3654dc3d10ea7645f8319668e8f54d2574fbdc8'},
    {name: 'WBTC', symbol: 'WBTC', address: '0x321162cd933e2be498cd2267a90534a804051b11'},
    {name: 'AAVE', symbol: 'AAVE', address: '0x6a07a792ab2965c72a5b8088d3a069a7ac3a993b'},
    {name: 'CRV', symbol: 'CRV', address: '0x1e4f97b9f9f913c46f1632781732927b9019c68b'},
  ],

  1666600000: [
    {name: 'ONE', symbol: 'ONE', address: ZERO_ADDRESS},
    {name: 'USDT', symbol: 'USDT', address: '0x3c2b8be99c50593081eaa2a724f0b8285f5aba8f'},
    {name: 'USDC', symbol: 'USDC', address: '0x985458e523db3d53125813ed68c274899e9dfab4'},
    {name: 'DAI', symbol: 'DAI', address: '0xef977d2f931c1978db5f6747666fa1eacb0d0339'},
    {name: 'BUSD', symbol: 'BUSD', address: '0xe176ebe47d621b984a73036b9da5d834411ef734'},
    {name: 'LINK', symbol: 'LINK', address: '0x218532a12a389a4a92fc0c5fb22901d1c19198aa'},
    {name: 'WBTC', symbol: 'WBTC', address: '0x3095c7557bcb296ccc6e363de01b760ba031f2d9'},
    {name: 'AAVE', symbol: 'AAVE', address: '0xcf323aad9e522b93f11c352caa519ad0e14eb40f'},
  ],

};
