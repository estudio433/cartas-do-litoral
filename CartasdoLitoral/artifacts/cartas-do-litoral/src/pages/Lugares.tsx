import { motion } from "framer-motion";
import { useState } from "react";
import heroImg from "@assets/Cartas_do_litoral_landing_page_(19)_1775764651159.png";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

type Filter = "Todos" | "Comer" | "Ficar" | "Parar" | "Encontrar";

const lugares = [
  {
    tipo: "Comer" as Filter,
    nome: "Ostradamus",
    local: "Ribeirão da Ilha, Florianópolis",
    texto: "Sentei perto da água e o tempo desacelerou sozinho. As ostras chegam vivas, abertas na hora, com o gosto exato do mar que você acabou de ver lá fora."
  },
  {
    tipo: "Parar" as Filter,
    nome: "Guarda do Embaú",
    local: "Sul de Santa Catarina",
    texto: "Cheguei sem plano de ficar. Fiquei mais do que imaginei. A lagoa, o rio, o mar — tudo na mesma vista. Algumas praias pedem pausa."
  },
  {
    tipo: "Ficar" as Filter,
    nome: "Pousada pequena no sul da ilha",
    local: "Florianópolis",
    texto: "Alguns lugares não pedem nada além de presença. Quarto simples, café cedo, o barulho da chuva na noite. Isso já é suficiente."
  },
  {
    tipo: "Encontrar" as Filter,
    nome: "Mercado Público Central",
    local: "Florianópolis",
    texto: "Não para comprar. Para observar. As bancas de especiarias, os vendedores que se conhecem há décadas, o ritmo de um lugar que existe por conta própria."
  },
  {
    tipo: "Comer" as Filter,
    nome: "Bar do Deca",
    local: "Garopaba",
    texto: "Agosto estava vazio e o bar estava cheio. Caldo de peixe numa mesa de madeira. Uma conversa que começou sobre o tempo e terminou muito depois."
  },
  {
    tipo: "Parar" as Filter,
    nome: "Morro das Pedras",
    local: "Florianópolis",
    texto: "Uma praia que não tenta impressionar. Pedras, vento, surfe. Bom para quem quer olhar o mar sem ser olhado de volta."
  }
];

const filters: Filter[] = ["Todos", "Comer", "Ficar", "Parar", "Encontrar"];

export default function Lugares() {
  const [active, setActive] = useState<Filter>("Todos");

  const filtered = active === "Todos" ? lugares : lugares.filter(l => l.tipo === active);

  return (
    <div className="pt-20">
      {/* Hero image */}
      <div className="w-full">
        <img
          src={heroImg}
          alt="Lugares"
          className="w-full object-cover"
          style={{ maxHeight: "520px" }}
        />
      </div>

      <section className="pt-16 pb-20 px-6 bg-background">
        <div className="max-w-3xl mx-auto">
          <motion.div initial="hidden" animate="visible" variants={fadeIn}>
            <h1 className="font-serif text-5xl mb-6">Lugares</h1>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-xl">
              Uma curadoria de lugares que Mel encontrou pelo caminho. Sem estrelas, sem avaliações. Só o que ficou.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="px-6 pb-20 bg-background">
        <div className="max-w-3xl mx-auto">
          <div className="flex flex-wrap gap-3">
            {filters.map(f => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`px-5 py-2 text-sm tracking-wide transition-all duration-300 border ${
                  active === f
                    ? "border-accent-warm bg-accent-warm/10 text-accent-warm"
                    : "border-foreground/20 text-foreground/60 hover:border-accent-warm/50 hover:text-accent-warm/70"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Entries */}
      <section className="pb-32 px-6 bg-background">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-0">
            {filtered.map((l, i) => (
              <motion.div
                key={`${l.nome}-${i}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08, duration: 0.6 }}
                className="flex gap-10 items-start border-b border-foreground/10 py-14 last:border-0"
              >
                <div className="shrink-0 text-right w-24 pt-1">
                  <span className="text-xs uppercase tracking-widest text-accent-warm font-semibold">{l.tipo}</span>
                </div>
                <div className="flex-1">
                  <p className="font-serif text-xl text-foreground mb-1">{l.nome}</p>
                  <p className="text-xs text-muted-foreground/70 mb-4 tracking-wide">{l.local}</p>
                  <p className="text-muted-foreground leading-relaxed">{l.texto}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
