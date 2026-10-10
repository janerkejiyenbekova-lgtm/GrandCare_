import "./globals.css";
import type { Metadata, Viewport } from "next";
import { StoreProvider } from "@/lib/store";
import { LangProvider } from "@/lib/i18n";
import { Footer, Header } from "@/components/Chrome";
import { CursorGlow } from "@/components/ui";

export const metadata: Metadata = {
  title: "Mehr Qo'li — O'zbekiston bo'ylab yordam xaritasi",
  description: "Yolg'iz qariyalar, boshpanasizlar va kam ta'minlangan oilalarga birga yordam beramiz. Xarita, volontyorlar va jonli yangilanishlar.",
};
export const viewport: Viewport = { themeColor: "#e8f4ff", width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="uz" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&family=Sora:wght@600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body>
        <div className="bg" aria-hidden><i className="b1" /><i className="b2" /><i className="b3" /></div>
        <LangProvider>
        <StoreProvider>
          <CursorGlow />
          <Header />
          <main>{children}</main>
          <Footer />
        </StoreProvider>
        </LangProvider>
      </body>
    </html>
  );
}
