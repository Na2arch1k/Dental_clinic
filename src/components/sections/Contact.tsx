"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, PhoneCall, Mail, Clock, CheckCircle2, Send } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { brand } from "@/lib/data";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="contact" className="relative overflow-hidden bg-surface py-24 sm:py-32">
      <Container className="flex flex-col gap-16">
        <SectionHeading
          eyebrow="Get in Touch"
          title="Let's plan your visit."
          description="Tell us a little about what you're looking for and a patient coordinator will follow up within one business day."
        />

        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr]">
          <Reveal direction="left" className="flex flex-col gap-6">
            <div className="flex flex-col gap-5 rounded-3xl border border-line bg-white p-7 shadow-sm">
              <ContactRow icon={PhoneCall} label="Call us" value={brand.phone} href={`tel:${brand.phone}`} />
              <ContactRow icon={Mail} label="Email us" value={brand.email} href={`mailto:${brand.email}`} />
              <ContactRow icon={MapPin} label="Visit us" value={brand.address} />
            </div>

            <div className="flex flex-col gap-4 rounded-3xl border border-line bg-white p-7 shadow-sm">
              <div className="flex items-center gap-2 text-primary-950">
                <Clock className="h-4 w-4 text-secondary-500" />
                <h3 className="font-display text-base">Opening Hours</h3>
              </div>
              <ul className="flex flex-col gap-2 text-sm text-ink-600">
                {brand.hours.map((h) => (
                  <li key={h.day} className="flex items-center justify-between border-b border-line pb-2 last:border-0">
                    <span>{h.day}</span>
                    <span className="font-medium text-primary-900">{h.time}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-line">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary-200 via-surface-alt to-accent-200" />
              <div
                className="absolute inset-0 opacity-40"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, #ffffff80 1px, transparent 1px), linear-gradient(to bottom, #ffffff80 1px, transparent 1px)",
                  backgroundSize: "28px 28px",
                }}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-900 text-white shadow-xl">
                  <MapPin className="h-5 w-5" />
                </span>
              </div>
              <span className="absolute bottom-3 left-3 rounded-full bg-white/90 px-3 py-1 text-[11px] font-medium text-ink-600 backdrop-blur-sm">
                Map preview — embed on deployment
              </span>
            </div>
          </Reveal>

          <Reveal direction="right">
            <div className="relative h-full rounded-3xl border border-line bg-white p-8 shadow-sm sm:p-10">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex h-full min-h-[420px] flex-col items-center justify-center gap-4 text-center"
                >
                  <span className="flex h-16 w-16 items-center justify-center rounded-full bg-accent-200 text-primary-800">
                    <CheckCircle2 className="h-8 w-8" />
                  </span>
                  <h3 className="font-display text-2xl text-primary-950">
                    Request received
                  </h3>
                  <p className="max-w-sm text-sm text-ink-600">
                    Thank you — a patient coordinator will reach out within one
                    business day to confirm your appointment details.
                  </p>
                  <Button variant="secondary" onClick={() => setSubmitted(false)}>
                    Send another request
                  </Button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label="Full name" id="name" placeholder="Jane Cooper" required />
                    <Field label="Phone number" id="phone" placeholder="(415) 555-0134" type="tel" required />
                  </div>
                  <Field label="Email address" id="email" placeholder="jane@email.com" type="email" required />
                  <div>
                    <label htmlFor="service" className="mb-2 block text-sm font-medium text-primary-950">
                      Service of interest
                    </label>
                    <select
                      id="service"
                      className="w-full rounded-xl border border-line bg-white px-4 py-3 text-sm text-ink-700 outline-none transition-colors focus:border-secondary-400"
                      defaultValue=""
                    >
                      <option value="" disabled>
                        Select a service
                      </option>
                      <option>General Dentistry</option>
                      <option>Cosmetic Veneers</option>
                      <option>Implantology</option>
                      <option>Orthodontics</option>
                      <option>Full Smile Design</option>
                      <option>Something else</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="mb-2 block text-sm font-medium text-primary-950">
                      Tell us more
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      placeholder="Share any concerns, goals, or preferred appointment times..."
                      className="w-full resize-none rounded-xl border border-line bg-white px-4 py-3 text-sm text-ink-700 outline-none transition-colors focus:border-secondary-400"
                    />
                  </div>
                  <Button type="submit" className="mt-2 justify-center">
                    <Send className="h-4 w-4" />
                    Send Request
                  </Button>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

function Field({
  label,
  id,
  placeholder,
  type = "text",
  required = false,
}: {
  label: string;
  id: string;
  placeholder: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-medium text-primary-950">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        placeholder={placeholder}
        required={required}
        className="w-full rounded-xl border border-line bg-white px-4 py-3 text-sm text-ink-700 outline-none transition-colors focus:border-secondary-400"
      />
    </div>
  );
}

function ContactRow({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: typeof PhoneCall;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <div className="flex items-start gap-4">
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-secondary-200/50 text-primary-800">
        <Icon className="h-4 w-4" />
      </span>
      <div>
        <p className="text-xs uppercase tracking-wide text-ink-400">{label}</p>
        <p className="text-sm font-medium text-primary-950">{value}</p>
      </div>
    </div>
  );

  return href ? (
    <a href={href} className="transition-opacity hover:opacity-70">
      {content}
    </a>
  ) : (
    content
  );
}
