"use client";

import { useEffect, useRef, type CSSProperties } from "react";

// Wrap a phrase in *asterisks* to set it in the italic serif.
const paragraphs = [
  "One idea has guided a lot of my career: powerful technology should be *accessible to everyone*. It started with no-code.",
  "Then a friend showed me an app he’d built with an early GPT model, and I didn’t think much of it. When ChatGPT launched, I didn’t make that mistake again.",
  "I started learning AI in public that day. That path led me to where I am now: building with AI, and sharing everything I learn along the way.",
];

type Word = { text: string; serif: boolean; space: boolean };

const parsed: Word[][] = paragraphs.map((para) => {
  const words: Word[] = [];
  para.split(/(\*[^*]+\*)/).forEach((chunk) => {
    if (!chunk) return;
    const serif = chunk.startsWith("*");
    for (const match of chunk.replace(/\*/g, "").matchAll(/(\S+)(\s*)/g)) {
      words.push({ text: match[1], serif, space: match[2].length > 0 });
    }
  });
  return words;
});

const total = parsed.reduce((n, p) => n + p.length, 0);

export function Mission() {
  const trackRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      track.style.setProperty("--p", "1");
      return;
    }

    let frame = 0;
    const update = () => {
      const rect = track.getBoundingClientRect();
      const sticky = track.firstElementChild as HTMLElement | null;
      const stickyH = sticky?.offsetHeight ?? window.innerHeight;
      const headerH =
        parseFloat(
          getComputedStyle(document.documentElement).getPropertyValue(
            "--header",
          ),
        ) || 0;
      // Real pinned distance: from the sticky engaging to the section ending.
      const travel = Math.max(1, track.offsetHeight - stickyH);
      // Finish inking at 85% of the pin so the full text is readable before
      // the section scrolls away (mobile viewport units can otherwise leave
      // the last words stuck grey).
      const p = Math.min(
        1,
        Math.max(0, (headerH - rect.top) / (travel * 0.85)),
      );
      track.style.setProperty("--p", p.toFixed(4));
    };
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  let index = 0;

  return (
    <section ref={trackRef} className="mission" aria-label="My story">
      <div className="mission__sticky">
        <div className="container mission__inner">
          <span className="mission__rail" aria-hidden />
          <div className="mission__text">
            {parsed.map((words, pi) => (
              <p key={pi}>
                {words.map((word, wi) => {
                  const t = index++ / Math.max(1, total - 1);
                  return (
                    <span key={wi}>
                      <span
                        className={`mission__word${word.serif ? " serif" : ""}`}
                        style={{ "--t": t } as CSSProperties}
                      >
                        {word.text}
                      </span>
                      {word.space ? " " : null}
                    </span>
                  );
                })}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
