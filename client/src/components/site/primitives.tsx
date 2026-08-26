// Sunlit Souk Editorial — saffron/terracotta/olive/cream/charcoal, DM Serif Display + Manrope, editorial asymmetry, food-first photography, restrained motion, no invented restaurant facts.

import { cn } from "@/lib/utils";
import { motion, useReducedMotion } from "framer-motion";
import { useState, type ImgHTMLAttributes, type ReactNode } from "react";

export const REVEAL_DURATION = 0.52;
export const REVEAL_EASE = "easeOut" as const;
export const REVEAL_STAGGER = 0.06;
export const HOVER_DURATION = 0.28;
export const NAV_DURATION = 0.22;
export const LIGHTBOX_DURATION = 0.24;

export function Emblem({ className, size = "md" }: { className?: string; size?: "sm" | "md" }) {
  const dimension = size === "sm" ? "h-9 w-9 text-[1.15rem]" : "h-11 w-11 text-[1.35rem]";
  return (
    <span
      aria-hidden="true"
      className={cn(
        "inline-grid shrink-0 place-items-center rounded-full bg-saffron font-serif leading-none text-charcoal",
        dimension,
        className,
      )}
    >
      B
    </span>
  );
}

type FallbackImageProps = ImgHTMLAttributes<HTMLImageElement> & {
  src: string;
  alt: string;
};

export function FallbackImage({ src, alt, className, onError, ...props }: FallbackImageProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        role="img"
        aria-label={alt}
        data-image-src={src}
        className={cn("image-fallback", className)}
      />
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      className={className}
      onError={(event) => {
        setFailed(true);
        onError?.(event);
      }}
      {...props}
    />
  );
}

export function HoverMedia({
  src,
  alt,
  caption,
  className,
  imgClassName,
  priority = false,
}: {
  src: string;
  alt: string;
  caption?: string;
  className?: string;
  imgClassName?: string;
  priority?: boolean;
}) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className={cn("group relative h-full w-full overflow-hidden bg-cream-deep", className)}
      initial="rest"
      animate="rest"
      whileHover={reduce ? undefined : "hover"}
    >
      <motion.div
        className="h-full w-full"
        variants={reduce ? undefined : { rest: { scale: 1 }, hover: { scale: 1.04 } }}
        transition={{ duration: HOVER_DURATION, ease: REVEAL_EASE }}
      >
        <FallbackImage
          src={src}
          alt={alt}
          className={cn("h-full w-full object-cover", imgClassName)}
          loading={priority ? "eager" : "lazy"}
          fetchPriority={priority ? "high" : "auto"}
          decoding="async"
        />
      </motion.div>
      {caption ? (
        <motion.span
          className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-charcoal/80 to-transparent px-3 py-3 font-sans text-[0.68rem] font-semibold tracking-[0.14em] text-cream uppercase"
          variants={reduce ? undefined : { rest: { opacity: 0 }, hover: { opacity: 1 } }}
          transition={{ duration: HOVER_DURATION, ease: REVEAL_EASE }}
        >
          {caption}
        </motion.span>
      ) : null}
    </motion.div>
  );
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: REVEAL_DURATION, ease: REVEAL_EASE },
  },
};

export function RevealGroup({
  children,
  className,
  delayChildren = 0,
}: {
  children: ReactNode;
  className?: string;
  delayChildren?: number;
}) {
  const reduce = useReducedMotion();

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.18 }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: REVEAL_STAGGER, delayChildren } },
      }}
    >
      {children}
    </motion.div>
  );
}

export function RevealItem({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const reduce = useReducedMotion();

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div className={className} variants={itemVariants}>
      {children}
    </motion.div>
  );
}

export function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduce = useReducedMotion();

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: REVEAL_DURATION, ease: REVEAL_EASE, delay }}
    >
      {children}
    </motion.div>
  );
}
