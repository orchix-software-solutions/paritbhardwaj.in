"use client";

import { useRef } from "react";

export default function VideoRequestButton({ project }: { project: string }) {
  const dialog = useRef<HTMLDialogElement>(null);

  return (
    <>
      <button
        type="button"
        onClick={() => dialog.current?.showModal()}
        className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-black/60 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.12em] text-neutral-300 backdrop-blur transition-colors hover:border-white/30 hover:bg-black/80 hover:text-white"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" className="size-3" aria-hidden>
          <path d="M8 5.14v13.72L19 12 8 5.14Z" />
        </svg>
        View video
      </button>

      <dialog
        ref={dialog}
        onClick={(e) => {
          if (e.target === dialog.current) dialog.current.close();
        }}
        className="m-auto w-[min(30rem,calc(100vw-2rem))] rounded-2xl border border-white/10 bg-neutral-950/95 p-0 text-neutral-300 shadow-2xl backdrop:bg-black/70 backdrop:backdrop-blur-sm open:animate-[word-in_.25s_cubic-bezier(0.2,0.8,0.2,1)]"
      >
        <div className="relative overflow-hidden rounded-t-2xl border-b border-white/10 bg-white/[0.03] px-6 py-5">
          <div className="card-art pointer-events-none absolute inset-0 opacity-40" />
          <p className="relative font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-500">
            Private demo
          </p>
          <h3 className="relative mt-2 font-serif text-2xl text-white">{project}</h3>
        </div>

        <div className="px-6 py-5">
          <p className="text-sm leading-relaxed text-neutral-400">
            This is a freelance client project, so I can&rsquo;t host the walkthrough
            publicly. I&rsquo;d sincerely ask you to reach out &mdash; I&rsquo;m happy to
            walk you through the whole thing live, on my machine, whenever suits you.
          </p>

          <div className="mt-6 flex items-center justify-end gap-3">
            <button
              type="button"
              onClick={() => dialog.current?.close()}
              className="rounded-full px-3 py-2 font-mono text-[10px] uppercase tracking-[0.14em] text-neutral-500 transition-colors hover:text-white"
            >
              Close
            </button>
            <a
              href="mailto:paritbhardwaj@outlook.com?subject=Demo%20walkthrough%20request"
              className="rounded-full border border-white/15 px-4 py-2 font-mono text-[10px] uppercase tracking-[0.14em] text-neutral-300 transition-colors hover:border-white/30 hover:text-white"
            >
              Email me
            </a>
            <a
              href="https://x.com/whynotparit"
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-white px-4 py-2 font-mono text-[10px] uppercase tracking-[0.14em] text-black transition-colors hover:bg-amber-100"
            >
              Connect with me &#8599;
            </a>
          </div>
        </div>
      </dialog>
    </>
  );
}
