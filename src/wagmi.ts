import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import {
  base,
  baseSepolia,
  polygon,
  sepolia,
} from 'wagmi/chains';

export const config = getDefaultConfig({
  appName: 'dammysail project',
  projectId: '2381f0a87add45a7e28ffe6061a2e467',
  chains: [
    baseSepolia,
    base,
    sepolia,
  ],
  ssr: true,
});