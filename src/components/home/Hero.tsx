import { asset } from "@/lib/assets";
import { site } from "@/lib/site";

export function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="container hero__inner">
        <div className="hero__copy" data-ix="">
          <h1 id="hero-title" className="hero__statement">
            I’m Jake <span className="dash" aria-hidden>—</span> an NYC based
            early-stage startup <em className="serif">operator</em>
          </h1>
          <h2 className="hero__facts">
            <span className="hero__fact">
              <span>
                Employee <em className="serif">#3</em> at{" "}
                <a href={site.cassidy} target="_blank" rel="noreferrer">
                  Cassidy
                </a>
              </span>
              <em className="serif hero__stat">$14M funding</em>
            </span>
            <span className="hero__fact">
              <span>
                Co-founder of{" "}
                <a href={site.interviewsByAi} target="_blank" rel="noreferrer">
                  Interviews by AI
                </a>
              </span>
              <em className="serif hero__stat">$100k+ revenue</em>
            </span>
            <span className="hero__fact">
              <span>
                Sharing my learnings on{" "}
                <a href={site.tiktok} target="_blank" rel="noreferrer">
                  TikTok
                </a>
              </span>
              <em className="serif hero__stat">50k+ followers</em>
            </span>
          </h2>
        </div>

        <figure className="hero__photo" data-ix="">
          <div className="hero__photo-frame">
            <img
              src={asset.tiktokJake}
              alt="Jake Rosenthal with a microphone"
              width={220}
              height={344}
            />
          </div>
          <figcaption className="hero__caption">
            <a href={site.tiktok} target="_blank" rel="noreferrer">
              <span>{site.tiktokHandle}</span>
              <span className="arrow" aria-hidden>
                ↗︎
              </span>
            </a>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
