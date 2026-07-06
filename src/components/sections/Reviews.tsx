"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";
import { reviews } from "@/lib/data";
import { avatarPhotos } from "@/lib/images";
import { EASE } from "@/lib/motion";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { Reveal } from "@/components/ui/Reveal";
import { Magnetic } from "@/components/ui/Magnetic";

const AUTOPLAY_MS = 8000;

export function Reviews() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const total = reviews.items.length;

  const go = useCallback(
    (dir: 1 | -1) => setIndex((i) => (i + dir + total) % total),
    [total],
  );

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => go(1), AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [go, paused, index]);

  const current = reviews.items[index];

  return (
    <section id="reviews" className="relative overflow-hidden bg-white py-24 lg:py-32">
      {/* Декоративні лапки */}
      <span
        aria-hidden
        className="text-stroke-deep font-display pointer-events-none absolute -top-10 right-4 select-none text-[16rem] leading-none lg:text-[24rem]"
      >
        “
      </span>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionIntro
            index="06"
            eyebrow={reviews.eyebrow}
            title={reviews.title}
            className="flex-1"
          />
          <Reveal delay={0.15}>
            <div className="flex items-center gap-4 rounded-2xl border border-mist-200 bg-mist-50 px-6 py-4">
              <p className="font-display text-4xl font-semibold text-deep-800">
                {reviews.rating}
              </p>
              <div>
                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="size-3.5 fill-cyan-500 text-cyan-500" aria-hidden />
                  ))}
                </div>
                <p className="mt-1 max-w-[13rem] text-xs leading-snug text-ink-500">
                  {reviews.ratingNote}
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        <div
          className="mt-16 lg:mt-20"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-9">
              <AnimatePresence mode="wait">
                <motion.figure
                  key={index}
                  initial={{ opacity: 0, y: 32, filter: "blur(8px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -24, filter: "blur(6px)" }}
                  transition={{ duration: 0.55, ease: EASE }}
                >
                  <blockquote className="max-w-4xl text-2xl font-medium leading-[1.35] tracking-tight text-ink-900 sm:text-3xl lg:text-[2.1rem]">
                    «{current.quote}»
                  </blockquote>
                  <figcaption className="mt-9 flex items-center gap-4">
                    <span className="relative size-14 overflow-hidden rounded-full border-2 border-cyan-200">
                      <Image
                        src={avatarPhotos[index]}
                        alt={`Фото пацієнта: ${current.name}`}
                        fill
                        sizes="56px"
                        className="object-cover"
                      />
                    </span>
                    <span>
                      <span className="block font-semibold text-ink-900">{current.name}</span>
                      <span className="mt-0.5 block text-sm text-ink-500">
                        {current.treatment}
                      </span>
                    </span>
                  </figcaption>
                </motion.figure>
              </AnimatePresence>
            </div>

            {/* Керування */}
            <div className="flex items-end justify-between gap-6 lg:col-span-3 lg:flex-col lg:items-end">
              <p className="font-display text-sm tracking-[0.2em] text-mist-400">
                <span className="text-deep-800">0{index + 1}</span> — 0{total}
              </p>
              <div className="flex gap-3">
                <Magnetic>
                  <button
                    type="button"
                    onClick={() => go(-1)}
                    aria-label="Попередній відгук"
                    className="grid size-13 place-items-center rounded-full border border-mist-300 text-ink-700 transition-all duration-300 hover:border-deep-700 hover:bg-deep-800 hover:text-cyan-300"
                  >
                    <ArrowLeft className="size-5" aria-hidden />
                  </button>
                </Magnetic>
                <Magnetic>
                  <button
                    type="button"
                    onClick={() => go(1)}
                    aria-label="Наступний відгук"
                    className="grid size-13 place-items-center rounded-full border border-mist-300 text-ink-700 transition-all duration-300 hover:border-deep-700 hover:bg-deep-800 hover:text-cyan-300"
                  >
                    <ArrowRight className="size-5" aria-hidden />
                  </button>
                </Magnetic>
              </div>
            </div>
          </div>

          {/* Прогрес-смужки */}
          <div className="mt-12 flex gap-2.5" role="tablist" aria-label="Відгуки">
            {reviews.items.map((item, i) => (
              <button
                key={item.name}
                type="button"
                role="tab"
                aria-selected={i === index}
                aria-label={`Відгук ${i + 1}: ${item.name}`}
                onClick={() => setIndex(i)}
                className="group h-6 flex-1 max-w-24 cursor-pointer"
              >
                <span
                  className={`block h-[3px] w-full rounded-full transition-all duration-500 ${
                    i === index ? "bg-deep-800" : "bg-mist-200 group-hover:bg-mist-400"
                  }`}
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
