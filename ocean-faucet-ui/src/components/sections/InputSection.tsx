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
import { Loader2Icon } from "lucide-react";

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

  // submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
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
        <CardFooter className="pb-8 text-center text-sm font-medium text-blue-600/70 dark:text-slate-400">
          💧 Free tokens • 1 hour cooldown • Secure & Fast
        </CardFooter>
      </Card>
    </section>
  );
}

export default InputSection;
