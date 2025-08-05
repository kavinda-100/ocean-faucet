import "@/styles/globals.css";
import "@rainbow-me/rainbowkit/styles.css";

import { type Metadata } from "next";
import { Geist } from "next/font/google";

import { ThemeProvider } from "@/providers/ThemeProvider";
import Header from "@/components/Header";
import WebThreeProvider from "@/providers/WebThreeProvider";

export const metadata: Metadata = {
  title: "Ocean Faucet",
  description: "A faucet for the Ocean Protocol",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${geist.variable}`}
      suppressHydrationWarning={true}
    >
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="white"
          enableSystem
          disableTransitionOnChange
        >
          <WebThreeProvider>
            <main className="container mx-auto flex min-h-screen flex-col px-4">
              <Header />
              {children}
            </main>
          </WebThreeProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
