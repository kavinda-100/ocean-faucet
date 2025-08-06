"use client";

import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useAccount, useWriteContract } from "wagmi";

import OceanTokenAbi from "@/abi/OceanToken.json";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Loader2Icon, CheckCircle, Copy, ExternalLink } from "lucide-react";

const formSchema = z.object({
  wallet_address: z
    .string()
    .min(42, "Wallet address must be 42 characters")
    .max(42, "Wallet address must be 42 characters")
    .regex(/^0x[a-fA-F0-9]{40}$/, "Invalid Ethereum wallet address format"),
});

function InputSection() {
  const { address } = useAccount();
  const [txHash, setTxHash] = React.useState<string | null>(null);
  const [copiedTx, setCopiedTx] = React.useState(false);
  const [copiedAddress, setCopiedAddress] = React.useState(false);

  // Contract/Ocean Token Address
  const CONTRACT_ADDRESS = process.env
    .NEXT_PUBLIC_BANK_CONTRACT_ADDRESS as `0x${string}`;

  const { data: hash, isPending, writeContract } = useWriteContract();

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      wallet_address: address ?? "",
    },
  });

  // Re-check if address is available and set it in the form (on Mount)
  React.useEffect(() => {
    if (address) {
      form.setValue("wallet_address", address);
    }
  }, [address, form]);

  // after the transaction is sent, update the txHash state
  React.useEffect(() => {
    if (hash) {
      setTxHash(hash);
    }
  }, [hash]);

  // Copy functions
  const copyToClipboard = async (text: string, type: "tx" | "address") => {
    try {
      await navigator.clipboard.writeText(text);
      if (type === "tx") {
        setCopiedTx(true);
        setTimeout(() => setCopiedTx(false), 2000);
      } else {
        setCopiedAddress(true);
        setTimeout(() => setCopiedAddress(false), 2000);
      }
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  // submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    // Reset previous transaction hash
    setTxHash(null);
    // send the transaction to the smart contract
    writeContract({
      address: CONTRACT_ADDRESS,
      abi: OceanTokenAbi.abi,
      functionName: "claim_tokens",
      args: [values.wallet_address],
    });
  }

  return (
    <section className="relative flex w-full px-4 py-16">
      {/* Ocean Wave Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -left-20 h-64 w-64 animate-pulse rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute -right-20 -bottom-20 h-64 w-64 animate-pulse rounded-full bg-cyan-500/10 blur-3xl delay-1000" />
        <div className="absolute top-1/2 left-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-blue-400/5 blur-3xl" />
      </div>

      <Card className="relative mx-auto flex w-full max-w-2xl flex-col rounded-2xl border border-blue-200/20 bg-gradient-to-br from-blue-50/50 via-white/80 to-cyan-50/50 shadow-2xl shadow-blue-500/10 backdrop-blur-sm dark:border-slate-700/20 dark:from-slate-800/50 dark:via-slate-800/80 dark:to-slate-900/50 dark:shadow-slate-900/20">
        .
        <CardHeader className="pb-4 text-center">
          <CardTitle className="mb-2 bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-800 bg-clip-text text-3xl font-bold text-transparent dark:from-blue-400 dark:via-cyan-400 dark:to-blue-600">
            🌊 Claim Ocean Tokens
          </CardTitle>
          <CardDescription className="text-base font-medium text-blue-700/80 dark:text-slate-300">
            Enter your wallet address to receive 10 free OceanToken (OCT)
          </CardDescription>
        </CardHeader>
        <CardContent className="px-8">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="wallet_address"
                render={({ field }) => (
                  <FormItem className="space-y-3">
                    <FormLabel className="flex items-center gap-2 text-lg font-semibold text-blue-800 dark:text-slate-200">
                      💳 Wallet Address
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="0x..."
                        {...field}
                        className="h-14 rounded-xl border-2 border-blue-200 bg-white/70 text-lg transition-all duration-300 placeholder:text-blue-400/60 focus:border-blue-500 focus:ring-blue-500/20 dark:border-slate-600 dark:bg-slate-800/70 dark:text-slate-100 dark:placeholder:text-slate-500 dark:focus:border-blue-400"
                      />
                    </FormControl>
                    <FormDescription className="flex items-center gap-2 font-medium text-blue-600/80 dark:text-slate-400">
                      🔐 Your secure Ethereum wallet address
                    </FormDescription>
                    <FormMessage className="font-medium text-red-500" />
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                className="flex h-14 w-full transform items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-700 text-lg font-semibold text-white shadow-lg shadow-blue-500/25 transition-all duration-300 hover:scale-[1.02] hover:from-blue-700 hover:via-cyan-700 hover:to-blue-800 hover:shadow-xl hover:shadow-blue-500/30 active:scale-[0.98] dark:shadow-blue-900/40"
                disabled={isPending}
              >
                {isPending ? (
                  <>
                    <Loader2Icon className="h-5 w-5 animate-spin" />
                  </>
                ) : (
                  <>🌊 Claim Ocean Tokens</>
                )}
              </Button>
            </form>
          </Form>
        </CardContent>
        <CardFooter className="flex flex-col space-y-4 pb-8">
          {/* Success Message with Transaction Hash */}
          {txHash && (
            <div className="w-full space-y-3 rounded-xl border border-green-200/50 bg-gradient-to-r from-green-50/80 to-emerald-50/80 p-4 dark:border-green-800/30 dark:from-green-950/30 dark:to-emerald-950/30">
              <div className="flex items-center gap-2 text-green-700 dark:text-green-400">
                <CheckCircle className="h-5 w-5" />
                <span className="font-semibold">
                  🎉 Transaction Successful!
                </span>
              </div>

              <div className="space-y-2">
                <p className="text-sm font-medium text-green-600/80 dark:text-green-300/80">
                  Transaction Hash:
                </p>
                <div className="flex items-center gap-2 rounded-lg bg-white/70 p-2 dark:bg-slate-800/70">
                  <code className="flex-1 truncate font-mono text-xs text-green-700 dark:text-green-300">
                    {txHash}
                  </code>
                  <button
                    onClick={() => copyToClipboard(txHash, "tx")}
                    className="rounded p-1 text-green-600 transition-colors hover:bg-green-100 dark:text-green-400 dark:hover:bg-green-900/30"
                    title="Copy transaction hash"
                  >
                    {copiedTx ? (
                      <CheckCircle className="h-4 w-4" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                  </button>
                  <a
                    href={`https://etherscan.io/tx/${txHash}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded p-1 text-green-600 transition-colors hover:bg-green-100 dark:text-green-400 dark:hover:bg-green-900/30"
                    title="View on Etherscan"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          )}

          {/* Contract Address for Token Import */}
          <div className="w-full space-y-3 rounded-xl border border-blue-200/50 bg-gradient-to-r from-blue-50/80 to-cyan-50/80 p-4 dark:border-slate-600/30 dark:from-slate-800/50 dark:to-slate-700/50">
            <div className="flex items-center gap-2 text-blue-700 dark:text-slate-300">
              <span className="text-lg">🪙</span>
              <span className="font-semibold">
                Import OceanToken to your wallet
              </span>
            </div>

            <div className="space-y-2">
              <p className="text-sm font-medium text-blue-600/80 dark:text-slate-400">
                Token Contract Address:
              </p>
              <div className="flex items-center gap-2 rounded-lg bg-white/70 p-2 dark:bg-slate-800/70">
                <code className="flex-1 truncate font-mono text-xs text-blue-700 dark:text-slate-300">
                  {CONTRACT_ADDRESS || "Contract not configured"}
                </code>
                {CONTRACT_ADDRESS && (
                  <>
                    <button
                      onClick={() =>
                        copyToClipboard(CONTRACT_ADDRESS, "address")
                      }
                      className="rounded p-1 text-blue-600 transition-colors hover:bg-blue-100 dark:text-slate-400 dark:hover:bg-slate-700"
                      title="Copy contract address"
                    >
                      {copiedAddress ? (
                        <CheckCircle className="h-4 w-4" />
                      ) : (
                        <Copy className="h-4 w-4" />
                      )}
                    </button>
                    <a
                      href={`https://etherscan.io/address/${CONTRACT_ADDRESS}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded p-1 text-blue-600 transition-colors hover:bg-blue-100 dark:text-slate-400 dark:hover:bg-slate-700"
                      title="View contract on Etherscan"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </>
                )}
              </div>
              <div className="flex items-start gap-2 text-xs text-blue-600/70 dark:text-slate-500">
                <span>💡</span>
                <div>
                  <p className="font-medium">Token Details:</p>
                  <p>• Name: OceanToken</p>
                  <p>• Symbol: OCT</p>
                  <p>• Decimals: 18</p>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Info */}
          <div className="text-center text-sm font-medium text-blue-600/70 dark:text-slate-400">
            💧 Free tokens • 1 hour cooldown • Secure & Fast
          </div>
        </CardFooter>
      </Card>
    </section>
  );
}

export default InputSection;
