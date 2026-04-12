import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "wouter";
import presenteImg from "@assets/Cartas_-_What_arrives_(17)_1775971951885.png";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

export default function Presente() {
  const [form, setForm] = useState({
    gifterName: "",
    gifterEmail: "",
    recipientName: "",
    recipientEmail: "",
    recipientAddress: "",
    recipientCity: "",
    recipientState: "",
    recipientCep: "",
    message: "",
  });
  const [formState, setFormState] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("loading");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: form.gifterEmail,
          firstName: form.gifterName,
          tags: ["gift-giver", "plano-anual"],
          custom_fields: [
            { name: "recipient_name", value: form.recipientName },
            { name: "recipient_email", value: form.recipientEmail },
            { name: "recipient_address", value: form.recipientAddress },
            { name: "recipient_city", value: form.recipientCity },
            { name: "recipient_state", value: form.recipientState },
            { name: "recipient_cep", value: form.recipientCep },
            { name: "gift_message", value: form.message },
            { name: "gift_plan", value: "anual" },
          ],
        }),
      });
      if (res.ok) {
        setFormState("success");
      } else {
        setFormState("error");
      }
    } catch {
      setFormState("error");
    }
  };

  return (
    <div className="pt-20">

      {/* Hero */}
      <section className="pt-24 pb-20 px-6 bg-background">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="flex flex-col md:flex-row gap-12 items-center"
          >
            {/* Image — left */}
            <div className="w-full md:w-5/12 shrink-0">
              <img
                src={presenteImg}
                alt="Cartas do Litoral — envelope e conteúdo"
                className="w-full object-contain"
              />
            </div>

            {/* Text — right */}
            <div className="flex-1 space-y-6">
              <p className="text-xs uppercase tracking-widest text-accent-warm/70 font-semibold">
                Um presente diferente
              </p>
              <h1 className="font-serif text-5xl text-foreground leading-tight">
                A presente começa com uma carta.<br/>
                Termina com uma história guardada.
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Todo mês um envelope chega na caixa de correio de quem você
                escolheu. Dentro — uma carta de Mel, um postcard ilustrado,
                um item colecionável, e algo que só existe naquele lugar do
                litoral brasileiro.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Não é um presente que se usa e acaba. É uma história que chega
                em casa todo mês durante um ano inteiro.
              </p>
              <div className="border border-accent-warm/20 p-5 bg-secondary space-y-1">
                <p className="text-sm font-medium text-foreground">
                  Season 1 — Litoral Catarinense
                </p>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  12 cartas · 12 lugares · 1 ano completo · R$600
                </p>
                <p className="text-xs text-accent-warm/70 font-medium tracking-wide uppercase">
                  Único plano disponível para presentes
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What they receive */}
      <section className="py-20 px-6 bg-secondary">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="space-y-10"
          >
            <h2 className="font-serif text-3xl text-foreground">
              O que chega todo mês
            </h2>
            <div className="space-y-8">
              {[
                {
                  label: "A carta de Mel",
                  desc: "3 páginas impressas em papel premium. Mel conta onde está, o que encontrou, o que ficou. Cada carta é um capítulo da mesma jornada pelo litoral."
                },
                {
                  label: "Postcard ilustrado",
                  desc: "Uma ilustração exclusiva do destino do mês. Colecionável. Digno de emoldurar."
                },
                {
                  label: "Item colecionável",
                  desc: "Um ímã de vinil, adesivo, ou pin do lugar visitado. Diferente a cada mês."
                },
                {
                  label: "Playlist do lugar",
                  desc: "Um QR code que abre uma playlist Spotify curada para aquele lugar específico. A música do litoral."
                },
                {
                  label: "Algo que só existe ali",
                  desc: "Um elemento especial ligado à cultura local — como uma reprodução de renda de bilro de Ribeirão da Ilha."
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex gap-8 items-start border-b border-foreground/10 pb-8 last:border-0 last:pb-0"
                >
                  <div className="shrink-0 w-2 h-2 rounded-full bg-accent-warm/40 mt-2" />
                  <div>
                    <p className="font-serif text-lg text-foreground mb-2">
                      {item.label}
                    </p>
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Gift form or success */}
      <section className="py-32 px-6 bg-background">
        <div className="max-w-2xl mx-auto">
          {formState === "success" ? (

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center space-y-8 py-16"
            >
              <p className="font-serif text-3xl text-foreground leading-relaxed">
                O presente está registrado.
              </p>
              <p className="text-muted-foreground leading-relaxed max-w-md mx-auto">
                Verifique o seu email — enviamos um cartão digital
                que você pode encaminhar agora para quem vai receber,
                para que a surpresa chegue no dia certo.
              </p>
              <p className="text-muted-foreground leading-relaxed max-w-md mx-auto">
                Assim que as cartas estiverem prontas para partir
                entraremos em contato para confirmar o pagamento.
              </p>
              <p className="font-handwritten text-xl text-accent-warm">
                Com o mar ainda nos olhos, Mel ✉
              </p>
              <Link
                href="/"
                className="inline-block text-sm text-muted-foreground/60 hover:text-accent-warm transition-colors tracking-wide"
              >
                Voltar ao início →
              </Link>
            </motion.div>

          ) : (

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="space-y-10"
            >
              <div className="space-y-3">
                <p className="text-xs uppercase tracking-widest text-accent-warm/70 font-semibold">
                  Lista de espera para presentes
                </p>
                <h2 className="font-serif text-4xl text-foreground">
                  Reserve agora.
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Ainda estamos em pré-lançamento. Registre o interesse
                  aqui e entraremos em contato assim que as cartas
                  estiverem prontas para partir.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-8">

                {/* Gifter details */}
                <div className="space-y-3">
                  <p className="text-sm font-medium text-foreground">
                    Seus dados (quem presenteia)
                  </p>
                  <div className="grid grid-cols-2 gap-3">
                    <input
                      name="gifterName"
                      type="text"
                      placeholder="Seu nome"
                      value={form.gifterName}
                      onChange={handleChange}
                      className="px-5 py-4 bg-secondary border-none focus:outline-none focus:ring-1 focus:ring-accent-warm text-foreground placeholder:text-muted-foreground/50 text-sm"
                      required
                    />
                    <input
                      name="gifterEmail"
                      type="email"
                      placeholder="Seu email"
                      value={form.gifterEmail}
                      onChange={handleChange}
                      className="px-5 py-4 bg-secondary border-none focus:outline-none focus:ring-1 focus:ring-accent-warm text-foreground placeholder:text-muted-foreground/50 text-sm"
                      required
                    />
                  </div>
                </div>

                {/* Recipient details */}
                <div className="space-y-3">
                  <p className="text-sm font-medium text-foreground">
                    Dados de quem vai receber
                  </p>
                  <div className="grid grid-cols-2 gap-3">
                    <input
                      name="recipientName"
                      type="text"
                      placeholder="Nome de quem recebe"
                      value={form.recipientName}
                      onChange={handleChange}
                      className="px-5 py-4 bg-secondary border-none focus:outline-none focus:ring-1 focus:ring-accent-warm text-foreground placeholder:text-muted-foreground/50 text-sm"
                      required
                    />
                    <input
                      name="recipientEmail"
                      type="email"
                      placeholder="Email de quem recebe"
                      value={form.recipientEmail}
                      onChange={handleChange}
                      className="px-5 py-4 bg-secondary border-none focus:outline-none focus:ring-1 focus:ring-accent-warm text-foreground placeholder:text-muted-foreground/50 text-sm"
                      required
                    />
                  </div>
                  <input
                    name="recipientAddress"
                    type="text"
                    placeholder="Endereço completo (rua, número, complemento)"
                    value={form.recipientAddress}
                    onChange={handleChange}
                    className="w-full px-5 py-4 bg-secondary border-none focus:outline-none focus:ring-1 focus:ring-accent-warm text-foreground placeholder:text-muted-foreground/50 text-sm"
                    required
                  />
                  <div className="grid grid-cols-3 gap-3">
                    <input
                      name="recipientCity"
                      type="text"
                      placeholder="Cidade"
                      value={form.recipientCity}
                      onChange={handleChange}
                      className="px-5 py-4 bg-secondary border-none focus:outline-none focus:ring-1 focus:ring-accent-warm text-foreground placeholder:text-muted-foreground/50 text-sm"
                      required
                    />
                    <input
                      name="recipientState"
                      type="text"
                      placeholder="Estado"
                      value={form.recipientState}
                      onChange={handleChange}
                      className="px-5 py-4 bg-secondary border-none focus:outline-none focus:ring-1 focus:ring-accent-warm text-foreground placeholder:text-muted-foreground/50 text-sm"
                      required
                    />
                    <input
                      name="recipientCep"
                      type="text"
                      placeholder="CEP"
                      value={form.recipientCep}
                      onChange={handleChange}
                      className="px-5 py-4 bg-secondary border-none focus:outline-none focus:ring-1 focus:ring-accent-warm text-foreground placeholder:text-muted-foreground/50 text-sm"
                      required
                    />
                  </div>
                </div>

                {/* Personal message */}
                <div className="space-y-3">
                  <p className="text-sm font-medium text-foreground">
                    Mensagem pessoal
                    <span className="font-normal text-muted-foreground/60 ml-2">
                      (opcional — incluímos dentro do primeiro envelope)
                    </span>
                  </p>
                  <textarea
                    name="message"
                    placeholder="Escreva algo para quem vai receber..."
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-5 py-4 bg-secondary border-none focus:outline-none focus:ring-1 focus:ring-accent-warm text-foreground placeholder:text-muted-foreground/50 text-sm resize-none"
                  />
                </div>

                {formState === "error" && (
                  <p className="text-sm text-red-500">
                    Algo correu mal. Tente novamente.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={formState === "loading"}
                  className="w-full px-8 py-4 bg-foreground text-white hover:bg-foreground/90 transition-colors font-medium tracking-wide disabled:opacity-50"
                >
                  {formState === "loading"
                    ? "Registrando o presente..."
                    : "Registrar presente →"}
                </button>

                <p className="text-xs text-muted-foreground/50 text-center leading-relaxed">
                  Nenhum pagamento agora. Entraremos em contato para
                  confirmar os detalhes antes do lançamento.
                </p>
              </form>
            </motion.div>
          )}
        </div>
      </section>

    </div>
  );
}
