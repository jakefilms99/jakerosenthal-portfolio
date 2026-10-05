import type { CSSProperties } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Spec, type SpecItem } from "@/components/Spec";
import { getCaseStudy, type CaseStudyBlock } from "@/lib/case-studies";
import { getNextProject, getProject, projects } from "@/lib/projects";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return { title: project.title, description: project.summary };
}

const Html = ({ html, className = "prose" }: { html: string; className?: string }) => (
  <div className={className} dangerouslySetInnerHTML={{ __html: html }} />
);

const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

function SectionTitle({ children }: { children: string }) {
  return (
    <div className="section-head" data-ix="">
      <h2 className="section-head__title h-lg">{children}</h2>
    </div>
  );
}

function Chapter({ blocks }: { blocks: CaseStudyBlock[] }) {
  const features = blocks.filter((b) => b.type === "feature");
  const rows = blocks.filter((b) => b.type !== "feature");

  return (
    <>
      {rows.map((block, i) =>
        block.type === "text" ? (
          <div key={i} className="case-row case-row--wide" data-ix="">
            <div className="case-row__body">
              <Html html={block.body} className="prose prose--lead" />
            </div>
          </div>
        ) : block.type === "entry" ? (
          <div key={i} className="case-row" data-ix="">
            <h3 className="case-row__title h-md">{block.title}</h3>
            <div className="case-row__body">
              <Html html={block.body} />
            </div>
          </div>
        ) : null,
      )}
      {features.length ? (
        <div className="features">
          {features.map((feature) => (
            <figure key={feature.title} className="feature" data-ix="">
              <div className="feature__media">
                <img src={feature.image} alt={feature.alt} loading="lazy" />
              </div>
              <h3 className="h-sm">{feature.title}</h3>
              <figcaption className="muted">{feature.body}</figcaption>
            </figure>
          ))}
        </div>
      ) : null}
    </>
  );
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProject(slug);
  const study = getCaseStudy(slug);
  if (!project || !study) notFound();

  const next = getNextProject(slug);

  const spec: SpecItem[] = [
    ...study.meta,
    ...(study.liveUrl
      ? [
          {
            label: "Live site",
            value: (
              <a href={study.liveUrl} target="_blank" rel="noreferrer">
                <span className="text-link">{new URL(study.liveUrl).hostname.replace(/^www\./, "")}</span>
                <span className="arrow" aria-hidden>
                  ↗
                </span>
              </a>
            ),
          },
        ]
      : []),
  ];

  return (
    <article style={{ "--tone": project.tone } as CSSProperties}>
      <header className="case-head container">
        <nav className="crumbs eyebrow" aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span aria-hidden>/</span>
          <span>{project.tag}</span>
        </nav>
        <h1 className="case-head__title" data-ix="">
          {study.title}
        </h1>
        <div className="case-head__intro grid">
          <p className="case-head__lede statement statement--md" data-ix="">
            {study.lede}
          </p>
          <p className="case-head__subhead muted" data-ix="">
            {study.subhead}
          </p>
        </div>
        {spec.length ? (
          <Spec className="case-head__spec" items={spec} columns={Math.min(spec.length, 4)} />
        ) : null}
        {study.cover ? (
          <figure className="case-cover" data-ix="">
            <img src={study.cover.src} alt={study.cover.alt} />
          </figure>
        ) : null}
      </header>

      {study.summary ? (
        <section className="case-summary container" aria-label="Summary">
          <div className="grid">
            <p className="statement" data-ix="">
              {study.summary}
            </p>
          </div>
        </section>
      ) : null}

      {study.challenge ? (
        <section className="case-section container">
          <SectionTitle>{study.challenge.title}</SectionTitle>
          <div className="case-row case-row--wide" data-ix="">
            <div className="case-row__body">
              <Html html={study.challenge.body} className="prose prose--lead" />
            </div>
          </div>
          {study.challenge.points.length ? (
            <div className="points" data-ix="">
              {study.challenge.points.map((point) => (
                <div key={point.title} className="point">
                  <h3 className="h-sm">{point.title}</h3>
                  <Html html={point.body} className="prose muted" />
                </div>
              ))}
            </div>
          ) : null}
        </section>
      ) : null}

      {study.solution ? (
        <section className="case-section container">
          <SectionTitle>{study.solution.title}</SectionTitle>
          <div className="case-row case-row--wide" data-ix="">
            <div className="case-row__body">
              <Html html={study.solution.body} className="prose prose--lead" />
            </div>
          </div>
        </section>
      ) : null}

      {study.chapters.map((chapter) => (
        <section key={chapter.label} className="case-section container">
          <SectionTitle>{capitalize(chapter.label)}</SectionTitle>
          <Chapter blocks={chapter.blocks} />
        </section>
      ))}

      {project.comingSoon ? (
        <section className="case-section container">
          <div className="case-note" data-ix="">
            <span className="eyebrow">Case study in progress</span>
            <p className="lead">
              The full write-up for {project.title} is on its way. In the meantime,
              the high-fidelity prototype is live.
            </p>
            {study.liveUrl ? (
              <a href={study.liveUrl} target="_blank" rel="noreferrer" className="text-cta">
                View prototype
                <span className="arrow" aria-hidden>
                  ↗
                </span>
              </a>
            ) : null}
          </div>
        </section>
      ) : null}

      <div className="container">
        <Link
          href={`/projects/${next.slug}`}
          className="next-project"
          style={{ "--tone": next.tone } as CSSProperties}
        >
          <span className="next-project__label label">Next project</span>
          <span className="next-project__title">{next.title}</span>
        </Link>
      </div>
    </article>
  );
}
