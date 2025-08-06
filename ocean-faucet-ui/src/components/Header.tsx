"use client";

import React from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { ModeToggle } from "./ModeToggle";

const Header = () => {
  return (
    <header className="w-full">
      <section className="container mx-auto flex items-center justify-between py-4">
        <h1 className="text-xl font-bold md:text-2xl">
          🌊 <span className="hidden md:inline">Ocean Faucet</span>
        </h1>

        <div className="flex items-center justify-center gap-3">
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
