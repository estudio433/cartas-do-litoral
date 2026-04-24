"use client";

import { motion, type Variants } from "framer-motion";
import { useState } from "react";
import Link from "next/link";

const fadeIn: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

const fadeInDelay: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.2 } }
};

export default function PrimeiraCarta() {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [formState, setFormState] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("loading");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          firstName,
          tags: ["market-signup"],
          utm_source: "primeira-carta",
          utm_medium: "qr-code",
        }),
      });
      if (res.ok) {
        setFormState("success");
        setFirstName("");
        setEmail("");
      } else {
        setFormState("error");
      }
    } catch {
      setFormState("error");
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">

      {/* Minimal header */}
      <div className="px-8 py-6 flex items-center justify-between
        border-b border-foreground/10">
        <span className="font-serif text-lg tracking-wide text-foreground">
          Cartas do Litoral
        </span>
        <div className="rotate-2 opacity-70">
          <div className="border-[1.5px] border-dashed border-accent-warm/40
            p-1 bg-secondary inline-block">
            <div className="border border-accent-warm/30 px-2 py-1
              flex flex-col items-center gap-0.5">
              <svg width="20" height="14" viewBox="0 0 32 24" fill="none"
                className="text-accent-warm">
                <path d="M2 12C8 12 10 4 16 4C22 4 24 12 30 12"
                  stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M2 18C8 18 10 10 16 10C22 10 24 18 30 18"
                  stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
              <span className="text-[6px] font-sans tracking-[0.2em]
                text-accent-warm/80 font-bold">
                FLORIPA 2026
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-1 px-6 py-20 max-w-lg mx-auto w-full space-y-24">

        {formState === "success" ? (

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center space-y-8 py-8"
          >
            <p className="font-serif text-3xl text-foreground leading-relaxed">
              Que bom que você existe.
            </p>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Seu convite para julho está guardado.
            </p>
            <div className="space-y-3">
              <p className="text-xs uppercase tracking-widest
                text-accent-warm/70 font-semibold">
                Trecho da primeira carta. Florianópolis, julho de 2026.
              </p>
              <p className="font-handwritten text-2xl text-foreground
                leading-relaxed">
                "Cheguei num julho de Vento Sul.
                O ar tinha gosto. Trinta e sete anos
                sem saber que o oxigênio podia ter sabor."
              </p>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed
              max-w-xs mx-auto">
              Mel escreve uma carta por mês da costa de Santa Catarina.
              A primeira parte em julho de 2026.
              Você vai receber aviso antes de todo mundo.
            </p>
            <p className="font-handwritten text-xl text-accent-warm">
              Com o mar ainda nos olhos, Mel ✉
            </p>
            <div className="space-y-4 pt-2">
              <Link
                href="/primeira-carta/ler"
                className="inline-block px-8 py-4 border border-accent-warm
                  text-accent-warm hover:bg-accent-warm hover:text-white
                  transition-all duration-500 font-medium tracking-wide text-sm"
              >
                Ler a primeira página agora
              </Link>
              <div>
                <a
                  href="https://www.cartasdolitoral.com.br"
                  className="inline-block text-sm text-muted-foreground/60
                    hover:text-accent-warm transition-colors tracking-wide"
                >
                  Conhecer o site completo →
                </a>
              </div>
            </div>
          </motion.div>

        ) : (
          <>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              className="text-center space-y-6 pt-4"
            >
              <h1 className="font-serif text-4xl md:text-5xl text-foreground
                leading-tight">
                Você encontrou a primeira carta.
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed
                max-w-sm mx-auto">
                Todo mês, você recebe uma carta física da costa
                de Santa Catarina. Uma história contada aos poucos,
                pelo correio.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInDelay}
              className="text-center space-y-4"
            >
              <p className="font-handwritten text-2xl md:text-3xl
                text-foreground leading-relaxed">
                "No meio dele, uma terra verde e irregular,
                cercada de água por todos os lados,
                como se o Brasil tivesse guardado um segredo aqui
                e esquecido de avisar."
              </p>
              <p className="text-xs uppercase tracking-widest
                text-accent-warm/70 font-semibold">
                Trecho da primeira carta.
                Florianópolis, julho de 2026.
              </p>
              <Link
                href="/primeira-carta/ler"
                className="inline-block text-sm text-accent-warm
                  hover:text-accent-warm/70 transition-colors tracking-wide"
              >
                Ler a primeira página →
              </Link>
            </motion.div>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInDelay}
              className="space-y-4"
            >
              <img
                src="/images/Mel_Pousada_Morning_Envelope_Watercolor_01.png"
                alt="Carta de Mel — envelope e papel"
                className="w-full object-cover rounded-sm"
                style={{ filter: "saturate(0.93)" }}
              />
              <p className="text-center text-sm text-muted-foreground/70
                tracking-wide">
                Escrita para ser aberta sem pressa.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInDelay}
              className="space-y-6"
            >
              <div className="text-center space-y-2">
                <h2 className="font-serif text-2xl text-foreground">
                  Leia o começo agora
                </h2>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  E acompanhe o início antes das primeiras entregas.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-3">
                <input
                  type="text"
                  placeholder="Seu primeiro nome"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="w-full px-6 py-4 bg-secondary border-none
                    focus:outline-none focus:ring-1 focus:ring-accent-warm
                    text-foreground placeholder:text-muted-foreground/50
                    transition-shadow text-sm"
                />
                <input
                  type="email"
                  placeholder="Seu melhor email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-6 py-4 bg-secondary border-none
                    focus:outline-none focus:ring-1 focus:ring-accent-warm
                    text-foreground placeholder:text-muted-foreground/50
                    transition-shadow text-sm"
                  required
                />

                {formState === "error" && (
                  <p className="text-sm text-red-500">
                    Algo correu mal. Tente novamente.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={formState === "loading"}
                  className="w-full px-8 py-4 bg-foreground text-white
                    hover:bg-foreground/90 transition-colors font-medium
                    tracking-wide disabled:opacity-50"
                >
                  {formState === "loading"
                    ? "Guardando o seu lugar..."
                    : "Quero acompanhar desde o início"}
                </button>
              </form>

              <div className="text-center space-y-1 pt-2">
                <p className="text-xs text-muted-foreground/50 tracking-wide">
                  Sem excessos. Emails ocasionais.
                </p>
                <p className="text-xs text-muted-foreground/50 tracking-wide">
                  A primeira edição começa em julho.
                </p>
              </div>

            </motion.div>

          </>
        )}

      </div>
    </div>
  );
}
