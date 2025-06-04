import type { Abi, Address } from "viem";
import { base } from "viem/chains";

/**
 * NFT Metadata Configuration
 */
const DEFAULT_IMAGE_URL = "https://mint-demo.replit.app/nft.png";
const DEFAULT_APP_URL = "https://mint-demo.replit.app/";

export const mintMetadata = {
  name: "Mini App Mint Demo",
  description:
    "A simple example of an onchain action in a Farcaster mini app. Tap the button below to mint this image.",
  imageUrl: process.env.VITE_ART_URL ?? DEFAULT_IMAGE_URL,
  creator: {
    name: "horsefacts.eth",
    fid: 3621,
    profileImageUrl: "https://imagedelivery.net/BXluQx4ige9GuW0Ia56BHw/27ebb092-6f26-4397-6027-8c90d909ce00/original",
  },
  chain: "Base",
  priceEth: "0.0004",
  startsAt: null,
  endsAt: null,
  isMinting: true,
} as const;

/**
 * Contract Configuration
 */
export const contractConfig = {
  address: (process.env.VITE_CONTRACT_ADDRESS as Address) ??
    ("0x8087039152c472Fa74F47398628fF002994056EA" as Address),
  chain: base,
  abi: [
    { inputs: [], name: "MintPaused", type: "error" },
    { inputs: [], name: "InvalidPaymentAmount", type: "error" },
    { inputs: [], name: "SenderNotDirectEOA", type: "error" },
    {
      inputs: [
        { internalType: "uint256", name: "vectorId", type: "uint256" },
        { internalType: "uint48", name: "numTokensToMint", type: "uint48" },
        { internalType: "address", name: "mintRecipient", type: "address" },
      ],
      name: "vectorMint721",
      outputs: [],
      stateMutability: "payable",
      type: "function",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "bytes32",
          name: "vectorId",
          type: "bytes32",
        },
        {
          indexed: true,
          internalType: "address",
          name: "contractAddress",
          type: "address",
        },
        {
          indexed: true,
          internalType: "bool",
          name: "onChainVector",
          type: "bool",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "numMinted",
          type: "uint256",
        },
      ],
      name: "NumTokenMint",
      type: "event",
    },
  ] as const as Abi,
  vectorId: Number(process.env.VITE_VECTOR_ID ?? 6506),
  referrer: (process.env.VITE_REFERRER_ADDRESS as Address) ??
    ("0x075b108fC0a6426F9dEC9A5c18E87eB577D1346a" as Address),
} as const;

/**
 * Farcaster Frame Embed Configuration
 */
export const embedConfig = {
  version: "next",
  imageUrl: process.env.VITE_ART_URL ?? DEFAULT_IMAGE_URL,
  button: {
    title: "Mint",
    action: {
      type: "launch_frame",
      name: "NFT Mint",
      url: process.env.VITE_APP_URL ?? DEFAULT_APP_URL,
    },
  },
} as const;

/**
 * Main App Configuration
 */
export const config = {
  ...mintMetadata,
  contract: contractConfig,
  embed: embedConfig,
} as const;
