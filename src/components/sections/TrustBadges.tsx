"use client";

import { PhoneCall, Siren, CalendarCheck, LucideIcon } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { Container } from "@/components/ui/Container";
import { badges } from "@/lib/data";

const icons: Record<string, LucideIcon> = {
  PhoneCall,
  Siren,
  CalendarCheck,
};

export function TrustBadges() {
  return (
    <div className="border-y border-line bg-white/60 py-6">
      <Container className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
        {badges.map((badge, i) => {
          const Icon = icons[badge.icon];
          return (
            <Reveal key={badge.label} delay={i * 0.06} direction="scale">
              <div className="flex items-center gap-2.5 rounded-full border border-line bg-white px-5 py-2.5 shadow-sm">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-accent-200/60 text-primary-800">
                  <Icon className="h-3.5 w-3.5" />
                </span>
                <span className="text-sm font-medium text-primary-950">{badge.label}</span>
              </div>
            </Reveal>
          );
        })}
      </Container>
    </div>
  );
}
