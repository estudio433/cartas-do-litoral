"use client";

import { useState } from "react";
import { motion, type Variants } from "framer-motion";
import { PenLine, Mail, BookOpen } from "lucide-react";
import Link from "next/link";
import WaitlistModal from "@/components/WaitlistModal";

const cartasImage = "/images/Mel_Pousada_Morning_Envelope_Watercolor_01.png";
const heroCartasImage = "/images/Cartas_do_litoral_landing_page_(20)_1775766669174.png";
const melCartasVideo = "/images/Mel-Cartas.mp4";

const fadeIn: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

const steps = [
  { num: "01", icon: PenLine, label: "Você se inscreve", desc: "Escolha o plano mensal ou anual e entre na lista de assinantes." },
  { num: "02", icon: Mail, label: "Recebe uma carta por mês", desc: "Uma carta escrita à mão por Mel, vinda de um novo lugar do litoral." },
  { num: "03", icon: BookOpen, label: "Acompanha a jornada da Mel", desc: "A história continua além do papel, com conteúdos que se desdobram com o tempo." }
];

const faqs = [
  {
    q: "Quando recebo a primeira carta?",
    a: "Se a sua assinatura for confirmada até o dia 9 do mês, a carta parte neste mês. Se for após o dia 9, parte no mês seguinte. Despachamos entre os dias 10 e 15 de cada mês."
  },
  {
    q: "Posso cancelar quando quiser?",
    a: "Sim. Assinantes mensais podem cancelar a qualquer momento. Para não receber a carta daquele mês, cancele até o dia 8."
  },
  {
    q: "Para onde as cartas são enviadas?",
    a: "Para qualquer endereço no Brasil via Correios. A primeira carta é enviada com rastreamento."
  },
  {
    q: "O que chega dentro do envelope?",
    a: "A carta de Mel (3 páginas em papel premium), um postcard ilustrado, um item colecionável, uma playlist via QR code, e algo especial daquele lugar do litoral."
  },
  {
    q: "Tenho mais dúvidas.",
    a: "Visite a nossa página de perguntas frequentes ou escreva para ola@cartasdolitoral.com.br."
  }
];

