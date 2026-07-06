import Link from "next/link";
import { ArrowUpRight, MapPin, Phone } from "lucide-react";
import { brand, nav } from "@/lib/data";
import { Reveal } from "@/components/ui/Reveal";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-deep-950 text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(55% 45% at 15% 0%, rgba(41,193,207,0.14), transparent 70%), radial-gradient(50% 40% at 90% 100%, rgba(23,74,130,0.35), transparent 70%)",
        }}
      />
      <div aria-hidden className="noise pointer-events-none absolute inset-0 opacity-[0.05]" />

      <div className="relative mx-auto max-w-7xl px-5 pt-20 sm:px-8">
        <div className="grid gap-12 pb-16 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <div className="flex flex-col gap-5">
              <p className="font-display text-2xl font-semibold tracking-[0.18em]">
                {brand.wordmark}
                <span className="text-cyan-400">.</span>
              </p>
              <p className="max-w-sm leading-relaxed text-mist-300">
                Камерна студія естетичної стоматології у центрі Києва. Чесні
                плани лікування, цифрова точність і результат, за який ми
                відповідаємо письмово.
              </p>
              <div className="flex gap-3">
                {[
                  { label: "Instagram", href: brand.instagram },
                  { label: "Facebook", href: brand.facebook },
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-1.5 rounded-full border border-white/15 px-5 py-2.5 text-sm font-medium transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-300/60 hover:text-cyan-300"
                  >
                    {social.label}
                    <ArrowUpRight
                      className="size-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      aria-hidden
                    />
                  </a>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal className="lg:col-span-3" delay={0.08}>
            <nav className="flex flex-col gap-3" aria-label="Навігація у футері">
              <p className="mb-1 text-xs font-semibold uppercase tracking-[0.28em] text-mist-400">
                Розділи
              </p>
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="w-fit text-mist-200 transition-colors hover:text-cyan-300"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </Reveal>

          <Reveal className="lg:col-span-4" delay={0.16}>
            <div className="flex flex-col gap-4">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-mist-400">
                Контакти
              </p>
              <a
                href={brand.phoneHref}
                className="flex items-center gap-3 text-lg font-semibold transition-colors hover:text-cyan-300"
              >
                <Phone className="size-4 text-cyan-400" aria-hidden />
                {brand.phone}
              </a>
              <a
                href={brand.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 text-mist-200 transition-colors hover:text-cyan-300"
              >
                <MapPin className="mt-1 size-4 shrink-0 text-cyan-400" aria-hidden />
                <span>
                  {brand.address}, {brand.city}
                  <br />
                  <span className="text-sm text-mist-400">{brand.addressNote}</span>
                </span>
              </a>
              <dl className="mt-2 flex flex-col gap-1.5 text-sm">
                {brand.hours.map((h) => (
                  <div key={h.day} className="flex justify-between border-b border-white/10 pb-1.5">
                    <dt className="text-mist-400">{h.day}</dt>
                    <dd className="text-mist-200">{h.time}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>
        </div>

        {/* Гігантський контурний вордмарк */}
        <div aria-hidden className="pointer-events-none select-none overflow-hidden">
          <p className="text-stroke-light font-display -mb-[0.22em] text-center text-[22vw] font-bold leading-none tracking-tight lg:text-[19rem]">
            {brand.wordmark}
          </p>
        </div>
      </div>

      <div className="relative border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-5 py-6 text-xs text-mist-400 sm:flex-row sm:px-8">
          <p>© 2026 {brand.fullName}. Медична ліцензія МОЗ України.</p>
          <p>Зроблено з точністю до мікрона.</p>
        </div>
      </div>
    </footer>
  );
}
