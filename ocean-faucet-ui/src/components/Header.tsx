import React from "react";
import { ModeToggle } from "./ModeToggle";

const Header = () => {
  return (
    <header className="container mx-auto flex items-center justify-between py-4">
      <h1 className="text-xl font-bold md:text-2xl">
        🌊 <span className="hidden md:inline">Ocean Faucet</span>
      </h1>

      <div className="flex items-center space-x-4">
        <ModeToggle />
        {/* connect button */}
      </div>
    </header>
  );
};

export default Header;
