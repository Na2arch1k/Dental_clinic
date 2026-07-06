"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CalendarCheck } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function FloatingCTA() {
  const [pastHero, setPastHero] = useState(false);
  const [inContact, setInContact] = useState(false);

  useEffect(() => {
    function onScroll() {
      setPastHero(window.scrollY > 700);
    }
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const contact = document.getElementById("contact");
    if (!contact) return;
    const observer = new IntersectionObserver(
      ([entry]) => setInContact(entry.isIntersecting),
      { rootMargin: "0px 0px -40% 0px" }
    );
    observer.observe(contact);
    return () => observer.disconnect();
  }, []);

  const visible = pastHero && !inContact;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-6 right-6 z-40 lg:hidden"
        >
          <Button href="#contact" className="shadow-2xl shadow-primary-900/30">
            <CalendarCheck className="h-4 w-4" />
            Book Now
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
