import { clsx } from "clsx";
import { Reveal } from "@/components/ui/Reveal";

/**
 * Редакційна шапка секції: маркер із порядковим номером зліва,
 * великий заголовок і необовʼязковий опис, притиснутий до правого краю.
 */
export function SectionIntro({
  index,
  eyebrow,
  title,
  description,
  dark = false,
  className,
}: {
  index: string;
  eyebrow: string;
  title: string;
  description?: string;
  dark?: boolean;
  className?: string;
}) {
  return (
    <div className={clsx("flex flex-col gap-6", className)}>
      <Reveal>
        <p
          className={clsx(
            "flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.28em]",
            dark ? "text-cyan-300" : "text-deep-600",
          )}
        >
          <span className="font-display">{index}</span>
          <span
            aria-hidden
            className={clsx(
              "h-px w-10",
              dark ? "bg-cyan-300/60" : "bg-deep-600/40",
            )}
          />
          {eyebrow}
        </p>
      </Reveal>
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <Reveal>
          <h2
            className={clsx(
              "font-display max-w-xl text-3xl font-medium leading-[1.12] tracking-tight sm:text-4xl lg:text-5xl",
              dark ? "text-white" : "text-ink-900",
            )}
          >
            {title}
          </h2>
        </Reveal>
        {description ? (
          <Reveal delay={0.12}>
            <p
              className={clsx(
                "max-w-sm text-base leading-relaxed",
                dark ? "text-mist-300" : "text-ink-500",
              )}
            >
              {description}
            </p>
          </Reveal>
        ) : null}
      </div>
    </div>
  );
}
