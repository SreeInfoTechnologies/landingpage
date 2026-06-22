"use client";

import { motion } from "framer-motion";

const EASE = [0.22, 0.61, 0.36, 1];

/**
 * Scroll-reveal wrapper. Fades + slides its children into view once.
 *  - delay: seconds to wait before animating
 *  - y: starting vertical offset
 *  - as: motion element tag (div, li, span, ...)
 */
export default function Reveal({
  children,
  delay = 0,
  y = 26,
  duration = 0.6,
  className = "",
  as = "div",
  ...rest
}) {
  const Tag = motion[as] || motion.div;
  return (
    <Tag
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration, delay, ease: EASE }}
      className={className}
      {...rest}
    >
      {children}
    </Tag>
  );
}

/** Stagger container — animates children in sequence as they enter view. */
export function Stagger({ children, className = "", stagger = 0.1, as = "div" }) {
  const Tag = motion[as] || motion.div;
  return (
    <Tag
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: stagger } },
      }}
      className={className}
    >
      {children}
    </Tag>
  );
}

/** Child item to use inside <Stagger>. */
export function StaggerItem({ children, className = "", y = 24, as = "div" }) {
  const Tag = motion[as] || motion.div;
  return (
    <Tag
      variants={{
        hidden: { opacity: 0, y },
        show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE } },
      }}
      className={className}
    >
      {children}
    </Tag>
  );
}
