import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import { useRef, type ReactNode } from "react";

type Props = {
  href: string;
  children: ReactNode;
  variant?: "fill" | "ghost" | "dark";
  className?: string;
  external?: boolean;
};

export function MagneticButton({ href, children, variant = "fill", className, external }: Props) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 240, damping: 22, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 240, damping: 22, mass: 0.4 });

  const onMove = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (reduce || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((event.clientX - rect.left - rect.width / 2) * 0.28);
    y.set((event.clientY - rect.top - rect.height / 2) * 0.28);
  };

  const onLeave = () => {
    x.set(0);
    y.set(0);
  };

  const styles = {
    fill: "border-cream bg-transparent text-cream hover:text-ink",
    ghost: "border-cream/40 bg-transparent text-cream hover:text-ink",
    dark: "border-ink bg-transparent text-ink hover:text-cream",
  }[variant];

  const fillClass = {
    fill: "bg-cream",
    ghost: "bg-cream",
    dark: "bg-ink",
  }[variant];

  const arrowClass = {
    fill: "border-cream/40 group-hover:border-ink/20 group-hover:bg-ink group-hover:text-cream",
    ghost: "border-cream/40 group-hover:border-ink/20 group-hover:bg-ink group-hover:text-cream",
    dark: "border-ink/20 group-hover:border-cream/20 group-hover:bg-cream group-hover:text-ink",
  }[variant];

  return (
    <motion.a
      ref={ref}
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={reduce ? undefined : { x: springX, y: springY }}
      className={cn(
        "group relative inline-flex min-h-12 items-center gap-4 overflow-hidden border px-6 py-3 text-[0.72rem] font-medium tracking-[0.18em] uppercase",
        styles,
        className,
      )}
    >
      <span
        aria-hidden="true"
        className={cn(
          "absolute inset-0 origin-left scale-x-0 transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-x-100",
          fillClass,
        )}
      />
      <span className="relative z-[1]">{children}</span>
      <span
        className={cn(
          "relative z-[1] grid h-8 w-8 place-items-center rounded-full border transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-0.5",
          arrowClass,
        )}
      >
        <ArrowRight size={14} strokeWidth={1.5} />
      </span>
    </motion.a>
  );
}
