"use client";

import { animate, motion } from "motion/react";
import Image from "next/image";
import { useEffect, useState } from "react";

const ease = [0.76, 0, 0.24, 1] as const;

// Full-page intro: avatar + counter, then the screen splits along the diagonal and slides apart.
export default function Loader() {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState<"loading" | "opening" | "done">("loading");

  useEffect(() => {
    // ponytail: progress is timed, not real asset progress; it only holds at 100 until window load fires.
    const controls = animate(0, 100, {
      duration: 1.4,
      ease: "easeInOut",
      onUpdate: (v) => setProgress(Math.round(v)),
      onComplete: () => {
        if (document.readyState === "complete") setPhase("opening");
        else window.addEventListener("load", () => setPhase("opening"), { once: true });
      },
    });
    return () => controls.stop();
  }, []);

  if (phase === "done") return null;
  const opening = phase === "opening";
  const slide = { duration: 0.9, ease, delay: 0.25 };

  return (
    <div className="fixed inset-0 z-50" aria-hidden={opening} role="status" aria-label="Loading">
      <motion.div
        className="absolute inset-0 bg-bg [clip-path:polygon(0_0,100%_0,0_100%)]"
        animate={opening ? { x: "-100%", y: "-100%" } : undefined}
        transition={slide}
      />
      <motion.div
        className="absolute inset-0 bg-bg [clip-path:polygon(100%_0,100%_100%,0_100%)]"
        animate={opening ? { x: "100%", y: "100%" } : undefined}
        transition={slide}
        onAnimationComplete={() => opening && setPhase("done")}
      />

      <motion.div
        className="absolute inset-0 grid place-items-center"
        animate={opening ? { opacity: 0, scale: 0.9 } : undefined}
        transition={{ duration: 0.25 }}
      >
        <div className="flex flex-col items-center gap-5">
          <Image src="/avatar.png" alt="" width={320} height={321} priority className="size-24 drop-shadow-lg" />
          <div className="h-px w-40 bg-rail">
            <div
              className="h-full origin-left bg-linear-to-r from-[#e8823a]/0 via-[#e8823a] to-[#ffd9b8]"
              style={{ transform: `scaleX(${progress / 100})` }}
            />
          </div>
          <span className="text-xs text-muted tabular-nums">{progress}%</span>
        </div>
      </motion.div>
    </div>
  );
}
