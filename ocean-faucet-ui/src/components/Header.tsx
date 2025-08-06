"use client";

import React from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { ModeToggle } from "./ModeToggle";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-blue-200/20 bg-gradient-to-r from-blue-50/80 via-white/90 to-cyan-50/80 backdrop-blur-md dark:border-slate-700/20 dark:from-slate-900/80 dark:via-slate-800/90 dark:to-slate-900/80">
      <section className="container mx-auto flex items-center justify-between px-4 py-4">
        <div className="flex items-center gap-3">
          <div className="rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 p-2.5 shadow-lg shadow-blue-500/25">
            <span className="text-2xl">🌊</span>
          </div>
          <div className="flex flex-col">
            <h1 className="bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-800 bg-clip-text text-xl font-bold text-transparent md:text-2xl dark:from-blue-400 dark:via-cyan-400 dark:to-blue-600">
              <span className="hidden md:inline">Ocean Faucet</span>
              <span className="md:hidden">Ocean</span>
            </h1>
            <p className="hidden text-xs font-medium text-blue-600/70 sm:block dark:text-blue-400/70">
              Free OCT Tokens
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <ConnectButton
            showBalance={false}
            accountStatus={{
              smallScreen: "avatar",
              largeScreen: "full",
            }}
          />
          <ModeToggle />
        </div>
      </section>
    </header>
  );
};

export default Header;
