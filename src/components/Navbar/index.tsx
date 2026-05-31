"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useRef } from "react";
import dynamic from "next/dynamic";
import { Menu, X } from "lucide-react";
import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerCloseButton,
  DrawerOverlay,
  useDisclosure,
  Flex,
} from "@chakra-ui/react";

const DynamicWalletButton = dynamic(
  () => import("@/components/Buttons/WalletButton"),
  { ssr: false }
);

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef<any>();
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/wallet", label: "Wallet Tracker" },
    { href: "/transactions", label: "Transactions" },
  ];

  return (
    <div className="w-full h-fit py-4 fixed top-0 backdrop-blur-md z-20 px-6 border-b border-white/10">
      <div className="w-full h-full flex flex-row items-center justify-between max-w-6xl mx-auto">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600 to-green-400 flex items-center justify-center font-bold text-white text-lg">
            S
          </div>
          <span className="font-bold text-white text-lg tracking-tight">
            Solana<span className="text-purple-400">Tracker</span>
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex gap-6 items-center text-sm">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              <p className={`py-2 px-3 rounded-lg transition font-medium ${
                pathname === link.href
                  ? "text-white bg-purple-600/20 border border-purple-500/30"
                  : "text-gray-400 hover:text-white hover:bg-white/5"
              }`}>
                {link.label}
              </p>
            </Link>
          ))}
          <DynamicWalletButton />
        </div>

        {/* Mobile Menu */}
        <div className="lg:hidden">
          {!isOpen ? (
            <Menu size={24} className="text-purple-400 cursor-pointer" ref={btnRef} onClick={onOpen} />
          ) : (
            <X size={24} className="text-purple-400 cursor-pointer" ref={btnRef} onClick={onClose} />
          )}

          <Drawer isOpen={isOpen} placement="right" onClose={onClose} finalFocusRef={btnRef}>
            <DrawerOverlay />
            <DrawerContent bg={"#0a0a1a"} maxW={"75%"} borderLeft={"1px solid rgba(255,255,255,0.1)"}>
              <DrawerCloseButton color="white" />
              <DrawerBody>
                <Flex direction={"column"} gap={2} className="mt-16">
                  {navLinks.map((link) => (
                    <Link key={link.href} href={link.href} onClick={onClose}>
                      <p className={`py-3 px-4 rounded-xl transition font-medium ${
                        pathname === link.href
                          ? "text-white bg-purple-600/20 border border-purple-500/30"
                          : "text-gray-400 hover:text-white hover:bg-white/5"
                      }`}>
                        {link.label}
                      </p>
                    </Link>
                  ))}
                  <div className="mt-4">
                    <DynamicWalletButton />
                  </div>
                </Flex>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </div>

      </div>
    </div>
  );
};

export default Navbar;