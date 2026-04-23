"use client";

import { useParams } from "next/navigation";
import { posts } from "@/data/posts";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function DiarioPost() {
  const params = useParams();
  const slug = params?.slug as string;
  const post = posts.find(p => p.slug === slug);

  if (!post) {
    return (
      <div className="flex-1 flex items-center justify-center py-32 px-6 bg-background">
        <div className="text-center">
          <h1 className="font-serif text-4xl mb-4">Página não encontrada</h1>
          <Link href="/diario" className="text-accent-warm hover:underline">Voltar ao diário</Link>
        </div>
      </div>
    );
  }

  return (
    <article className="pt-32 pb-32 px-6 flex-1 bg-background">
      <div className="max-w-[680px] mx-auto">
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mb-12">
          <Link href="/diario" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-accent-warm transition-colors mb-12">
            <ArrowLeft size={16} /> Voltar para o diário
          </Link>
          <div className="text-center">
            <span className="inline-block px-3 py-1 bg-secondary text-accent-warm text-xs uppercase tracking-widest font-semibold rounded-full mb-8">
              {post.category}
            </span>
            <h1 className="font-serif text-4xl md:text-5xl/tight text-foreground mb-8">{post.title}</h1>
            <div className="flex items-center justify-center gap-3 text-sm text-muted-foreground/80 italic font-serif">
              <span>Mel</span>
              <span className="w-1 h-1 rounded-full bg-border"></span>
              <span>{post.location}</span>
              <span className="w-1 h-1 rounded-full bg-border"></span>
              <span>{post.month}</span>
            </div>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2, duration: 0.8 }} className="relative">
          <div className="flex justify-center mb-16 opacity-30 text-accent-warm">
            <svg width="40" height="12" viewBox="0 0 40 12" fill="none">
              <path d="M20 1L24.5 5.5L20 10L15.5 5.5L20 1Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M4 5.5H12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M28 5.5H36" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div className="space-y-8 text-foreground/90 text-lg leading-[1.9]">
            {post.body.map((paragraph, i) => (
              <p key={i} className={i === 0 ? "drop-cap" : ""}>{paragraph}</p>
            ))}
          </div>
          <div className="flex justify-center mt-20 opacity-30 text-accent-warm">
            <svg width="40" height="12" viewBox="0 0 40 12" fill="none">
              <path d="M20 1L24.5 5.5L20 10L15.5 5.5L20 1Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M4 5.5H12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M28 5.5H36" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          {post.faqs && post.faqs.length > 0 && (
            <div className="mt-20 space-y-0 border-t border-foreground/10 pt-16">
              <h2 className="font-serif text-2xl text-foreground mb-10">Perguntas frequentes</h2>
              {post.faqs.map((item, i) => (
                <div key={i} className="border-b border-foreground/10 py-6 last:border-0">
                  <p className="font-serif text-lg text-foreground mb-3">{item.q}</p>
                  <p className="text-muted-foreground leading-relaxed text-sm">{item.a}</p>
                </div>
              ))}
            </div>
          )}
          <div className="mt-20 p-8 bg-secondary rounded-sm text-center">
            <p className="font-handwritten text-2xl text-foreground mb-4">Gostou de receber esta carta?</p>
            <p className="text-sm text-muted-foreground mb-6">Junte-se à correspondência e receba uma nova história na sua caixa de correio todo mês.</p>
            <Link href="/">
              <button className="px-6 py-3 border border-accent-warm text-accent-warm hover:bg-accent-warm hover:text-white transition-all font-medium text-sm">
                Quero acompanhar desde o início
              </button>
            </Link>
          </div>
        </motion.div>
      </div>
    </article>
  );
}
