"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/lib/data";
import { servicePreviews } from "@/lib/images";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";

export function Services() {
  const [hovered, setHovered] = useState<string | null>(null);
  const listRef = useRef<HTMLDivElement>(null);

  // Превʼю, що пливе за курсором уздовж списку
  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const previewX = useSpring(px, { stiffness: 120, damping: 22 });
  const previewY = useSpring(py, { stiffness: 120, damping: 22 });

  function onMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = listRef.current?.getBoundingClientRect();
    if (!rect) return;
    px.set(e.clientX - rect.left - 140);
    py.set(e.clientY - rect.top - 100);
  }

  return (
    <section id="services" className="relative bg-mist-100 py-24 lg:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(45% 38% at 88% 6%, rgba(41,193,207,0.10), transparent 70%)",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionIntro
          index="02"
          eyebrow="Послуги"
          title="Усе для здорової посмішки — під одним дахом"
          description="Від планової гігієни до повної реконструкції посмішки. Ціни — орієнтовні: точну вартість ви знатимете після діагностики, до початку лікування."
        />

        <div
          ref={listRef}
          onMouseMove={onMouseMove}
          onMouseLeave={() => setHovered(null)}
          className="relative mt-16"
        >
          {/* Плаваюче фото-превʼю (лише desktop) */}
          <AnimatePresence>
            {hovered ? (
              <motion.div
                key={hovered}
                initial={{ opacity: 0, scale: 0.85, rotate: -4 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                exit={{ opacity: 0, scale: 0.9, rotate: 3 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                style={{ x: previewX, y: previewY }}
                className="pointer-events-none absolute left-0 top-0 z-20 hidden h-[200px] w-[280px] overflow-hidden rounded-2xl shadow-[0_30px_60px_-30px_rgba(11,35,71,0.6)] lg:block"
                aria-hidden
              >
                <Image
                  src={servicePreviews[hovered].src}
                  alt=""
                  fill
                  sizes="280px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-deep-900/10" />
              </motion.div>
            ) : null}
          </AnimatePresence>

          <RevealGroup stagger={0.06}>
            {services.map((service) => (
              <RevealItem key={service.key}>
                <Link
                  href="#appointment"
                  onMouseEnter={() => setHovered(service.key)}
                  onFocus={() => setHovered(service.key)}
                  onBlur={() => setHovered(null)}
                  className="group relative grid grid-cols-[auto_1fr_auto] items-center gap-x-5 gap-y-2 border-t border-mist-300 py-7 transition-colors duration-300 last:border-b sm:gap-x-8 lg:grid-cols-[3.5rem_1fr_minmax(0,20rem)_auto_3rem] lg:py-8"
                >
                  {/* Підсвітка рядка */}
                  <span
                    aria-hidden
                    className="absolute -inset-x-4 inset-y-1 -z-10 scale-[0.98] rounded-2xl bg-white opacity-0 shadow-[0_20px_44px_-28px_rgba(11,35,71,0.35)] transition-all duration-300 group-hover:scale-100 group-hover:opacity-100"
                  />
                  <span className="font-display text-sm text-mist-400 transition-colors duration-300 group-hover:text-cyan-500">
                    {service.index}
                  </span>
                  <h3 className="font-display text-xl font-medium tracking-tight text-ink-900 transition-all duration-300 group-hover:translate-x-1.5 group-hover:text-deep-700 sm:text-2xl lg:text-[1.75rem]">
                    {service.title}
                  </h3>
                  <p className="col-start-2 max-w-md text-sm leading-relaxed text-ink-500 lg:col-start-auto">
                    {service.description}
                  </p>
                  <span className="col-start-2 w-fit rounded-full border border-mist-300 bg-white px-4 py-1.5 text-xs font-semibold text-deep-700 transition-colors duration-300 group-hover:border-cyan-400 group-hover:bg-cyan-200/40 lg:col-start-auto">
                    {service.price}
                  </span>
                  <span className="col-start-3 row-start-1 grid size-11 place-items-center justify-self-end rounded-full border border-mist-300 text-ink-700 transition-all duration-300 group-hover:rotate-45 group-hover:border-deep-700 group-hover:bg-deep-800 group-hover:text-cyan-300 lg:col-start-auto lg:row-start-auto">
                    <ArrowUpRight className="size-4.5" aria-hidden />
                  </span>
                </Link>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </div>
    </section>
  );
}
