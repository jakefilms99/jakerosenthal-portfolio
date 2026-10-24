export function About() {
  return (
    <section id="about" className="section" aria-labelledby="about-title">
      <div className="container">
        <h2 id="about-title" className="section-title" data-ix="">
          About
        </h2>

        <div className="about about--breath">
          <p className="about__intro" data-ix="">
            So, to recap{" "}
            <span className="dash" aria-hidden>
              —
            </span>
            <br />
            here’s my story <em className="serif">so far.</em>
          </p>
          <div className="about__copy" data-ix="">
            <p>
              I grew up in Montreal and went to McGill. After school I moved to
              Toronto for consulting at Publicis Sapient — finance and
              government clients, real product work — but it didn’t take long to
              realize startups were more my thing.
            </p>
            <p>
              A year into that PM role, a friend demoed a tiny app built on an
              early GPT model: one conversation-starter question a day. The
              English was fine, but it still felt like the model was mostly
              stringing words together. (In a lot of ways, that’s still true.) I
              said “oh, that’s cool” and moved on. I should have paid more
              attention.
            </p>
            <p>
              When ChatGPT shipped about a year later, I treated it like a
              second chance. I started experimenting that day and posting
              everything I was learning. That turned into{" "}
              <em className="serif">50k+</em> followers and partnerships with
              Zapier and Replit.
            </p>
            <p>
              Sharing what I knew pulled me into shipping. A friend and I built
              Interviews by AI on nights and weekends —{" "}
              <em className="serif">80k+</em> users and{" "}
              <em className="serif">$100k+</em> in revenue with no full-time
              team. That work also introduced me to Justin Fineberg, who was
              just getting Cassidy off the ground.
            </p>
            <p>
              Cassidy helps business teams build AI agents around how their
              company already runs. I joined as employee{" "}
              <em className="serif">#3</em>, five of us in a WeWork. I’ve since
              worn hats across product, marketing, sales engineering, and
              customer success, and wrote a lot of our first playbooks. I lead
              product marketing now, though I’m still across the business. Since
              I joined, revenue is up <em className="serif">35x+</em>, the team
              is <em className="serif">30+</em>, and OneDigital alone has{" "}
              <em className="serif">6,000</em> employees on Cassidy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
