"use client";

import Link from "next/link";
import { clsx } from "clsx";
import { ArrowUpRight } from "lucide-react";
import { Magnetic } from "@/components/ui/Magnetic";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "light" | "ghost" | "outline-light";
  className?: string;
  withArrow?: boolean;
  magnetic?: boolean;
};

const base =
  "group relative inline-flex items-center justify-center gap-2.5 overflow-hidden rounded-full px-7 py-3.5 text-sm font-semibold tracking-wide transition-all duration-300";

const variants = {
  primary:
    "bg-deep-800 text-white shadow-[0_12px_32px_-12px_rgba(11,35,71,0.55)] hover:shadow-[0_18px_44px_-12px_rgba(41,193,207,0.45)] hover:bg-deep-700",
  light:
    "bg-white text-deep-900 shadow-[0_10px_30px_-14px_rgba(11,35,71,0.4)] hover:shadow-[0_16px_40px_-14px_rgba(255,255,255,0.35)]",
  ghost:
    "border border-mist-300 bg-white/40 text-ink-900 backdrop-blur hover:border-deep-600/40 hover:bg-white",
  "outline-light":
    "border border-white/25 text-white backdrop-blur hover:border-cyan-300/70 hover:text-cyan-200",
};

/** Кнопка з магнітним ховером, сяйвом і стрілкою, що «вилітає». */
export function Button({
  href,
  children,
  variant = "primary",
  className,
  withArrow = true,
  magnetic = true,
}: ButtonProps) {
  const inner = (
    <Link href={href} className={clsx(base, variants[variant], className)}>
      {/* Сяйво, що проходить по кнопці */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full"
      />
      <span className="relative">{children}</span>
      {withArrow ? (
        <span className="relative grid size-5 place-items-center overflow-hidden">
          <ArrowUpRight
            className="size-4 transition-transform duration-300 group-hover:-translate-y-5 group-hover:translate-x-5"
            aria-hidden
          />
          <ArrowUpRight
            className="absolute size-4 -translate-x-5 translate-y-5 transition-transform duration-300 group-hover:translate-x-0 group-hover:translate-y-0"
            aria-hidden
          />
        </span>
      ) : null}
    </Link>
  );

  return magnetic ? <Magnetic>{inner}</Magnetic> : inner;
}
