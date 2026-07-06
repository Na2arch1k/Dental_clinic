"use client";

import { useState } from "react";
import Link from "next/link";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import { Menu, Phone, X } from "lucide-react";
import { clsx } from "clsx";
import { brand, nav } from "@/lib/data";
import { EASE } from "@/lib/motion";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const prev = scrollY.getPrevious() ?? 0;
    setScrolled(latest > 32);
    setHidden(latest > 160 && latest > prev && !open);
  });

  return (
    <>
      <motion.header
        className="fixed inset-x-0 top-0 z-50"
        animate={{ y: hidden ? "-100%" : "0%" }}
        transition={{ duration: 0.45, ease: EASE }}
      >
        <div
          className={clsx(
            "mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 transition-all duration-500 sm:px-8",
            scrolled ? "py-3" : "py-5",
          )}
        >
          {/* Скляна підкладка зʼявляється після скролу */}
          <div
            aria-hidden
            className={clsx(
              "absolute inset-x-3 top-2 -z-10 rounded-2xl border transition-all duration-500 sm:inset-x-5",
              scrolled
                ? "border-white/60 bg-white/75 shadow-[0_16px_40px_-20px_rgba(11,35,71,0.35)] backdrop-blur-xl"
                : "border-transparent bg-transparent",
            )}
            style={{ bottom: "0.35rem" }}
          />

          <Link
            href="#top"
            className="font-display text-lg font-semibold tracking-[0.18em] text-deep-900"
            aria-label={brand.fullName}
          >
            {brand.wordmark}
            <span className="text-cyan-500">.</span>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Основна навігація">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group relative rounded-full px-3.5 py-2 text-sm font-medium text-ink-700 transition-colors hover:text-deep-900"
              >
                {item.label}
                <span
                  aria-hidden
                  className="absolute inset-x-3.5 bottom-1 h-px origin-left scale-x-0 bg-cyan-500 transition-transform duration-300 ease-out group-hover:scale-x-100"
                />
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={brand.phoneHref}
              className="hidden items-center gap-2 text-sm font-semibold text-deep-900 transition-colors hover:text-deep-600 md:flex"
            >
              <Phone className="size-4 text-cyan-500" aria-hidden />
              {brand.phone}
            </a>
            <Link
              href="#appointment"
              className="hidden rounded-full bg-deep-800 px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-deep-700 hover:shadow-[0_10px_28px_-10px_rgba(41,193,207,0.5)] sm:inline-flex"
            >
              Записатися
            </Link>
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="grid size-11 place-items-center rounded-full border border-mist-300 bg-white/70 text-deep-900 backdrop-blur transition-colors hover:border-deep-600/40 lg:hidden"
              aria-label="Відкрити меню"
            >
              <Menu className="size-5" aria-hidden />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Повноекранне мобільне меню */}
      <AnimatePresence>
        {open ? (
          <motion.div
            className="fixed inset-0 z-[60] flex flex-col bg-deep-950 text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: EASE }}
          >
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 opacity-60"
              style={{
                background:
                  "radial-gradient(60% 50% at 80% 10%, rgba(41,193,207,0.25), transparent 70%)",
              }}
            />
            <div className="flex items-center justify-between px-5 py-5 sm:px-8">
              <span className="font-display text-lg font-semibold tracking-[0.18em]">
                {brand.wordmark}
                <span className="text-cyan-400">.</span>
              </span>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="grid size-11 place-items-center rounded-full border border-white/20 transition-colors hover:border-cyan-300/60"
                aria-label="Закрити меню"
              >
                <X className="size-5" aria-hidden />
              </button>
            </div>
            <motion.nav
              className="flex flex-1 flex-col justify-center gap-1 px-8"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } },
              }}
              aria-label="Мобільна навігація"
            >
              {nav.map((item) => (
                <motion.div
                  key={item.href}
                  variants={{
                    hidden: { opacity: 0, y: 28 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.6, ease: EASE },
                    },
                  }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="font-display block py-2.5 text-3xl font-medium text-white/90 transition-colors hover:text-cyan-300"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </motion.nav>
            <div className="flex flex-col gap-2 px-8 pb-10 text-sm text-mist-300">
              <a href={brand.phoneHref} className="font-semibold text-white">
                {brand.phone}
              </a>
              <p>
                {brand.address}, {brand.city}
              </p>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
