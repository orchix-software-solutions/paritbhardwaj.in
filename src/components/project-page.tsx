import Image from "next/image";
import Link from "next/link";
import VideoRequestButton from "@/components/video-request-dialog";

type Shot = { src: string; w: number; h: number };

export type ProjectPageProps = {
  label: string;
  title: string;
  blurb: string;
  hero: string;
  stack: string[];
  /** Renders the "request a private walkthrough" dialog over the hero. */
  video?: boolean;
  disclaimer?: string;
  architecture?: string;
  modules: { title: string; desc: string; shot?: Shot }[];
  /** Case-study cards — square-ish composites shown in a grid under the modules. */
  gallery?: Shot[];
};

function BackLink({ children }: { children: React.ReactNode }) {
  return (
    <Link
      href="/"
      className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.14em] text-neutral-500 transition-colors hover:text-white"
    >
      <svg viewBox="0 0 24 24" fill="none" className="size-3.5">
        <path d="m15 18-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      {children}
    </Link>
  );
}

const Rule = () => (
  <div className="h-px bg-gradient-to-r from-transparent via-white/25 to-transparent" />
);

export default function ProjectPage({
  label,
  title,
  blurb,
  hero,
  stack,
  video,
  disclaimer,
  architecture,
  modules,
  gallery,
}: ProjectPageProps) {
  return (
    <main className="noise-bg relative flex h-dvh justify-center overflow-hidden bg-black">
      <div className="hatch w-4 shrink-0 border-l border-white/10 sm:w-10 lg:w-16" />

      <div className="no-scrollbar h-full w-full max-w-3xl overflow-y-auto border-x border-white/10">
        <div className="border-b border-white/10 px-5 py-4 sm:px-8">
          <BackLink>Back</BackLink>
        </div>

        <div className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-900">
          {video && (
            <div className="absolute right-3 top-3 z-10">
              <VideoRequestButton project={title} />
            </div>
          )}
          <Image src={hero} alt={title} fill priority sizes="768px" className="object-cover object-top" />
        </div>

        <section className="px-5 py-10 sm:px-8">
          <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-neutral-500">
            {label}
          </span>
          <h1 className="mt-2 font-serif text-3xl tracking-tight text-white sm:text-4xl">{title}</h1>
          <p className="mt-3 max-w-[56ch] text-[15px] leading-relaxed text-neutral-400">{blurb}</p>

          <div className="mt-8">
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-neutral-600">
              Built with
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {stack.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-neutral-400"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </section>

        <Rule />

        {disclaimer && (
          <>
            <div className="mx-5 my-8 rounded-xl border border-white/10 bg-white/[0.03] px-5 py-4 sm:mx-8">
              <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-neutral-500">
                Disclaimer
              </p>
              <p className="mt-2 text-sm leading-relaxed text-neutral-400">{disclaimer}</p>
            </div>
            <Rule />
          </>
        )}

        {architecture && (
          <>
            <section className="px-5 py-10 sm:px-8 sm:py-14">
              <h2 className="font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-500 sm:text-xs">
                Architecture
              </h2>
              <p className="mt-5 max-w-[62ch] text-sm leading-relaxed text-neutral-400">
                {architecture}
              </p>
            </section>
            <Rule />
          </>
        )}

        <section className="px-5 py-10 sm:px-8 sm:py-14">
          <h2 className="font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-500 sm:text-xs">
            Modules
          </h2>

          {/* with screenshots the modules stack full-width; text-only ones read better as a grid */}
          <div
            className={
              modules.some((m) => m.shot)
                ? "mt-7 space-y-14"
                : "mt-7 grid gap-4 sm:grid-cols-2"
            }
          >
            {modules.map((mod) => (
              <div
                key={mod.title}
                className={mod.shot ? undefined : "rounded-xl border border-white/10 bg-white/[0.03] px-5 py-5"}
              >
                {mod.shot && (
                  <div className="overflow-hidden rounded-xl border border-white/10 bg-neutral-900">
                    <Image
                      src={mod.shot.src}
                      alt={mod.title}
                      width={mod.shot.w}
                      height={mod.shot.h}
                      sizes="(min-width: 768px) 704px, 100vw"
                      className="h-auto w-full"
                    />
                  </div>
                )}
                <div className={mod.shot ? "mt-4" : undefined}>
                  <h3 className="font-serif text-xl text-white">{mod.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-neutral-400">{mod.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {gallery && gallery.length > 0 && (
          <>
            <Rule />
            <section className="px-5 py-10 sm:px-8 sm:py-14">
              <h2 className="font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-500 sm:text-xs">
                Highlights
              </h2>
              <div className="mt-7 grid gap-5 sm:grid-cols-2">
                {gallery.map((shot) => (
                  <div
                    key={shot.src}
                    className="overflow-hidden rounded-xl border border-white/10 bg-neutral-900"
                  >
                    <Image
                      src={shot.src}
                      alt={title}
                      width={shot.w}
                      height={shot.h}
                      sizes="(min-width: 640px) 340px, 100vw"
                      className="h-auto w-full"
                    />
                  </div>
                ))}
              </div>
            </section>
          </>
        )}

        <Rule />

        <div className="px-5 py-8 sm:px-8">
          <BackLink>Back to portfolio</BackLink>
        </div>
      </div>

      <div className="hatch w-4 shrink-0 border-r border-white/10 sm:w-10 lg:w-16" />

      <div className="pointer-events-none absolute inset-x-0 top-0 z-20 h-20 bg-gradient-to-b from-black/70 to-transparent backdrop-blur-[3px] [mask-image:linear-gradient(to_bottom,black,transparent)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-20 bg-gradient-to-t from-black/70 to-transparent backdrop-blur-[3px] [mask-image:linear-gradient(to_top,black,transparent)]" />
    </main>
  );
}
