"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Check } from "lucide-react";
import { useContent } from "@/lib/i18n";
import { img } from "@/lib/images";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";

export function About() {
  const { about } = useContent();
  const collageRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: collageRef,
    offset: ["start end", "end start"],
  });
  const smallImageY = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const circleRotate = useTransform(scrollYProgress, [0, 1], [0, 90]);

  return (
    <section id="clinic" className="relative overflow-hidden py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-16 px-5 sm:px-8 lg:grid-cols-12 lg:gap-10">
        {/* Текстова колонка */}
        <div className="flex flex-col justify-center lg:col-span-5">
          <Reveal>
            <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.28em] text-deep-600">
              <span className="font-display">01</span>
              <span aria-hidden className="h-px w-10 bg-deep-600/40" />
              {about.eyebrow}
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="font-display mt-6 text-3xl font-medium leading-[1.12] tracking-tight text-ink-900 sm:text-4xl lg:text-5xl">
              {about.title}
            </h2>
          </Reveal>
          <RevealGroup className="mt-8 flex flex-col gap-5">
            {about.paragraphs.map((p) => (
              <RevealItem key={p.slice(0, 24)}>
                <p className="leading-relaxed text-ink-500">{p}</p>
              </RevealItem>
            ))}
          </RevealGroup>
          <RevealGroup className="mt-9 flex flex-col gap-3.5" stagger={0.12}>
            {about.points.map((point) => (
              <RevealItem key={point} className="flex items-center gap-3.5">
                <span className="grid size-7 shrink-0 place-items-center rounded-full bg-cyan-200 text-deep-800">
                  <Check className="size-3.5" strokeWidth={3} aria-hidden />
                </span>
                <p className="font-medium text-ink-700">{point}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>

        {/* Колаж із паралаксом */}
        <div ref={collageRef} className="relative lg:col-span-7 lg:pl-10">
          <motion.div
            aria-hidden
            style={{ rotate: circleRotate }}
            className="absolute -left-6 top-10 hidden size-44 rounded-full border border-dashed border-deep-600/25 lg:block"
          />
          <Reveal className="relative z-10 ml-auto w-[88%]">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[1.75rem] shadow-[0_36px_72px_-40px_rgba(11,35,71,0.5)]">
              <Image
                src={img.clinicRoom.src}
                alt={about.roomAlt}
                fill
                sizes="(max-width: 1024px) 90vw, 50vw"
                className="object-cover transition-transform duration-700 ease-out hover:scale-105"
              />
            </div>
          </Reveal>
          <motion.div
            style={{ y: smallImageY }}
            className="relative z-20 -mt-20 w-[52%] sm:-mt-28"
          >
            <Reveal delay={0.15}>
              <div className="relative aspect-[3/4] overflow-hidden rounded-[1.5rem] border-[6px] border-background shadow-[0_28px_56px_-32px_rgba(11,35,71,0.55)]">
                <Image
                  src={img.clinicDetail.src}
                  alt={about.detailAlt}
                  fill
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
          </motion.div>
          <Reveal
            delay={0.25}
            className="absolute bottom-6 right-0 z-30 hidden max-w-[240px] rounded-2xl border border-white/70 bg-white/85 p-5 shadow-[0_24px_48px_-28px_rgba(11,35,71,0.45)] backdrop-blur-xl sm:block"
          >
            <p className="font-display text-3xl font-semibold text-deep-800">
              {about.milestoneYear}
            </p>
            <p className="mt-1 text-sm leading-snug text-ink-500">
              {about.milestoneCaption}
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
