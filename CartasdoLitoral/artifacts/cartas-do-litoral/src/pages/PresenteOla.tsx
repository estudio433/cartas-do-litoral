import { motion } from "framer-motion";
import { useState } from "react";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

export default function PresenteOla() {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [formState, setFormState] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("loading");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          firstName,
          tags: ["gift-recipient", "waitlist"],
        }),
      });
      if (res.ok) {
        setFormState("success");
        setFirstName("");
        setEmail("");
      } else {
        setFormState("error");
      }
    } catch {
      setFormState("error");
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">

      {/* Minimal header — no full navbar */}
      <div className="px-8 py-6 border-b border-foreground/10">
        <span className="font-serif text-lg tracking-wide text-foreground">
          Cartas do Litoral
        </span>
      </div>

      <div className="flex-1 flex items-center justify-center px-6 py-16">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="max-w-md w-full space-y-10"
        >
          {formState === "success" ? (

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center space-y-6 py-8"
            >
              <p className="font-serif text-3xl text-foreground leading-relaxed">
                Agora eu sei que você existe.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Você vai receber um email meu em breve.
                A história está só começando.
              </p>
              <p className="font-handwritten text-xl text-accent-warm">
                Com o mar ainda nos olhos, Mel ✉
              </p>
              <a
                href="https://www.cartasdolitoral.com.br"
                className="inline-block text-sm text-muted-foreground/60 hover:text-accent-warm transition-colors tracking-wide"
              >
                Conhecer o site →
              </a>
            </motion.div>

          ) : (

            <>
              <div className="space-y-6">
                <p className="text-xs uppercase tracking-widest text-accent-warm/70 font-semibold">
                  Alguém pensou em você
                </p>
                <h1 className="font-serif text-4xl text-foreground leading-tight">
                  Você acaba de receber algo especial.
                </h1>
                <p className="text-muted-foreground leading-relaxed">
                  Essa carta foi escolhida para você por alguém que
                  te conhece bem o suficiente para saber que você e
                  o litoral precisavam se encontrar.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Me chamo Amélia — mas pode me chamar de Mel.
                  Todo mês escrevo uma carta sobre um lugar novo do
                  litoral brasileiro e ela viaja até a sua caixa de
                  correio. Você acabou de receber a primeira.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Deixe o seu email aqui e eu escrevo para você também
                  — com calma, só quando tiver algo que vale a pena
                  contar.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  placeholder="Seu primeiro nome"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="w-full px-6 py-4 bg-secondary border-none focus:outline-none focus:ring-1 focus:ring-accent-warm text-foreground placeholder:text-muted-foreground/50 text-sm"
                />
                <input
                  type="email"
                  placeholder="Seu melhor email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-6 py-4 bg-secondary border-none focus:outline-none focus:ring-1 focus:ring-accent-warm text-foreground placeholder:text-muted-foreground/50 text-sm"
                  required
                />

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
                    ? "Guardando..."
                    : "Quero receber as cartas da Mel →"}
                </button>

                <p className="text-xs text-muted-foreground/50 text-center leading-relaxed">
                  Com calma — só quando tiver algo que vale a pena contar.
                </p>
              </form>
            </>
          )}
        </motion.div>
      </div>

    </div>
  );
}
