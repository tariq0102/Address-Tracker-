"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { Menu, X, Sun, Moon } from "lucide-react";

const DynamicWalletButton = dynamic(
  () => import("@/components/Buttons/WalletButton"),
  { ssr: false }
);

const Navbar = ({ isDark, setIsDark }: { isDark: boolean, setIsDark: (v: boolean) => void }) => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/wallet", label: "Wallet Tracker" },
    { href: "/transactions", label: "Transactions" },
  ];

  const bg = isDark ? "#0a0a1a" : "#ffffff";
  const border = isDark ? "rgba(153,69,255,0.2)" : "rgba(153,69,255,0.3)";
  const textColor = isDark ? "#94a3b8" : "#64748b";

  return (
    <>
      <div style={{
        width: "100%",
        padding: "14px 24px",
        position: "fixed",
        top: 0, left: 0, right: 0,
        zIndex: 9999,
        background: bg,
        borderBottom: `1px solid ${border}`,
      }}>
        <div style={{
          maxWidth: "1100px",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}>

          {/* Logo */}
          <Link href="/" style={{ display: "flex", alignItems: "center", gap: "10px", textDecoration: "none" }}>
            <div style={{
              width: "36px", height: "36px", borderRadius: "10px",
              background: "linear-gradient(135deg, #9945ff, #14f195)",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontWeight: 800, color: "white", fontSize: "18px",
              fontFamily: "Inter, sans-serif"
            }}>S</div>
            <span style={{ fontFamily: "Inter, sans-serif", fontWeight: 700, color: isDark ? "white" : "#1a1a2e", fontSize: "17px" }}>
              Solana<span style={{ color: "#9945ff" }}>Tracker</span>
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex" style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} style={{ textDecoration: "none" }}>
                <span style={{
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 500,
                  fontSize: "14px",
                  padding: "8px 16px",
                  borderRadius: "10px",
                  display: "block",
                  color: pathname === link.href ? "white" : textColor,
                  background: pathname === link.href ? "rgba(153,69,255,0.15)" : "transparent",
                  border: pathname === link.href ? "1px solid rgba(153,69,255,0.3)" : "1px solid transparent",
                  transition: "all 0.2s",
                  cursor: "pointer"
                }}>{link.label}</span>
              </Link>
            ))}

            {/* Theme Toggle */}
            <button onClick={() => setIsDark(!isDark)} style={{
              background: "rgba(153,69,255,0.15)",
              border: "1px solid rgba(153,69,255,0.3)",
              borderRadius: "10px",
              padding: "8px 12px",
              cursor: "pointer",
              color: "#9945ff",
              display: "flex",
              alignItems: "center"
            }}>
              {isDark ? <Sun size={16} /> : <Moon size={16} />}
            </button>

            <DynamicWalletButton />
          </div>

          {/* Mobile Buttons */}
          <div className="lg:hidden" style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <button onClick={() => setIsDark(!isDark)} style={{
              background: "rgba(153,69,255,0.15)",
              border: "1px solid rgba(153,69,255,0.3)",
              borderRadius: "8px",
              padding: "6px 10px",
              cursor: "pointer",
              color: "#9945ff",
              display: "flex",
              alignItems: "center"
            }}>
              {isDark ? <Sun size={15} /> : <Moon size={15} />}
            </button>

            <button onClick={() => setIsOpen(!isOpen)} style={{ background: "none", border: "none", cursor: "pointer" }}>
              {isOpen
                ? <X size={22} style={{ color: "#9945ff" }} />
                : <Menu size={22} style={{ color: "#9945ff" }} />
              }
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div style={{
          position: "fixed",
          top: 0, left: 0, right: 0, bottom: 0,
          zIndex: 99998,
          background: "rgba(0,0,0,0.85)",
        }} onClick={() => setIsOpen(false)}>
          <div style={{
            position: "absolute",
            top: 0, right: 0, bottom: 0,
            width: "75%",
            maxWidth: "300px",
            background: bg,
            borderLeft: `1px solid ${border}`,
            padding: "80px 20px 20px",
            zIndex: 99999,
          }} onClick={(e) => e.stopPropagation()}>

            <button onClick={() => setIsOpen(false)} style={{
              position: "absolute", top: "16px", right: "16px",
              background: "none", border: "none", cursor: "pointer",
              color: isDark ? "white" : "#1a1a2e"
            }}>
              <X size={22} />
            </button>

            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} style={{ textDecoration: "none" }} onClick={() => setIsOpen(false)}>
                  <span style={{
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 500,
                    fontSize: "15px",
                    padding: "12px 16px",
                    borderRadius: "10px",
                    display: "block",
                    color: pathname === link.href ? "white" : textColor,
                    background: pathname === link.href ? "rgba(153,69,255,0.15)" : "transparent",
                    border: pathname === link.href ? "1px solid rgba(153,69,255,0.3)" : "1px solid transparent",
                  }}>{link.label}</span>
                </Link>
              ))}
              <div style={{ marginTop: "12px" }}>
                <DynamicWalletButton />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;