# 🌊 OceanToken Faucet - Frontend

> **Modern Web3 frontend for the OceanToken faucet built with Next.js, TypeScript, and Bun**

[![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)](https://typescriptlang.org/)
[![Bun](https://img.shields.io/badge/Bun-1.0-000?logo=bun)](https://bun.sh/)
[![wagmi](https://img.shields.io/badge/wagmi-2.16-purple)](https://wagmi.sh/)
[![RainbowKit](https://img.shields.io/badge/RainbowKit-2.2-rainbow)](https://rainbowkit.com/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38bdf8?logo=tailwind-css)](https://tailwindcss.com/)

## 📋 Table of Contents

- [🌊 OceanToken Faucet - Frontend](#-oceantoken-faucet---frontend)
  - [📋 Table of Contents](#-table-of-contents)
  - [📖 Overview](#-overview)
  - [✨ Features](#-features)
  - [🏗️ Tech Stack](#️-tech-stack)
    - [**Core Framework**](#core-framework)
    - [**Web3 Integration**](#web3-integration)
    - [**Styling \& UI**](#styling--ui)
    - [**Development Tools**](#development-tools)
  - [🚀 Getting Started](#-getting-started)
    - [📦 Prerequisites](#-prerequisites)
    - [⚙️ Installation](#️-installation)
  - [🔧 Development](#-development)
    - [🛠️ Available Scripts](#️-available-scripts)
    - [📁 Project Structure](#-project-structure)
  - [🌐 Web3 Integration](#-web3-integration)
    - [**Wallet Connection**](#wallet-connection)
    - [**Blockchain Networks**](#blockchain-networks)
    - [**Smart Contract Integration**](#smart-contract-integration)
  - [🎨 UI Components](#-ui-components)
    - [**Component Library**](#component-library)
    - [**Design System**](#design-system)
  - [🌙 Theme System](#-theme-system)
    - [**Features**](#features)
  - [📱 Responsive Design](#-responsive-design)
    - [**Breakpoints**](#breakpoints)
    - [Features](#features-1)
    - [**Docker Deployment**](#docker-deployment)
  - [🔒 Security](#-security)
    - [**Implemented Security Measures**](#implemented-security-measures)
  - [📜 License](#-license)

## 📖 Overview

The **OceanToken Faucet Frontend** is a modern, responsive Web3 application that provides users with an intuitive interface to claim OceanToken (OCT) from the smart contract faucet. Built with cutting-edge technologies for optimal performance and user experience.

**🎯 Current Status**: ✅ **Fully Deployed and Functional**
- **Connected to**: OceanToken Contract `0x5FbDB2315678afecb367f032d93f642f64180aa3`
- **Network**: Anvil Local Chain (Chain ID: 31337)
- **Features**: Complete ocean-themed UI with transaction handling

## ✨ Features

- 🚀 **Next.js 15**: Latest React framework with App Router
- 🔗 **Web3 Integration**: wagmi + RainbowKit for seamless wallet connections
- � **Ocean-Themed UI**: Stunning ocean-inspired design with animations and gradients
- 🌙 **Optimized Dark/Light Theme**: Ocean-themed colors with slate-based dark mode
- 📱 **Responsive Design**: Optimized for mobile and desktop
- ⚡ **Bun Runtime**: Fast JavaScript runtime and package manager
- 🔒 **Type Safety**: Full TypeScript implementation
- 🎯 **Multi-Chain Support**: Mainnet, testnets, and local Anvil development
- 🔄 **Real-time Updates**: Live wallet and transaction status
- 🎭 **Wallet Options**: Support for multiple wallet providers
- ✅ **Transaction Handling**: Complete success/error state management
- 💫 **User Feedback**: Toast notifications and status cards
- 🎨 **Custom Components**: Beautiful UI components with ocean theming
- 📊 **Contract Integration**: Fully connected to deployed OceanToken contract

## 🏗️ Tech Stack

### **Core Framework**

- **Next.js 15** - React framework with App Router
- **React 19** - Latest React with concurrent features
- **TypeScript 5** - Type-safe JavaScript

### **Web3 Integration**

- **wagmi 2.16** - React hooks for Ethereum
- **RainbowKit 2.2** - Wallet connection UI
- **viem 2.x** - TypeScript Ethereum library
- **TanStack Query 5** - Data fetching and caching

### **Styling & UI**

- **Tailwind CSS 4** - Utility-first CSS framework
- **Shadcn/ui** - Beautiful and accessible components
- **Radix UI** - Unstyled, accessible components
- **Lucide React** - Beautiful & consistent icons
- **next-themes** - Theme switching

### **Development Tools**

- **Bun** - Fast JavaScript runtime and package manager
- **ESLint 9** - Code linting
- **Prettier 3** - Code formatting
- **PostCSS 8** - CSS processing

## 🚀 Getting Started

### 📦 Prerequisites

- [Bun](https://bun.sh/) - Fast JavaScript runtime
- [Git](https://git-scm.com/) - Version control
- [MetaMask](https://metamask.io/) or other Web3 wallet

### ⚙️ Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/kavinda-100/ocean-faucet.git
   cd ocean-faucet/ocean-faucet-ui
   ```

2. **Install dependencies**

   ```bash
   bun install
   ```

3. **Set up environment variables**

   ```bash
   cp .env.example .env
   # Edit .env with your configuration
   ```

4. **Start development server**

   ```bash
   bun run dev
   ```

5. **Open in browser**

   Navigate to [http://localhost:3000](http://localhost:3000)

## 🔧 Development

### 🛠️ Available Scripts

```bash
# Development
bun run dev          # Start development server with Turbo
bun run build        # Build for production
bun run start        # Start production server
bun run preview      # Build and start production server

# Code Quality
bun run lint         # Run ESLint
bun run lint:fix     # Fix ESLint issues
bun run typecheck    # Run TypeScript checks
bun run check        # Run lint + typecheck

# Formatting
bun run format:check # Check code formatting
bun run format:write # Format code with Prettier
```

### 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── ui/               # Shadcn/ui components
│   ├── Header.tsx        # Navigation header
│   └── ModeToggle.tsx    # Theme toggle
├── providers/            # Context providers
│   ├── ThemeProvider.tsx # Theme management
│   └── WebThreeProvider.tsx # Web3 configuration
├── lib/                  # Utility functions
├── styles/               # Additional styles
├── config.ts            # wagmi configuration
└── env.ts               # Environment validation
```

## 🌐 Web3 Integration

### **Wallet Connection**

- **RainbowKit**: Beautiful wallet connection modal
- **Multi-wallet Support**: MetaMask, WalletConnect, Coinbase, and more
- **Chain Management**: Automatic network switching

### **Blockchain Networks**

- **Anvil Local**: Connected to deployed OceanToken contract
- **Mainnet**: Ethereum mainnet support
- **Testnets**: Sepolia and other test networks

### **Smart Contract Integration**

**Currently Connected Contract**:
- **Address**: `0x5FbDB2315678afecb367f032d93f642f64180aa3`
- **Network**: Anvil Local (Chain ID: 31337)
- **Token**: OceanToken (OCT)
- **Claim Amount**: 10 OCT per request
- **Claim Interval**: 1 hour

```typescript
// wagmi configuration with multiple chains
const config = getDefaultConfig({
  appName: "Ocean Faucet",
  projectId: "YOUR_PROJECT_ID",
  chains: [mainnet, sepolia, anvil],
  ssr: true,
});
```

## 🎨 UI Components

### **Component Library**

- **Shadcn/ui**: Pre-built accessible components with ocean theming
- **Radix Primitives**: Unstyled, accessible base components
- **Custom Components**: Ocean-themed UI elements with animations

### **Design System**

- **Ocean Theme**: Blue gradients and aqua accents
- **Consistent Spacing**: Tailwind spacing scale
- **Typography**: Geist font family
- **Color Palette**: Ocean-inspired color tokens with optimized dark mode
- **Responsive Breakpoints**: Mobile-first approach
- **Animations**: Smooth transitions and hover effects

### **Key Components**

- **Header**: Ocean-themed navigation with wallet connection
- **InputSection**: Token claiming interface with transaction handling
- **FAQ**: Ocean-specific frequently asked questions
- **Footer**: Beautiful ocean-themed footer with links
- **Success/Error Cards**: Real-time transaction feedback
- **Theme Toggle**: Optimized dark/light mode switching

## 🌙 Theme System

### **Features**

- **Ocean-Themed Light Mode**: Blue gradients and aqua accents
- **Optimized Dark Mode**: Slate-based colors for better contrast
- **System Preference**: Automatic theme detection
- **Persistent Storage**: Theme preference saved locally
- **Smooth Transitions**: Animated theme changes
- **Component Adaptation**: All components support both themes

## 📱 Responsive Design

### **Breakpoints**

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: > 1024px

### Features

- **Mobile-first**: Designed for mobile, enhanced for desktop
- **Flexible Layouts**: CSS Grid and Flexbox
- **Adaptive Components**: Responsive component behavior
- **Touch-friendly**: Optimized for touch interactions
- **Ocean Theme**: Consistent across all screen sizes

## 🚀 Deployment

### **Development**

```bash
# Start development server
bun run dev

# Visit http://localhost:3000
```

### **Production**

```bash
# Build for production
bun run build

# Start production server
bun run start
```

### **Vercel Deployment (Recommended)**

```bash
# Deploy to Vercel
vercel deploy

# Or connect GitHub repository for automatic deployments
```

### **Docker Deployment**

```dockerfile
FROM oven/bun:1 as base
WORKDIR /app
COPY package.json bun.lockb ./
RUN bun install --frozen-lockfile
COPY . .
RUN bun run build
EXPOSE 3000
CMD ["bun", "run", "start"]
```

### **Environment Configuration**

Make sure to configure your environment variables:

```bash
# .env.local
NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID=your_project_id
NEXT_PUBLIC_CHAIN_ID=31337  # Anvil local chain
```

## 🔒 Security

### **Implemented Security Measures**

- ✅ **Type Safety**: Full TypeScript implementation
- ✅ **Environment Variables**: Secure configuration management
- ✅ **Wallet Security**: Secure wallet connection patterns with RainbowKit
- ✅ **Input Validation**: Form validation with Zod schemas
- ✅ **Transaction Security**: Proper error handling and user confirmation
- ✅ **State Management**: Secure state handling for transaction flows
- ✅ **Contract Validation**: ABI-based type-safe contract interactions

## 📊 Project Status

**✅ Complete and Production Ready**

- [x] Ocean-themed UI design
- [x] Smart contract integration
- [x] Wallet connection and management
- [x] Transaction handling (success/error states)
- [x] Responsive design
- [x] Dark/light theme optimization
- [x] Real-time user feedback
- [x] Error handling and validation
- [x] Production deployment ready

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](../LICENSE) file for details.

---

Built with ❤️ using **Next.js + TypeScript + Bun**

[⭐ Star this repo](https://github.com/kavinda-100/ocean-faucet)
