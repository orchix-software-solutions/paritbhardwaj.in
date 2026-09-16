import Image from "next/image";


const EXPERIENCE = [
  {
    company: "Albearoti Solutions",
    logo: "/logo-albearoti.jpg",
    role: "Team Lead / Full Stack Engineer",
    period: "Oct 2024 — Aug 2026",
    href: "https://www.albearoti.com/",
    summary:
      "Led the development of a large-scale e-commerce platform with admin dashboards and buyer–seller workflows. Designed system architecture, built REST APIs, delivered the frontend using modern JavaScript frameworks, and owned the Azure infrastructure and release pipeline end to end.",
    points: [
      "Architected and led development of a multi-role e-commerce platform",
      "Built admin dashboards, buyer–seller workflows, and REST APIs",
      "Designed system architecture across frontend, backend, and database",
      "Built CI/CD pipelines in Azure DevOps for automated build, test and release",
      "Ran the platform on Azure App Services with Key Vault for secrets and Front Door for global routing, TLS and WAF",
      "Managed the engineering team and translated business requirements into software",
    ],
  },
  {
    company: "AICAN Private Limited",
    logo: "/logo-aican.webp",
    role: "Software Development Engineer",
    period: "May 2023 — Sep 2024",
    href: "#",
    summary:
      "Built and maintained web applications and internal tools for manufacturing and MSME clients using the MERN stack. Delivered performant user interfaces, backend APIs, and real-time data integrations that improved operational efficiency.",
    points: [
      "Developed full-stack features for manufacturing and MSME clients",
      "Built performant UIs and backend APIs with the MERN stack",
      "Integrated real-time data pipelines and third-party services",
      "Improved operational efficiency through automation and tooling",
    ],
  },
  {
    company: "BrightIntern",
    logo: "/logo-bright-intern.png",
    role: "Frontend Development Intern",
    period: "Feb 2023 — May 2023",
    href: "#",
    summary:
      "Developed frontend features for a community-based web platform using modern JavaScript frameworks. Focused on reusable components, performance improvements, and fixing UI issues to improve user experience and load times.",
    points: [
      "Built reusable frontend components for a community web platform",
      "Improved performance and fixed UI/UX issues across the app",
      "Worked with modern JavaScript frameworks in a production codebase",
      "Collaborated with senior developers on real client-facing features",
    ],
  },
  {
    company: "Microelectronics",
    logo: "/logo-microelectronics.svg",
    logoClass: "mt-0.5 size-14 shrink-0 rounded-lg border border-white/20 bg-transparent object-contain",
    role: "Web Developer",
    period: "Jun 2021 — Dec 2021",
    href: "#",
    summary:
      "Built and customized a WooCommerce-based e-commerce website with payment integrations. Worked on frontend customization and feature enhancements using HTML, CSS, and JavaScript.",
    points: [
      "Built and customised a WooCommerce e-commerce store end-to-end",
      "Integrated payment gateways and third-party plugins",
      "Delivered frontend enhancements using HTML, CSS, and JavaScript",
      "Worked directly with the client to implement and iterate on requirements",
    ],
  },
];

const si = (slug: string, color: string) =>
  `https://cdn.simpleicons.org/${slug}/${color}`;

