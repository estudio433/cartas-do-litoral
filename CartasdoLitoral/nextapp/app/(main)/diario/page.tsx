"use client";
import { posts } from "@/data/posts";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const postImages: Record<string, string> = {
  "florianopolis-no-inverno": "/images/Blog_Floripa_Inverno_01.jpg",
  "vale-a-pena-florianopolis-julho": "/images/Blog_Floripa_Julho_01.jpg",
  "renda-de-bilro-florianopolis": "/images/Blog_Floripa_Renda_de_Bilro_01.png",
};

export default function DiarioIndex() {
  return (
    <div className="pt-32 pb-32 px-6 flex-1 bg-background">
      <div className="max-w-7xl mx-auto">
        <header className="mb-20 text-center max-w-2xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-serif text-5xl mb-6"
          >
            Diário do Litoral
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground"
          >
            Anotações de viagem, crônicas sobre o tempo e os lugares que o mar abraça.
          </motion.p>
        </header>
        <div className="grid md:grid-cols-3 gap-x-8 gap-y-16">
          {posts.map((post, i) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 + 0.2, duration: 0.6 }}
              className="group"
            >
              <Link href={`/diario/${post.slug}`}>
                <div className="aspect-[4/5] bg-secondary mb-6 relative overflow-hidden">
                  {postImages[post.slug] && (
                    <img
                      src={postImages[post.slug]}
                      alt={post.title}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      style={{ filter: "saturate(0.9)" }}
                    />
                  )}
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-xs uppercase tracking-wider text-accent-warm font-semibold">
                    <span>{post.category}</span>
                    <span className="w-1 h-1 rounded-full bg-accent-warm/50"></span>
                    <span>{post.month}</span>
                  </div>
                  <h2 className="font-serif text-3xl group-hover:text-accent-warm transition-colors duration-300">
                    {post.title}
                  </h2>
                  <p className="text-muted-foreground/90 line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <span className="inline-flex items-center gap-2 text-sm pt-2 group-hover:text-accent-warm transition-colors">
                    Ler a crônica <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}
