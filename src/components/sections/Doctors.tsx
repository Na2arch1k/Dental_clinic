"use client";

import { motion } from "framer-motion";
import { Award } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { doctors } from "@/lib/data";

const tones = ["primary", "secondary", "accent", "ink"] as const;

export function Doctors() {
  return (
    <section id="doctors" className="bg-white py-24 sm:py-32">
      <Container className="flex flex-col gap-16">
        <SectionHeading
          eyebrow="Meet the Doctors"
          title="Specialists, not generalists."
          description="Every member of our clinical team practices within a single discipline — so your care is always led by deep, focused expertise."
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {doctors.map((doctor, i) => (
            <Reveal key={doctor.name} delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="group flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-white shadow-sm transition-shadow duration-300 hover:shadow-xl hover:shadow-primary-900/10"
              >
                <div
                  className={`relative flex aspect-[4/5] items-center justify-center overflow-hidden bg-gradient-to-br ${
                    {
                      primary: "from-primary-800 via-primary-700 to-secondary-500",
                      secondary: "from-secondary-500 via-secondary-400 to-accent-400",
                      accent: "from-accent-500 via-secondary-400 to-primary-700",
                      ink: "from-primary-950 via-primary-800 to-secondary-600",
                    }[tones[i % tones.length]]
                  }`}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-white/10" />
                  <span className="font-display relative z-10 text-5xl text-white/90 transition-transform duration-500 group-hover:scale-110">
                    {doctor.initials}
                  </span>
                  <div className="absolute right-4 top-4 flex gap-2">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15 text-[10px] font-semibold text-white backdrop-blur-sm">
                      IG
                    </span>
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15 text-[10px] font-semibold text-white backdrop-blur-sm">
                      IN
                    </span>
                  </div>
                </div>
                <div className="flex flex-1 flex-col gap-3 p-6">
                  <div>
                    <h3 className="font-display text-lg text-primary-950">
                      {doctor.name}
                    </h3>
                    <p className="text-sm font-medium text-secondary-500">
                      {doctor.role}
                    </p>
                  </div>
                  <p className="text-sm leading-relaxed text-ink-600">
                    {doctor.specialization}
                  </p>
                  <div className="mt-auto flex items-center gap-2 border-t border-line pt-4 text-xs font-medium text-ink-400">
                    <Award className="h-3.5 w-3.5 text-accent-500" />
                    {doctor.experience}
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
