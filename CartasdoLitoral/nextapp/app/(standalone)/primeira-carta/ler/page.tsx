"use client";

import { motion, type Variants } from "framer-motion";
import Link from "next/link";

const fadeIn: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

export default function LerPrimeiraCarta() {
  return (
    <div className="min-h-screen bg-[#FDFAF6] flex flex-col">

      {/* Minimal header */}
      <div className="px-8 py-6 flex items-center justify-between
        border-b border-foreground/10">
        <span className="font-serif text-lg tracking-wide text-foreground">
          Cartas do Litoral
        </span>
        <Link
          href="/primeira-carta"
          className="text-xs uppercase tracking-widest
            text-muted-foreground/50 hover:text-accent-warm
            transition-colors"
        >
          ← Voltar
        </Link>
      </div>

      {/* Letter */}
      <motion.article
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="flex-1 px-6 py-16 max-w-[680px] mx-auto w-full"
      >

        {/* Letter header */}
        <div className="mb-12 space-y-1">
          <p className="font-handwritten text-lg text-muted-foreground">
            Mês 01
          </p>
          <p className="font-handwritten text-lg text-muted-foreground">
            Florianópolis, SC
          </p>
          <p className="font-handwritten text-lg text-muted-foreground">
            Julho de 2026
          </p>
        </div>

        {/* Salutation */}
        <p className="font-handwritten text-2xl text-foreground mb-10">
          Ju,
        </p>

        {/* Body */}
        <div className="space-y-6 text-foreground/90 text-lg leading-[1.9]
          font-serif">

          <p className="first-letter:text-5xl first-letter:font-bold
            first-letter:text-accent-warm first-letter:float-left
            first-letter:mr-2 first-letter:leading-none first-letter:mt-1">
            Cheguei. Mas você já sabe que tem história constrangedora
            envolvida. Já começa bem, né?
          </p>

          <p>
            Então. Avisaram que íamos pousar. A mulher do meu lado estava
            dormindo. O homem atrás olhava o celular. E então o avião
            inclinou — aquele mergulho suave que faz o estômago lembrar
            que você está voando — e de repente o oceano estava em todo
            lugar. No meio dele, uma terra verde e irregular, cercada de
            água por todos os lados, como se o Brasil tivesse guardado um
            segredo aqui e esquecido de avisar.
          </p>

          <p>Só eu vi.</p>

          <p>
            Tentei tirar uma foto. Derrubei o fone no colo do homem do
            corredor. Ele devolveu sem olhar, com aquela pressa de quem
            já chegou antes de pousar. A foto ficou torta, um borrão de
            azul e verde — tô mandando ela junto. Não dá para ver nada —
            e é a coisa mais bonita que eu já fotografei.
          </p>

          <p>
            Cheguei num julho de Vento Sul. O ar tinha gosto. Trinta e
            sete anos, Ju. Trinta e sete anos sem saber que o oxigênio
            podia ter sabor.
          </p>

          <p>
            No ônibus do aeroporto para o centro, uma senhora sentada do
            meu lado perguntou se era minha primeira vez na ilha. Disse
            que sim. Ela não hesitou: "Vai direto ao Mercado Público.
            É por lá que a cidade começa."
          </p>

          <p>
            Estava com o estômago vazio e sem plano nenhum além de chegar
            — que você vai concordar que já é alguma coisa dado o estado
            em que eu embarquei — então fui.
          </p>

          <p>
            O vão central estava cheio de um barulho bom — pratos,
            conversas rápidas, o grito dos pescadores anunciando o preço
            da tainha. Pedi um café e um pastel de berbigão num dos
            restaurantes do mercado. O moço atrás do balcão perguntou o
            nome para chamar quando ficasse pronto. Disse Amélia. Ele
            anotou, virou de costas, e não cantou nada — mas eu já
            esperei. Sempre espero. Aqui no Brasil a gente não pode ter
            esse nome em paz. É inevitável: alguém sempre lembra da música.
          </p>

          <p className="italic">
            Amélia não tinha a menor vaidade, Amélia é que era mulher
            de verdade.
          </p>

          <p>
            Passei a vida inteira sendo exatamente essa Amélia — a que
            não pede, a que não incomoda, a que aguenta. Mel é meu.
          </p>

          <p>
            Me sentei perto das peixarias e fiquei ouvindo o sotaque
            manezinho — as palavras saem tão rápidas que tropeçam umas
            nas outras. Ouvi um senhor chamar o neto de alguma coisa que
            não entendi e rir logo depois — uma risada tão inteira que me
            deu vontade de sorrir para um desconhecido.
          </p>

          <p>Sorri. Ele não viu. A vida que segue.</p>

        </div>

        {/* Fade out + CTA */}
        <div className="relative mt-12">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent
            to-[#FDFAF6] pointer-events-none"
            style={{ top: '-80px', height: '120px' }}
          />
          <div className="pt-8 text-center space-y-6 border-t
            border-foreground/10">
            <p className="font-serif text-xl text-foreground/70
              leading-relaxed">
              A história continua.
            </p>
            <p className="text-muted-foreground text-sm leading-relaxed
              max-w-xs mx-auto">
              A primeira carta parte em julho de 2026.
              Assinaturas abrem em junho.
            </p>
            <Link
              href="/primeira-carta"
              className="inline-block px-8 py-4 border border-accent-warm
                text-accent-warm hover:bg-accent-warm hover:text-white
                transition-all duration-500 font-medium tracking-wide
                text-sm"
            >
              Quero acompanhar desde o início
            </Link>
            <p className="font-handwritten text-lg text-accent-warm">
              Com o mar ainda nos olhos, Mel ✉
            </p>
          </div>
        </div>

      </motion.article>
    </div>
  );
}
