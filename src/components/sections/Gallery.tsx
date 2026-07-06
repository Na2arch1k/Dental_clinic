"use client";

import { motion } from "framer-motion";
import { Expand } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { AbstractVisual } from "@/components/ui/AbstractVisual";
import { galleryItems } from "@/lib/data";

const patterns = ["rings", "grid", "waves"] as const;

export function Gallery() {
  return (
    <section id="gallery" className="bg-surface py-24 sm:py-32">
      <Container className="flex flex-col gap-16">
        <SectionHeading
          eyebrow="Inside the Studio"
          title="A space designed to feel nothing like a clinic."
          description="Warm materials, soft light, and thoughtful acoustics — every room is designed to lower your heart rate the moment you walk in."
        />

        <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:grid-cols-4">
          {galleryItems.map((item, i) => (
            <Reveal
              key={item.title}
              delay={i * 0.06}
              direction="scale"
              className={i === 0 ? "col-span-2 row-span-2" : "col-span-1 row-span-1"}
            >
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="group relative h-full min-h-[140px] cursor-pointer overflow-hidden rounded-2xl"
              >
                <AbstractVisual
                  tone={item.tone as "primary" | "secondary" | "accent" | "ink"}
                  pattern={patterns[i % patterns.length]}
                  className="h-full w-full"
                />
                <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/50 via-black/0 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <p className="flex items-center gap-2 text-sm font-medium text-white">
                    <Expand className="h-3.5 w-3.5" />
                    {item.title}
                  </p>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
