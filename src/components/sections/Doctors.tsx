"use client";

import { clsx } from "clsx";
import { Quote, UserRound } from "lucide-react";
import { useContent } from "@/lib/i18n";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { Reveal } from "@/components/ui/Reveal";

/** Редакційна сітка зі зсувами — жодних однакових рядів карток. */
const layout = [
  "lg:col-span-6 lg:w-[92%]",
  "lg:col-span-6 lg:mt-28 lg:ml-auto lg:w-[84%]",
  "lg:col-span-6 lg:-mt-16 lg:ml-auto lg:w-[84%]",
  "lg:col-span-6 lg:mt-12 lg:w-[92%]",
];

export function Doctors() {
  const { doctors } = useContent();
  return (
    <section id="doctors" className="relative overflow-hidden py-24 lg:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(40% 36% at 6% 30%, rgba(41,193,207,0.09), transparent 70%)",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionIntro
          index="04"
          eyebrow={doctors.eyebrow}
          title={doctors.title}
          description={doctors.description}
        />

        <div className="mt-16 grid gap-10 lg:grid-cols-12 lg:gap-x-10 lg:gap-y-0">
          {doctors.items.map((doctor, i) => (
            <Reveal key={doctor.name} delay={(i % 2) * 0.12} className={clsx(layout[i])}>
              <article className="group">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] shadow-[0_32px_64px_-40px_rgba(11,35,71,0.5)]">
                  <div
                    role="img"
                    aria-label={`${doctor.name} — ${doctor.role}`}
                    className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-gradient-to-br from-mist-100 via-mist-200 to-mist-300 px-6 text-center transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  >
                    <UserRound
                      className="size-16 text-deep-600/40"
                      strokeWidth={1.25}
                      aria-hidden
                    />
                    <p className="max-w-[14rem] text-sm font-medium leading-snug text-deep-600/70">
                      {doctors.photoPlaceholder}
                    </p>
                  </div>
                  <span className="absolute left-5 top-5 rounded-full border border-white/40 bg-white/80 px-4 py-1.5 text-xs font-semibold text-deep-900 backdrop-blur">
                    {doctor.experience}
                  </span>
                  {/* Цитата, що виїжджає при ховері */}
                  <div className="absolute inset-x-4 bottom-4 translate-y-[calc(100%+1.25rem)] rounded-2xl border border-white/50 bg-white/85 p-5 backdrop-blur-xl transition-transform duration-500 ease-out group-hover:translate-y-0">
                    <Quote className="size-4 text-cyan-500" aria-hidden />
                    <p className="mt-2 text-sm font-medium leading-snug text-deep-900">
                      {doctor.quote}
                    </p>
                  </div>
                </div>
                <div className="mt-6 flex items-end justify-between gap-4">
                  <div>
                    <h3 className="font-display text-xl font-medium tracking-tight text-ink-900 sm:text-2xl">
                      {doctor.name}
                    </h3>
                    <p className="mt-1.5 text-sm font-semibold text-deep-600">
                      {doctor.role}
                    </p>
                    <p className="mt-1 text-sm text-ink-500">{doctor.focus}</p>
                  </div>
                  <span
                    aria-hidden
                    className="mb-1 h-px w-16 shrink-0 bg-mist-300 transition-all duration-500 group-hover:w-24 group-hover:bg-cyan-500"
                  />
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