const TAG_ICONS: Record<string, React.ReactNode> = {
  React:        <img src={si("react",        "61DAFB")} className="size-4" alt="" aria-hidden />,
  "Next.js":    <img src={si("nextdotjs",    "ffffff")} className="size-4" alt="" aria-hidden />,
  "Node.js":    <img src={si("nodedotjs",    "5FA04E")} className="size-4" alt="" aria-hidden />,
  TypeScript:   <img src={si("typescript",   "3178C6")} className="size-4" alt="" aria-hidden />,
  Express:      <img src={si("express",      "ffffff")} className="size-4" alt="" aria-hidden />,
  Vite:         <img src={si("vite",         "646CFF")} className="size-4" alt="" aria-hidden />,
  Redis:        <img src={si("redis",        "FF4438")} className="size-4" alt="" aria-hidden />,
  Elasticsearch:<img src={si("elasticsearch","005571")} className="size-4" alt="" aria-hidden />,
  Azure:        <img src={si("microsoftazure","0078D4")} className="size-4" alt="" aria-hidden />,
  Fastify:      <img src={si("fastify",      "ffffff")} className="size-4" alt="" aria-hidden />,
  Bun:          <img src={si("bun",          "FBF0DF")} className="size-4" alt="" aria-hidden />,
  Drizzle:      <img src={si("drizzle",      "C5F74F")} className="size-4" alt="" aria-hidden />,
  Docker:       <img src={si("docker",       "2496ED")} className="size-4" alt="" aria-hidden />,
  Firebase:     <img src={si("firebase",     "FFCA28")} className="size-4" alt="" aria-hidden />,
  PostgreSQL:   <img src={si("postgresql",   "4169E1")} className="size-4" alt="" aria-hidden />,
  MongoDB:      <img src={si("mongodb",      "47A248")} className="size-4" alt="" aria-hidden />,
  Tailwind:     <img src={si("tailwindcss",  "06B6D4")} className="size-4" alt="" aria-hidden />,
  OpenAI:       <img src={si("openai",       "ffffff")} className="size-4" alt="" aria-hidden />,
  HuggingFace:  <img src={si("huggingface", "FFD21E")} className="size-4" alt="" aria-hidden />,
  Pinecone: (
    <svg viewBox="0 0 256 288" className="size-4" aria-hidden>
      <path fill="#1C8C5E" d="M108.634 254.436c9.08 0 16.44 7.361 16.44 16.442s-7.36 16.44-16.44 16.44s-16.442-7.36-16.442-16.44s7.361-16.442 16.442-16.442m91.216-29.998l16.247 4.814L203.2 272.78a8.47 8.47 0 0 1-8.7 6.046l-3.983-.273l-.098.08l-41.39-2.904l1.152-16.906l27.808 1.887l-18.205-26.262l13.926-9.656l18.229 26.295zm-176.837-30.09l16.903 1.197l-1.98 27.804L64.15 205.12l9.677 13.91l-26.248 18.248l26.792 7.895l-4.79 16.255l-43.732-12.885a8.47 8.47 0 0 1-6.058-8.726zM132.15 170.67l30.508 36.832l-13.75 11.389l-18.156-21.92l-5.886 33.702l-17.587-3.074l5.892-33.755l-24.442 14.412l-9.063-15.383l41.079-24.2a8.93 8.93 0 0 1 11.405 1.997m85.354-24.71l15.239-8.292l22.2 40.805a8.675 8.675 0 0 1-1.926 10.69l-3.141 2.714l-32.05 27.893l-11.386-13.09l21.548-18.747l-32.095-5.781l3.078-17.074l32.073 5.779zM37.782 103.298l11.48 13.008l-21.251 18.743l32.156 5.614l-2.98 17.091l-32.192-5.618l13.827 24.998l-15.18 8.398l-22.558-40.776a8.675 8.675 0 0 1 1.85-10.703zm108.694-13.42l30.404 36.734l-13.753 11.384l-18.152-21.93l-5.886 33.712l-17.587-3.074l5.872-33.624l-24.349 14.274l-9.027-15.403l37.4-21.929l.038-.142l.165.021l3.485-2.032a8.93 8.93 0 0 1 11.39 2.01m39.18-18.065l6.65-16.024l43.012 17.85a8.675 8.675 0 0 1 5.218 9.517l-.716 3.982l-7.345 41.78l-17.086-3.01l4.924-27.968l-28.537 15.772l-8.386-15.188l28.591-15.784zm-81.939-31.577l.74 17.334l-28.414 1.214l21.43 24.49l-13.056 11.424L62.95 70.173l-5.001 28l-17.078-3.054l8.184-45.759a8.674 8.674 0 0 1 8.17-7.139l4.02-.18l.09-.065zm58.121-36.965l30.267 36.965l-13.814 11.31l-17.964-21.943l-6.059 33.668l-17.57-3.162l6.068-33.743l-24.526 14.34l-9.007-15.415L150.428 1.22a8.93 8.93 0 0 1 11.41 2.052"/>
    </svg>
  ),
  ChromaDB: (
    <svg viewBox="0 0 256 164" className="size-4" aria-hidden>
      <ellipse cx="170.667" cy="81.92" fill="#ffde2d" rx="85.333" ry="81.92"/>
      <ellipse cx="85.333"  cy="81.92" fill="#327eff" rx="85.333" ry="81.92"/>
      <path fill="#ff6446" d="M170.667 81.92c0 45.243-38.206 81.92-85.334 81.92V81.92zm-85.334 0C85.333 36.677 123.538 0 170.667 0v81.92z"/>
    </svg>
  ),
};

