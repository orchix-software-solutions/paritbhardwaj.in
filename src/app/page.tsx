import Image from "next/image";
import Hero from "./hero";
import { GithubGraph } from "./github-graph";
import { Reveal } from "./smooth-scroll";
import Technologies from "./technologies";

// From the Professional Experience section on paritbhardwaj.in, most recent first.
const companies: {
  name: string;
  role: string;
  dates: string;
  span: [string, string]; // first and last month worked, "YYYY-MM"
  logo: string;
  logoTile?: boolean; // logo is already a full coloured tile, so no white backing
  href?: string;
}[] = [
  {
    name: "Albearoti Solutions",
    role: "Team Lead / Full Stack Engineer",
    dates: "2024 — 2026",
    span: ["2024-10", "2026-08"],
    logo: "/logo-albearoti.jpg",
    href: "https://www.albearoti.com/",
  },
  {
    name: "AICAN Private Limited",
    role: "Software Development Engineer",
    dates: "2023 — 2024",
    span: ["2023-05", "2024-09"],
    logo: "/logo-aican.webp",
  },
  {
    name: "BrightIntern",
    role: "Frontend Development Intern",
    dates: "2023",
    span: ["2023-02", "2023-05"],
    logo: "/logo-bright-intern.png",
  },
  {
    name: "Microelectronics",
    role: "Web Developer",
    dates: "2021",
    span: ["2021-06", "2021-12"],
    logo: "/logo-microelectronics.svg",
    logoTile: true,
  },
];

// Total months worked, counting overlapping months once, e.g. "4 years 2 months".
function experience() {
  const index = (ym: string) => Number(ym.slice(0, 4)) * 12 + Number(ym.slice(5, 7));
  const months = new Set<number>();
  for (const { span } of companies) {
    for (let i = index(span[0]); i <= index(span[1]); i++) months.add(i);
  }
  const years = Math.floor(months.size / 12);
  const rest = months.size % 12;
  return [years && `${years} year${years > 1 ? "s" : ""}`, rest && `${rest} month${rest > 1 ? "s" : ""}`].filter(Boolean).join(" ");
}

// ponytail: placeholder sections; swap in real content.
const sections: { id: string; title: string; items?: string[] }[] = [
  { id: "work", title: "Work" },
  { id: "side-projects", title: "Side projects" },
  {
    id: "articles",
    title: "Articles",
    items: [
      "How to learn & master a new skill under a week with Claude",
      "How I Passed the AZ-400 Azure DevOps Engineer Exam With No Prior Cloud Certification",
    ],
  },
  { id: "about", title: "About" },
];

export default function Home() {
  return (
    <>
      <Hero />

      <section id="github" className="scroll-mt-16 border-t border-dashed border-rail px-5 py-16 sm:px-8">
        <Reveal>
          <h2 className="text-[11px] font-medium tracking-[0.2em] text-muted uppercase">GitHub</h2>
          <div className="mt-6 text-muted">
            <GithubGraph />
          </div>
        </Reveal>
      </section>

      <section id="experience" className="scroll-mt-16 border-t border-dashed border-rail px-5 py-16 sm:px-8">
        <Reveal>
          <div className="flex items-baseline justify-between gap-4">
            <h2 className="text-[11px] font-medium tracking-[0.2em] text-muted uppercase">Worked with</h2>
            <span className="text-xs text-muted tabular-nums">{experience()} experience</span>
          </div>
          <ul className="mt-6">
            {companies.map((c) => (
              <li key={c.name} className="flex items-center justify-between gap-4 border-b border-dashed border-rail py-4 last:border-b-0">
                <div className="flex items-center gap-4">
                  <Image
                    src={c.logo}
                    alt=""
                    width={48}
                    height={48}
                    className={`size-12 shrink-0 rounded-lg object-contain ${c.logoTile ? "" : "border border-rail bg-white p-1"}`}
                  />
                  <div>
                    {c.href ? (
                      <a
                        href={c.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-serif text-2xl tracking-tight underline-offset-4 hover:underline"
                      >
                        {c.name}
                      </a>
                    ) : (
                      <span className="font-serif text-2xl tracking-tight">{c.name}</span>
                    )}
                    <p className="mt-1 text-xs text-muted">{c.role}</p>
                  </div>
                </div>
                <span className="shrink-0 text-xs text-muted tabular-nums">{c.dates}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </section>

      <section id="technologies" className="scroll-mt-16 border-t border-dashed border-rail px-5 py-16 sm:px-8">
        <Reveal>
          <h2 className="text-[11px] font-medium tracking-[0.2em] text-muted uppercase">Technologies</h2>
          <Technologies />
        </Reveal>
      </section>

      {sections.map((s) => (
        <section key={s.id} id={s.id} className="min-h-[80vh] scroll-mt-16 border-t border-dashed border-rail px-5 py-16 sm:px-8">
          <Reveal>
            <h2 className="font-serif text-4xl tracking-tight">{s.title}</h2>
            {s.items ? (
              <ul className="mt-6">
                {s.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-baseline justify-between gap-4 border-b border-dashed border-rail py-4 last:border-b-0"
                  >
                    <span className="font-serif text-2xl tracking-tight">{item}</span>
                    <span className="shrink-0 text-xs text-muted">Soon</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="mt-3 text-sm text-muted">Coming soon.</p>
            )}
          </Reveal>
        </section>
      ))}
    </>
  );
}
