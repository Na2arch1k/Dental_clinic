"use client";

import {
  ShieldCheck,
  ScanLine,
  HeartHandshake,
  ReceiptText,
  LucideIcon,
} from "lucide-react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { AbstractVisual } from "@/components/ui/AbstractVisual";
import { whyChooseUs } from "@/lib/data";

const icons: Record<string, LucideIcon> = {
  ShieldCheck,
  ScanLine,
  HeartHandshake,
  ReceiptText,
};

export function WhyChooseUs() {
  return (
    <section id="why-us" className="relative overflow-hidden bg-primary-950 py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-40">
        <div className="absolute -left-32 top-0 h-96 w-96 rounded-full bg-secondary-600/30 blur-3xl" />
        <div className="absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-accent-500/20 blur-3xl" />
      </div>

      <Container className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div className="flex flex-col gap-10">
          <SectionHeading
            eyebrow="Why Choose Meridian"
            title="Every detail engineered around trust."
            description="We built Meridian around the belief that clinical excellence and genuine hospitality shouldn't be a trade-off."
            align="left"
            light
          />

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {whyChooseUs.map((item, i) => {
              const Icon = icons[item.icon];
              return (
                <Reveal key={item.title} delay={i * 0.08} direction="up">
                  <motion.div
                    whileHover={{ y: -6 }}
                    className="flex h-full flex-col gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm transition-colors duration-300 hover:border-accent-400/40 hover:bg-white/[0.07]"
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-400/15 text-accent-300">
                      <Icon className="h-5 w-5" strokeWidth={1.75} />
                    </span>
                    <h3 className="font-display text-base text-white">{item.title}</h3>
                    <p className="text-sm leading-relaxed text-white/60">
                      {item.description}
                    </p>
                  </motion.div>
                </Reveal>
              );
            })}
          </div>
        </div>

        <Reveal direction="scale" className="relative">
          <div className="relative aspect-square w-full overflow-hidden rounded-[2.5rem] shadow-2xl shadow-black/40 sm:aspect-[4/3]">
            <AbstractVisual tone="secondary" pattern="grid" className="h-full w-full" />
          </div>
          <div className="absolute -bottom-8 left-1/2 w-[85%] -translate-x-1/2 rounded-2xl border border-white/10 bg-primary-900/90 p-6 shadow-2xl backdrop-blur-md">
            <div className="flex items-center justify-between text-white">
              <div>
                <p className="font-display text-2xl">4.9 / 5</p>
                <p className="text-xs text-white/50">Average patient rating</p>
              </div>
              <div className="h-10 w-px bg-white/10" />
              <div>
                <p className="font-display text-2xl">98%</p>
                <p className="text-xs text-white/50">Would recommend us</p>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
