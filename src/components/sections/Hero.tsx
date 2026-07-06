"use client";

import { motion } from "framer-motion";
import { ArrowRight, CalendarCheck, PhoneCall, Siren, Sparkles, Star } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { AbstractVisual } from "@/components/ui/AbstractVisual";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { stats } from "@/lib/data";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white pt-16 pb-24 sm:pt-20 lg:pb-32">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-32 left-1/2 h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-secondary-200/40 blur-3xl" />
        <div className="absolute -right-40 top-40 h-96 w-96 rounded-full bg-accent-200/50 blur-3xl" />
      </div>

      <Container className="grid items-center gap-16 lg:grid-cols-2 lg:gap-12">
        <div className="flex flex-col items-start gap-8">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-2 rounded-full border border-secondary-200 bg-secondary-200/30 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-primary-700"
          >
            <Sparkles className="h-3.5 w-3.5 text-accent-500" />
            Boutique Dental Studio · Est. 2013
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-display max-w-xl text-5xl leading-[1.05] tracking-tight text-primary-950 sm:text-6xl"
          >
            Precision dentistry, delivered with quiet confidence.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-lg text-lg leading-relaxed text-ink-600"
          >
            Meridian Dental Studio blends specialist-led care, in-house 3D
            diagnostics, and an unhurried patient experience — designed for
            people who expect more from their dentist.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-4 sm:flex-row"
          >
            <Button href="#contact" variant="primary">
              <CalendarCheck className="h-4 w-4" />
              Book a Consultation
            </Button>
            <Button href="#services" variant="secondary">
              Explore Services
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="grid w-full grid-cols-2 gap-6 border-t border-line pt-8 sm:grid-cols-4"
          >
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col gap-1">
                <span className="font-display text-2xl text-primary-900 sm:text-3xl">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </span>
                <span className="text-xs leading-snug text-ink-400">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-[2.5rem] shadow-2xl shadow-primary-900/20">
            <AbstractVisual tone="primary" pattern="rings" className="h-full w-full">
              <div className="absolute inset-x-8 bottom-8 rounded-2xl bg-white/10 p-5 backdrop-blur-md">
                <div className="flex items-center gap-1 text-accent-300">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-current" />
                  ))}
                </div>
                <p className="mt-2 text-sm text-white/90">
                  &ldquo;The calmest, most precise dental experience I&rsquo;ve had.&rdquo;
                </p>
              </div>
            </AbstractVisual>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="absolute -left-6 top-10 hidden rounded-2xl border border-line bg-white/90 px-4 py-3 shadow-xl backdrop-blur-md sm:flex sm:items-center sm:gap-3"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-accent-200 text-primary-800">
              <Siren className="h-4 w-4" />
            </span>
            <div className="leading-tight">
              <p className="text-xs font-semibold text-primary-950">Emergency Care</p>
              <p className="text-[11px] text-ink-400">Same-day availability</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.75 }}
            className="absolute -right-4 bottom-14 hidden rounded-2xl border border-line bg-white/90 px-4 py-3 shadow-xl backdrop-blur-md sm:flex sm:items-center sm:gap-3"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-secondary-200 text-primary-800">
              <PhoneCall className="h-4 w-4" />
            </span>
            <div className="leading-tight">
              <p className="text-xs font-semibold text-primary-950">24/7 Consultation</p>
              <p className="text-[11px] text-ink-400">Always reachable</p>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
