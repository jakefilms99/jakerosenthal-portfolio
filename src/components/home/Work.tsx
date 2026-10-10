import type { CSSProperties } from "react";
import { Media } from "@/components/Media";
import { site } from "@/lib/site";
import { Cassidy } from "./Cassidy";

const sideWork = [
  {
    id: "interviews",
    title: "Interviews by AI",
    writeup: (
      <>
        A nights-and-weekends AI tool my friend and I built for interview prep.
        We started with a simple AI interviewer and kept shipping – better
        prompts, more roles, tighter feedback loops – until it became a{" "}
        <em className="serif">real product</em> people paid for. Past{" "}
        <em className="serif">$100k</em> in revenue,{" "}
        <em className="serif">80k+</em> users, and still growing without a
        full-time team behind it.
      </>
    ),
    stats: [
      { value: "$100k+", label: "Revenue" },
      { value: "80k+", label: "Users" },
    ],
    href: site.interviewsByAi,
    image: "/media/interviews.jpg",
    imageAlt: "An Interviews by AI practice question with voice recording",
    imagePosition: "center top",
    caption: "UI of a user answering a generated question",
    pop: "var(--pop-yellow)",
    popInk: "var(--ink)",
    captionInk: "#000",
  },
  {
    id: "tiktok",
    title: "TikTok",
    writeup: (
      <>
        I share what I’m learning about AI, startups, and building in public –
        the same lessons I’m picking up at Cassidy and on side projects. Teaching
        forces the clarity. The audience has grown past{" "}
        <em className="serif">50k</em> followers, with sponsorships and
        partnerships along the way from teams like Zapier and Replit.
      </>
    ),
    stats: [
      { value: "50k+", label: "Followers" },
      { value: "Zapier, Replit", label: "Past partners" },
    ],
    href: site.tiktok,
    image: "/media/tiktok.jpg",
    imageAlt: "Jake's TikTok profile with 52.5K followers and popular AI videos",
    imagePosition: "center top",
    caption: "Feed of some of my most popular videos",
    pop: "var(--pop-purple)",
    popInk: "#eef0f3",
    captionInk: "#eef0f3",
  },
];

export function Work() {
  return (
    <section id="work" className="section" aria-labelledby="work-title">
      <div className="container">
        <h2 id="work-title" className="section-title" data-ix="">
          Work
        </h2>

        <Cassidy />

        <div className="side-work">
          {sideWork.map((item) => (
            <article
              key={item.id}
              className="panel panel--work"
              aria-labelledby={`${item.id}-title`}
              style={
                {
                  "--fill": "rgb(255 255 255 / 0.45)",
                  "--on": "var(--ink)",
                  "--media": "var(--silver)",
                  "--stats": item.pop,
                  "--stats-on": item.popInk,
                } as CSSProperties
              }
              data-ix=""
            >
              <Media
                className="panel__media"
                src={item.image}
                alt={item.imageAlt}
                position={item.imagePosition}
                caption={item.caption}
                captionHref={item.href}
                tint={item.pop}
                captionInk={item.captionInk}
              />
              <div className="panel__body">
                <div className="panel__main">
                  <h3 id={`${item.id}-title`}>
                    <a href={item.href} target="_blank" rel="noreferrer">
                      {item.title}
                      <span className="arrow" aria-hidden>
                        ↗
                      </span>
                    </a>
                  </h3>
                  <p>{item.writeup}</p>
                </div>
                <dl className="panel__stats">
                  {item.stats.map((stat) => (
                    <div
                      key={stat.label}
                      className={/\d/.test(stat.value) ? undefined : "panel__stat--text"}
                    >
                      <dt className="label">{stat.label}</dt>
                      <dd>{stat.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
