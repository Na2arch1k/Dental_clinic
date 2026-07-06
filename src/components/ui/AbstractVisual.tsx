import { ReactNode } from "react";
import clsx from "clsx";
import { LucideIcon } from "lucide-react";

const tones = {
  primary: "from-primary-800 via-primary-700 to-secondary-500",
  secondary: "from-secondary-500 via-secondary-400 to-accent-400",
  accent: "from-accent-500 via-secondary-400 to-primary-700",
  ink: "from-primary-950 via-primary-800 to-secondary-600",
};

export function AbstractVisual({
  tone = "primary",
  Icon,
  className,
  pattern = "rings",
  children,
}: {
  tone?: keyof typeof tones;
  Icon?: LucideIcon;
  className?: string;
  pattern?: "rings" | "grid" | "waves";
  children?: ReactNode;
}) {
  return (
    <div
      className={clsx(
        "relative isolate flex items-center justify-center overflow-hidden bg-gradient-to-br",
        tones[tone],
        className
      )}
    >
      {pattern === "rings" && (
        <div className="absolute inset-0 opacity-30">
          <div className="absolute -left-10 -top-10 h-40 w-40 rounded-full border border-white/40" />
          <div className="absolute -bottom-16 -right-16 h-56 w-56 rounded-full border border-white/30" />
          <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/20" />
        </div>
      )}
      {pattern === "grid" && (
        <div
          className="absolute inset-0 opacity-[0.18]"
          style={{
            backgroundImage:
              "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
      )}
      {pattern === "waves" && (
        <div className="absolute inset-0 opacity-25">
          <div className="absolute inset-x-[-20%] top-[20%] h-24 rotate-3 rounded-full bg-white/30 blur-2xl" />
          <div className="absolute inset-x-[-20%] top-[55%] h-20 -rotate-2 rounded-full bg-white/20 blur-2xl" />
        </div>
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-white/10" />
      {Icon && (
        <Icon className="relative z-10 h-10 w-10 text-white/90" strokeWidth={1.5} />
      )}
      {children}
    </div>
  );
}
