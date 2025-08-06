import React from "react";

const Footer = () => {
  return (
    <footer className="w-full">
      <div className="container mx-auto py-4 text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Ocean Faucet. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
