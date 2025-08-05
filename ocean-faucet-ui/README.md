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

## ✨ Features

- 🚀 **Next.js 15**: Latest React framework with App Router
- 🔗 **Web3 Integration**: wagmi + RainbowKit for seamless wallet connections
- 🎨 **Modern UI**: Shadcn/ui components with Tailwind CSS
- 🌙 **Dark/Light Theme**: Toggle between themes with system preference support
- 📱 **Responsive Design**: Optimized for mobile and desktop
- ⚡ **Bun Runtime**: Fast JavaScript runtime and package manager
- 🔒 **Type Safety**: Full TypeScript implementation
- 🎯 **Multi-Chain Support**: Mainnet, testnets, and local development
- 🔄 **Real-time Updates**: Live wallet and transaction status
- 🎭 **Wallet Options**: Support for multiple wallet providers

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

- **Mainnet**: Ethereum mainnet
- **Testnets**: Sepolia, and other test networks
- **Local**: Anvil/Hardhat for development

### **Smart Contract Integration**

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

- **Shadcn/ui**: Pre-built accessible components
- **Radix Primitives**: Unstyled, accessible base components
- **Custom Components**: Project-specific UI elements

### **Design System**

- **Consistent Spacing**: Tailwind spacing scale
- **Typography**: Geist font family
- **Color Palette**: Semantic color tokens
- **Responsive Breakpoints**: Mobile-first approach

## 🌙 Theme System

### **Features**

- **Dark/Light Mode**: Toggle between themes
- **System Preference**: Automatic theme detection
- **Persistent Storage**: Theme preference saved
- **Smooth Transitions**: Animated theme changes

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

## 🔒 Security

### **Implemented Security Measures**

- ✅ **Type Safety**: Full TypeScript implementation
- ✅ **Environment Variables**: Secure configuration management
- ✅ **Wallet Security**: Secure wallet connection patterns
- ✅ **CSP Headers**: Content Security Policy
- ✅ **HTTPS Only**: Secure communication in production

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](../LICENSE) file for details.

---

Built with ❤️ using **Next.js + TypeScript + Bun**

[⭐ Star this repo](https://github.com/kavinda-100/ocean-faucet)
