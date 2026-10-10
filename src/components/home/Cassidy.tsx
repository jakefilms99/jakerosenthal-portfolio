import { Media } from "@/components/Media";
import { RolePath } from "@/components/RolePath";
import { cassidyDescription, gallery } from "@/lib/cassidy";
import { site } from "@/lib/site";

export function Cassidy() {
  return (
    <article className="cassidy" aria-labelledby="cassidy-title">
      <header className="cassidy__top feature-head" data-ix="">
        <h3 id="cassidy-title" className="feature-head__title">
          <a href={site.cassidy} target="_blank" rel="noreferrer">
            Cassidy
            <span className="arrow" aria-hidden>
              ↗
            </span>
          </a>
        </h3>
        <p className="cassidy__what">{cassidyDescription}</p>
      </header>

      <div className="cassidy__mid">
        <div className="cassidy__copy" data-ix="">
          <p>
            I joined as employee <em className="serif">#3</em>{" "}
            <span className="dash" aria-hidden>
              —
            </span>{" "}
            five of us in a WeWork in New York City. Over the last 2.5 years I’ve
            been a generalist product person, marketer, first sales engineer, and
            early customer success lead as we pivoted from a PLG motion to
            enterprise sales-led. As each team took shape, I trained its founding
            members on the playbooks I’d built. Today, the team is{" "}
            <em className="serif">30+</em> people. Revenue has grown{" "}
            <em className="serif">35x+</em>. To date, I’ve helped close our
            largest customers,
            like{" "}
            <a href={site.oneDigital} target="_blank" rel="noreferrer">
              OneDigital
              <span className="arrow" aria-hidden>
                ↗
              </span>
            </a>
            , which has onboarded <em className="serif">6,000</em> employees to
            Cassidy.
          </p>
        </div>

        <div className="path" data-ix="">
          <h4 className="path__title">How one role became the next</h4>
          <RolePath />
        </div>
      </div>

      <div className="cassidy__gallery" data-ix="">
        {gallery.map((shot) => (
          <Media
            key={shot.src}
            className="cassidy__shot"
            src={shot.src}
            alt={shot.alt}
            ratio="16 / 10"
            position={shot.position}
            caption={shot.caption}
            tint="var(--pop-lime)"
            captionInk="#000"
          />
        ))}
      </div>
    </article>
  );
}
