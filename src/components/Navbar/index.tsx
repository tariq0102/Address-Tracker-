"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useRef } from "react";
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

  useEffect(() => {
    onClose();
  }, [pathname]);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/wallet", label: "Wallet Tracker" },
    { href: "/transactions", label: "Transactions" },
  ];

  return (
    <div className="w-full h-fit py-4 fixed top-0 z-20 px-6"
      style={{
        background: "rgba(10, 10, 26, 0.95)",
        backdropFilter: "blur(20px)",
        borderBottom: "1px solid rgba(255,255,255,0.08)"
      }}>
      <div className="w-full flex flex-row items-center justify-between max-w-6xl mx-auto">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div style={{
            width: "38px", height: "38px", borderRadius: "10px",
            background: "linear-gradient(135deg, #9945ff, #14f195)",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontWeight: "800", color: "white", fontSize: "18px"
          }}>S</div>
          <span style={{ fontFamily: "Inter, sans-serif", fontWeight: 700, color: "white", fontSize: "17px" }}>
            Solana<span style={{ color: "#9945ff" }}>Tracker</span>
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex gap-2 items-center">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              <p style={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 500,
                fontSize: "14px",
                padding: "8px 16px",
                borderRadius: "10px",
                color: pathname === link.href ? "white" : "#94a3b8",
                background: pathname === link.href ? "rgba(153,69,255,0.15)" : "transparent",
                border: pathname === link.href ? "1px solid rgba(153,69,255,0.3)" : "1px solid transparent",
                transition: "all 0.2s"
              }}>
                {link.label}
              </p>
            </Link>
          ))}
          <DynamicWalletButton />
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          {!isOpen
            ? <Menu size={22} style={{ color: "#9945ff", cursor: "pointer" }} ref={btnRef} onClick={onOpen} />
            : <X size={22} style={{ color: "#9945ff", cursor: "pointer" }} ref={btnRef} onClick={onClose} />
          }

          <Drawer isOpen={isOpen} placement="right" onClose={onClose} finalFocusRef={btnRef}>
            <DrawerOverlay style={{ background: "rgba(0,0,0,0.7)" }} />
            <DrawerContent style={{
              background: "#0a0a1a",
              maxWidth: "75%",
              borderLeft: "1px solid rgba(153,69,255,0.2)"
            }}>
              <DrawerCloseButton style={{ color: "white" }} />
              <DrawerBody>
                <Flex direction="column" gap={2} style={{ marginTop: "60px" }}>
                  {navLinks.map((link) => (
                    <Link key={link.href} href={link.href} onClick={onClose}>
                      <p style={{
                        fontFamily: "Inter, sans-serif",
                        fontWeight: 500,
                        fontSize: "15px",
                        padding: "12px 16px",
                        borderRadius: "10px",
                        color: pathname === link.href ? "white" : "#94a3b8",
                        background: pathname === link.href ? "rgba(153,69,255,0.15)" : "transparent",
                        border: pathname === link.href ? "1px solid rgba(153,69,255,0.3)" : "1px solid transparent",
                      }}>
                        {link.label}
                      </p>
                    </Link>
                  ))}
                  <div style={{ marginTop: "12px" }}>
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