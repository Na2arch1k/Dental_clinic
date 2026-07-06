import type { Metadata } from "next";
import { Manrope, Unbounded } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { brand } from "@/lib/data";

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
  title: `${brand.fullName} — ${brand.city}`,
  description:
    "Камерна студія естетичної стоматології в центрі Києва: цифрова діагностика, лікування під мікроскопом, вініри, імплантація. Чесні плани з фіксованою вартістю та гарантією до 5 років.",
  keywords: [
    "стоматологія Київ",
    "естетична стоматологія",
    "вініри",
    "імплантація",
    "елайнери",
    "відбілювання зубів",
    brand.fullName,
  ],
  openGraph: {
    title: `${brand.fullName} — посмішка, яку хочеться показувати`,
    description:
      "Цифрова діагностика, лікування під мікроскопом і чесні плани з фіксованою вартістю. Київ, вул. Володимирська, 49А.",
    type: "website",
    locale: "uk_UA",
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
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
