import { clsx } from "clsx";

/** Нескінченна доріжка: контент дублюється для безшовного циклу. */
export function Marquee({
  children,
  className,
  trackClassName,
}: {
  children: React.ReactNode;
  className?: string;
  trackClassName?: string;
}) {
  return (
    <div
      className={clsx(
        "marquee-track overflow-hidden whitespace-nowrap",
        className,
      )}
    >
      <div
        className={clsx(
          "inline-flex w-max items-center animate-marquee",
          trackClassName,
        )}
      >
        <MarqueeContent>{children}</MarqueeContent>
        <MarqueeContent ariaHidden>{children}</MarqueeContent>
      </div>
    </div>
  );
}

function MarqueeContent({
  children,
  ariaHidden,
}: {
  children: React.ReactNode;
  ariaHidden?: boolean;
}) {
  return (
    <div className="inline-flex items-center" aria-hidden={ariaHidden}>
      {children}
    </div>
  );
}
