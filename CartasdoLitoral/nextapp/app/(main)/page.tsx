"use client";

import { useState } from "react";
import { motion, type Variants } from "framer-motion";
import Link from "next/link";
import WaitlistModal from "@/components/WaitlistModal";
import { posts } from "@/data/posts";
import { ArrowRight, Mail, CalendarDays, MailOpen, Layers } from "lucide-react";

const heroImage = "/images/Cartas_do_Litoral_Logo_(6)_1775817332554.png";
const melImage = "/images/Reflexões_(4)_1775383545006.png";
const cartasImage = "/images/Cartas_-_What_arrives_1775458325566.png";
const landingCompositeImage = "/images/Cartas_do_litoral_landing_page_(14)_1775687418525.png";
const ilhaImg = "/images/ilha_que_aparece_do_ceu_1775461025242.png";
const garopabaImg = "/images/garopaba_1775461038148.png";
const lettersImg = "/images/Cartas_do_Litoral_Logo_(4)_1775687823362.png";

const postImages: Record<string, string> = {
  "a-ilha-que-aparece-do-ceu": ilhaImg,
  "o-silencio-de-garopaba-em-agosto": garopabaImg,
  "cartas-que-nunca-foram-enviadas": lettersImg,
};

const fadeIn: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

const lugares = [
  { tipo: "Comer", local: "em Ribeirão da Ilha", texto: "Sentei perto da água e o tempo desacelerou sozinho." },
  { tipo: "Parar", local: "na Guarda do Embaú", texto: "Cheguei sem plano de ficar. Fiquei mais do que imaginei." },
  { tipo: "Ficar", local: "em uma pousada pequena no sul da ilha", texto: "Alguns lugares não pedem nada além de presença." }
];

