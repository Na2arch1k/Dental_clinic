"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  CalendarCheck,
  Check,
  Clock,
  Loader2,
  MapPin,
  Phone,
} from "lucide-react";
import { useContent } from "@/lib/i18n";
import { EASE } from "@/lib/motion";
import { Reveal } from "@/components/ui/Reveal";

type FormState = "idle" | "sending" | "sent";

const inputClass =
  "w-full rounded-xl border border-white/15 bg-white/[0.06] px-5 py-3.5 text-white placeholder:text-mist-400 backdrop-blur transition-all duration-300 focus:border-cyan-300/70 focus:bg-white/[0.09] focus:outline-none";

export function Appointment() {
  const { appointment, brand } = useContent();
  const [state, setState] = useState<FormState>("idle");

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (state !== "idle") return;
    setState("sending");
    // Імітація відправлення — підключіть сюди свій API або CRM
    setTimeout(() => setState("sent"), 1200);
  }

  return (
    <section id="appointment" className="relative px-5 pb-24 pt-4 sm:px-8 lg:pb-32">
      <Reveal className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-[2rem] bg-deep-950 text-white sm:rounded-[2.5rem]">
          {/* Сяйва та шум */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(55% 55% at 85% 10%, rgba(41,193,207,0.2), transparent 70%), radial-gradient(45% 45% at 5% 95%, rgba(23,74,130,0.45), transparent 70%)",
            }}
          />
          <div aria-hidden className="noise pointer-events-none absolute inset-0 opacity-[0.05]" />

          <div className="relative grid gap-14 p-8 sm:p-12 lg:grid-cols-12 lg:p-16">
            {/* Інформація */}
            <div className="flex flex-col lg:col-span-5">
              <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300">
                <span className="font-display">08</span>
                <span aria-hidden className="h-px w-10 bg-cyan-300/60" />
                {appointment.eyebrow}
              </p>
              <h2 className="font-display mt-6 text-3xl font-medium leading-[1.12] tracking-tight sm:text-4xl lg:text-5xl">
                {appointment.title}
              </h2>
              <p className="mt-6 max-w-md leading-relaxed text-mist-300">
                {appointment.text}
              </p>

              <div className="mt-10 flex flex-col gap-5">
                <a
                  href={brand.phoneHref}
                  className="group flex items-center gap-4 transition-colors hover:text-cyan-300"
                >
                  <span className="grid size-12 place-items-center rounded-full border border-white/15 transition-colors duration-300 group-hover:border-cyan-300/60">
                    <Phone className="size-4.5" aria-hidden />
                  </span>
                  <span>
                    <span className="block text-lg font-semibold">{brand.phone}</span>
                    <span className="text-sm text-mist-400">{brand.mobile}</span>
                  </span>
                </a>
                <a
                  href={brand.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 transition-colors hover:text-cyan-300"
                >
                  <span className="grid size-12 place-items-center rounded-full border border-white/15 transition-colors duration-300 group-hover:border-cyan-300/60">
                    <MapPin className="size-4.5" aria-hidden />
                  </span>
                  <span>
                    <span className="block font-semibold">
                      {brand.address}, {brand.city}
                    </span>
                    <span className="text-sm text-mist-400">{brand.addressNote}</span>
                  </span>
                </a>
                <div className="flex items-center gap-4">
                  <span className="grid size-12 place-items-center rounded-full border border-white/15">
                    <Clock className="size-4.5" aria-hidden />
                  </span>
                  <span>
                    <span className="block font-semibold">{appointment.hoursWeekday}</span>
                    <span className="text-sm text-mist-400">{appointment.hoursWeekend}</span>
                  </span>
                </div>
              </div>
            </div>

            {/* Форма */}
            <div className="lg:col-span-7 lg:pl-6">
              <AnimatePresence mode="wait">
                {state === "sent" ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.94 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, ease: EASE }}
                    className="flex h-full min-h-80 flex-col items-center justify-center rounded-3xl border border-cyan-300/30 bg-white/[0.05] p-10 text-center backdrop-blur"
                  >
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 260, damping: 16, delay: 0.15 }}
                      className="grid size-16 place-items-center rounded-full bg-cyan-400 text-deep-950"
                    >
                      <Check className="size-7" strokeWidth={3} aria-hidden />
                    </motion.span>
                    <h3 className="font-display mt-7 text-2xl font-medium">
                      {appointment.success.title}
                    </h3>
                    <p className="mt-3 max-w-sm text-mist-300">
                      {appointment.success.text}
                    </p>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={onSubmit}
                    exit={{ opacity: 0, y: -16 }}
                    transition={{ duration: 0.4, ease: EASE }}
                    className="grid gap-4 sm:grid-cols-2"
                  >
                    <div className="sm:col-span-1">
                      <label htmlFor="ap-name" className="sr-only">
                        {appointment.form.nameLabel}
                      </label>
                      <input
                        id="ap-name"
                        name="name"
                        type="text"
                        required
                        autoComplete="name"
                        placeholder={appointment.form.namePlaceholder}
                        className={inputClass}
                      />
                    </div>
                    <div className="sm:col-span-1">
                      <label htmlFor="ap-phone" className="sr-only">
                        {appointment.form.phoneLabel}
                      </label>
                      <input
                        id="ap-phone"
                        name="phone"
                        type="tel"
                        required
                        autoComplete="tel"
                        placeholder={appointment.form.phonePlaceholder}
                        pattern="[+0-9()\-\s]{10,20}"
                        className={inputClass}
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <label htmlFor="ap-service" className="sr-only">
                        {appointment.form.serviceLabel}
                      </label>
                      <select
                        id="ap-service"
                        name="service"
                        defaultValue=""
                        required
                        className={`${inputClass} appearance-none bg-[url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' stroke='%239db1c3' stroke-width='2'%3E%3Cpath d='m4 6 4 4 4-4'/%3E%3C/svg%3E")] bg-[position:right_1.25rem_center] bg-no-repeat pr-12 [&>option]:text-ink-900`}
                      >
                        <option value="" disabled>
                          {appointment.form.servicePlaceholder}
                        </option>
                        {appointment.serviceOptions.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="sm:col-span-2">
                      <label htmlFor="ap-comment" className="sr-only">
                        {appointment.form.commentLabel}
                      </label>
                      <textarea
                        id="ap-comment"
                        name="comment"
                        rows={3}
                        placeholder={appointment.form.commentPlaceholder}
                        className={`${inputClass} resize-none`}
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <button
                        type="submit"
                        disabled={state === "sending"}
                        className="group relative inline-flex w-full items-center justify-center gap-3 overflow-hidden rounded-full bg-cyan-400 px-8 py-4 text-sm font-bold uppercase tracking-[0.14em] text-deep-950 transition-all duration-300 hover:bg-cyan-300 hover:shadow-[0_16px_40px_-12px_rgba(85,219,228,0.5)] disabled:cursor-wait disabled:opacity-80 sm:w-auto"
                      >
                        <span
                          aria-hidden
                          className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 group-hover:translate-x-full"
                        />
                        {state === "sending" ? (
                          <Loader2 className="size-4.5 animate-spin" aria-hidden />
                        ) : (
                          <CalendarCheck className="size-4.5" aria-hidden />
                        )}
                        {state === "sending"
                          ? appointment.form.submitSending
                          : appointment.form.submitIdle}
                      </button>
                      <p className="mt-4 text-xs leading-relaxed text-mist-400">
                        {appointment.form.disclaimer}
                      </p>
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
