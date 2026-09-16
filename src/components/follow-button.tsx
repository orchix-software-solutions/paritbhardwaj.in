"use client";

import { useEffect, useSyncExternalStore } from "react";

function subscribe(onChange: () => void) {
  window.addEventListener("following", onChange);
  window.addEventListener("storage", onChange);
  return () => {
    window.removeEventListener("following", onChange);
    window.removeEventListener("storage", onChange);
  };
}

export function FollowButton() {
  const following = useSyncExternalStore(
    subscribe,
    () => localStorage.getItem("following") === "1",
    () => false,
  );

  useEffect(() => {
    document.documentElement.classList.toggle("lit", following);
  }, [following]);

  function toggle() {
    localStorage.setItem("following", following ? "0" : "1");
    window.dispatchEvent(new Event("following"));
  }

  return (
    <button
      onClick={toggle}
      aria-pressed={following}
      className="cursor-pointer whitespace-nowrap rounded-full border border-white/10 bg-white/5 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.12em] sm:px-4 sm:py-2 sm:text-[11px] sm:tracking-[0.15em] text-neutral-300 backdrop-blur transition-colors hover:border-white/20 hover:bg-white/10 hover:text-white"
    >
      {following ? "Following" : "Follow"}
      <span className="mx-2 text-neutral-700">|</span>
      <span
        className={
          following
            ? "text-white tabular-nums"
            : "text-neutral-500 tabular-nums"
        }
      >
        {following ? 1 : 0}
      </span>
    </button>
  );
}
