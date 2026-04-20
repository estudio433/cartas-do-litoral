"use client";

import { useState } from "react";
import { motion, type Variants } from "framer-motion";
import { PenLine, Mail, BookOpen } from "lucide-react";
import Link from "next/link";
import WaitlistModal from "@/components/WaitlistModal";

const cartasImage = "/images/Cartas_-_What_arrives_1775458325566.png";
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
      <section className="relative w-full overflow-hidden" style={{ maxHeight: "520px" }}>
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full object-cover"
          style={{ maxHeight: "520px" }}
          src={melCartasVideo}
        />
        <div className="absolute inset-0 bg-[#1f3a44]/10" />
      </section>

      <section className="py-32 px-6 bg-background">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div initial="hidden" animate="visible" variants={fadeIn}>
            <div className="w-full mb-12 text-accent-green/40">
              <svg viewBox="0 0 800 48" fill="none" preserveAspectRatio="none" className="w-full">
                <path d="M0 8 C50 8 50 2 100 2 C150 2 150 8 200 8 C250 8 250 2 300 2 C350 2 350 8 400 8 C450 8 450 2 500 2 C550 2 550 8 600 8 C650 8 650 2 700 2 C750 2 750 8 800 8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
                <path d="M0 20 C50 20 50 14 100 14 C150 14 150 20 200 20 C250 20 250 14 300 14 C350 14 350 20 400 20 C450 20 450 14 500 14 C550 14 550 20 600 20 C650 20 650 14 700 14 C750 14 750 20 800 20" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
                <path d="M0 32 C50 32 50 26 100 26 C150 26 150 32 200 32 C250 32 250 26 300 26 C350 26 350 32 400 32 C450 32 450 26 500 26 C550 26 550 32 600 32 C650 32 650 26 700 26 C750 26 750 32 800 32" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
                <path d="M0 44 C50 44 50 38 100 38 C150 38 150 44 200 44 C250 44 250 38 300 38 C350 38 350 44 400 44 C450 44 450 38 500 38 C550 38 550 44 600 44 C650 44 650 38 700 38 C750 38 750 44 800 44" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
              </svg>
            </div>
            <h1 className="font-serif text-5xl mb-8">O que é Cartas do Litoral</h1>
            <p className="text-muted-foreground text-lg leading-relaxed">Uma experiência de correspondência física. Cada mês, Mel escreve de um lugar diferente do litoral Catarinense — e a carta chega até você pelo correio.</p>
            <p className="text-muted-foreground text-lg leading-relaxed mt-4">Não é um newsletter. Não é um podcast. É uma carta. Para ler com calma.</p>
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
              <img src="/images/Mel_Pousada_Morning_Envelope_01.png" alt="Envelope com a carta da Mel" className="w-full aspect-[4/5] object-cover rounded-[10px] shadow-md" style={{ filter: "saturate(0.93)" }} />
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
