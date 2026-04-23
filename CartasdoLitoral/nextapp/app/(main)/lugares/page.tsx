"use client";

import { motion, type Variants } from "framer-motion";
import { useState } from "react";

const heroImg = "/images/Cartas_do_litoral_landing_page_(19)_1775764651159.png";

const fadeIn: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

type Filter = "Todos" | "Comer" | "Ficar" | "Parar" | "Encontrar";

const lugares = [
  { tipo: "Comer" as Filter, nome: "Ostradamus", local: "Rod. Baldicero Filomeno, 7640 — Ribeirão da Ilha", cidade: "Florianópolis", texto: "Sentei perto da água e o tempo desacelerou sozinho. As ostras chegam vivas, abertas na hora, com o gosto exato do mar que você acabou de ver lá fora.", source: null, isNew: false },
  { tipo: "Comer" as Filter, nome: "Engenho do Vô", local: "Rod. Baldicero Filomeno, 4139 — Ribeirão da Ilha", cidade: "Florianópolis", texto: "A Dona Maria parou a renda de bilro no meio de um ponto e disse sem me olhar: no sábado vai no Engenho do Vô. Chega cedo — enche. Pede a feijoada, é do fogão a lenha. Não tem vista pro mar, não tem ar condicionado. Tem comida de verdade. Eu ainda não fui. Mas o nome ficou dobrado na memória como se fosse um bilhete.", source: "nas palavras da Dona Maria, rendeira de Ribeirão", isNew: true },
  { tipo: "Ficar" as Filter, nome: "Pousada pequena no sul da ilha", local: "Sul da ilha, Florianópolis", cidade: "Florianópolis", texto: "Alguns lugares não pedem nada além de presença. Quarto simples, café cedo, o barulho da chuva na noite. Isso já é suficiente.", source: null, isNew: false },
  { tipo: "Encontrar" as Filter, nome: "Mercado Público Central", local: "Centro, Florianópolis", cidade: "Florianópolis", texto: "Não para comprar. Para observar. As bancas de especiarias, os vendedores que se conhecem há décadas, o ritmo de um lugar que existe por conta própria.", source: null, isNew: false },
  { tipo: "Parar" as Filter, nome: "Morro das Pedras", local: "Sul da ilha, Florianópolis", cidade: "Florianópolis", texto: "Uma praia que não tenta impressionar. Pedras, vento, surfe. Bom para quem quer olhar o mar sem ser olhado de volta.", source: null, isNew: false },
];

const filters: Filter[] = ["Todos", "Comer", "Ficar", "Parar", "Encontrar"];
function getCount(filter: Filter) {
  if (filter === "Todos") return lugares.length;
  return lugares.filter(l => l.tipo === filter).length;
}
const newestEntry = lugares.find(l => l.isNew) || lugares[lugares.length - 1];

export default function Lugares() {
  const [active, setActive] = useState<Filter>("Todos");
  const filtered = active === "Todos" ? lugares : lugares.filter(l => l.tipo === active);

  return (
    <div className="pt-20">
      <div className="w-full relative" style={{ maxHeight: "520px", overflow: "hidden" }}>
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full object-cover"
          style={{ maxHeight: "520px" }}
          src="/images/Mel_Fishing_Village_Lugares_Animation.mp4"
        />
      </div>

      <section className="pt-16 pb-16 px-6 bg-background">
        <div className="max-w-3xl mx-auto">
          <motion.div initial="hidden" animate="visible" variants={fadeIn}>
            <h1 className="font-serif text-5xl mb-6">Lugares</h1>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-xl">Lugares que ficaram. Sem estrelas, sem avaliações — só o que vale a pena lembrar.</p>
            <p className="text-sm text-muted-foreground/50 italic mt-4 max-w-xl">Alguns vividos por Mel. Outros contados por quem os conhece de cor.</p>
          </motion.div>
        </div>
      </section>

      <section className="px-6 pb-10 bg-background">
        <div className="max-w-3xl mx-auto">
          <motion.div initial="hidden" animate="visible" variants={fadeIn} className="border-l-2 border-accent-warm/40 pl-6 py-2">
            <p className="text-xs uppercase tracking-widest text-accent-warm/70 font-semibold mb-1">Último lugar adicionado</p>
            <p className="font-serif text-lg text-foreground">
              {newestEntry.nome}
              <span className="font-sans text-sm text-muted-foreground/60 ml-3 font-normal tracking-wide">{newestEntry.cidade} · {newestEntry.tipo}</span>
            </p>
          </motion.div>
        </div>
      </section>

      <section className="px-6 pb-16 bg-background">
        <div className="max-w-3xl mx-auto">
          <div className="flex flex-wrap gap-3">
            {filters.filter(f => getCount(f) > 0).map(f => (
              <button key={f} onClick={() => setActive(f)} className={`px-5 py-2 text-sm tracking-wide transition-all duration-300 border ${active === f ? "border-accent-warm bg-accent-warm/10 text-accent-warm" : "border-foreground/20 text-foreground/60 hover:border-accent-warm/50 hover:text-accent-warm/70"}`}>
                {f}
                <span className={`ml-2 text-xs ${active === f ? "text-accent-warm/70" : "text-muted-foreground/40"}`}>{getCount(f)}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-32 px-6 bg-background">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-0">
            {filtered.map((l, i) => (
              <motion.div key={`${l.nome}-${i}`} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08, duration: 0.6 }} className="flex gap-10 items-start border-b border-foreground/10 py-14 last:border-0">
                <div className="shrink-0 text-right w-24 pt-1 space-y-1">
                  <span className="text-xs uppercase tracking-widest text-accent-warm font-semibold block">{l.tipo}</span>
                  <span className="text-xs text-muted-foreground/50 tracking-wide block">{l.cidade}</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-4 mb-1">
                    <p className="font-serif text-xl text-foreground">{l.nome}</p>
                    {l.isNew && <span className="text-[10px] uppercase tracking-widest text-accent-warm/70 border border-accent-warm/30 px-2 py-0.5 shrink-0 mt-1">Novo</span>}
                  </div>
                  <p className="text-xs text-muted-foreground/60 mb-4 tracking-wide">{l.local}</p>
                  <p className="text-muted-foreground leading-relaxed">{l.texto}</p>
                  {l.source && <p className="text-xs text-muted-foreground/50 italic mt-4 tracking-wide">— {l.source}</p>}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
