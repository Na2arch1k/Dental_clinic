import { PhoneCall, Mail, MapPin } from "lucide-react";
import { brand, nav } from "@/lib/data";
import { Container } from "@/components/ui/Container";

export function Footer() {
  return (
    <footer className="bg-primary-950 text-white/70">
      <Container className="grid gap-12 py-16 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
        <div className="flex flex-col gap-4">
          <a href="#" className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 font-display text-lg text-white">
              M
            </span>
            <span className="flex flex-col leading-none">
              <span className="font-display text-lg tracking-wide text-white">
                {brand.name}
              </span>
              <span className="text-[10px] font-medium uppercase tracking-[0.25em] text-white/50">
                Dental Studio
              </span>
            </span>
          </a>
          <p className="max-w-sm text-sm leading-relaxed text-white/50">
            {brand.slogan} A boutique dental studio built around precision
            diagnostics, specialist-led care, and genuine patient comfort.
          </p>
          <div className="flex gap-3 pt-2">
            {["IG", "FB", "IN"].map((label) => (
              <a
                key={label}
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-[11px] font-semibold transition-colors hover:border-accent-400 hover:text-accent-300"
              >
                {label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/40">
            Explore
          </h4>
          <ul className="flex flex-col gap-3 text-sm">
            {nav.slice(0, 5).map((item) => (
              <li key={item.href}>
                <a href={item.href} className="transition-colors hover:text-accent-300">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/40">
            Studio
          </h4>
          <ul className="flex flex-col gap-3 text-sm">
            {nav.slice(5).map((item) => (
              <li key={item.href}>
                <a href={item.href} className="transition-colors hover:text-accent-300">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-4 text-sm">
          <h4 className="mb-0 text-sm font-semibold uppercase tracking-wider text-white/40">
            Contact
          </h4>
          <a href={`tel:${brand.phone}`} className="flex items-center gap-3 transition-colors hover:text-accent-300">
            <PhoneCall className="h-4 w-4 shrink-0 text-secondary-400" />
            {brand.phone}
          </a>
          <a href={`mailto:${brand.email}`} className="flex items-center gap-3 transition-colors hover:text-accent-300">
            <Mail className="h-4 w-4 shrink-0 text-secondary-400" />
            {brand.email}
          </a>
          <div className="flex items-start gap-3">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-secondary-400" />
            {brand.address}
          </div>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col items-center justify-between gap-3 py-6 text-xs text-white/40 sm:flex-row">
          <p>© {new Date().getFullYear()} {brand.fullName}. All rights reserved.</p>
          <p>Designed as an original portfolio concept — not affiliated with any real clinic.</p>
        </Container>
      </div>
    </footer>
  );
}
