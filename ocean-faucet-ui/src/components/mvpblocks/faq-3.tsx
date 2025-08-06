"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Mail } from "lucide-react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

interface FAQItemProps {
  question: string;
  answer: string;
  index: number;
}

function FAQItem({ question, answer, index }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.3,
        delay: index * 0.15,
        ease: "easeOut",
      }}
      className={cn(
        "group rounded-xl border border-blue-200/60 bg-white/70 backdrop-blur-sm dark:border-slate-600/60 dark:bg-slate-800/70",
        "shadow-sm transition-all duration-200 ease-in-out",
        isOpen
          ? "border-blue-300/60 bg-blue-50/80 shadow-md shadow-blue-500/10 dark:border-slate-500/60 dark:bg-slate-700/80 dark:shadow-slate-900/20"
          : "hover:bg-blue-50/50 hover:shadow-md hover:shadow-blue-500/5 dark:hover:bg-slate-700/50",
      )}
    >
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between gap-4 px-6 py-4"
      >
        <h3
          className={cn(
            "text-left text-base font-semibold transition-colors duration-200",
            "text-blue-800/90 dark:text-blue-200/90",
            isOpen && "text-blue-900 dark:text-blue-100",
          )}
        >
          {question}
        </h3>
        <motion.div
          animate={{
            rotate: isOpen ? 180 : 0,
            scale: isOpen ? 1.1 : 1,
          }}
          transition={{
            duration: 0.3,
            ease: "easeInOut",
          }}
          className={cn(
            "shrink-0 rounded-full p-1",
            "transition-colors duration-200",
            isOpen
              ? "bg-blue-100/80 text-blue-600 dark:bg-slate-700/80 dark:text-slate-300"
              : "text-blue-500/70 dark:text-slate-400/70",
          )}
        >
          <ChevronDown className="h-4 w-4" />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: "auto",
              opacity: 1,
              transition: {
                height: {
                  duration: 0.4,
                  ease: [0.04, 0.62, 0.23, 0.98],
                },
                opacity: {
                  duration: 0.25,
                  delay: 0.1,
                },
              },
            }}
            exit={{
              height: 0,
              opacity: 0,
              transition: {
                height: {
                  duration: 0.3,
                  ease: "easeInOut",
                },
                opacity: {
                  duration: 0.25,
                },
              },
            }}
          >
            <div className="border-t border-blue-200/40 px-6 pt-3 pb-5 dark:border-slate-600/40">
              <motion.p
                initial={{ y: -8, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -8, opacity: 0 }}
                transition={{
                  duration: 0.3,
                  ease: "easeOut",
                }}
                className="text-sm leading-relaxed font-medium text-blue-700/80 dark:text-slate-300"
              >
                {answer}
              </motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function Faq3() {
  const faqs: Omit<FAQItemProps, "index">[] = [
    {
      question: "What is OceanToken Faucet?",
      answer:
        "OceanToken Faucet is a free token distribution service that allows users to claim OceanToken (OCT) for testing and development purposes. Simply connect your wallet and claim 10 OCT tokens every hour at no cost.",
    },
    {
      question: "How often can I claim tokens?",
      answer:
        "You can claim 10 OceanToken (OCT) every hour. The smart contract enforces a 1-hour cooldown period between claims to ensure fair distribution and prevent abuse.",
    },
    {
      question: "Is it safe to use my wallet address?",
      answer:
        "Yes, it's completely safe! We only use your public wallet address to send tokens. We never ask for your private keys or seed phrases. Our smart contract is fully audited and tested with 100% coverage.",
    },
    {
      question: "Which networks are supported?",
      answer:
        "OceanToken Faucet supports Ethereum mainnet, Sepolia testnet, and local development networks. You can easily switch between networks using your connected wallet.",
    },
    {
      question: "Do I need to pay gas fees?",
      answer:
        "The token claiming process is completely free - you only need to pay the standard Ethereum network gas fees for the transaction. The OceanTokens themselves are distributed at no cost.",
    },
  ];

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-blue-50/80 via-white to-cyan-50/80 py-20 dark:from-slate-900/80 dark:via-slate-800 dark:to-slate-900/80">
      {/* Ocean-themed decorative elements */}
      <div className="absolute top-20 -left-20 h-64 w-64 animate-pulse rounded-full bg-blue-500/10 blur-3xl dark:bg-slate-700/20" />
      <div className="absolute -right-20 bottom-20 h-64 w-64 animate-pulse rounded-full bg-cyan-500/10 blur-3xl delay-1000 dark:bg-slate-600/20" />
      <div className="absolute top-1/2 left-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-blue-400/5 blur-3xl dark:bg-slate-700/10" />

      <div className="relative container mx-auto max-w-6xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <Badge
            variant="outline"
            className="mb-6 rounded-full border-blue-500 bg-blue-50/80 px-4 py-2 text-sm font-semibold tracking-wider text-blue-700 uppercase dark:border-slate-500 dark:bg-slate-800/80 dark:text-slate-300"
          >
            🌊 Ocean Faucet FAQs
          </Badge>

          <h2 className="mb-4 bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-800 bg-clip-text text-4xl font-bold text-transparent dark:from-blue-400 dark:via-cyan-400 dark:to-blue-600">
            Frequently Asked Questions
          </h2>
          <p className="text-lg font-medium text-blue-700/80 dark:text-slate-300">
            Everything you need to know about claiming OceanTokens
          </p>
        </motion.div>

        <div className="mx-auto max-w-3xl space-y-3">
          {faqs.map((faq, index) => (
            <FAQItem key={index} {...faq} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className={cn(
            "mx-auto mt-16 max-w-md rounded-2xl border border-blue-200/50 bg-gradient-to-br from-blue-100/80 via-white/90 to-cyan-100/80 p-8 text-center shadow-xl shadow-blue-500/10 dark:border-slate-600/50 dark:from-slate-800/80 dark:via-slate-800/90 dark:to-slate-700/80 dark:shadow-slate-900/20",
          )}
        >
          <div className="mb-6 inline-flex items-center justify-center rounded-full bg-blue-500/20 p-4 text-blue-600 shadow-lg dark:bg-slate-700/50 dark:text-slate-300">
            <Mail className="h-6 w-6" />
          </div>
          <h3 className="mb-2 text-lg font-bold text-blue-800 dark:text-slate-200">
            🤝 Still have questions?
          </h3>
          <p className="mb-6 text-sm font-medium text-blue-600/80 dark:text-slate-400">
            We&apos;re here to help you with your OceanToken journey
          </p>
          <button
            type="button"
            className={cn(
              "rounded-xl px-6 py-3 text-sm font-semibold",
              "bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-700 text-white",
              "hover:from-blue-700 hover:via-cyan-700 hover:to-blue-800",
              "shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/30",
              "transform transition-all duration-300 hover:scale-105 active:scale-95",
            )}
          >
            💬 Contact Support
          </button>
        </motion.div>
      </div>
    </section>
  );
}
