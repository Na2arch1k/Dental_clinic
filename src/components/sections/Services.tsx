"use client";

import {
  Stethoscope,
  Sparkles,
  PlusCircle,
  AlignCenter,
  Sun,
  Activity,
  Heart,
  Wand2,
  ArrowUpRight,
  LucideIcon,
} from "lucide-react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { services } from "@/lib/data";

const icons: Record<string, LucideIcon> = {
  Stethoscope,
  Sparkles,
  PlusCircle,
  AlignCenter,
  Sun,
  Activity,
  Heart,
  Wand2,
};

export function Services() {
  return (
    <section id="services" className="bg-surface py-24 sm:py-32">
      <Container className="flex flex-col gap-16">
        <SectionHeading
          eyebrow="Our Services"
          title="Every discipline, one specialist studio."
          description="From routine care to full smile design, each treatment is led by a specialist in that exact field — supported by in-house digital diagnostics."
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => {
            const Icon = icons[service.icon];
            return (
              <Reveal key={service.title} delay={(i % 4) * 0.08}>
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="group relative flex h-full flex-col gap-5 rounded-3xl border border-line bg-white p-7 shadow-sm transition-shadow duration-300 hover:shadow-xl hover:shadow-primary-900/10"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-900 text-white transition-transform duration-300 group-hover:scale-110 group-hover:bg-secondary-500">
                    <Icon className="h-5 w-5" strokeWidth={1.75} />
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="font-display text-lg text-primary-950">
                      {service.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-ink-600">
                      {service.description}
                    </p>
                  </div>
                  <span className="mt-auto flex items-center gap-1 text-sm font-medium text-primary-700 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    Learn more
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </motion.div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
