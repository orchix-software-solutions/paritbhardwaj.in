"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";

const ease = [0.22, 1, 0.36, 1] as const;

// Brand paths from simple-icons (lucide dropped brand icons).
// TODO: real LinkedIn URL.
const socials = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/TODO",
    path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-2.247 3.37-2.247 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.125 2.062 2.062 0 0 1 0 4.125zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
  },
  {
    label: "X",
    href: "https://x.com/whynotparit",
    path: "M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z",
  },
];

const calUrl =
  "https://cal.com/whynotparit/technical-discovery-call-mvp-saas-development";

// Each word drifts in from `from` px away while un-blurring, one after another.
function BlurIn({
  text,
  from,
  delay = 0,
  className = "",
}: {
  text: string;
  from: number;
  delay?: number;
  className?: string;
}) {
  return text.split(" ").map((word, i) => (
    <motion.span
      key={i}
      className={`inline-block whitespace-pre ${className}`}
      initial={{ y: from, filter: "blur(14px)" }}
      animate={{ y: 0, filter: "blur(0px)" }}
      transition={{ duration: 0.9, ease, delay: delay + i * 0.08 }}
    >
      {word + " "}
    </motion.span>
  ));
}

export default function Hero() {
  return (
    <section className="px-5 pt-2 pb-16 sm:px-8 sm:pt-4">
      <motion.div
        initial={{ y: -48, filter: "blur(14px)" }}
        animate={{ y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.9, ease }}
      >
        {/* sways side to side like it's vibing to the music in the headphones */}
        <motion.div
          className="mb-6 w-fit origin-bottom"
          animate={{ rotate: [-7, 7], x: [-4, 4] }}
          transition={{
            duration: 1.4,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "mirror",
          }}
        >
          <Image
            src="/avatar.png"
            alt="Parit Bhardwaj wearing headphones"
            width={320}
            height={321}
            priority
            className="size-20 drop-shadow-lg sm:size-24"
          />
        </motion.div>
      </motion.div>
      <h1 className="font-serif text-5xl leading-none tracking-tight sm:text-6xl">
        <BlurIn text="Parit Bhardwaj" from={-48} delay={0.1} />
      </h1>

      <p className="mt-4 text-base italic sm:text-lg">
        <BlurIn text="Senior AI & Full Stack Engineer" from={40} delay={0.45} />
      </p>

      <p className="mt-4 max-w-xl font-serif text-lg leading-snug text-muted italic sm:text-xl">
        <BlurIn
          text="I build products from the first idea to launch, combining thoughtful design, polished interfaces, and robust backend systems."
          from={40}
          delay={0.7}
        />
        <br />
        {/* delays continue the word-by-word stagger: 0.7 + words before * 0.08 */}
        <BlurIn
          text="From architecture to deployment, I take"
          from={40}
          delay={0.7 + 17 * 0.08}
        />
        <BlurIn
          text="full ownership"
          from={40}
          delay={0.7 + 23 * 0.08}
          className="text-[#e8823a]"
        />
        <BlurIn
          text="of the entire product lifecycle."
          from={40}
          delay={0.7 + 25 * 0.08}
        />
      </p>

      {/* glowing-border button (btn-beam in globals.css) */}
      <motion.div
        className="mt-8 flex flex-wrap items-center gap-3"
        initial={{ opacity: 0, y: 40, filter: "blur(14px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.9, ease, delay: 1.2 }}
      >
        <a
          href={calUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-beam group inline-flex items-center gap-2 rounded-lg px-4 py-2 text-[11px] font-medium tracking-[0.18em] text-fg uppercase"
        >
          Book a call
          <ArrowRight
            aria-hidden="true"
            strokeWidth={1.75}
            className="size-3.5 transition-transform duration-300 group-hover:translate-x-1 group-focus-visible:translate-x-1"
          />
        </a>
        {socials.map((s) => (
          <a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={s.label}
            className="grid size-9 place-items-center rounded-lg border border-rail text-muted transition-colors hover:text-fg focus-visible:text-fg"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="size-3.5">
              <path d={s.path} />
            </svg>
          </a>
        ))}
      </motion.div>
    </section>
  );
}
