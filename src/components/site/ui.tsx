import { motion, useReducedMotion } from "motion/react";
import { ShoppingBasket } from "lucide-react";
import type { ReactNode } from "react";

export const ORDER_HREF = "mailto:hello@dsaints.qa?subject=Order%20%2F%20Inquiry";

/* ---------- Ribbon / twine dividers ---------- */

export function TwineRule({
  className = "",
  tone = "espresso",
  width = "8rem",
}: {
  className?: string;
  tone?: "espresso" | "ivory";
  width?: string;
}) {
  const color = tone === "ivory" ? "text-ivory/45" : "text-espresso/45";
  return (
    <div className={`flex items-center gap-2 ${color} ${className}`} aria-hidden="true">
      <span className="h-px bg-current" style={{ width }} />
      <span className="h-[3px] w-[3px] rotate-45 bg-current" />
      <span className="h-px w-6 bg-current opacity-60" />
      <span className="h-px w-2 bg-current opacity-40" />
    </div>
  );
}

/* ---------- Bakery price tickets ---------- */

function splitPrice(raw: string): { label: string; amount: string } {
  const slash = raw.split(" / ");
  if (slash.length === 2) return { label: slash[0]!, amount: slash[1]! };
  const solo = raw.match(/^(.*?)\s(\d+\s*QAR)$/);
  if (solo && solo[1]) return { label: solo[1], amount: solo[2]! };
  return { label: "", amount: raw };
}

export function PriceTicket({ value, tone = "light" }: { value: string; tone?: "light" | "dark" }) {
  const { label, amount } = splitPrice(value);
  const base =
    tone === "dark"
      ? "border-ivory/30 text-ivory before:bg-chocolate"
      : "border-espresso/35 text-foreground before:bg-background";
  return (
    <span
      className={`relative inline-flex items-baseline gap-2 border border-dashed py-1.5 pr-3 pl-4 ${base} before:absolute before:top-1/2 before:-left-[4px] before:h-[7px] before:w-[7px] before:-translate-y-1/2 before:rotate-45 before:border before:border-dashed before:border-inherit before:content-['']`}
      style={{ borderRadius: "2px" }}
    >
      {label && (
        <span className="text-[0.6rem] tracking-[0.24em] text-muted-foreground uppercase">
          {label}
        </span>
      )}
      <span className="text-sm tracking-[0.16em]">{amount}</span>
    </span>
  );
}

export function PriceTickets({
  prices,
  className = "",
  tone = "light",
}: {
  prices: string[];
  className?: string;
  tone?: "light" | "dark";
}) {
  return (
    <ul className={`flex flex-wrap items-center gap-2.5 ${className}`}>
      {prices.map((p) => (
        <li key={p}>
          <PriceTicket value={p} tone={tone} />
        </li>
      ))}
    </ul>
  );
}

/* ---------- Stamped / tagged buttons ---------- */

const stampBase =
  "inline-flex items-center gap-2.5 px-8 py-3.5 text-[0.7rem] tracking-[0.28em] uppercase transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-3";

export function StampLink({
  href,
  children,
  variant = "solid",
  external,
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: "solid" | "outline";
  external?: boolean;
  className?: string;
}) {
  const styles =
    variant === "solid"
      ? "bg-ivory text-chocolate shadow-[inset_0_0_0_1px_var(--chocolate),inset_0_0_0_3px_var(--ivory)] hover:bg-cream active:bg-beige"
      : "border border-ivory/50 text-ivory hover:bg-ivory hover:text-chocolate active:bg-cream active:text-chocolate";
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
      className={`${stampBase} ${styles} ${className}`}
      style={{ borderRadius: "3px" }}
    >
      {children}
    </a>
  );
}

/* ---------- Persistent order tag (top-right) ---------- */

export function OrderTag() {
  const reduced = useReducedMotion();
  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-[60]">
      <div
        className="mx-auto mt-3 flex max-w-6xl items-start justify-end gap-3 sm:mt-5"
        style={{ width: "calc(100% - 1.5rem)" }}
      >
        <a
          href={ORDER_HREF}
          className="pointer-events-auto group inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/75 px-3.5 py-3 min-[400px]:px-5 text-[0.62rem] leading-7 tracking-[0.26em] text-foreground uppercase backdrop-blur-md transition-colors hover:bg-foreground hover:text-background focus-visible:outline-2 focus-visible:outline-offset-3"
        >
          <motion.span
            className="inline-flex"
            initial={{ rotate: 0 }}
            animate={reduced ? { rotate: 0 } : { rotate: [0, -9, 7, -4, 0] }}
            transition={
              reduced
                ? { duration: 0 }
                : { duration: 1.1, ease: "easeInOut", delay: 1.2, repeat: 2, repeatDelay: 6 }
            }
            style={{ transformOrigin: "50% 20%" }}
          >
            <ShoppingBasket className="h-3.5 w-3.5" strokeWidth={1.4} aria-hidden="true" />
          </motion.span>
          <span className="sr-only min-[400px]:not-sr-only">Order</span>
        </a>
      </div>
    </header>
  );
}
