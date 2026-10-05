import type { CSSProperties } from "react";
import { Media } from "@/components/Media";

const hobbies = [
  {
    label: "Soccer",
    body: (
      <>
        I play and watch as much as I can. Favorites:{" "}
        <em className="serif">Barça</em> and <em className="serif">Chelsea</em>.
      </>
    ),
    image: "/media/soccer.jpg",
    alt: "Jake at the World Cup final in an Argentina jersey",
    caption: "World Cup final",
    position: "center center",
  },
  {
    label: "Music",
    body: (
      <>
        I love <em className="serif">R&B</em>, collect vinyl, and sometimes write
        songs for fun.
      </>
    ),
    image: "/media/music.jpg",
    alt: "Jake's R&B vinyl collection on wall shelves",
    caption: "Favorite vinyls",
    position: "center 40%",
  },
  {
    label: "Cocktails",
    body: "I make cocktails for friends and family whenever we get together.",
    image: "/media/cocktails.jpg",
    alt: "A clover club cocktail next to a bottle of Beefeater gin",
    caption: "Clover club",
    position: "center 55%",
  },
];

export function Personal() {
  return (
    <section id="personal" className="section" aria-labelledby="personal-title">
      <div className="container">
        <h2 id="personal-title" className="section-title" data-ix="">
          Personal
        </h2>
        <p className="personal__statement" data-ix="">
          I moved from Montreal to New York City to pursue early-stage AI
          startups — mission: <em className="serif">learn by doing</em> and{" "}
          <em className="serif">teach by doing</em> with AI. Outside of that,
          here’s what fills the rest of my time.
        </p>
        <ul className="hobbies">
          {hobbies.map((hobby) => (
            <li
              key={hobby.label}
              className="panel panel--stack"
              style={
                {
                  "--fill": "var(--pop-pink)",
                  "--on": "var(--ink)",
                } as CSSProperties
              }
              data-ix=""
            >
              <Media
                className="panel__media"
                src={hobby.image}
                alt={hobby.alt}
                caption={hobby.caption}
                ratio="4 / 5"
                position={hobby.position}
                tint="var(--pop-pink)"
                captionInk="#000"
              />
              <div className="panel__body">
                <span className="hobby__name">{hobby.label}</span>
                <p>{hobby.body}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
