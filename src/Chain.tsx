import { Chain } from 'wagmi';

export const ToronetTestnet = {
  id: 54321,
  name: 'Toronet Testnet',
  network: 'Toronet Testnet',
  nativeCurrency: {
    decimals: 18,
    name: 'TORO Token',
    symbol: 'TORO',
  },
  rpcUrls: {
    public: { http: ['https://testnet.toronet.org/rpc/'] },
    default: { http: ['https://testnet.toronet.org/rpc/'] },
  },
  blockExplorers: {
    etherscan: { name: 'Toro Scan', url: 'https://testnet.toronet.org/' },
    default: { name: 'Toro Scan', url: 'https://testnet.toronet.org/' },
  },

} as const satisfies Chain


