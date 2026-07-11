"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { useContent } from "@/lib/i18n";
import { EASE } from "@/lib/motion";

/** Плаваюча кнопка внизу справа: зʼявляється після скролу, плавно повертає нагору. */
export function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  const content = useContent();

  useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY > 480);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <AnimatePresence>
      {visible ? (
        <motion.button
          type="button"
          onClick={scrollToTop}
          initial={{ opacity: 0, y: 16, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 16, scale: 0.8 }}
          transition={{ duration: 0.3, ease: EASE }}
          aria-label={content.scrollTop.aria}
          className="fixed bottom-6 right-5 z-40 grid size-12 place-items-center rounded-full border border-mist-300 bg-white/90 text-deep-900 shadow-[0_16px_36px_-16px_rgba(11,35,71,0.45)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-deep-600/40 hover:bg-white sm:bottom-8 sm:right-8"
        >
          <ArrowUp className="size-5" aria-hidden />
        </motion.button>
      ) : null}
    </AnimatePresence>
  );
}
