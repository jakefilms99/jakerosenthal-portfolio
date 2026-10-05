const skills = [
  {
    title: "Product sense",
    body: (
      <>
        Spotting gaps, shaping the problem, and shipping the{" "}
        <em className="serif">first version</em>.
      </>
    ),
  },
  {
    title: "UI / UX design",
    body: (
      <>
        I get ideas on paper quickly so teams can react to something{" "}
        <em className="serif">real</em>, not a slide deck.
      </>
    ),
  },
  {
    title: "Storytelling",
    body: (
      <>
        Making the value clear enough that people{" "}
        <em className="serif">move</em> – in marketing-led and sales-led motions
        alike.
      </>
    ),
  },
  {
    title: "AI systems",
    body: (
      <>
        I build complex AI workflows end to end, for clients and in-house alike
        – the kind teams <em className="serif">actually run on</em>.
      </>
    ),
  },
];

export function Archetype() {
  return (
    <section id="archetype" className="section archetype" aria-labelledby="archetype-title">
      <div className="container">
        <div className="duo duo--breath">
          <div className="duo__top" data-ix="">
            <p className="label">How I work</p>
            <h2 id="archetype-title" className="duo__title">
              Early-stage <em className="serif">operator</em>
            </h2>
            <p className="duo__lede">
              My formal background is in product management, but the work that fits
              me best is building from <em className="serif">zero</em> – standing
              up the motion, writing the first playbook, and growing into whatever
              the company needs next.
            </p>
          </div>
          <div className="duo__bottom" data-ix="">
            <ul className="skill-list">
              {skills.map((skill) => (
                <li key={skill.title}>
                  <h3>{skill.title}</h3>
                  <p>{skill.body}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
