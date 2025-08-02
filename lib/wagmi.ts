import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import { mainnet,seiDevnet } from 'wagmi/chains';

// Sei testnet configuration
export const seiTestnet = {
  id: 1328,
  name: 'Sei Testnet',
  network: 'sei-testnet',
  nativeCurrency: {
    decimals: 18,
    name: 'Sei',
    symbol: 'SEI',
  },
  rpcUrls: {
    default: { http: ['https://evm-rpc-testnet.sei-apis.com'] },
    public: { http: ['https://evm-rpc-testnet.sei-apis.com'] },
  },
  blockExplorers: {
    default: { name: 'Sei Testnet Explorer', url: 'https://testnet.sei.io' },
  },
  testnet: true,
} as const;

export const config = getDefaultConfig({
  appName: 'Sei Actions',
  projectId: process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID || 'YOUR_PROJECT_ID',
  chains: [seiTestnet, mainnet, seiDevnet],
  ssr: true,
});
