"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { useContent } from "@/lib/i18n";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";

export function Process() {
  const { process } = useContent();
  const listRef = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({
    target: listRef,
    offset: ["start 0.75", "end 0.55"],
  });
  const lineScale = useSpring(scrollYProgress, { stiffness: 90, damping: 24 });

  return (
    <section id="process" className="relative bg-mist-100 py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-12">
        {/* Липка колонка */}
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-32">
            <Reveal>
              <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.28em] text-deep-600">
                <span className="font-display">05</span>
                <span aria-hidden className="h-px w-10 bg-deep-600/40" />
                {process.eyebrow}
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="font-display mt-6 max-w-md text-3xl font-medium leading-[1.12] tracking-tight text-ink-900 sm:text-4xl lg:text-5xl">
                {process.title}
              </h2>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-6 max-w-sm leading-relaxed text-ink-500">
                {process.intro}
              </p>
            </Reveal>
            <Reveal delay={0.24} className="mt-9 hidden lg:block">
              <Button href="#appointment">{process.cta}</Button>
            </Reveal>
          </div>
        </div>

        {/* Таймлайн зі шкалою прогресу */}
        <div className="relative lg:col-span-7">
          <ol ref={listRef} className="relative flex flex-col gap-14 pl-12 sm:pl-16">
            {/* Трек і анімована лінія */}
            <span
              aria-hidden
              className="absolute bottom-4 left-[1.1875rem] top-4 w-px bg-mist-300 sm:left-[1.4375rem]"
            />
            <motion.span
              aria-hidden
              style={{ scaleY: lineScale }}
              className="absolute bottom-4 left-[1.1875rem] top-4 w-px origin-top bg-gradient-to-b from-cyan-400 to-deep-700 sm:left-[1.4375rem]"
            />
            {process.steps.map((step, i) => (
              <Reveal as="li" key={step.index} delay={i * 0.05} className="relative">
                <span
                  aria-hidden
                  className="absolute -left-12 top-1 grid size-10 place-items-center rounded-full border border-mist-300 bg-white font-display text-xs font-semibold text-deep-700 shadow-[0_8px_20px_-10px_rgba(11,35,71,0.35)] sm:-left-16 sm:size-12 sm:text-sm"
                >
                  {step.index}
                </span>
                <div className="group rounded-2xl border border-transparent bg-white/0 p-1 transition-all duration-300 hover:border-white hover:bg-white hover:p-6 hover:shadow-[0_24px_48px_-32px_rgba(11,35,71,0.4)]">
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="font-display text-xl font-medium tracking-tight text-ink-900 sm:text-2xl">
                      {step.title}
                    </h3>
                    <span className="rounded-full bg-cyan-200/60 px-3.5 py-1 text-xs font-semibold text-deep-800">
                      {step.duration}
                    </span>
                  </div>
                  <p className="mt-3 max-w-lg leading-relaxed text-ink-500">
                    {step.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </ol>
          <Reveal className="mt-12 lg:hidden">
            <Button href="#appointment">{process.cta}</Button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