const PROOF_OF_WORK = [
  {
    name: "MeetMind",
    thumb: "/project-meetmind.png",
    blurb:
      "AI meeting assistant that sends a note-taker bot to your calls, transcribes them, and turns the transcript into summaries, action items and a RAG chat over your whole history. Turborepo monorepo with a Next.js 15 dashboard, an Express API, Prisma on PostgreSQL, ChromaDB vector search and Groq for summaries.",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "ChromaDB", "HuggingFace", "Node.js"],
    href: "/projects/meetmind",
  },
  {
    name: "Bazark",
    thumb: "/project-bazark.png",
    blurb:
      "Arabic-first multi-vendor marketplace covering listings, live auctions, escrow payments and shipping. RTL-first Next.js storefront on an Express API, with Elasticsearch powering search and Redis backing the auction and session layer.",
    tags: ["Next.js", "TypeScript", "MongoDB", "Elasticsearch", "Redis", "Azure"],
    href: "/projects/bazark",
  },
  {
    name: "WareFlow",
    thumb: "/project-wareflow.png",
    blurb:
      "Freelance — Inventory management for multi-warehouse operations: stock across locations, transfers, reorder thresholds and WhatsApp alerts. Next.js dashboard on a Fastify + Bun API with Drizzle over PostgreSQL, shipped in Docker.",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Fastify", "Bun", "Docker"],
    href: "/projects/wareflow",
  },
  {
    name: "Sherly Jewels",
    thumb: "/project-sherly-jewels.png",
    blurb:
      "Freelance — Jewellery ERP that runs the whole floor: customer orders, CAD approvals, stone and metal allocation, factory job cards and employee management. Next.js front end on a Fastify API with MongoDB, S3 for CAD assets and Firebase notifications.",
    tags: ["Next.js", "TypeScript", "MongoDB", "Fastify", "Firebase", "Docker"],
    href: "/projects/sherly-jewels",
  },
  {
    name: "SourceCart",
    thumb: "/project-sourcecart.png",
    blurb:
      "A marketplace for production-ready source code — developers browse, buy and instantly download full SaaS apps, admin panels and business systems. Turborepo monorepo running a customer storefront, a support dashboard and an Express API on MongoDB.",
    tags: ["React", "TypeScript", "Node.js", "MongoDB", "Tailwind"],
    href: "#",
  },  {
    name: "NextView KAVACH",
    thumb: "/project-nextview-kavach.png",
    blurb:
      "Freelance — Dealer portal for license activation, renewals and expiry tracking at scale. Covers activations, expiration alerts, birthday reminders, license key management, dealer management, and support — built with React, Node.js, Express and MongoDB.",
    tags: ["React", "Node.js", "MongoDB", "Express", "Tailwind", "Vite"],
    href: "/projects/nextview-kavach",
  },

];

/* Blogs — hidden until there are real posts to link.
const BLOGS = [
  // TODO: swap in your real posts
  {
    title: "Designing a multi-tenant Postgres schema that survives growth",
    date: "Aug 2026",
    excerpt:
      "Row-level security, shared tables and the migration path we picked after outgrowing schema-per-tenant.",
    href: "#",
  },
  {
    title: "Shipping a monorepo without the tooling tax",
    date: "Jun 2026",
    excerpt:
      "Turborepo, Bun workspaces and the handful of conventions that kept builds under a minute.",
    href: "#",
  },
  {
    title: "The boring way to add background jobs to a Node API",
    date: "Apr 2026",
    excerpt:
      "Why a queue table and a worker loop beat a new dependency for most products.",
    href: "#",
  },
];
*/


const TAGLINE =
  "Build the systems, polish the details, and make the product feel inevitable.";

function SocialLink({
  href,
  label,
  side,
  children,
}: {
  href: string;
  label: string;
  side: "left" | "right";
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="group relative transition-colors hover:text-white"
    >
      {children}
      <span
        className={`pointer-events-none absolute top-1/2 z-20 -translate-y-1/2 whitespace-nowrap rounded-md border border-white/10 bg-black/90 px-2 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-neutral-400 opacity-0 backdrop-blur transition-opacity group-hover:opacity-100 ${
          side === "left" ? "right-full mr-2" : "left-full ml-2"
        }`}
      >
        {label}
      </span>
    </a>
  );
}

