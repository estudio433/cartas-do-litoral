import { Link } from "wouter";
import { Instagram, Facebook, Youtube } from "lucide-react";

function TikTokIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.89a8.18 8.18 0 0 0 4.78 1.52V7a4.85 4.85 0 0 1-1.01-.31z"/>
    </svg>
  );
}

function SpotifyIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm4.586 14.424a.622.622 0 0 1-.857.207c-2.348-1.435-5.304-1.76-8.785-.964a.622.622 0 0 1-.277-1.215c3.809-.87 7.077-.496 9.712 1.115a.623.623 0 0 1 .207.857zm1.224-2.723a.78.78 0 0 1-1.072.257c-2.687-1.652-6.785-2.131-9.965-1.166a.78.78 0 0 1-.973-.519.781.781 0 0 1 .52-.972c3.632-1.102 8.147-.568 11.234 1.328a.78.78 0 0 1 .256 1.072zm.105-2.835C14.692 8.95 9.375 8.775 6.297 9.71a.937.937 0 1 1-.543-1.793c3.532-1.072 9.404-.865 13.115 1.338a.936.936 0 0 1-1.954.611z"/>
    </svg>
  );
}

function PinterestIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.236 2.636 7.855 6.356 9.312-.088-.791-.167-2.005.035-2.868.181-.78 1.172-4.97 1.172-4.97s-.299-.598-.299-1.482c0-1.388.806-2.428 1.808-2.428.852 0 1.265.64 1.265 1.408 0 .858-.546 2.14-.828 3.33-.236.995.499 1.806 1.476 1.806 1.772 0 3.137-1.868 3.137-4.564 0-2.387-1.715-4.057-4.163-4.057-2.837 0-4.498 2.128-4.498 4.328 0 .857.33 1.774.741 2.276a.3.3 0 0 1 .069.286c-.075.314-.245.995-.278 1.134-.044.183-.146.222-.337.134-1.249-.581-2.03-2.407-2.03-3.874 0-3.154 2.292-6.052 6.608-6.052 3.469 0 6.165 2.473 6.165 5.776 0 3.447-2.173 6.22-5.19 6.22-1.013 0-1.966-.527-2.292-1.148l-.623 2.378c-.226.869-.835 1.958-1.244 2.621.938.29 1.931.446 2.962.446 5.523 0 10-4.477 10-10S17.523 2 12 2z"/>
    </svg>
  );
}

const socials = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: TikTokIcon, href: "#", label: "TikTok" },
  { icon: SpotifyIcon, href: "#", label: "Spotify" },
  { icon: Youtube, href: "#", label: "YouTube" },
  { icon: PinterestIcon, href: "#", label: "Pinterest" },
];

export default function Footer() {
  return (
    <footer className="bg-[#1f3a44] py-16 mt-auto">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center">
        <h2 className="font-serif text-2xl text-white/90 mb-4">Cartas do Litoral</h2>
        <p className="text-white/50 mb-8 max-w-md">
          Uma experiência de correspondência física que percorre o litoral até a sua caixa de correio.
        </p>
        <div className="flex flex-wrap justify-center gap-6 text-sm text-white/60 mb-10">
          <Link href="/diario" className="hover:text-white transition-colors">Diário</Link>
          <Link href="/lugares" className="hover:text-white transition-colors">Lugares</Link>
          <Link href="/cartas" className="hover:text-white transition-colors">Assinar carta</Link>
        </div>

        {/* Social icons */}
        <div className="flex items-center gap-5 mb-12">
          {socials.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className="text-white/40 hover:text-white/90 transition-colors duration-300"
            >
              <Icon size={18} />
            </a>
          ))}
        </div>

        <p className="text-white/30 text-xs">
          © {new Date().getFullYear()} Cartas do Litoral. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
