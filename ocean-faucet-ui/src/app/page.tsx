import Faq3 from "@/components/mvpblocks/faq-3";
import InputSection from "@/components/sections/InputSection";

export default function HomePage() {
  return (
    <section className="flex size-full flex-col items-center justify-center">
      <h1 className="mb-4 text-3xl font-bold">🌊 Welcome to Ocean Faucet</h1>
      <p className="text-lg">Get your free OCEAN tokens!</p>
      <InputSection />
      <Faq3 />
    </section>
  );
}