export default function Cartas() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalPlan, setModalPlan] = useState<"mensal" | "anual" | null>(null);
  const openModal = (plan: "mensal" | "anual") => { setModalPlan(plan); setModalOpen(true); };

  return (
    <div className="pt-20">
      {/* HERO */}
      <section className="min-h-[calc(100vh-5rem)] flex flex-col lg:flex-row relative overflow-hidden">
        <div className="lg:w-1/2 w-full h-[50vh] lg:h-auto relative">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
            src={melCartasVideo}
          />
        </div>
        <div className="lg:w-1/2 w-full bg-background relative flex items-center justify-center p-8 lg:p-20 overflow-hidden">
          <div className="absolute left-0 top-1/3 -translate-y-1/2 w-full pointer-events-none opacity-30 text-accent-green">
            <svg viewBox="0 0 1000 100" fill="none" preserveAspectRatio="none">
              <path d="M0 25 C150 25 150 5 300 5 C450 5 450 25 600 25 C750 25 750 5 900 5 C1000 5 1000 25 1000 25" stroke="currentColor" strokeWidth="1"/>
              <path d="M0 50 C150 50 150 30 300 30 C450 30 450 50 600 50 C750 50 750 30 900 30 C1000 30 1000 50 1000 50" stroke="currentColor" strokeWidth="1"/>
              <path d="M0 75 C150 75 150 55 300 55 C450 55 450 75 600 75 C750 75 750 55 900 55 C1000 55 1000 75 1000 75" stroke="currentColor" strokeWidth="1"/>
            </svg>
          </div>
          <motion.div initial="hidden" animate="visible" variants={fadeIn} className="relative z-10 max-w-md w-full">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0, duration: 0.8 }}
              className="text-4xl lg:text-5xl/tight font-serif text-foreground"
            >
              O QUE É
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-4xl lg:text-5xl/tight font-serif text-foreground mb-8"
            >
              CARTAS DO LITORAL
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="text-lg/relaxed text-muted-foreground flex flex-col gap-1"
            >
              <span>Uma carta por mês da costa de Santa Catarina.</span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="text-lg/relaxed text-muted-foreground flex flex-col gap-1"
            >
              <span>Escrita por Mel, que foi para o litoral descobrir se ainda existia.</span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6, duration: 0.8 }}
              className="text-lg/relaxed text-muted-foreground mb-12 flex flex-col gap-1"
            >
              <span>Para ler com calma.</span>
            </motion.div>
            <motion.button
              onClick={() => openModal("anual")}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.0, duration: 0.8 }}
              className="px-8 py-4 border border-accent-warm text-accent-warm hover:bg-accent-warm hover:text-white transition-all duration-500 font-medium tracking-wide"
            >
              Quero acompanhar desde o início
            </motion.button>
          </motion.div>
        </div>
      </section>

      <section className="py-32 px-6 bg-secondary">
        <div className="max-w-3xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
            <h2 className="font-serif text-4xl mb-20 text-center">Como funciona</h2>
            <div className="space-y-16">
              {steps.map((s, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15, duration: 0.7 }} className="flex gap-10 items-start border-b border-foreground/10 pb-16 last:border-0 last:pb-0">
                  <div className="shrink-0 flex items-center justify-center pt-1">
                    <div className="w-10 h-10 rounded-full border border-accent-warm/30 flex items-center justify-center text-accent-warm">
                      <s.icon size={17} strokeWidth={1.5} />
                    </div>
                  </div>
                  <div>
                    <p className="font-serif text-xl text-foreground mb-3">{s.label}</p>
                    <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-32 px-6 bg-background">
        <div className="max-w-5xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <img src="/images/Mel_Pousada_Morning_Envelope_Watercolor_01.png" alt="Envelope com a carta da Mel" className="w-full aspect-[4/5] object-cover rounded-[10px] shadow-md" style={{ filter: "saturate(0.93)" }} />
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
      </section>

      <section className="py-32 px-6 bg-secondary border-y border-border/40 text-center">
        <div className="max-w-4xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
            <h2 className="font-serif text-4xl mb-4">Planos</h2>
            <p className="text-muted-foreground mb-20">Escolha como quer acompanhar a história.</p>
            <div className="grid sm:grid-cols-2 gap-8 max-w-xl mx-auto">
              <div className="bg-background p-10 flex flex-col items-center gap-6 border border-border/40">
                <h3 className="font-serif text-2xl">Mensal</h3>
                <p className="text-muted-foreground text-sm text-center">Flexibilidade total. Cancele quando quiser.</p>
                <button onClick={() => openModal("mensal")} className="w-full px-6 py-4 border border-accent-warm text-accent-warm hover:bg-accent-warm/10 transition-colors font-medium tracking-wide">Assinar mensal</button>
              </div>
              <div className="bg-background p-10 flex flex-col items-center gap-6 border-2 border-accent-warm/40 relative">
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs uppercase tracking-widest text-white bg-accent-warm px-4 py-1">Melhor valor</span>
                <h3 className="font-serif text-2xl">Anual</h3>
                <p className="text-muted-foreground text-sm text-center">12 cartas. Uma jornada completa.</p>
                <button onClick={() => openModal("anual")} className="w-full px-6 py-4 bg-accent-warm text-white hover:bg-accent-warm/90 transition-colors font-medium tracking-wide shadow-lg shadow-accent-warm/20">Assinar anual</button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-32 px-6 bg-background">
        <div className="max-w-2xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
            <h2 className="font-serif text-4xl mb-16 text-center">Perguntas frequentes</h2>
            <div className="space-y-12">
              {faqs.map((item, i) => (
                <div key={i} className="border-b border-foreground/10 pb-12 last:border-0 last:pb-0">
                  <p className="font-serif text-xl text-foreground mb-4">{item.q}</p>
                  <p className="text-muted-foreground leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
            <div className="mt-12 text-center">
              <Link href="/faq" className="text-accent-warm hover:text-accent-warm/80 transition-colors">Ver todas as perguntas frequentes</Link>
            </div>
          </motion.div>
        </div>
      </section>

      <WaitlistModal isOpen={modalOpen} plan={modalPlan} onClose={() => setModalOpen(false)} />
    </div>
  );
}
