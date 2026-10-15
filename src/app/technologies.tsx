// Same list and Simple Icons logos as paritbhardwaj.in. `mono` logos are black, so they're inverted in dark mode.
const tech: { name: string; group: string; slug?: string; mono?: boolean; icon?: React.ReactNode }[] = [
  { name: "React", group: "Frontend", slug: "react" },
  { name: "Next.js", group: "Frontend", slug: "nextdotjs", mono: true },
  { name: "Node.js", group: "Backend", slug: "nodedotjs" },
  { name: "TypeScript", group: "Languages", slug: "typescript" },
  { name: "Python", group: "Languages", slug: "python" },
  { name: "Express", group: "Backend", slug: "express", mono: true },
  { name: "NestJS", group: "Backend", slug: "nestjs" },
  { name: "Vite", group: "Frontend", slug: "vite" },
  { name: "Redis", group: "Databases", slug: "redis" },
  { name: "Elasticsearch", group: "Databases", slug: "elasticsearch" },
  {
    name: "Azure",
    group: "Cloud & DevOps",
    icon: (
      <svg viewBox="0 0 24 24" className="size-4" fill="#0078D4" aria-hidden="true">
        <path d="M5.483 21.3H24L14.025 4.013l-3.038 8.347 5.836 6.938L5.483 21.3zM13.23 2.7L6.105 8.677 0 19.253h5.505v.014L13.23 2.7z" />
      </svg>
    ),
  },
  { name: "Fastify", group: "Backend", slug: "fastify", mono: true },
  { name: "Bun", group: "Backend", slug: "bun", mono: true },
  { name: "Drizzle", group: "Databases", slug: "drizzle/000000", mono: true }, // brand lime is invisible on white,
  { name: "Docker", group: "Cloud & DevOps", slug: "docker" },
  { name: "Kubernetes", group: "Cloud & DevOps", slug: "kubernetes" },
  { name: "Firebase", group: "Databases", slug: "firebase" },
  { name: "Supabase", group: "Databases", slug: "supabase" },
  { name: "PostgreSQL", group: "Databases", slug: "postgresql" },
  { name: "MongoDB", group: "Databases", slug: "mongodb" },
  { name: "Tailwind", group: "Frontend", slug: "tailwindcss" },
  {
    name: "OpenAI",
    group: "AI",
    icon: (
      <svg viewBox="0 0 24 24" className="size-4" fill="currentColor" aria-hidden="true">
        <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z" />
      </svg>
    ),
  },
  { name: "HuggingFace", group: "AI", slug: "huggingface" },
  {
    name: "Pinecone",
    group: "AI",
    icon: (
      <svg viewBox="0 0 256 288" className="size-4" aria-hidden="true">
        <path
          fill="#1C8C5E"
          d="M108.634 254.436c9.08 0 16.44 7.361 16.44 16.442s-7.36 16.44-16.44 16.44s-16.442-7.36-16.442-16.44s7.361-16.442 16.442-16.442m91.216-29.998l16.247 4.814L203.2 272.78a8.47 8.47 0 0 1-8.7 6.046l-3.983-.273l-.098.08l-41.39-2.904l1.152-16.906l27.808 1.887l-18.205-26.262l13.926-9.656l18.229 26.295zm-176.837-30.09l16.903 1.197l-1.98 27.804L64.15 205.12l9.677 13.91l-26.248 18.248l26.792 7.895l-4.79 16.255l-43.732-12.885a8.47 8.47 0 0 1-6.058-8.726zM132.15 170.67l30.508 36.832l-13.75 11.389l-18.156-21.92l-5.886 33.702l-17.587-3.074l5.892-33.755l-24.442 14.412l-9.063-15.383l41.079-24.2a8.93 8.93 0 0 1 11.405 1.997m85.354-24.71l15.239-8.292l22.2 40.805a8.675 8.675 0 0 1-1.926 10.69l-3.141 2.714l-32.05 27.893l-11.386-13.09l21.548-18.747l-32.095-5.781l3.078-17.074l32.073 5.779zM37.782 103.298l11.48 13.008l-21.251 18.743l32.156 5.614l-2.98 17.091l-32.192-5.618l13.827 24.998l-15.18 8.398l-22.558-40.776a8.675 8.675 0 0 1 1.85-10.703zm108.694-13.42l30.404 36.734l-13.753 11.384l-18.152-21.93l-5.886 33.712l-17.587-3.074l5.872-33.624l-24.349 14.274l-9.027-15.403l37.4-21.929l.038-.142l.165.021l3.485-2.032a8.93 8.93 0 0 1 11.39 2.01m39.18-18.065l6.65-16.024l43.012 17.85a8.675 8.675 0 0 1 5.218 9.517l-.716 3.982l-7.345 41.78l-17.086-3.01l4.924-27.968l-28.537 15.772l-8.386-15.188l28.591-15.784zm-81.939-31.577l.74 17.334l-28.414 1.214l21.43 24.49l-13.056 11.424L62.95 70.173l-5.001 28l-17.078-3.054l8.184-45.759a8.674 8.674 0 0 1 8.17-7.139l4.02-.18l.09-.065zm58.121-36.965l30.267 36.965l-13.814 11.31l-17.964-21.943l-6.059 33.668l-17.57-3.162l6.068-33.743l-24.526 14.34l-9.007-15.415L150.428 1.22a8.93 8.93 0 0 1 11.41 2.052"
        />
      </svg>
    ),
  },
  {
    name: "ChromaDB",
    group: "AI",
    icon: (
      <svg viewBox="0 0 256 164" className="size-4" aria-hidden="true">
        <ellipse cx="170.667" cy="81.92" fill="#ffde2d" rx="85.333" ry="81.92" />
        <ellipse cx="85.333" cy="81.92" fill="#327eff" rx="85.333" ry="81.92" />
        <path
          fill="#ff6446"
          d="M170.667 81.92c0 45.243-38.206 81.92-85.334 81.92V81.92zm-85.334 0C85.333 36.677 123.538 0 170.667 0v81.92z"
        />
      </svg>
    ),
  },
  { name: "Jest", group: "Testing", slug: "jest" },
  { name: "Vitest", group: "Testing", slug: "vitest" },
  { name: "Cypress", group: "Testing", slug: "cypress" },
];

const groups = ["Languages", "Frontend", "Backend", "Databases", "AI", "Cloud & DevOps", "Testing"];

export default function Technologies() {
  return groups.map((group) => (
    <div key={group} className="mt-6">
      <h3 className="text-xs text-muted">{group}</h3>
      <ul className="mt-2 flex flex-wrap gap-2">
        {tech
          .filter((t) => t.group === group)
          .map((t) => (
            <li key={t.name} className="inline-flex items-center gap-2 rounded-lg border border-rail px-2.5 py-1.5 text-xs">
              {t.icon ?? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={`https://cdn.simpleicons.org/${t.slug}`}
                  alt=""
                  aria-hidden="true"
                  loading="lazy"
                  className={`size-4 ${t.mono ? "dark:invert" : ""}`}
                />
              )}
              {t.name}
            </li>
          ))}
      </ul>
    </div>
  ));
}
