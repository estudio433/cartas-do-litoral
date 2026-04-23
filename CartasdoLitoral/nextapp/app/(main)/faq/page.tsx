"use client";
import { useState } from "react";
import { motion, type Variants } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const fadeIn: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

const faqs = [
  {
    categoria: "Entrega",
    perguntas: [
      { q: "Quando a carta chega?", a: "Despachamos todas as cartas entre os dias 10 e 15 de cada mês pelos Correios. Dependendo da sua cidade, a carta chega antes do fim do mês." },
      { q: "Assinei hoje. Quando recebo a primeira carta?", a: "Se a sua assinatura foi confirmada até o dia 9, a sua primeira carta parte neste mês. Se foi confirmada no dia 10 ou depois, a sua primeira carta parte no mês seguinte." },
      { q: "Vou receber um código de rastreamento?", a: "A sua primeira carta é enviada com rastreamento pelos Correios — você receberá o código por email. As cartas seguintes são enviadas via correio padrão." },
      { q: "Vocês entregam para todo o Brasil?", a: "Sim — despachamos para todo o Brasil via Correios." },
      { q: "Não recebi a minha carta. O que faço?", a: "Se o prazo de entrega já passou, entre em contato em oi@cartasdolitoral.com.br com: nome completo, endereço de entrega, número do mês da carta em falta, e email usado na assinatura. Respondemos em até 3 dias úteis." }
    ]
  },
  {
    categoria: "Assinatura",
    perguntas: [
      { q: "Posso cancelar quando quiser?", a: "Sim. Você pode cancelar a qualquer momento. Para não receber a carta daquele mês, cancele até o dia 8. Cancelamentos após o dia 8 ainda recebem a carta daquele mês." },
      { q: "O que chega dentro do envelope?", a: "Cada envelope contém duas folhas de papel A4 premium impressas frente e verso — quatro páginas de história — com design exclusivo Cartas do Litoral. Mais um pequeno detalhe físico inspirado no lugar daquele mês." },
      { q: "Qual é a diferença entre o plano mensal e o anual?", a: "O plano mensal é cobrado todo mês e pode ser cancelado a qualquer momento. O plano anual oferece melhor valor — você paga por 12 meses e recebe as 12 cartas da Season 1 completa." },
      { q: "Posso pausar a minha assinatura?", a: "Por enquanto não oferecemos pausa — apenas cancelamento. Entre em contato em oi@cartasdolitoral.com.br se precisar de ajuda." }
    ]
  },
  {
    categoria: "Presente",
    perguntas: [
      { q: "Como funciona a assinatura de presente?", a: "A assinatura de presente é oferecida no plano anual — 12 cartas, uma por mês. Você indica o endereço da pessoa presenteada e pode incluir uma mensagem pessoal no primeiro envelope. A contagem dos 12 meses começa no primeiro despacho após a confirmação do pagamento." },
      { q: "A pessoa presenteada vai saber quem deu o presente?", a: "Sim — se você quiser. No primeiro envelope há um cartão especial onde pode incluir uma mensagem pessoal." },
      { q: "Posso dar de presente para alguém fora do Brasil?", a: "Por enquanto despachamos apenas para endereços no Brasil." }
    ]
  },
  {
    categoria: "A história",
    perguntas: [
      { q: "Quem é a Mel?", a: "Mel é Amélia — uma personagem que largou tudo aos 37 anos e foi viver no litoral catarinense. Ela escreve cartas mensais para a melhor amiga dela, a Ju. Você é a Ju." },
      { q: "Posso entrar no meio da história?", a: "Não — e isso é intencional. Cada novo assinante começa do Mês 01, independentemente de quando assinar. A história da Mel começa sempre pelo início. Você vai receber as cartas em ordem, do começo ao fim." },
      { q: "Quantas cartas existem no total?", a: "A Season 1 tem 12 cartas — 1 ano de história, percorrendo o litoral catarinense de julho de 2026 a junho de 2027." }
    ]
  }
];

export default function FAQ() {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <div className="pt-20 pb-32 px-6">
      <div className="max-w-2xl mx-auto">
        <motion.div initial="hidden" animate="visible" variants={fadeIn} className="mt-16 mb-16">
          <h1 className="font-serif text-5xl mb-4">Perguntas frequentes</h1>
          <p className="text-muted-foreground text-lg">Tudo o que você precisa saber antes de receber a primeira carta.</p>
        </motion.div>

        <div className="space-y-16">
          {faqs.map((section) => (
            <motion.div key={section.categoria} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
              <h2 className="font-serif text-2xl mb-8 text-foreground/70">{section.categoria}</h2>
              <div className="space-y-0">
                {section.perguntas.map((item, i) => {
                  const id = `${section.categoria}-${i}`;
                  const isOpen = open === id;
                  return (
                    <div key={id} className="border-b border-foreground/10">
                      <button onClick={() => setOpen(isOpen ? null : id)} className="w-full flex items-center justify-between py-5 text-left gap-4">
                        <span className="font-serif text-lg text-foreground">{item.q}</span>
                        {isOpen ? <Minus size={16} className="shrink-0 text-accent-warm" /> : <Plus size={16} className="shrink-0 text-muted-foreground" />}
                      </button>
                      {isOpen && (
                        <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }} className="pb-6 text-muted-foreground leading-relaxed">
                          {item.a}
                        </motion.div>
                      )}
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="mt-20 pt-12 border-t border-foreground/10 text-center">
          <p className="text-muted-foreground mb-4">Não encontrou o que procurava?</p>
          <a href="mailto:oi@cartasdolitoral.com.br" className="text-accent-warm font-medium hover:text-accent-warm/80 transition-colors">oi@cartasdolitoral.com.br</a>
        </motion.div>
      </div>
    </div>
  );
}