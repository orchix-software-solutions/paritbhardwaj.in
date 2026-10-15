import type { Metadata } from "next";
import { Instrument_Serif, JetBrains_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { MotionProvider, ScrollProgress, SmoothScroll } from "./smooth-scroll";
// import Loader from "./loader";
import ThemeToggle from "./theme-toggle";

const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains" });
const serif = Instrument_Serif({ subsets: ["latin"], weight: "400", style: ["normal", "italic"], variable: "--font-instrument-serif" });

// Runs before paint: saved choice wins, otherwise follow the OS setting. Avoids a flash of the wrong theme.
const themeScript = `try{var t=localStorage.getItem("theme");document.documentElement.classList.toggle("dark",t?t==="dark":matchMedia("(prefers-color-scheme: dark)").matches)}catch(e){}`;

const title = "Parit Bhardwaj - Senior AI & Full Stack Engineer";
const description =
  "I'm Parit Bhardwaj, a senior AI & full stack engineer. I build beautiful products, from the first idea to launch day.";

// og:image and twitter:image come from opengraph-image.png / twitter-image.png in this folder
export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    type: "website",
    siteName: "Parit Bhardwaj",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${mono.variable} ${serif.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="font-mono">
        {/* <Loader /> */}
        {/* centred column with dashed side rails; the hatched body background shows outside it */}
        <div className="mx-auto min-h-dvh max-w-2xl border-x border-dashed border-rail bg-bg">
          <MotionProvider>
            <SmoothScroll />
            <header className="sticky top-0 z-10 flex items-center justify-end bg-bg/80 px-5 py-3 backdrop-blur sm:px-8">
              <ThemeToggle />
              <ScrollProgress />
            </header>
            {children}
          </MotionProvider>
        </div>
        {/* oneko: pixel cat that chases the cursor (github.com/adryd325/oneko.js), same as paritbhardwaj.in */}
        <Script src="/oneko.js" data-cat="/oneko.gif" />
      </body>
    </html>
  );
}
