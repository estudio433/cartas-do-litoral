import { useState } from "react";
import { motion } from "framer-motion";
import heroImage from "@assets/Cartas_-_What_arrives_(15)_1775651095870.png";
import melImage from "@assets/Reflexões_(4)_1775383545006.png";
import ribeirao from "@assets/Mes_01_Cartas_do_Litoral_-_Playlist_(4)_1775384278579.png";
import cartasImage from "@assets/Cartas_-_What_arrives_1775458325566.png";
import landingCompositeImage from "@assets/Cartas_do_litoral_landing_page_(14)_1775687418525.png";
import { Link } from "wouter";
import WaitlistModal from "@/components/WaitlistModal";
import { posts } from "@/data/posts";
import { ArrowRight, Mail, CalendarDays, MailOpen, Layers } from "lucide-react";
import ilhaImg from "@assets/ilha_que_aparece_do_ceu_1775461025242.png";
import garopabaImg from "@assets/garopaba_1775461038148.png";
import lettersImg from "@assets/Cartas_do_Litoral_Logo_(4)_1775687823362.png";

const postImages: Record<string, string> = {
  "a-ilha-que-aparece-do-ceu": ilhaImg,
  "o-silencio-de-garopaba-em-agosto": garopabaImg,
  "cartas-que-nunca-foram-enviadas": lettersImg,
};

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const lugares = [
  {
    tipo: "Comer",
    local: "em Ribeirão da Ilha",
    texto: "Sentei perto da água e o tempo desacelerou sozinho."
  },
  {
    tipo: "Parar",
    local: "na Guarda do Embaú",
    texto: "Cheguei sem plano de ficar. Fiquei mais do que imaginei."
  },
  {
    tipo: "Ficar",
    local: "em uma pousada pequena no sul da ilha",
    texto: "Alguns lugares não pedem nada além de presença."
  }
];

