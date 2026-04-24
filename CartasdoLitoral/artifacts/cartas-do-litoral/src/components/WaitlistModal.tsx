import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface WaitlistModalProps {
  isOpen: boolean;
  plan: "mensal" | "anual" | null;
  onClose: () => void;
}

export default function WaitlistModal({ isOpen, plan, onClose }: WaitlistModalProps) {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [selectedPlan, setSelectedPlan] = useState<"mensal" | "anual">(plan || "anual");
  const [formState, setFormState] = useState<"idle" | "loading" | "success" | "error">("idle");

  useEffect(() => {
    if (plan) setSelectedPlan(plan);
  }, [plan]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      setTimeout(() => {
        setFormState("idle");
        setFirstName("");
        setEmail("");
      }, 300);
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

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
          plan: selectedPlan,
          tags: [`waitlist-${selectedPlan}`],
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
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 bg-foreground/40 backdrop-blur-sm z-40"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            key="modal"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 16 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed inset-0 z-50 flex items-center justify-center px-4"
          >
            <div
              className="relative w-full max-w-md bg-background shadow-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Vintage stamp */}
              <div className="absolute top-4 right-12 w-16 h-16 border-2 border-accent-warm/40 flex flex-col items-center justify-center opacity-60">
                <div className="text-[7px] font-mono tracking-widest text-accent-warm leading-tight text-center uppercase">
                  <span className="block">✦</span>
                  <span className="block">CARTAS DO LITORAL</span>
                </div>
              </div>

              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-1 text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Fechar"
              >
                <X size={18} />
              </button>

              <div className="p-8 pt-10">
                {formState === "success" ? (
                  <div className="py-8 text-center space-y-4">
                    <p className="font-serif text-2xl text-foreground leading-snug">
                      Com o mar ainda nos olhos,
                    </p>
                    <p className="font-serif text-3xl text-accent-warm">
                      Mel ✉
                    </p>
                    <p className="text-muted-foreground text-sm leading-relaxed max-w-xs mx-auto">
                      Você está na lista. Quando as cartas estiverem prontas para viajar, você será a primeira a saber.
                    </p>
                    <button
                      onClick={onClose}
                      className="mt-4 px-8 py-3 bg-foreground text-white text-sm font-medium tracking-wide hover:bg-foreground/90 transition-colors"
                    >
                      Fechar
                    </button>
                  </div>
                ) : (
                  <>
                    {/* Header */}
                    <div className="mb-6 space-y-2">
                      <p className="text-xs font-mono tracking-widest text-accent-warm uppercase">
                        Julho de 2026
                      </p>
                      <h2 className="font-serif text-2xl text-foreground">
                        Você vai receber a história desde o início.
                      </h2>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        Deixe o seu nome e email. Quando as assinaturas abrirem em junho, você recebe aviso antes de todo mundo.
                      </p>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="space-y-3">
                      <input
                        type="text"
                        placeholder="Seu primeiro nome"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        className="w-full px-5 py-4 bg-secondary border-none focus:outline-none focus:ring-1 focus:ring-accent-warm text-foreground placeholder:text-muted-foreground/50 transition-shadow text-sm"
                      />
                      <input
                        type="email"
                        placeholder="Seu melhor email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-5 py-4 bg-secondary border-none focus:outline-none focus:ring-1 focus:ring-accent-warm text-foreground placeholder:text-muted-foreground/50 transition-shadow text-sm"
                        required
                      />

                      {/* Plan selector */}
                      <div className="grid grid-cols-2 gap-2 pt-1">
                        <button
                          type="button"
                          onClick={() => setSelectedPlan("mensal")}
                          className={`py-3 px-4 text-sm font-medium tracking-wide transition-all border ${
                            selectedPlan === "mensal"
                              ? "border-accent-warm bg-accent-warm/10 text-accent-warm"
                              : "border-foreground/20 text-muted-foreground hover:border-accent-warm/50"
                          }`}
                        >
                          Mensal
                        </button>
                        <button
                          type="button"
                          onClick={() => setSelectedPlan("anual")}
                          className={`py-3 px-4 text-sm font-medium tracking-wide transition-all border relative ${
                            selectedPlan === "anual"
                              ? "border-accent-warm bg-accent-warm text-white"
                              : "border-foreground/20 text-muted-foreground hover:border-accent-warm/50"
                          }`}
                        >
                          Anual
                          <span className="absolute -top-2 -right-1 text-[9px] bg-foreground text-white px-1.5 py-0.5 tracking-wide font-mono">
                            Melhor valor
                          </span>
                        </button>
                      </div>

                      {formState === "error" && (
                        <p className="text-sm text-red-500 px-1">
                          Algo correu mal. Tente novamente.
                        </p>
                      )}

                      <button
                        type="submit"
                        disabled={formState === "loading"}
                        className="w-full py-4 bg-foreground text-white text-sm font-medium tracking-wide hover:bg-foreground/90 transition-colors disabled:opacity-60 mt-2"
                      >
                        {formState === "loading" ? "Guardando o seu lugar..." : "Quero acompanhar desde o início"}
                      </button>

                      <p className="text-center text-xs text-muted-foreground/60 pt-1">
                        Nenhum pagamento agora. Só uma promessa mútua.
                      </p>
                    </form>
                  </>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}