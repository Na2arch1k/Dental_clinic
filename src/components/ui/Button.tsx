"use client";

import { ReactNode, MouseEvent, useState } from "react";
import clsx from "clsx";

type Ripple = { x: number; y: number; size: number; id: number };

const variants = {
  primary:
    "bg-primary-800 text-white hover:bg-primary-700 shadow-lg shadow-primary-900/20",
  secondary:
    "bg-white text-primary-900 border border-line hover:border-secondary-400 hover:text-primary-800",
  accent:
    "bg-accent-400 text-primary-900 hover:bg-accent-300 shadow-lg shadow-accent-500/20",
};

export function Button({
  children,
  className,
  variant = "primary",
  href,
  onClick,
  type = "button",
}: {
  children: ReactNode;
  className?: string;
  variant?: keyof typeof variants;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit";
}) {
  const [ripples, setRipples] = useState<Ripple[]>([]);

  function spawnRipple(e: MouseEvent<HTMLElement>) {
    const target = e.currentTarget as HTMLElement;
    const rect = target.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height) * 2;
    const ripple: Ripple = {
      x: e.clientX - rect.left - size / 2,
      y: e.clientY - rect.top - size / 2,
      size,
      id: Date.now(),
    };
    setRipples((prev) => [...prev, ripple]);
    window.setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== ripple.id));
    }, 650);
  }

  const classes = clsx(
    "group relative isolate inline-flex items-center justify-center gap-2 overflow-hidden rounded-full px-7 py-3.5 text-sm font-medium tracking-wide transition-all duration-300 ease-out active:scale-[0.97]",
    variants[variant],
    className
  );

  const content = (
    <>
      <span className="relative z-10 flex items-center gap-2">{children}</span>
      {ripples.map((r) => (
        <span
          key={r.id}
          className="pointer-events-none absolute rounded-full bg-white/40 animate-[ripple_0.65s_ease-out]"
          style={{ left: r.x, top: r.y, width: r.size, height: r.size }}
        />
      ))}
      <style jsx>{`
        @keyframes ripple {
          from {
            transform: scale(0);
            opacity: 0.55;
          }
          to {
            transform: scale(1);
            opacity: 0;
          }
        }
      `}</style>
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        onClick={(e) => {
          spawnRipple(e);
          onClick?.();
        }}
        className={classes}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={(e) => {
        spawnRipple(e);
        onClick?.();
      }}
      className={classes}
    >
      {content}
    </button>
  );
}
