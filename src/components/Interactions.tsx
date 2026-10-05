"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * Replays the Webflow IX2 entrance animations: any element with `data-ix`
 * starts hidden (see globals.css) and gets `data-ix-in` once it scrolls into
 * view. Uses the CSS `translate` property so Webflow `transform` rules such as
 * the tilted TikTok card are left intact.
 */
export function Interactions() {
  const pathname = usePathname();

  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>(
      "[data-ix]:not([data-ix-in])",
    );
    if (!("IntersectionObserver" in window)) {
      elements.forEach((el) => el.setAttribute("data-ix-in", ""));
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.setAttribute("data-ix-in", "");
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -10% 0px" },
    );
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [pathname]);

  useEffect(() => {
    const root = document.documentElement;
    const night = document.querySelector(".night");

    const syncChrome = () => {
      const headerH =
        parseFloat(getComputedStyle(root).getPropertyValue("--header")) || 72;
      const nightTop = night?.getBoundingClientRect().top ?? Number.POSITIVE_INFINITY;
      const inNight = nightTop <= headerH + 12;

      root.classList.toggle("is-night", inNight);
      root.dataset.chrome = inNight ? "night" : "day";
    };

    syncChrome();
    window.addEventListener("scroll", syncChrome, { passive: true });
    window.addEventListener("resize", syncChrome);
    return () => {
      window.removeEventListener("scroll", syncChrome);
      window.removeEventListener("resize", syncChrome);
      root.classList.remove("is-night");
      delete root.dataset.chrome;
    };
  }, [pathname]);

  return null;
}
