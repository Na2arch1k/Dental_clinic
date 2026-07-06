"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { testimonials } from "@/lib/data";

const tones = [
  "from-primary-800 to-secondary-500",
  "from-secondary-500 to-accent-400",
  "from-accent-500 to-primary-700",
  "from-primary-950 to-secondary-600",
];

export function Testimonials() {
  return (
    <section id="testimonials" className="bg-white py-24 sm:py-32">
      <Container className="flex flex-col gap-16">
        <SectionHeading
          eyebrow="Patient Testimonials"
          title="Stories from the studio chair."
          description="Real feedback from patients who trusted Meridian with their smiles."
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="flex h-full flex-col gap-5 rounded-3xl border border-line bg-white p-7 shadow-sm transition-shadow duration-300 hover:shadow-xl hover:shadow-primary-900/10"
              >
                <Quote className="h-6 w-6 text-secondary-300" strokeWidth={1.5} />
                <p className="flex-1 text-sm leading-relaxed text-ink-700">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex items-center gap-1 text-accent-500">
                  {Array.from({ length: t.rating }).map((_, idx) => (
                    <Star key={idx} className="h-3.5 w-3.5 fill-current" />
                  ))}
                </div>
                <div className="flex items-center gap-3 border-t border-line pt-5">
                  <span
                    className={`flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br text-xs font-semibold text-white ${tones[i % tones.length]}`}
                  >
                    {t.initials}
                  </span>
                  <div className="leading-tight">
                    <p className="text-sm font-semibold text-primary-950">{t.name}</p>
                    <p className="text-xs text-ink-400">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
