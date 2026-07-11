"use client";

import Image from "next/image";
import {
  FlaskConical,
  Microscope,
  Scan,
  ScanFace,
  type LucideIcon,
} from "lucide-react";
import { useContent } from "@/lib/i18n";
import { img } from "@/lib/images";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";

const icons: Record<string, LucideIcon> = {
  Scan,
  Microscope,
  ScanFace,
  FlaskConical,
};

export function Technology() {
  const { technology } = useContent();
  return (
    <section
      id="technology"
      className="relative overflow-hidden bg-deep-950 py-24 text-white lg:py-32"
    >
      {/* Глибина: сяйва + шум */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(52% 44% at 82% 0%, rgba(41,193,207,0.16), transparent 70%), radial-gradient(46% 40% at 8% 90%, rgba(23,74,130,0.4), transparent 70%)",
        }}
      />
      <div aria-hidden className="noise pointer-events-none absolute inset-0 opacity-[0.05]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionIntro
          index="03"
          eyebrow={technology.eyebrow}
          title={technology.title}
          description={technology.description}
          dark
        />

        <div className="mt-16 grid gap-5 lg:grid-cols-12">
          {/* Велике фото */}
          <Reveal className="lg:col-span-7">
            <div className="group relative h-72 overflow-hidden rounded-[1.5rem] border border-white/10 sm:h-96">
              <Image
                src={img.techDigital.src}
                alt={technology.imageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 58vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-t from-deep-950/80 via-deep-950/10 to-transparent"
              />
              <p className="absolute bottom-6 left-6 max-w-xs text-lg font-semibold leading-snug">
                {technology.caption}
              </p>
            </div>
          </Reveal>

          {/* Акцентна цифра */}
          <Reveal delay={0.1} className="lg:col-span-5">
            <div className="relative flex h-full min-h-64 flex-col justify-between overflow-hidden rounded-[1.5rem] border border-cyan-400/25 bg-gradient-to-br from-deep-800 to-deep-900 p-8">
              <div
                aria-hidden
                className="pointer-events-none absolute -right-16 -top-16 size-56 rounded-full bg-cyan-400/15 blur-3xl"
              />
              <Microscope className="size-9 text-cyan-300" aria-hidden />
              <div>
                <p className="font-display text-6xl font-semibold tracking-tight text-cyan-300 sm:text-7xl">
                  {technology.highlight.value}
                </p>
                <p className="mt-3 max-w-[16rem] leading-snug text-mist-300">
                  {technology.highlight.label} — {technology.highlight.suffix}
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Особливості */}
        <RevealGroup className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-4" stagger={0.08}>
          {technology.features.map((feature) => {
            const Icon = icons[feature.icon];
            return (
              <RevealItem key={feature.title}>
                <div className="group h-full rounded-[1.25rem] border border-white/10 bg-white/[0.04] p-6 backdrop-blur transition-all duration-300 hover:-translate-y-1.5 hover:border-cyan-300/40 hover:bg-white/[0.07]">
                  <span className="grid size-11 place-items-center rounded-xl bg-deep-800 text-cyan-300 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                    <Icon className="size-5" aria-hidden />
                  </span>
                  <h3 className="mt-5 font-semibold">{feature.title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-mist-300">
                    {feature.text}
                  </p>
                </div>
              </RevealItem>
            );
          })}
        </RevealGroup>
      </div>
    </section>
  );
}
