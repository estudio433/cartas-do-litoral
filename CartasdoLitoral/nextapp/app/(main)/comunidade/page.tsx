"use client";

import { motion, type Variants } from "framer-motion";

const fadeIn: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

export default function Comunidade() {
  return (
    <div className="pt-20">
      <section className="min-h-[calc(100vh-5rem)] flex items-center justify-center px-6 py-32 bg-background">
        <div className="max-w-lg mx-auto text-center">
          <motion.div initial="hidden" animate="visible" variants={fadeIn} className="space-y-12">
            <div className="space-y-6">
              <p className="font-serif text-4xl leading-snug text-foreground">Algumas histórias continuam depois da carta.</p>
            </div>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>Existe um espaço onde outras pessoas também estão acompanhando esse caminho — com calma, cada uma no seu tempo.</p>
              <p>Não é uma rede social. Não tem feed. Tem conversa, silêncio quando precisa, e a sensação de que não se está andando sozinho.</p>
            </div>
            <div className="space-y-4 pt-4">
              <p className="text-xs uppercase tracking-widest text-foreground/40 font-semibold">Acesso por convite</p>
              <form className="flex flex-col sm:flex-row gap-3 justify-center" onSubmit={(e) => e.preventDefault()}>
                <input type="email" placeholder="Seu email para a lista de espera" className="flex-1 max-w-xs px-6 py-4 bg-secondary border-none focus:outline-none focus:ring-1 focus:ring-accent-warm text-foreground placeholder:text-muted-foreground/50 transition-shadow text-sm" required />
                <div className="w-full">
                <p className="text-xs text-muted-foreground/50 text-center leading-relaxed mb-3">
                  Ao se inscrever, você concorda com nossa{" "}
                  <a href="/privacidade" className="underline hover:text-accent-warm transition-colors">
                    política de privacidade
                  </a>
                  {" "}e com os{" "}
                  <a href="https://beehiiv.com/tou" target="_blank" className="underline hover:text-accent-warm transition-colors">
                    termos de uso
                  </a>
                  {" "}e{" "}
                  <a href="https://beehiiv.com/privacy" target="_blank" className="underline hover:text-accent-warm transition-colors">
                    política de privacidade
                  </a>
                  {" "}da Beehiiv.
                </p>
                <button type="submit" className="px-8 py-4 border border-foreground/30 text-foreground/70 hover:border-accent-warm hover:text-accent-warm transition-all duration-400 font-medium tracking-wide text-sm whitespace-nowrap">Entrar com convite</button>
              </div>
              </form>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
