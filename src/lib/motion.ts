import type { Variants } from "framer-motion";

/** Signature easing used across the whole site — snappy start, long soft settle. */
export const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 36, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.9, ease: EASE },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1.1, ease: EASE } },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.9, ease: EASE },
  },
};

export const clipUp: Variants = {
  hidden: { clipPath: "inset(100% 0% 0% 0%)", y: 24 },
  visible: {
    clipPath: "inset(0% 0% 0% 0%)",
    y: 0,
    transition: { duration: 1.1, ease: EASE },
  },
};

export const staggerChildren = (stagger = 0.08, delay = 0.1): Variants => ({
  hidden: {},
  visible: {
    transition: { staggerChildren: stagger, delayChildren: delay },
  },
});
