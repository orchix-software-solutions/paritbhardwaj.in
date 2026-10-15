"use client";

import { useSyncExternalStore } from "react";
import { GitHubCalendar } from "react-github-calendar";

// Follows the site's .dark class (set by ThemeToggle), not the OS setting.
function subscribe(onChange: () => void) {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["class"],
  });
  return () => observer.disconnect();
}
const isDark = () => document.documentElement.classList.contains("dark");
const noop = () => () => {};

export function GithubGraph() {
  const dark = useSyncExternalStore(subscribe, isDark, () => false);
  // The calendar depends on today's date and browser-only state, so render it in the browser only (avoids hydration mismatch).
  const mounted = useSyncExternalStore(
    noop,
    () => true,
    () => false,
  );
  if (!mounted) return null;

  // The library drops the current month's label until that month has 3 weeks (Sundays) of data; we draw it ourselves until then.
  const today = new Date();
  const sundays = Array.from(
    { length: today.getDate() },
    (_, i) => new Date(today.getFullYear(), today.getMonth(), i + 1),
  ).filter((d) => d.getDay() === 0).length;
  const month = today.toLocaleString("en-US", { month: "short" });
  const style =
    sundays < 3
      ? ({ "--gh-month": `"${month}"` } as React.CSSProperties)
      : undefined;

  return (
    <div className="gh-graph" style={style}>
      <GitHubCalendar
        username="paritbhardwaj019"
        colorScheme={dark ? "dark" : "light"}
        fontSize={12}
        blockMargin={3}
        theme={{
          light: ["#efeceb", "#f6c9a4", "#f0a66b", "#e8823a", "#b85a1c"],
          dark: ["#221f1d", "#5a3218", "#8f4b1f", "#e8823a", "#ffd9b8"],
        }}
      />
    </div>
  );
}
