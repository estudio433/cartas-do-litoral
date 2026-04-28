import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Cartas do Litoral",
    template: "%s | Cartas do Litoral",
  },
  description:
    "Uma carta por mês da costa de Santa Catarina. Escrita por Mel, que deixou tudo aos 37 e foi para o litoral descobrir se ainda existia.",
  openGraph: {
    title: "Cartas do Litoral",
    description:
      "Uma carta por mês da costa de Santa Catarina. Escrita por Mel, que deixou tudo aos 37 e foi para o litoral descobrir se ainda existia.",
    url: "https://www.cartasdolitoral.com.br",
    siteName: "Cartas do Litoral",
    images: [
      {
        url: "/images/Mel_Pousada_Morning_Envelope_Watercolor_01.png",
        width: 1200,
        height: 630,
        alt: "Cartas do Litoral — carta de Mel da costa de Santa Catarina",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cartas do Litoral",
    description: "Uma carta por mês da costa de Santa Catarina.",
    images: ["/images/Mel_Pousada_Morning_Envelope_Watercolor_01.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Caveat:wght@400;500;600&family=Lora:ital,wght@0,400;0,500;1,400&family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400;1,500&display=swap"
          rel="stylesheet"
        />
        <link href="https://fonts.googleapis.com/css2?family=Caveat:wght@400;600&display=swap" rel="stylesheet" />
      </head>
      <body className="flex flex-col min-h-dvh">
        {children}
      </body>
    </html>
  );
}
