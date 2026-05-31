import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="w-full mt-auto flex flex-col h-full py-10 px-6 border-t border-white/10 bg-[#0a0a1a]">
      <div className="w-full max-w-6xl mx-auto">
        
        {/* Top Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600 to-green-400 flex items-center justify-center font-bold text-white text-lg">
              S
            </div>
            <span className="font-bold text-white text-lg tracking-tight">
              Solana<span className="text-purple-400">Tracker</span>
            </span>
          </div>

          {/* Links */}
          <ul className="flex gap-6 text-sm text-gray-400">
            <li>
              <Link href="/about" className="hover:text-white transition">
                About
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="hover:text-white transition">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Divider */}
        <hr className="my-6 border-white/10" />

        {/* Bottom Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-sm text-gray-500">
          <p>Built on <span className="text-purple-400 font-medium">Solana Blockchain</span></p>
          <p>Made with ❤️ by <span className="text-white font-medium">M Tariq Ali
        </div>

      </div>
    </div>
  );
};

export default Footer;