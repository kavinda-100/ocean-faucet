import React from "react";
import { Github, Twitter, Globe, Heart, Shield, Zap } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative w-full border-t border-blue-200/20 bg-gradient-to-br from-blue-50/50 via-white/90 to-cyan-50/50 dark:border-slate-700/20 dark:from-slate-900/50 dark:via-slate-800/90 dark:to-slate-900/50">
      {/* Decorative ocean waves */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-10 left-1/4 h-32 w-32 animate-pulse rounded-full bg-blue-400/5 blur-2xl" />
        <div className="absolute -top-10 right-1/4 h-32 w-32 animate-pulse rounded-full bg-cyan-400/5 blur-2xl delay-1000" />
      </div>

      <div className="relative container mx-auto px-4 py-12">
        {/* Main footer content */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand section */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 p-2 shadow-lg shadow-blue-500/25">
                <span className="text-xl">🌊</span>
              </div>
              <div>
                <h3 className="bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-800 bg-clip-text text-lg font-bold text-transparent dark:from-blue-400 dark:via-cyan-400 dark:to-blue-600">
                  Ocean Faucet
                </h3>
                <p className="text-xs font-medium text-blue-600/70 dark:text-blue-400/70">
                  Free OCT Tokens
                </p>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-blue-700/80 dark:text-slate-400">
              A secure and reliable faucet for claiming free OceanTokens. Built
              with modern Web3 technologies and audited smart contracts.
            </p>
            {/* Social links */}
            <div className="flex gap-3">
              <a
                href="#"
                className="rounded-lg bg-white/70 p-2 text-blue-600 shadow-sm transition-all duration-200 hover:bg-blue-50 hover:text-blue-700 hover:shadow-md dark:bg-slate-800/70 dark:text-blue-400 dark:hover:bg-slate-700 dark:hover:text-blue-300"
              >
                <Github className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="rounded-lg bg-white/70 p-2 text-blue-600 shadow-sm transition-all duration-200 hover:bg-blue-50 hover:text-blue-700 hover:shadow-md dark:bg-slate-800/70 dark:text-blue-400 dark:hover:bg-slate-700 dark:hover:text-blue-300"
              >
                <Twitter className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="rounded-lg bg-white/70 p-2 text-blue-600 shadow-sm transition-all duration-200 hover:bg-blue-50 hover:text-blue-700 hover:shadow-md dark:bg-slate-800/70 dark:text-blue-400 dark:hover:bg-slate-700 dark:hover:text-blue-300"
              >
                <Globe className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-blue-800 dark:text-slate-200">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {["Home", "Claim Tokens", "FAQ", "Documentation"].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-sm text-blue-700/80 transition-colors hover:text-blue-800 dark:text-slate-400 dark:hover:text-slate-300"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Features */}
          <div className="space-y-4">
            <h4 className="font-semibold text-blue-800 dark:text-slate-200">
              Features
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-blue-700/80 dark:text-slate-400">
                <Shield className="h-4 w-4 text-green-500" />
                100% Test Coverage
              </li>
              <li className="flex items-center gap-2 text-sm text-blue-700/80 dark:text-slate-400">
                <Zap className="h-4 w-4 text-yellow-500" />
                Instant Claims
              </li>
              <li className="flex items-center gap-2 text-sm text-blue-700/80 dark:text-slate-400">
                <Heart className="h-4 w-4 text-red-500" />
                Community Driven
              </li>
            </ul>
          </div>

          {/* Stats */}
          <div className="space-y-4">
            <h4 className="font-semibold text-blue-800 dark:text-slate-200">
              Faucet Stats
            </h4>
            <div className="space-y-3">
              <div className="rounded-lg bg-white/70 p-3 backdrop-blur-sm dark:bg-slate-800/70">
                <div className="text-lg font-bold text-blue-600 dark:text-blue-400">
                  10 OCT
                </div>
                <div className="text-xs text-blue-700/70 dark:text-slate-400">
                  Per Claim
                </div>
              </div>
              <div className="rounded-lg bg-white/70 p-3 backdrop-blur-sm dark:bg-slate-800/70">
                <div className="text-lg font-bold text-cyan-600 dark:text-cyan-400">
                  1 Hour
                </div>
                <div className="text-xs text-blue-700/70 dark:text-slate-400">
                  Cooldown
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-blue-200/20 pt-8 text-center md:flex-row md:text-left dark:border-slate-700/20">
          <div className="flex flex-col gap-2 md:flex-row md:items-center md:gap-4">
            <p className="text-sm text-blue-700/80 dark:text-slate-400">
              &copy; {new Date().getFullYear()} Ocean Faucet. All rights
              reserved.
            </p>
            <div className="flex justify-center gap-4 md:justify-start">
              <a
                href="#"
                className="text-xs text-blue-600/70 hover:text-blue-800 dark:text-slate-500 dark:hover:text-slate-300"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-xs text-blue-600/70 hover:text-blue-800 dark:text-slate-500 dark:hover:text-slate-300"
              >
                Terms of Service
              </a>
            </div>
          </div>
          <div className="flex items-center gap-2 text-xs text-blue-600/70 dark:text-slate-500">
            <span>Built with</span>
            <Heart className="h-3 w-3 text-red-500" />
            <span>using Next.js & Foundry</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
