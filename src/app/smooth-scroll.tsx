"use client";

import { ReactLenis } from "lenis/react";
import "lenis/dist/lenis.css";
import { MotionConfig, motion, useReducedMotion, useScroll, useSpring } from "motion/react";

export function MotionProvider({ children }: { children: React.ReactNode }) {
  // reducedMotion="user" skips the movement for people who turned motion off in their OS
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}

// Inertial page scrolling; skipped when the visitor has reduced motion turned on.
export function SmoothScroll() {
  const reduce = useReducedMotion();
  if (reduce) return null;
  return <ReactLenis root options={{ lerp: 0.09, anchors: { offset: -64 } }} />;
}

// Thin line under the header that fills as you scroll down the page.
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30 });
  return <motion.div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-px origin-left bg-linear-to-r from-[#e8823a]/0 via-[#e8823a] to-[#ffd9b8]" style={{ scaleX }} />;
}

// Content rises in and un-blurs the first time it scrolls into view.
export function Reveal({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, filter: "blur(12px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
