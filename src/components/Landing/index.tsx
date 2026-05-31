import React from "react";

const Landing = () => {
  return (
    <main className="min-h-screen w-full flex flex-col gap-12 justify-center items-center relative overflow-hidden">
      
      {/* Background gradient */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-purple-700 opacity-20 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-green-400 opacity-10 rounded-full blur-[100px]" />
      </div>

      {/* Main content */}
      <div className="z-10 flex flex-col items-center gap-6 mt-32 md:mt-0 text-center px-6">
        
        {/* Badge */}
        <div className="px-4 py-1 rounded-full border border-purple-500 text-purple-400 text-sm font-medium tracking-widest uppercase">
          Solana Blockchain
        </div>

        {/* Heading */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
          Solana Address
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-green-400">
            Tracker
          </span>
        </h1>

        {/* Subheading */}
        <p className="text-gray-400 text-lg md:text-xl max-w-xl">
          Track any Solana wallet address. View token balances, transaction history, and real-time blockchain activity.
        </p>

        {/* Buttons */}
        <div className="flex gap-4 mt-4">
          <a
            href="/wallet"
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-purple-800 text-white font-semibold hover:opacity-90 transition"
          >
            Track Wallet →
          </a>
          <a
            href="/transactions"
            className="px-6 py-3 rounded-xl border border-gray-600 text-gray-300 font-semibold hover:border-purple-500 hover:text-white transition"
          >
            View Transactions
          </a>
        </div>
      </div>

      {/* Stats row */}
      <div className="z-10 flex gap-8 md:gap-16 mt-8">
        <div className="text-center">
          <p className="text-2xl font-bold text-white">Live</p>
          <p className="text-gray-500 text-sm">Blockchain Data</p>
        </div>
        <div className="text-center">
          <p className="text-2xl font-bold text-white">Free</p>
          <p className="text-gray-500 text-sm">No Registration</p>
        </div>
        <div className="text-center">
          <p className="text-2xl font-bold text-white">Fast</p>
          <p className="text-gray-500 text-sm">Real-time Updates</p>
        </div>
      </div>

    </main>
  );
};

export default Landing;