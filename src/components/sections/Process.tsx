"use client";

import { motion } from "framer-motion";
import clsx from "clsx";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { process } from "@/lib/data";

export function Process() {
  return (
    <section id="process" className="bg-surface py-24 sm:py-32">
      <Container className="flex flex-col gap-16">
        <SectionHeading
          eyebrow="Treatment Process"
          title="A calm, five-step path to your new smile."
          description="No guesswork, no surprises — just a clear, guided process from first hello to long-term maintenance."
        />

        <div className="relative">
          {/* vertical line */}
          <div className="absolute left-6 top-0 h-full w-px bg-line lg:left-1/2" />

          <div className="flex flex-col gap-10 lg:gap-2">
            {process.map((item, i) => {
              const isEven = i % 2 === 0;
              return (
                <div
                  key={item.step}
                  className="relative grid grid-cols-1 lg:grid-cols-2 lg:gap-16 lg:py-6"
                >
                  {/* dot */}
                  <span className="absolute left-6 top-8 z-10 h-4 w-4 -translate-x-1/2 rounded-full border-4 border-surface bg-secondary-500 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2" />

                  <div
                    className={clsx(
                      "pl-14 lg:pl-0",
                      isEven
                        ? "lg:col-start-1 lg:flex lg:justify-end lg:pr-16"
                        : "lg:col-start-2 lg:pl-16"
                    )}
                  >
                    <Reveal
                      direction={isEven ? "left" : "right"}
                      className="max-w-md"
                    >
                      <ProcessCard item={item} align={isEven ? "right" : "left"} />
                    </Reveal>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}

function ProcessCard({
  item,
  align,
}: {
  item: (typeof process)[number];
  align: "left" | "right";
}) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className={clsx(
        "flex flex-col gap-2 rounded-2xl border border-line bg-white p-6 shadow-sm",
        align === "right" && "lg:text-right"
      )}
    >
      <span className="font-display text-sm text-secondary-500">{item.step}</span>
      <h3 className="font-display text-xl text-primary-950">{item.title}</h3>
      <p className="text-sm leading-relaxed text-ink-600">{item.description}</p>
    </motion.div>
  );
}
