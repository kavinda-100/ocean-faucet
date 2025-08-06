import Faq3 from "@/components/mvpblocks/faq-3";
import InputSection from "@/components/sections/InputSection";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50 dark:from-blue-950 dark:via-slate-900 dark:to-cyan-950">
      {/* Hero Section */}
      <section className="relative flex w-full flex-col items-center justify-center overflow-hidden px-4 py-20">
        {/* Animated Ocean Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 left-10 h-72 w-72 animate-pulse rounded-full bg-blue-400/10 blur-3xl" />
          <div className="absolute top-32 right-20 h-48 w-48 animate-pulse rounded-full bg-cyan-400/15 blur-2xl delay-500" />
          <div className="absolute bottom-20 left-32 h-64 w-64 animate-pulse rounded-full bg-blue-300/10 blur-3xl delay-1000" />
          <div className="absolute right-10 bottom-32 h-40 w-40 animate-pulse rounded-full bg-cyan-500/10 blur-2xl delay-1500" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 mx-auto mb-12 max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-blue-200/60 bg-blue-100/80 px-6 py-3 dark:border-blue-700/60 dark:bg-blue-900/30">
            <span className="text-2xl">🌊</span>
            <span className="text-sm font-semibold tracking-wide text-blue-700 uppercase dark:text-blue-300">
              Ocean Token Faucet
            </span>
          </div>

          <h1 className="mb-6 bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-800 bg-clip-text text-5xl leading-tight font-bold text-transparent md:text-6xl">
            Welcome to Ocean Faucet
          </h1>

          <p className="mb-4 text-xl leading-relaxed font-medium text-blue-700/80 md:text-2xl dark:text-blue-300/80">
            Get your free OceanTokens (OCT) instantly!
          </p>

          <p className="mx-auto max-w-2xl text-lg leading-relaxed font-medium text-blue-600/70 dark:text-blue-400/70">
            Claim 10 OCT tokens every hour through our secure, audited smart
            contract. Perfect for testing, development, and exploring the Ocean
            ecosystem.
          </p>

          {/* Stats Cards */}
          <div className="mt-12 flex flex-wrap justify-center gap-6">
            <div className="rounded-2xl border border-blue-200/30 bg-white/70 p-6 shadow-lg shadow-blue-500/10 backdrop-blur-sm dark:border-blue-700/30 dark:bg-slate-800/70">
              <div className="mb-1 text-3xl font-bold text-blue-600 dark:text-blue-400">
                10
              </div>
              <div className="text-sm font-semibold text-blue-700/80 dark:text-blue-300/80">
                OCT Per Claim
              </div>
            </div>
            <div className="rounded-2xl border border-blue-200/30 bg-white/70 p-6 shadow-lg shadow-blue-500/10 backdrop-blur-sm dark:border-blue-700/30 dark:bg-slate-800/70">
              <div className="mb-1 text-3xl font-bold text-cyan-600 dark:text-cyan-400">
                1
              </div>
              <div className="text-sm font-semibold text-blue-700/80 dark:text-blue-300/80">
                Hour Cooldown
              </div>
            </div>
            <div className="rounded-2xl border border-blue-200/30 bg-white/70 p-6 shadow-lg shadow-blue-500/10 backdrop-blur-sm dark:border-blue-700/30 dark:bg-slate-800/70">
              <div className="mb-1 text-3xl font-bold text-blue-600 dark:text-blue-400">
                100%
              </div>
              <div className="text-sm font-semibold text-blue-700/80 dark:text-blue-300/80">
                Test Coverage
              </div>
            </div>
          </div>
        </div>

        <InputSection />
      </section>

      <Faq3 />
    </main>
  );
}
