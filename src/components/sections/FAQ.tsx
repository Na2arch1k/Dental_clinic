"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { useContent } from "@/lib/i18n";
import { EASE } from "@/lib/motion";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";

export function FAQ() {
  const { brand, faq } = useContent();
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-12">
        {/* Липка колонка */}
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-32">
            <Reveal>
              <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.28em] text-deep-600">
                <span className="font-display">07</span>
                <span aria-hidden className="h-px w-10 bg-deep-600/40" />
                {faq.eyebrow}
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="font-display mt-6 max-w-md text-3xl font-medium leading-[1.12] tracking-tight text-ink-900 sm:text-4xl lg:text-5xl">
                {faq.title}
              </h2>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-6 max-w-sm leading-relaxed text-ink-500">
                {faq.intro}
              </p>
            </Reveal>
            <Reveal delay={0.24}>
              <a
                href={brand.phoneHref}
                className="group mt-7 inline-flex items-center gap-2 font-display text-xl font-medium text-deep-800 transition-colors hover:text-deep-600"
              >
                {brand.phone}
                <span
                  aria-hidden
                  className="block h-px w-10 bg-cyan-500 transition-all duration-300 group-hover:w-16"
                />
              </a>
            </Reveal>
          </div>
        </div>

        {/* Акордеон */}
        <RevealGroup className="lg:col-span-7" stagger={0.06}>
          {faq.items.map((item, i) => {
            const isOpen = open === i;
            return (
              <RevealItem key={item.question}>
                <div
                  className={`border-t border-mist-300 transition-colors duration-300 last:border-b ${
                    isOpen ? "bg-white/70" : ""
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-6 px-2 py-6 text-left sm:px-4"
                  >
                    <span
                      className={`font-display text-lg font-medium tracking-tight transition-colors duration-300 sm:text-xl ${
                        isOpen ? "text-deep-700" : "text-ink-900"
                      }`}
                    >
                      {item.question}
                    </span>
                    <motion.span
                      animate={{ rotate: isOpen ? 135 : 0 }}
                      transition={{ duration: 0.4, ease: EASE }}
                      className={`grid size-10 shrink-0 place-items-center rounded-full border transition-colors duration-300 ${
                        isOpen
                          ? "border-deep-700 bg-deep-800 text-cyan-300"
                          : "border-mist-300 text-ink-700"
                      }`}
                    >
                      <Plus className="size-4.5" aria-hidden />
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen ? (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.45, ease: EASE }}
                        className="overflow-hidden"
                      >
                        <p className="max-w-2xl px-2 pb-7 leading-relaxed text-ink-500 sm:px-4">
                          {item.answer}
                        </p>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </div>
              </RevealItem>
            );
          })}
        </RevealGroup>
      </div>
    </section>
  );
}
