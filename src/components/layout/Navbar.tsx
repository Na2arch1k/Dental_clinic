"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, PhoneCall } from "lucide-react";
import clsx from "clsx";
import { nav, brand } from "@/lib/data";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 24);
    }
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header
      className={clsx(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "border-b border-line bg-white/80 backdrop-blur-lg shadow-[0_1px_0_0_rgba(11,30,51,0.04)]"
          : "border-b border-transparent bg-white/40 backdrop-blur-sm"
      )}
    >
      <Container className="flex h-20 items-center justify-between">
        <a href="#" className="flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary-900 font-display text-lg text-white">
            M
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-display text-lg tracking-wide text-primary-950">
              {brand.name}
            </span>
            <span className="text-[10px] font-medium uppercase tracking-[0.25em] text-ink-400">
              Dental Studio
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-ink-600 transition-colors hover:text-primary-800"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={`tel:${brand.phone}`}
            className="flex items-center gap-2 text-sm font-medium text-primary-900"
          >
            <PhoneCall className="h-4 w-4 text-secondary-500" />
            {brand.phone}
          </a>
          <Button href="#contact" className="!py-3 !px-6 text-sm">
            Book a Visit
          </Button>
        </div>

        <button
          className="flex h-10 w-10 items-center justify-center rounded-full border border-line lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </Container>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-line bg-white lg:hidden"
          >
            <Container className="flex flex-col gap-1 py-6">
              {nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-3 text-base font-medium text-ink-700 transition-colors hover:bg-surface hover:text-primary-800"
                >
                  {item.label}
                </a>
              ))}
              <div className="mt-3 flex flex-col gap-3 px-3">
                <a
                  href={`tel:${brand.phone}`}
                  className="flex items-center gap-2 text-sm font-medium text-primary-900"
                >
                  <PhoneCall className="h-4 w-4 text-secondary-500" />
                  {brand.phone}
                </a>
                <Button href="#contact" className="w-full justify-center">
                  Book a Visit
                </Button>
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
