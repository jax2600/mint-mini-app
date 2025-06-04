# Farcaster Mini App - NFT Mint

A simple Farcaster mini app for minting an NFT. This app is built with Vite, React, TypeScript, and wagmi.

## Overview

This mini app demonstrates how to create a simple NFT minting experience within a Farcaster Frame. It uses:

- Vite for fast development
- React for UI
- TypeScript for type safety
- wagmi for Web3 wallet connections
- Farcaster Frame SDK for frame integration

## Features

- Simple configuration for your own NFT collection
- Connect Farcaster wallet via Frame
- Mint an NFT directly in the frame
- Success and error handling
- Share functionality

## Getting Started

1. Clone this repository
2. Install dependencies with `pnpm install`
3. Start the development server with `pnpm dev`
4. Open your browser to the URL shown in the terminal

## Configuration

To configure the mini app for your own NFT collection, copy `.env.example` to `.env` and update the values. These environment variables control the default image and contract details used in `src/config.ts`.

Alternatively you can edit `src/config.ts` directly. You'll need to set:

- Collection name and description
- Image URL for the NFT
- Creator details
- Chain and pricing information
- Mint timing settings

You'll also need to update the contract address and ABI in `src/config.ts`.

## Frame Embed

The Farcaster Frame meta tag is injected automatically by `vite.config.ts` using the embed configuration from `src/config.ts`. Set `VITE_APP_URL` in your environment or update the embed values in `config.ts` as needed. There is no need to manually edit `index.html`.

## License

MIT
