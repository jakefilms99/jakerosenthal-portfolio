import type { CSSProperties } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Placeholder } from "@/components/Placeholder";
import { RolePath } from "@/components/RolePath";
import { cassidyDescription, highlights } from "@/lib/cassidy";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Cassidy",
  description: cassidyDescription,
};

export default function CassidyPage() {
  return (
    <article className="case-page">
      <header className="case-page__head container">
        <nav className="crumbs eyebrow" aria-label="Breadcrumb">
          <Link href="/#work">Work</Link>
          <span aria-hidden>/</span>
          <span>Cassidy</span>
        </nav>
        <h1 className="case-page__title" data-ix="">
          Cassidy
        </h1>
        <p className="case-page__lede statement statement--md" data-ix="">
          {cassidyDescription}
        </p>
        <p className="case-page__meta label" data-ix="">
          Employee #3 · Product marketing &amp; growth · New York
        </p>
        <a
          className="text-link-arrow"
          href={site.cassidy}
          target="_blank"
          rel="noreferrer"
          data-ix=""
        >
          cassidyai.com <span className="arrow" aria-hidden>↗</span>
        </a>
      </header>

      <Placeholder
        className="case-page__cover container"
        label="Cassidy — team / office photo"
        tone="var(--paper-deep)"
        ratio="21 / 9"
      />

      <section className="case-page__section container">
        <h2 className="section-title" data-ix="">
          The story
        </h2>
        <div className="prose prose--lead" data-ix="">
          <p>
            I joined as employee #3 when we were five people total — co-founders
            included — in a WeWork in New York City. We were early. Revenue was
            still in the low six figures. My job was whatever the company needed
            next.
          </p>
          <p>
            Over the next 2.5 years we grew into a 30+ person company in our own
            office, with multiple seven figures of enterprise ARR and some of the
            biggest logos in our space. That growth wasn’t a straight line. One of
            the hardest shifts was moving from a product-led growth motion to an
            enterprise, sales-led one — different buyers, longer cycles, demos that
            had to hold up, and a bar for trust that product-market fit alone
            couldn’t clear.
          </p>
          <p>
            Through it all, my pattern was the same: find the problem area, fix it
            myself, write the first playbook, then help put someone in to own it.
            Today I’m in a product marketing and growth role that supports all of
            those teams at once.
          </p>
        </div>
      </section>

      <section className="case-page__section container">
        <h2 className="path__title" data-ix="">
          How one role became the next
        </h2>
        <RolePath className="path__steps--page" />
      </section>

      <section className="case-page__section container">
        <h2 className="section-title" data-ix="">
          Highlights
        </h2>
        <ul className="highlights__grid">
          {highlights.map((item) => (
            <li
              key={item.title}
              className="panel panel--stack"
              style={
                {
                  "--fill": item.fill,
                  "--on": item.ink,
                  "--media": item.media,
                } as CSSProperties
              }
              data-ix=""
            >
              <Placeholder
                className="panel__media"
                label={item.title}
                tone="var(--media)"
                ratio="4 / 3"
              />
              <div className="panel__body">
                <h3>{item.title}</h3>
                <p>{item.body}</p>
                {"href" in item ? (
                  <a
                    className="text-link-arrow"
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {item.link} <span className="arrow" aria-hidden>↗</span>
                  </a>
                ) : null}
              </div>
            </li>
          ))}
        </ul>
      </section>

      <div className="container case-page__next">
        <Link href="/#work" className="text-link-arrow">
          ← Back to work
        </Link>
      </div>
    </article>
  );
}
