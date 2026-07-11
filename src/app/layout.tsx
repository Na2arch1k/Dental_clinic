import type { Metadata } from "next";
import { Manrope, Unbounded } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ScrollToTop } from "@/components/ui/ScrollToTop";
import { LanguageProvider } from "@/lib/i18n";
import { uk } from "@/lib/content/uk";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

const unbounded = Unbounded({
  variable: "--font-unbounded",
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: uk.meta.title,
  description: uk.meta.description,
  keywords: [
    "стоматологія Київ",
    "естетична стоматологія",
    "вініри",
    "імплантація",
    "елайнери",
    "відбілювання зубів",
    uk.brand.fullName,
  ],
  openGraph: {
    title: uk.meta.ogTitle,
    description: uk.meta.ogDescription,
    type: "website",
    locale: uk.meta.ogLocale,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="uk"
      className={`${manrope.variable} ${unbounded.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-background text-foreground">
        <LanguageProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <ScrollToTop />
        </LanguageProvider>
      </body>
    </html>
  );
}
