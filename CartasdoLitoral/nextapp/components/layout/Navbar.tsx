"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#1f3a44]">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <div className="border-[1.5px] border-dashed p-1 inline-flex flex-col hover:opacity-80 transition-opacity" style={{ borderColor: "#a67c52", backgroundColor: "#eae3d8", width: "32px", height: "50px" }}>
            <div className="border p-1 flex flex-col items-center justify-center h-full" style={{ borderColor: "#a67c52" }}>
              <svg width="20" height="16" viewBox="0 0 32 24" fill="none" style={{ color: "#a67c52" }}>
                <path d="M2 12C8 12 10 4 16 4C22 4 24 12 30 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M2 18C8 18 10 10 16 10C22 10 24 18 30 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
              <div className="font-sans tracking-[0.08em] font-bold text-center leading-tight" style={{ fontSize: "4px", color: "#a67c52" }}>CARTAS</div>
              <div className="font-sans tracking-[0.08em] font-bold text-center leading-tight" style={{ fontSize: "4px", color: "#a67c52" }}>DO</div>
              <div className="font-sans tracking-[0.08em] font-bold text-center leading-tight" style={{ fontSize: "4px", color: "#a67c52" }}>LITORAL</div>
              <div className="relative font-serif font-bold w-full text-center" style={{ fontSize: "5px", color: "#a67c52", borderTopColor: "#a67c52", borderTopWidth: "1px", paddingTop: "2px", marginTop: "2px" }}>
                SC
              </div>
            </div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link href="/diario" className="text-white/70 hover:text-white transition-colors duration-300">
            Diário
          </Link>
          <Link href="/lugares" className="text-white/70 hover:text-white transition-colors duration-300">
            Lugares
          </Link>
          <Link href="/presente" className="text-white/70 hover:text-white transition-colors duration-300">
            Presente
          </Link>
          <Link href="/cartas" className="text-white/70 hover:text-white transition-colors duration-300">
            Assinar carta
          </Link>
        </nav>

        <button
          className="md:hidden p-2 -mr-2 text-white/80"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-20 left-0 right-0 bg-[#1f3a44] border-t border-white/10 shadow-lg"
          >
            <div className="flex flex-col px-6 py-8 gap-6 text-center">
              <Link href="/diario" className="text-lg text-white/80 hover:text-white transition-colors" onClick={() => setIsOpen(false)}>
                Diário
              </Link>
              <Link href="/lugares" className="text-lg text-white/80 hover:text-white transition-colors" onClick={() => setIsOpen(false)}>
                Lugares
              </Link>
              <Link href="/presente" className="text-lg text-white/80 hover:text-white transition-colors" onClick={() => setIsOpen(false)}>
                Presente
              </Link>
              <Link href="/cartas" className="text-lg text-white/80 hover:text-white transition-colors" onClick={() => setIsOpen(false)}>
                Assinar carta
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
