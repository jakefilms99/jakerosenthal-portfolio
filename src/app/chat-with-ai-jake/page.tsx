import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI Jake",
  description: "Chat with an AI version of Jake — coming soon.",
  robots: { index: false },
};

export default function ChatWithAiJakePage() {
  return (
    <section className="simple-page container">
      <h1 className="simple-page__title">AI Jake</h1>
      <div className="simple-page__body">
        <span className="eyebrow">Coming soon</span>
        <p className="statement statement--md">
          An AI clone you can ask about my work. It’s still{" "}
          in the lab.
        </p>
        <Link href="/" className="text-cta">
          Back home
          <span className="arrow arrow--right" aria-hidden>
            →
          </span>
        </Link>
      </div>
    </section>
  );
}