export default function Home() {
  return (
    <main className="noise-bg relative flex h-dvh justify-center overflow-hidden bg-black">
      <div className="hatch w-4 shrink-0 border-l border-white/10 sm:w-10 lg:w-16" />

      <div className="no-scrollbar h-full w-full max-w-3xl overflow-y-auto border-x border-white/10">
        <header className="relative">
          <div className="relative h-56 overflow-hidden sm:h-64">
            <Image
              src="/night-street.jpg"
              alt=""
              fill
              priority
              sizes="768px"
              className="banner-img object-cover"
            />
            <div className="banner-scrim absolute inset-0 bg-black/40" />
            <p className="absolute inset-0 flex items-center justify-center px-5 text-center font-serif text-xl italic text-white drop-shadow-lg sm:px-8 sm:text-3xl md:text-4xl">
              <span>
                {TAGLINE.split(" ").map((word, i) => (
                  <span
                    key={i}
                    className="word"
                    style={{ animationDelay: `${i * 45}ms` }}
                  >
                    {word}&nbsp;
                  </span>
                ))}
              </span>
            </p>
          </div>

          {/* drop a file at public/photo.jpg, then swap this div for:
              <Image src="/photo.jpg" alt="Parit Bhardwaj" width={432} height={432} priority
                className="absolute bottom-0 left-8 size-28 translate-y-1/2 rounded-full object-cover ring-4 ring-black" /> */}
          <div className="absolute bottom-0 left-5 size-20 translate-y-1/2 overflow-hidden rounded-full bg-neutral-900 ring-4 ring-black sm:left-8 sm:size-28">
            <Image
              src="/profile.jpg"
              alt="Parit Bhardwaj"
              fill
              priority
              sizes="112px"
              className="object-cover"
            />
          </div>
        </header>

        <div className="h-px bg-gradient-to-r from-transparent via-white/25 to-transparent" />

        <section className="px-5 pb-10 pt-14 sm:px-8 sm:pt-16">
          <div className="flex items-start justify-between gap-3 sm:gap-6">
            <div>
              <h1 className="name-in font-serif text-2xl tracking-tight text-white sm:text-4xl">
                Parit Bhardwaj
              </h1>
              <p className="role-in mt-2 font-mono text-[10px] uppercase tracking-[0.12em] text-neutral-500 sm:text-xs sm:tracking-[0.18em]">
                4+ yrs<span className="mx-2.5 text-neutral-700">&mdash;</span>
                Senior Full Stack Engineer
              </p>
            </div>

            <div className="flex flex-col items-end gap-3">
              <div className="flex items-center gap-2">
                <a
                  href="/resume.pdf"
                  download="Parit Bhardwaj - Resume.pdf"
                  className="whitespace-nowrap rounded-full border border-white/10 bg-white/5 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.12em] text-neutral-300 backdrop-blur transition-colors hover:border-white/20 hover:bg-white/10 hover:text-white sm:px-4 sm:py-2 sm:text-[11px] sm:tracking-[0.15em]"
                >
                  Resume
                </a>

              </div>

              {/* TODO: replace with your real profile URLs */}
              <div className="flex items-center gap-4 text-neutral-500">
                <SocialLink
                  href="https://github.com/paritbhardwaj019"
                  label="GitHub"
                  side="left"
                >
                  <svg
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="size-5"
                  >
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82a7.6 7.6 0 0 1 2-.27c.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8Z" />
                  </svg>
                </SocialLink>

                <SocialLink href="https://x.com/whynotparit" label="X" side="right">
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-[18px]"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117l11.966 15.644Z" />
                  </svg>
                </SocialLink>
              </div>
            </div>
          </div>
        </section>

        <div className="h-px bg-gradient-to-r from-transparent via-white/25 to-transparent" />

        <section className="max-w-[62ch] px-5 py-10 sm:px-8 sm:py-14">
          <p className="text-[15px] leading-relaxed text-neutral-200 sm:text-lg">
            I build scalable, production-ready web applications and AI-powered products
            that turn complex ideas into simple, reliable experiences.
          </p>
          <p className="mt-4 text-[15px] leading-relaxed text-neutral-400 sm:text-base">
            As a Senior Full Stack Engineer, I work across frontend, backend, AI, APIs,
            databases, and cloud infrastructure to take products from idea to production.
            I focus on clean architecture, strong engineering, performance, and polished
            user experiences, whether I&rsquo;m building something new, improving an
            existing product, or solving a difficult technical problem.
          </p>
        </section>

        <div className="h-px bg-gradient-to-r from-transparent via-white/25 to-transparent" />

        <section className="px-5 py-10 sm:px-8 sm:py-14">
          <div className="flex items-baseline justify-between gap-4">
            <h2 className="font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-500 sm:text-xs">
              Professional Experience
            </h2>
            <span className="rounded-full border border-amber-500/30 bg-amber-500/10 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-amber-400">
              4+ yrs
            </span>
          </div>

          <div className="mt-7">
            {EXPERIENCE.map((job) => (
              <details
                key={job.company}
                className="group border-t border-white/15 first:border-t-0"
              >
                <summary className="flex cursor-pointer list-none items-start gap-4 py-5 [&::-webkit-details-marker]:hidden">
                  <Image
                    src={job.logo}
                    alt=""
                    width={72}
                    height={72}
                    className={job.logoClass ?? "mt-0.5 size-14 shrink-0 rounded-lg border border-white/10 bg-white object-contain p-1.5"}
                  />

                  <div className="min-w-0 flex-1">
                    <h3 className="text-[15px] text-white transition-colors group-hover:text-amber-100">
                      {job.company}
                    </h3>
                    <p className="mt-0.5 font-mono text-[10px] uppercase tracking-[0.14em] text-neutral-500">
                      {job.role}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-neutral-400 group-open:hidden line-clamp-1">
                      {job.summary}
                    </p>
                  </div>

                  <span className="hidden shrink-0 pt-1 font-mono text-[10px] uppercase tracking-[0.12em] text-neutral-500 sm:block">
                    {job.period}
                  </span>

                  <span className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-full border border-white/10 text-neutral-500 transition-transform group-open:rotate-180">
                    <svg viewBox="0 0 24 24" fill="none" className="size-3.5">
                      <path
                        d="m6 9 6 6 6-6"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </summary>

                <div className="pb-6 pl-18 pr-2">
                  <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-neutral-500 sm:hidden">
                    {job.period}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-400 sm:mt-0">
                    {job.summary}
                  </p>

                  <ul className="mt-4 space-y-1.5">
                    {job.points.map((point) => (
                      <li
                        key={point}
                        className="flex gap-2.5 text-sm leading-relaxed text-neutral-400"
                      >
                        <span className="text-neutral-700">&bull;</span>
                        {point}
                      </li>
                    ))}
                  </ul>

                  <a
                    href={job.href}
                    {...(job.href.startsWith("http") ? { target: "_blank", rel: "noreferrer" } : {})}
                    className="mt-5 inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.14em] text-neutral-500 transition-colors hover:text-white"
                  >
                    View company <span aria-hidden>&#8599;</span>
                  </a>
                </div>
              </details>
            ))}
          </div>
        </section>

        <div className="h-px bg-gradient-to-r from-transparent via-white/25 to-transparent" />

        <section className="px-5 py-10 sm:px-8 sm:py-14">
          <h2 className="font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-500 sm:text-xs">
            Proof of Work
          </h2>

          <div className="mt-7 grid gap-8 sm:grid-cols-2">
            {PROOF_OF_WORK.map((project) => (
              <a
                key={project.name}
                href={project.href}
                {...(project.href.startsWith("http") ? { target: "_blank", rel: "noreferrer" } : {})}
                className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] transition-colors hover:border-white/25 hover:bg-white/[0.06]"
              >
                {/* upper part: image flush at rest, gradient revealed on hover */}
                <div className="relative aspect-[2/1] overflow-hidden bg-neutral-900">
                  <div className="card-art absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  <div className="absolute inset-0 overflow-hidden transition-all duration-500 group-hover:inset-x-6 group-hover:bottom-0 group-hover:top-12 group-hover:rounded-t-xl">
                    <div
                      style={{ backgroundImage: `url(${project.thumb})` }}
                      className="size-full bg-[length:100%_auto] bg-top bg-no-repeat"
                    />
                  </div>
                </div>

                <div className="mt-5 flex items-start justify-between gap-3 px-4">
                  <h3 className="font-serif text-xl text-white transition-colors group-hover:text-amber-100">
                    {project.name}
                  </h3>
                  <span
                    aria-hidden
                    className="flex size-7 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-xs text-neutral-400 transition-colors group-hover:border-white/25 group-hover:text-white"
                  >
                    &#8599;
                  </span>
                </div>

                <p className="mt-2 line-clamp-3 px-4 text-sm leading-relaxed text-neutral-400">
                  {project.blurb}
                </p>

                <div className="mb-4 mt-4 flex flex-wrap gap-2 px-4">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="group/tag relative inline-flex h-8 min-w-8 items-center justify-center rounded-full bg-white/5 px-2 text-xs text-neutral-400"
                    >
                      {TAG_ICONS[tag] ?? tag}
                      <span className="pointer-events-none absolute -top-8 left-1/2 z-10 -translate-x-1/2 whitespace-nowrap rounded border border-white/10 bg-neutral-950 px-2 py-1 font-mono text-[10px] tracking-wide text-neutral-300 opacity-0 shadow-lg transition-opacity group-hover/tag:opacity-100">
                        {tag}
                      </span>
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="inline-flex h-8 min-w-8 items-center justify-center rounded-full bg-white/5 px-2 text-xs text-neutral-500">
                      +{project.tags.length - 3}
                    </span>
                  )}
                </div>
              </a>
            ))}
          </div>
        </section>

        <div className="h-px bg-gradient-to-r from-transparent via-white/25 to-transparent" />

        <section className="px-5 py-10 sm:px-8 sm:py-14">
          <h2 className="font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-500 sm:text-xs">
            Contact
          </h2>

          <p className="mt-5 max-w-[52ch] text-[15px] leading-relaxed text-neutral-400">
            Open to freelance work and full-time roles. The fastest way to reach me is email &mdash;
            I read everything and reply.
          </p>

          <a
            href="mailto:paritbhardwaj@outlook.com"
            className="group mt-6 inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/5 px-5 py-3 transition-colors hover:border-white/30 hover:bg-white/10"
          >
            <svg viewBox="0 0 24 24" fill="none" className="size-4 text-neutral-400 transition-colors group-hover:text-white">
              <rect x="2.5" y="4.5" width="19" height="15" rx="2.5" stroke="currentColor" strokeWidth="1.6" />
              <path d="m3.5 7 8.5 6 8.5-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="font-mono text-xs tracking-[0.06em] text-neutral-300 transition-colors group-hover:text-white">
              paritbhardwaj@outlook.com
            </span>
          </a>
        </section>

