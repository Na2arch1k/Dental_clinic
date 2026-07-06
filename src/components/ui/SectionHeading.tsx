import clsx from "clsx";
import { Reveal } from "./Reveal";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  light = false,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  light?: boolean;
}) {
  return (
    <div
      className={clsx(
        "flex flex-col gap-4",
        align === "center" ? "items-center text-center" : "items-start text-left"
      )}
    >
      <Reveal>
        <span
          className={clsx(
            "inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em]",
            light
              ? "border-white/20 text-accent-300"
              : "border-secondary-200 bg-secondary-200/40 text-primary-700"
          )}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-accent-500" />
          {eyebrow}
        </span>
      </Reveal>
      <Reveal delay={0.08}>
        <h2
          className={clsx(
            "font-display max-w-3xl text-4xl leading-[1.1] tracking-tight sm:text-5xl",
            light ? "text-white" : "text-primary-950"
          )}
        >
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.16}>
          <p
            className={clsx(
              "max-w-2xl text-base leading-relaxed sm:text-lg",
              light ? "text-white/70" : "text-ink-600"
            )}
          >
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
