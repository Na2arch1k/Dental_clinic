"use client";

import { useRef } from "react";
import Image from "next/image";
import {
  motion,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { Phone, ShieldCheck, Star } from "lucide-react";
import { useContent } from "@/lib/i18n";
import { img } from "@/lib/images";
import { EASE } from "@/lib/motion";
import { Button } from "@/components/ui/Button";
import { Counter } from "@/components/ui/Counter";
import { Marquee } from "@/components/ui/Marquee";

export function Hero() {
  const { brand, hero } = useContent();
  const sectionRef = useRef<HTMLElement>(null);

  // Паралакс фото при скролі
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "14%"]);
  const glowScale = useTransform(scrollYProgress, [0, 1], [1, 1.25]);

  // Сяйво, що слідує за курсором
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const glowX = useSpring(mx, { stiffness: 60, damping: 20 });
  const glowY = useSpring(my, { stiffness: 60, damping: 20 });

  function onMouseMove(e: React.MouseEvent<HTMLElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    mx.set(e.clientX - rect.left - 300);
    my.set(e.clientY - rect.top - 300);
  }

  return (
    <section
      id="top"
      ref={sectionRef}
      onMouseMove={onMouseMove}
      className="relative overflow-hidden pt-28 sm:pt-32"
    >
      {/* Живий фон: градієнти + шум + курсорне сяйво */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(50% 42% at 12% 8%, rgba(41,193,207,0.16), transparent 70%), radial-gradient(46% 40% at 92% 22%, rgba(23,74,130,0.14), transparent 70%), linear-gradient(180deg, #eef4f9 0%, #f3f7fa 55%, #eef4f9 100%)",
        }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -z-0 hidden size-[600px] rounded-full opacity-50 blur-3xl lg:block"
        style={{
          x: glowX,
          y: glowY,
          scale: glowScale,
          background:
            "radial-gradient(circle, rgba(85,219,228,0.22) 0%, rgba(31,98,166,0.10) 45%, transparent 70%)",
        }}
      />
      <div aria-hidden className="noise pointer-events-none absolute inset-0 opacity-[0.04]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-center gap-14 pb-16 lg:grid-cols-12 lg:gap-8 lg:pb-24">
          {/* Ліва колонка */}
          <div className="lg:col-span-7 xl:col-span-6">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: EASE, delay: 0.15 }}
              className="mb-8 inline-flex items-center gap-3 rounded-full border border-mist-300 bg-white/70 py-2 pl-3 pr-5 text-sm font-medium text-ink-700 backdrop-blur"
            >
              <span className="relative flex size-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-70" />
                <span className="relative inline-flex size-2.5 rounded-full bg-cyan-500" />
              </span>
              {hero.badgePrefix} — {brand.city}, {brand.address}
            </motion.p>

            <h1 className="font-display text-[2.6rem] font-semibold leading-[1.06] tracking-tight text-ink-900 sm:text-6xl xl:text-7xl">
              {hero.headlineLines.map((line, i) => (
                <span key={line} className="block overflow-hidden pb-[0.08em]">
                  <motion.span
                    className={
                      i === 2
                        ? "block bg-gradient-to-r from-deep-600 via-cyan-500 to-cyan-400 bg-clip-text text-transparent"
                        : "block"
                    }
                    initial={{ y: "110%" }}
                    animate={{ y: "0%" }}
                    transition={{ duration: 1, ease: EASE, delay: 0.25 + i * 0.12 }}
                  >
                    {line}
                  </motion.span>
                </span>
              ))}
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.9, ease: EASE, delay: 0.75 }}
              className="mt-7 max-w-lg text-lg leading-relaxed text-ink-500"
            >
              {hero.paragraph}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: EASE, delay: 0.9 }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <Button href="#appointment">{hero.ctaPrimary}</Button>
              <Button href={brand.phoneHref} variant="ghost" withArrow={false}>
                <span className="inline-flex items-center gap-2.5">
                  <Phone className="size-4 shrink-0 text-cyan-500" aria-hidden />
                  {brand.phone}
                </span>
              </Button>
            </motion.div>

            <motion.dl
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: EASE, delay: 1.05 }}
              className="mt-14 grid max-w-lg grid-cols-3 divide-x divide-mist-300"
            >
              {hero.stats.map((s) => (
                <div key={s.label} className="px-4 first:pl-0 last:pr-0">
                  <dt className="sr-only">{s.label}</dt>
                  <dd className="font-display text-2xl font-semibold text-deep-800 sm:text-3xl">
                    <Counter value={s.value} suffix={s.suffix} />
                  </dd>
                  <dd className="mt-1.5 text-xs leading-snug text-ink-500 sm:text-sm">
                    {s.label}
                  </dd>
                </div>
              ))}
            </motion.dl>
          </div>

          {/* Права колонка — фото з паралаксом і плаваючими картками */}
          <div className="relative lg:col-span-5 xl:col-span-6">
            <motion.div
              initial={{ clipPath: "inset(6% 6% 6% 6% round 2rem)", opacity: 0, scale: 1.04 }}
              animate={{ clipPath: "inset(0% 0% 0% 0% round 2rem)", opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: EASE, delay: 0.35 }}
              className="relative ml-auto aspect-[4/5] w-full max-w-[520px] overflow-hidden rounded-[2rem] shadow-[0_40px_80px_-40px_rgba(11,35,71,0.45)] lg:aspect-[5/6]"
            >
              <motion.div style={{ y: imageY }} className="absolute inset-0 scale-110">
                <Image
                  src={img.hero.src}
                  alt={hero.imageAlt}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover"
                />
              </motion.div>
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-t from-deep-950/35 via-transparent to-transparent"
              />
            </motion.div>

            {/* Скляна картка рейтингу */}
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: EASE, delay: 1.1 }}
              className="absolute -bottom-6 left-0 animate-float rounded-2xl border border-white/60 bg-white/80 p-5 shadow-[0_24px_48px_-24px_rgba(11,35,71,0.4)] backdrop-blur-xl sm:left-2"
            >
              <div className="flex items-center gap-1.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-4 fill-cyan-500 text-cyan-500" aria-hidden />
                ))}
              </div>
              <p className="font-display mt-2 text-2xl font-semibold text-deep-900">4,9</p>
              <p className="mt-0.5 text-xs text-ink-500">{hero.ratingText}</p>
            </motion.div>

            {/* Чіп гарантії */}
            <motion.div
              initial={{ opacity: 0, y: -24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: EASE, delay: 1.25 }}
              className="absolute -top-5 right-2 animate-float-late flex items-center gap-2.5 rounded-full border border-white/60 bg-white/80 py-2.5 pl-3 pr-5 shadow-[0_20px_40px_-24px_rgba(11,35,71,0.4)] backdrop-blur-xl sm:right-6"
            >
              <span className="grid size-8 place-items-center rounded-full bg-deep-800 text-cyan-300">
                <ShieldCheck className="size-4" aria-hidden />
              </span>
              <span className="text-sm font-semibold text-deep-900">
                {hero.guaranteeText}
              </span>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Стрічка послуг */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.3 }}
        className="relative border-y border-mist-300/70 bg-white/50 backdrop-blur"
      >
        <Marquee className="py-4">
          {hero.ticker.map((item) => (
            <span
              key={item}
              className="mx-6 flex items-center gap-6 text-sm font-semibold uppercase tracking-[0.22em] text-ink-700"
            >
              {item}
              <span aria-hidden className="size-1.5 rounded-full bg-cyan-500" />
            </span>
          ))}
        </Marquee>
      </motion.div>
    </section>
  );
}
