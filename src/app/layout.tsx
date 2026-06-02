import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";
import Link from "next/link";
import { LanguageProvider } from "@/contexts/LanguageContext";
import LanguageToggle from "@/components/LanguageToggle";

export const metadata: Metadata = {
  metadataBase: new URL("https://solat.themalaysianinfo.online"),
  title: {
    default: "Waktu Solat Malaysia — Prayer Times",
    template: "%s — Waktu Solat Malaysia",
  },
  description:
    "Accurate daily prayer times (waktu solat) for all major cities in Malaysia — Kuala Lumpur, Selangor, Penang, Johor Bahru, and more. Subuh, Zohor, Asar, Maghrib, Isyak times updated daily.",
  keywords: [
    "waktu solat malaysia",
    "prayer times malaysia",
    "solat KL",
    "subuh zohor asar maghrib isyak",
    "waktu sembahyang",
    "jadual solat",
  ],
  openGraph: {
    type: "website",
    locale: "ms_MY",
    siteName: "Waktu Solat Malaysia",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ms">
      <head>
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7019273666606982"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <LanguageProvider>
          {/* Navbar */}
          <nav className="sticky top-0 z-50 bg-indigo-950/80 backdrop-blur border-b border-white/10 shadow-sm">
            <div className="max-w-2xl mx-auto px-4 py-3 flex items-center justify-between">
              <Link href="/" className="flex items-center gap-2 font-bold text-white text-lg">
                <span className="text-2xl">🕌</span>
                <span>Waktu Solat MY</span>
              </Link>
              <div className="flex items-center gap-3 text-sm font-medium text-indigo-200">
                <Link href="/" className="hover:text-white transition-colors hidden sm:inline">Waktu Solat</Link>
                <Link href="/about" className="hover:text-white transition-colors hidden sm:inline">About</Link>
                <LanguageToggle />
              </div>
            </div>
          </nav>

          {/* Main content */}
          <main className="flex-1">
            {children}
          </main>

          {/* Footer */}
          <footer className="border-t border-white/10 bg-indigo-950/60 mt-10 py-6 text-center text-xs text-indigo-300 space-y-1">
            <p>Prayer times sourced from <a href="https://aladhan.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-amber-400">Al Adhan API</a> · JAKIM method</p>
            <div className="flex flex-wrap justify-center gap-3 mt-2">
              <Link href="/about" className="hover:text-white">About</Link>
              <span>·</span>
              <Link href="/privacy-policy" className="hover:text-white">Privacy Policy</Link>
              <span>·</span>
              <Link href="/terms" className="hover:text-white">Terms of Service</Link>
            </div>
            <p className="mt-2">© {new Date().getFullYear()} Waktu Solat Malaysia · For reference only — verify with JAKIM</p>
          </footer>

        {/* ── The Malaysian Info Hub Banner ── */}
        <a
          href="https://www.themalaysianinfo.online"
          target="_blank"
          rel="noopener noreferrer"
          style={{display:"flex",alignItems:"center",justifyContent:"center",gap:"6px",width:"100%",background:"rgba(100,0,0,0.28)",borderTop:"1px solid rgba(180,40,40,0.2)",padding:"10px 16px",fontSize:"11px",color:"rgba(255,255,255,0.42)",textDecoration:"none"}}
        >
          <span>&#x1F1F2;&#x1F1FE;</span>
          <strong style={{color:"rgba(240,110,110,0.85)",fontWeight:600,fontStyle:"normal"}}>The Malaysian Info</strong>
          <span>&middot;</span>
          <span>Terokai 27 alatan percuma lagi &#x2192;</span>
        </a>
        </LanguageProvider>
      </body>
    </html>
  );
}
