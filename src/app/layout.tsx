"use client";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StarsCanvas from "@/components/StarCanvas";
import WalletContextProvider from "@/lib/WalletContextProvider";
import { useState } from "react";

require('@solana/wallet-adapter-react-ui/styles.css');

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter"
});

const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"],
  variable: "--font-space"
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isDark, setIsDark] = useState(true);

  return (
    <html lang="en">
      <head>
        <title>Tariq Sol Tracker</title>
        <meta name="description" content="Track any Solana wallet address" />
      </head>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} min-h-screen w-full relative flex flex-col justify-center items-center`}
        style={{
          fontFamily: "Inter, sans-serif",
          background: isDark ? "#0a0a1a" : "#f0f4ff",
          color: isDark ? "#e2e8f0" : "#1a1a2e",
          transition: "all 0.3s ease"
        }}
      >
        <div className="-z-50">
          <StarsCanvas />
        </div>
        <WalletContextProvider>
          <Navbar isDark={isDark} setIsDark={setIsDark} />
          {children}
          <Footer />
        </WalletContextProvider>
      </body>
    </html>
  );
}