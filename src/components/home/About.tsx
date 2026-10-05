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
              I grew up in Montreal and went to McGill University. After school I
              moved to Toronto for consulting at Publicis Sapient – big finance
              and government clients, real product work – but it didn’t take long
              to realize startups were more my thing.
            </p>
            <p>
              On the side I co-launched interviewsby.ai with a friend. It grew
              past <em className="serif">$100k</em> in revenue and{" "}
              <em className="serif">80k+</em> users, and I started sharing what I
              was learning about AI and building on TikTok, which grew to{" "}
              <em className="serif">50k+</em> followers (including partnerships
              with Zapier and Replit).
            </p>
            <p>
              Through that work I met Justin Feinberg, co-founder of Cassidy. I
              joined as employee <em className="serif">#3</em> in New York –
              five of us in a WeWork – and have worn nearly every hat as we grew
              into an enterprise sales-led company: product, marketing, sales
              engineering, customer success, and now GTM.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