export default function LandingPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalPlan, setModalPlan] = useState<"mensal" | "anual" | null>(null);
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [formState, setFormState] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [comunidadeOpen, setComunidadeOpen] = useState(false);
  const [comunidadeEmail, setComunidadeEmail] = useState("");
  const [comunidadeState, setComunidadeState] = useState<"idle" | "loading" | "success" | "error">("idle");

  const openModal = (plan: "mensal" | "anual") => { setModalPlan(plan); setModalOpen(true); };

  const handleComunidadeSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setComunidadeState("loading");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: comunidadeEmail, firstName: "", tags: ["comunidade-waitlist"] }),
      });
      if (res.ok) { setComunidadeState("success"); setComunidadeEmail(""); }
      else { setComunidadeState("error"); }
    } catch { setComunidadeState("error"); }
  };

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("loading");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, firstName }),
      });
      if (res.ok) { setFormState("success"); setEmail(""); setFirstName(""); }
      else { setFormState("error"); }
    } catch { setFormState("error"); }
  };

  return (
    <div className="pt-20">

      {/* 1. HERO */}
      <section className="min-h-[calc(100vh-5rem)] flex flex-col lg:flex-row relative overflow-hidden">
        <div className="lg:w-1/2 w-full h-[50vh] lg:h-auto relative">
          <img src={heroImage} alt="Mel caminhando na praia" className="w-full h-full object-cover" />
        </div>
        <div className="lg:w-1/2 w-full bg-background relative flex items-center justify-center p-8 lg:p-20 overflow-hidden">
          <div className="absolute left-0 top-1/3 -translate-y-1/2 w-full pointer-events-none opacity-30 text-accent-green">
            <svg viewBox="0 0 1000 100" fill="none" preserveAspectRatio="none">
              <path d="M0 25 C150 25 150 5 300 5 C450 5 450 25 600 25 C750 25 750 5 900 5 C1000 5 1000 25 1000 25" stroke="currentColor" strokeWidth="1"/>
              <path d="M0 50 C150 50 150 30 300 30 C450 30 450 50 600 50 C750 50 750 30 900 30 C1000 30 1000 50 1000 50" stroke="currentColor" strokeWidth="1"/>
              <path d="M0 75 C150 75 150 55 300 55 C450 55 450 75 600 75 C750 75 750 55 900 55 C1000 55 1000 75 1000 75" stroke="currentColor" strokeWidth="1"/>
            </svg>
          </div>
          <div className="absolute top-8 right-8 lg:top-16 lg:right-16 rotate-3 opacity-85 hidden sm:block">
            <div className="border-[2px] border-dashed border-accent-warm/40 p-1 bg-secondary inline-block">
              <div className="border border-accent-warm/30 p-3 flex flex-col items-center gap-2">
                <svg width="32" height="24" viewBox="0 0 32 24" fill="none" className="text-accent-warm">
                  <path d="M2 12C8 12 10 4 16 4C22 4 24 12 30 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  <path d="M2 18C8 18 10 10 16 10C22 10 24 18 30 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
                <div className="text-[8px] font-sans tracking-[0.2em] text-accent-warm/80 font-bold">CARTAS DO LITORAL</div>
                <div className="relative text-[10px] font-serif text-accent-warm font-bold border-t border-accent-warm/20 w-full text-center pt-1 mt-1">
                  SANTA CATARINA
                  <span className="absolute bottom-0 left-1 text-[6px] opacity-50">001</span>
                </div>
              </div>
            </div>
          </div>
          <motion.div initial="hidden" animate="visible" variants={fadeIn} className="relative z-10 max-w-md w-full">
            <h1 className="text-4xl lg:text-5xl/tight font-serif text-foreground mb-8">
              CONTINUE A HISTÓRIA<br/>COM A MEL
            </h1>
            <div className="text-lg/relaxed text-muted-foreground mb-12 flex flex-col gap-1">
              <span>Uma carta por mês</span>
              <span>Um novo lugar do litoral</span>
              <span>Para ler com calma</span>
            </div>
            <button
              onClick={() => openModal("anual")}
              className="px-8 py-4 border border-accent-warm text-accent-warm hover:bg-accent-warm hover:text-white transition-all duration-500 font-medium tracking-wide"
            >
              Receber a primeira carta
            </button>
          </motion.div>
        </div>
      </section>

      {/* 2. ME CHAMO AMÉLIA */}
      <section className="py-32 px-6 bg-secondary relative overflow-hidden">
        <div className="max-w-4xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeIn} className="flex flex-col md:flex-row items-center gap-16">
            <div className="w-64 shrink-0 rotate-2 bg-white p-4 shadow-xl">
              <img src={melImage} alt="Mel escrevendo uma carta" className="aspect-[3/4] w-full object-cover" />
            </div>
            <div className="flex-1 space-y-8">
              <p className="font-handwritten text-3xl/relaxed text-foreground md:text-4xl/relaxed max-w-xl">
                "Me chamo Amélia — mas pode me chamar de Mel.
                Larguei tudo aos 37, com uma mochila
                pequena demais pra uma viagem longa.
                O litoral me recebeu sem perguntas."
              </p>
              <div className="text-muted-foreground/80 space-y-2">
                <p>Quem está por trás dessas cartas?</p>
                <p className="text-sm">Um convite para ver o mundo pelos olhos de quem escolheu ir devagar.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2b. MEL VIDEO */}
      <section className="bg-[#1f3a44] relative overflow-hidden" style={{ height: '70vh', minHeight: '400px' }}>
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          src="/images/Cartas_do_litoral_video.mp4"
        />
        <div className="absolute inset-0 bg-[#1f3a44]/30" />
        <div className="absolute inset-0 flex flex-col items-center justify-end pb-16 text-center px-6">
          <p className="font-serif text-white/90 text-2xl md:text-3xl italic mb-3">E então ela foi.</p>
          <p className="font-serif text-white/70 text-lg italic">Todo mês, uma carta do litoral até você.</p>
        </div>
      </section>

      {/* 3. EMAIL CAPTURE */}
      <section className="py-32 px-6 bg-background text-center">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="max-w-xl mx-auto space-y-8">
          <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center mx-auto text-accent-warm">
            <Mail size={20} />
          </div>
          <div>
            <h2 className="font-serif text-3xl mb-4">Prefere começar devagar?</h2>
            <p className="text-muted-foreground">Receba trechos da história de Mel e novidades por email.</p>
          </div>
          {formState === "success" ? (
            <div className="py-8 space-y-3">
              <p className="font-serif text-2xl text-foreground">Que bom que você existe. ✉</p>
              <p className="text-muted-foreground">Confirme o seu email para começar. Mel já está escrevendo.</p>
            </div>
          ) : (
            <form className="flex flex-col gap-3 pt-4" onSubmit={handleSubscribe}>
              <div className="flex flex-col sm:flex-row gap-3">
                <input type="text" placeholder="Seu primeiro nome" value={firstName} onChange={(e) => setFirstName(e.target.value)} className="flex-1 px-6 py-4 bg-secondary border-none focus:outline-none focus:ring-1 focus:ring-accent-warm text-foreground placeholder:text-muted-foreground/50 transition-shadow" />
                <input type="email" placeholder="Seu melhor email" value={email} onChange={(e) => setEmail(e.target.value)} className="flex-1 px-6 py-4 bg-secondary border-none focus:outline-none focus:ring-1 focus:ring-accent-warm text-foreground placeholder:text-muted-foreground/50 transition-shadow" required />
              </div>
              {formState === "error" && <p className="text-sm text-red-500 text-left px-1">Algo correu mal. Tente novamente.</p>}
              <button type="submit" disabled={formState === "loading"} className="w-full sm:w-auto px-8 py-4 bg-foreground text-white hover:bg-foreground/90 transition-colors font-medium tracking-wide whitespace-nowrap disabled:opacity-60">
                {formState === "loading" ? "Enviando..." : "Quero acompanhar"}
              </button>
            </form>
          )}
        </motion.div>
      </section>

      {/* 4. O QUE CHEGA + OFERTA */}
      <section className="bg-secondary border-y border-border/40">
        <div className="py-32 px-6">
          <div className="max-w-5xl mx-auto">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="grid md:grid-cols-2 gap-16 items-center">
              <div className="relative">
                <img src={cartasImage} alt="Envelope com a carta da Mel" className="w-full aspect-[4/5] object-cover rounded-[10px] shadow-md" style={{ filter: "saturate(0.93)" }} />
              </div>
              <div className="space-y-8">
                <h2 className="font-serif text-4xl">O que chega até você</h2>
                <div className="space-y-6 text-muted-foreground leading-relaxed">
                  <p>Uma carta escrita por Mel, contando sua jornada por um novo lugar do litoral.</p>
                  <p>Um detalhe do lugar — algo para guardar, tocar ou lembrar.</p>
                  <p>A história continua além do papel, com conteúdos que se desdobram com o tempo.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        <div className="max-w-5xl mx-auto px-6">
          <hr className="border-0 h-px w-32 mx-auto bg-accent-green opacity-20" />
        </div>
        <div className="py-32 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
              <h2 className="font-serif text-4xl mb-4">Receba a história completa em casa</h2>
              <p className="text-muted-foreground mb-16">Cada carta traz um novo lugar do litoral, escrito com calma para ser lido com tempo.</p>
              <div className="flex flex-wrap justify-center gap-x-16 gap-y-10 mb-16">
                {[
                  { icon: CalendarDays, label: "1 carta por mês" },
                  { icon: MailOpen, label: "Entrega pelo correio" },
                  { icon: Layers, label: "Experiência física + digital" },
                ].map(({ icon: Icon, label }) => (
                  <div key={label} className="flex flex-col items-center gap-3">
                    <div className="w-10 h-10 rounded-full border border-accent-warm/30 flex items-center justify-center text-accent-warm">
                      <Icon size={18} strokeWidth={1.5} />
                    </div>
                    <span className="text-sm text-muted-foreground">{label}</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
                <div className="flex flex-col items-center gap-2">
                  <button onClick={() => openModal("mensal")} className="px-8 py-4 border border-accent-warm text-accent-warm hover:bg-accent-warm/10 transition-colors font-medium tracking-wide">
                    Assinar mensal
                  </button>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <button onClick={() => openModal("anual")} className="px-8 py-4 bg-accent-warm text-white hover:bg-accent-warm/90 transition-colors font-medium tracking-wide shadow-lg shadow-accent-warm/20">
                    Assinar anual
                  </button>
                  <span className="text-xs uppercase tracking-widest text-accent-warm/70 font-semibold">Melhor valor</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. DIÁRIO PREVIEW */}
      <section className="py-32 px-6 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="font-serif text-4xl mb-4">Diário do Litoral</h2>
              <p className="text-muted-foreground">Histórias, lugares e o que Mel encontrou pelo caminho.</p>
            </div>
            <Link href="/diario" className="group flex items-center gap-2 text-accent-warm font-medium hover:text-accent-warm/80 transition-colors">
              Ver todas <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {posts.map((post, i) => (
              <motion.div key={post.slug} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.6 }} className="group cursor-pointer">
                <Link href={`/diario/${post.slug}`}>
                  <div className="aspect-[4/3] bg-secondary mb-6 relative overflow-hidden">
                    {postImages[post.slug] && (
                      <img src={postImages[post.slug]} alt={post.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" style={{ filter: "saturate(0.9)" }} />
                    )}
                  </div>
                  <div className="space-y-4">
                    <span className="text-xs uppercase tracking-wider text-accent-warm font-semibold">{post.category}</span>
                    <h3 className="font-serif text-2xl group-hover:text-accent-warm transition-colors duration-300">{post.title}</h3>
                    <p className="text-muted-foreground line-clamp-2">{post.excerpt.replace(/\n/g, " ")}</p>
                    <span className="inline-flex items-center gap-2 text-sm text-foreground group-hover:text-accent-warm transition-colors">
                      Ler mais <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. LUGARES DA MEL */}
      <section className="py-32 px-6 bg-secondary">
        <div className="max-w-3xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
            <h2 className="font-serif text-4xl mb-4">Onde Mel parou</h2>
            <p className="text-muted-foreground mb-20">Lugares que ficaram.</p>
            <div className="space-y-16">
              {lugares.map((l, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15, duration: 0.7 }} className="flex gap-10 items-start border-b border-foreground/10 pb-16 last:border-0 last:pb-0">
                  <div className="shrink-0 text-right w-28 pt-1">
                    <span className="text-xs uppercase tracking-widest text-accent-warm font-semibold">{l.tipo}</span>
                  </div>
                  <div>
                    <p className="font-serif text-xl text-foreground mb-3">{l.local}</p>
                    <p className="text-muted-foreground leading-relaxed">{l.texto}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="mt-20">
              <Link href="/lugares" className="group inline-flex items-center gap-2 text-sm text-accent-warm font-medium hover:text-accent-warm/80 transition-colors">
                Explorar o mapa completo <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 7. COMMUNITY INVITE */}
      <section className="py-32 px-6 bg-background text-center">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="max-w-lg mx-auto space-y-8">
          <p className="font-serif text-2xl text-foreground/80 leading-relaxed">Algumas histórias continuam depois da carta.</p>
          <p className="text-muted-foreground leading-relaxed">
            Existe um espaço onde outras pessoas também estão acompanhando esse caminho — com calma, cada uma no seu tempo. Ainda não está aberto para todos.
          </p>
          {comunidadeState === "success" ? (
            <motion.p initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="font-handwritten text-xl text-foreground/70">
              Avisaremos você em breve. ✉
            </motion.p>
          ) : comunidadeOpen ? (
            <motion.form initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} onSubmit={handleComunidadeSubmit} className="flex flex-col sm:flex-row gap-3 pt-2">
              <input type="email" placeholder="Seu melhor email" value={comunidadeEmail} onChange={(e) => setComunidadeEmail(e.target.value)} className="flex-1 px-6 py-4 bg-secondary border-none focus:outline-none focus:ring-1 focus:ring-accent-warm text-foreground placeholder:text-muted-foreground/50 transition-shadow text-sm" required autoFocus />
              <button type="submit" disabled={comunidadeState === "loading"} className="px-8 py-4 bg-foreground text-white hover:bg-foreground/90 transition-colors font-medium tracking-wide text-sm whitespace-nowrap disabled:opacity-60">
                {comunidadeState === "loading" ? "Enviando..." : "Entrar na lista →"}
              </button>
            </motion.form>
          ) : (
            <button onClick={() => setComunidadeOpen(true)} className="px-8 py-4 border border-foreground/30 text-foreground/70 hover:border-accent-warm hover:text-accent-warm transition-all font-medium tracking-wide text-sm">
              Quero saber quando abrir
            </button>
          )}
        </motion.div>
      </section>

      <WaitlistModal isOpen={modalOpen} plan={modalPlan} onClose={() => setModalOpen(false)} />
    </div>
  );
}