export default function LandingPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalPlan, setModalPlan] = useState<"mensal" | "anual" | null>(null);

  const openModal = (plan: "mensal" | "anual") => {
    setModalPlan(plan);
    setModalOpen(true);
  };

  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [formState, setFormState] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("loading");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, firstName }),
      });

      if (res.ok) {
        setFormState("success");
        setEmail("");
        setFirstName("");
      } else {
        setFormState("error");
      }
    } catch {
      setFormState("error");
    }
  };

  return (
    <div className="pt-20">

      {/* 1. HERO */}
      <section className="min-h-[calc(100vh-5rem)] flex flex-col lg:flex-row relative overflow-hidden">
        <div className="lg:w-1/2 w-full h-[50vh] lg:h-auto relative">
          <img
            src={heroImage}
            alt="Mel caminhando na praia"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="lg:w-1/2 w-full bg-background relative flex items-center justify-center p-8 lg:p-20 overflow-hidden">

          {/* Wave Lines */}
          <div className="absolute left-0 top-1/3 -translate-y-1/2 w-full pointer-events-none opacity-30 text-accent-green">
            <svg viewBox="0 0 1000 100" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
              <path d="M0 25 C150 25 150 5 300 5 C450 5 450 25 600 25 C750 25 750 5 900 5 C1000 5 1000 25 1000 25" stroke="currentColor" strokeWidth="1"/>
              <path d="M0 50 C150 50 150 30 300 30 C450 30 450 50 600 50 C750 50 750 30 900 30 C1000 30 1000 50 1000 50" stroke="currentColor" strokeWidth="1"/>
              <path d="M0 75 C150 75 150 55 300 55 C450 55 450 75 600 75 C750 75 750 55 900 55 C1000 55 1000 75 1000 75" stroke="currentColor" strokeWidth="1"/>
            </svg>
          </div>

          {/* Vintage Stamp */}
          <div className="absolute top-8 right-8 lg:top-16 lg:right-16 rotate-3 opacity-85 hidden sm:block">
            <div className="border-[2px] border-dashed border-accent-warm/40 p-1 bg-secondary inline-block">
              <div className="border border-accent-warm/30 p-3 flex flex-col items-center gap-2">
                <svg width="32" height="24" viewBox="0 0 32 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-accent-warm">
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

          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="relative z-10 max-w-md w-full"
          >
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

            {/* Polaroid bottom-right */}
            <div className="absolute -bottom-24 -right-12 -rotate-6 w-32 hidden lg:block bg-white p-2 shadow-xl">
              <img src={ribeirao} alt="Praia de Ribeirão da Ilha" className="aspect-square w-full object-cover" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. ME CHAMO AMÉLIA */}
      <section className="py-32 px-6 bg-secondary relative overflow-hidden">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="flex flex-col md:flex-row items-center gap-16"
          >
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

      {/* 2b. COMPOSITE VISUAL */}
      <section className="bg-[#1f3a44] py-16 px-6 flex justify-center items-center overflow-hidden">
        <motion.img
          src={landingCompositeImage}
          alt="Como funciona a Cartas do Litoral"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="w-full max-w-5xl object-contain"
        />
      </section>

      {/* 3. EMAIL CAPTURE */}
      <section className="py-32 px-6 bg-background text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="max-w-xl mx-auto space-y-8"
        >
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
                <input
                  type="text"
                  placeholder="Seu primeiro nome"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="flex-1 px-6 py-4 bg-secondary border-none focus:outline-none focus:ring-1 focus:ring-accent-warm text-foreground placeholder:text-muted-foreground/50 transition-shadow"
                />
                <input
                  type="email"
                  placeholder="Seu melhor email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-6 py-4 bg-secondary border-none focus:outline-none focus:ring-1 focus:ring-accent-warm text-foreground placeholder:text-muted-foreground/50 transition-shadow"
                  required
                />
              </div>

              {formState === "error" && (
                <p className="text-sm text-red-500 text-left px-1">
                  Algo correu mal. Tente novamente.
                </p>
              )}

              <button
                type="submit"
                disabled={formState === "loading"}
                className="w-full sm:w-auto px-8 py-4 bg-foreground text-white hover:bg-foreground/90 transition-colors font-medium tracking-wide whitespace-nowrap disabled:opacity-60"
              >
                {formState === "loading" ? "Enviando..." : "Quero acompanhar"}
              </button>
            </form>
          )}
        </motion.div>
      </section>

      {/* 4. TWO-PART: O QUE CHEGA + OFERTA */}
      <section className="bg-secondary border-y border-border/40">

        {/* Block 1 — Experience */}
        <div className="py-32 px-6">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="grid md:grid-cols-2 gap-16 items-center"
            >
              <div className="relative">
                <img
                  src={cartasImage}
                  alt="Envelope com a carta da Mel"
                  className="w-full aspect-[4/5] object-cover rounded-[10px] shadow-md"
                  style={{ filter: "saturate(0.93)" }}
                />
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

        {/* Transition */}
        <div className="max-w-5xl mx-auto px-6">
          <hr className="border-0 h-px w-32 mx-auto bg-accent-green opacity-20" />
        </div>

        {/* Block 2 — Offer */}
        <div className="py-32 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <h2 className="font-serif text-4xl mb-4">Receba a história completa em casa</h2>
              <p className="text-muted-foreground mb-16">Cada carta traz um novo lugar do litoral, escrito com calma para ser lido com tempo.</p>

              <div className="flex flex-wrap justify-center gap-x-16 gap-y-10 mb-16">
                <div className="flex flex-col items-center gap-3">
                  <div className="w-10 h-10 rounded-full border border-accent-warm/30 flex items-center justify-center text-accent-warm">
                    <CalendarDays size={18} strokeWidth={1.5} />
                  </div>
                  <span className="text-sm text-muted-foreground">1 carta por mês</span>
                </div>
                <div className="flex flex-col items-center gap-3">
                  <div className="w-10 h-10 rounded-full border border-accent-warm/30 flex items-center justify-center text-accent-warm">
                    <MailOpen size={18} strokeWidth={1.5} />
                  </div>
                  <span className="text-sm text-muted-foreground">Entrega pelo correio</span>
                </div>
                <div className="flex flex-col items-center gap-3">
                  <div className="w-10 h-10 rounded-full border border-accent-warm/30 flex items-center justify-center text-accent-warm">
                    <Layers size={18} strokeWidth={1.5} />
                  </div>
                  <span className="text-sm text-muted-foreground">Experiência física + digital</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
                <div className="flex flex-col items-center gap-2">
                  <button
                    onClick={() => openModal("mensal")}
                    className="px-8 py-4 border border-accent-warm text-accent-warm hover:bg-accent-warm/10 transition-colors font-medium tracking-wide"
                  >
                    Assinar mensal
                  </button>
                  <span className="text-xs invisible">placeholder</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <button
                    onClick={() => openModal("anual")}
                    className="px-8 py-4 bg-accent-warm text-white hover:bg-accent-warm/90 transition-colors font-medium tracking-wide shadow-lg shadow-accent-warm/20"
                  >
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
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="group cursor-pointer"
              >
                <Link href={`/diario/${post.slug}`}>
                  <div className="aspect-[4/3] bg-secondary mb-6 relative overflow-hidden">
                    {postImages[post.slug] && (
                      <img
                        src={postImages[post.slug]}
                        alt={post.title}
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        style={{ filter: "saturate(0.9)" }}
                      />
                    )}
                  </div>
                  <div className="space-y-4">
                    <span className="text-xs uppercase tracking-wider text-accent-warm font-semibold">
                      {post.category}
                    </span>
                    <h3 className="font-serif text-2xl group-hover:text-accent-warm transition-colors duration-300">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground line-clamp-2">
                      {post.excerpt.replace(/\n/g, " ")}
                    </p>
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
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="font-serif text-4xl mb-4">Onde Mel parou</h2>
            <p className="text-muted-foreground mb-20">Lugares que ficaram.</p>

            <div className="space-y-16">
              {lugares.map((l, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15, duration: 0.7 }}
                  className="flex gap-10 items-start border-b border-foreground/10 pb-16 last:border-0 last:pb-0"
                >
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
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="max-w-lg mx-auto space-y-8"
        >
          <p className="font-serif text-2xl text-foreground/80 leading-relaxed">
            Algumas histórias continuam depois da carta.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Existe um espaço onde outras pessoas também estão acompanhando esse caminho — com calma, cada uma no seu tempo.
          </p>
          <Link href="/comunidade" className="inline-block mt-4 px-8 py-4 border border-foreground/20 text-foreground/70 hover:border-accent-warm hover:text-accent-warm transition-all duration-400 font-medium tracking-wide text-sm">
            Entrar com convite
          </Link>
        </motion.div>
      </section>

      <WaitlistModal
        isOpen={modalOpen}
        plan={modalPlan}
        onClose={() => setModalOpen(false)}
      />
    </div>
  );
}
