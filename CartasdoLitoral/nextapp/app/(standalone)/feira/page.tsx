"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

export default function Feira() {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [formState, setFormState] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("loading");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, firstName, tags: ["market-signup", "waitlist"], utm_source: "feira", utm_medium: "qr-code" }),
      });
      if (res.ok) { setFormState("success"); setFirstName(""); setEmail(""); }
      else { setFormState("error"); }
    } catch { setFormState("error"); }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <div className="px-8 py-6 flex items-center justify-between border-b border-foreground/10">
        <span className="font-serif text-lg tracking-wide text-foreground">Cartas do Litoral</span>
        <div className="rotate-2 opacity-70">
          <div className="border-[1.5px] border-dashed border-accent-warm/40 p-1 bg-secondary inline-block">
            <div className="border border-accent-warm/30 px-2 py-1 flex flex-col items-center gap-0.5">
              <svg width="20" height="14" viewBox="0 0 32 24" fill="none" className="text-accent-warm">
                <path d="M2 12C8 12 10 4 16 4C22 4 24 12 30 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M2 18C8 18 10 10 16 10C22 10 24 18 30 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
              <span className="text-[6px] font-sans tracking-[0.2em] text-accent-warm/80 font-bold">FLORIPA 2026</span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-1 flex items-center justify-center px-6 py-16">
        <motion.div initial="hidden" animate="visible" variants={fadeIn} className="max-w-md w-full space-y-10">
          {formState === "success" ? (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-center space-y-6 py-8">
              <p className="font-serif text-3xl text-foreground leading-relaxed">Que bom que você existe.</p>
              <p className="text-muted-foreground leading-relaxed">Você está na lista. Mel vai escrever para você em breve — primeiro por email, depois num envelope de verdade.</p>
              <p className="font-handwritten text-xl text-accent-warm">Com o mar ainda nos olhos, Mel ✉</p>
              <a href="https://www.cartasdolitoral.com.br" className="inline-block text-sm text-muted-foreground/60 hover:text-accent-warm transition-colors tracking-wide">Conhecer o site →</a>
            </motion.div>
          ) : (
            <>
              <div className="space-y-4">
                <p className="text-xs uppercase tracking-widest text-accent-warm/70 font-semibold">Você acabou de conhecer a história da Mel</p>
                <h1 className="font-serif text-4xl text-foreground leading-tight">Reserve o seu lugar na lista de espera.</h1>
                <p className="text-muted-foreground leading-relaxed">Todo mês uma carta de Mel chega na sua caixa de correio — escrita sobre um novo lugar do litoral catarinense. Com um postcard ilustrado, um item colecionável, e algo que só existe naquele lugar.</p>
                <p className="text-muted-foreground leading-relaxed">Ainda estamos em pré-lançamento. Deixe o seu contato e você será das primeiras a saber quando as cartas começarem a viajar.</p>
              </div>
              <form onSubmit={handleSubmit} className="space-y-4">
                <input type="text" placeholder="Seu primeiro nome" value={firstName} onChange={(e) => setFirstName(e.target.value)} className="w-full px-6 py-4 bg-secondary border-none focus:outline-none focus:ring-1 focus:ring-accent-warm text-foreground placeholder:text-muted-foreground/50 transition-shadow text-sm" />
                <input type="email" placeholder="Seu melhor email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full px-6 py-4 bg-secondary border-none focus:outline-none focus:ring-1 focus:ring-accent-warm text-foreground placeholder:text-muted-foreground/50 transition-shadow text-sm" required />
                {formState === "error" && <p className="text-sm text-red-500">Algo correu mal. Tente novamente.</p>}
                <button type="submit" disabled={formState === "loading"} className="w-full px-8 py-4 bg-foreground text-white hover:bg-foreground/90 transition-colors font-medium tracking-wide disabled:opacity-50">
                  {formState === "loading" ? "Guardando o seu lugar..." : "Quero ser avisada quando abrir →"}
                </button>
                <p className="text-xs text-muted-foreground/50 text-center leading-relaxed">Nenhum pagamento agora. Só uma promessa mútua. Escrevemos a cada duas semanas — nunca mais do que isso.</p>
              </form>
              <div className="border-t border-foreground/10 pt-8 text-center">
                <a href="https://www.cartasdolitoral.com.br" className="text-sm text-muted-foreground/50 hover:text-accent-warm transition-colors tracking-wide">Conhecer o site completo →</a>
              </div>
            </>
          )}
        </motion.div>
      </div>
    </div>
  );
}
