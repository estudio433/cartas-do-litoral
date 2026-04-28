import type { Metadata } from "next";
import { posts } from "@/data/posts";
import DiarioPostClient from "./DiarioPostClient";

const postImages: Record<string, string> = {
  "florianopolis-no-inverno": "/images/Blog_Floripa_Inverno_02.png",
  "vale-a-pena-florianopolis-julho": "/images/Blog_Floripa_Julho_01.jpg",
  "renda-de-bilro-florianopolis": "/images/Blog_Floripa_Renda_de_Bilro_01.png",
  "vento-sul-florianopolis": "/images/Blog_Floripa_Inverno_01.jpg",
  "mercado-publico-florianopolis": "/images/Blog_MercadoPublico_01.png",
  "costa-da-lagoa-florianopolis": "/images/Blog_Costa_Lagoa_01.png",
  "santo-antonio-de-lisboa-florianopolis": "/images/Blog_Santo_Antonio_01.png",
  "ribeirao-da-ilha-florianopolis": "/images/Blog_Ribeirao_01.png",
};

const FALLBACK_IMAGE = "/images/Mel_Pousada_Morning_Envelope_Watercolor_01.png";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);

  if (!post) return {};

  const description =
    post.excerpt.length > 155
      ? post.excerpt.slice(0, 152) + "..."
      : post.excerpt;

  const image = postImages[slug] ?? FALLBACK_IMAGE;

  return {
    title: post.title,
    description,
    openGraph: {
      title: post.title,
      description,
      images: [{ url: image, width: 1200, height: 630, alt: post.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description,
      images: [image],
    },
  };
}

export default function DiarioPostPage() {
  return <DiarioPostClient />;
}