{/* Blogs — hidden until there are real posts to link.
        <section className="px-5 py-10 sm:px-8 sm:py-14">
          <h2 className="font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-500 sm:text-xs">
            Blogs
          </h2>

          <div className="mt-7">
            {BLOGS.map((post) => (
              <a
                key={post.title}
                href={post.href}
                target="_blank"
                rel="noreferrer"
                className="group flex items-start gap-4 border-t border-white/15 py-5 first:border-t-0"
              >
                <div className="min-w-0 flex-1">
                  <h3 className="font-serif text-lg text-white transition-colors group-hover:text-amber-100">
                    {post.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-neutral-400">
                    {post.excerpt}
                  </p>
                  <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.14em] text-neutral-600">
                    {post.date}
                  </p>
                </div>

                <span
                  aria-hidden
                  className="mt-1 flex size-7 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-xs text-neutral-400 transition-colors group-hover:border-white/25 group-hover:text-white"
                >
                  &#8599;
                </span>
              </a>
            ))}
          </div>
        </section>
*/}

        <div className="h-px bg-gradient-to-r from-transparent via-white/25 to-transparent" />
      </div>

      <div className="hatch w-4 shrink-0 border-r border-white/10 sm:w-10 lg:w-16" />

      {/* glass vignette on the scroll edges */}
      <div className="pointer-events-none absolute inset-x-0 top-0 z-20 h-20 bg-gradient-to-b from-black/70 to-transparent backdrop-blur-[3px] [mask-image:linear-gradient(to_bottom,black,transparent)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-20 bg-gradient-to-t from-black/70 to-transparent backdrop-blur-[3px] [mask-image:linear-gradient(to_top,black,transparent)]" />
    </main>
  );
}
