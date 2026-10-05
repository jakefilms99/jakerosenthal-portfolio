export type Project = {
  slug: string;
  title: string;
  tag: string;
  summary: string;
  /** Soft wash behind project imagery. */
  tone: string;
  image: string;
  srcSet: string;
  comingSoon?: boolean;
};

const card = (file: string) =>
  `/assets/cdn.prod.website-files.com/5f0ce93d70ce1f0d9bbd30c0/${file}`;

const srcSet = (base: string, ext: string, widths: number[], full: number) =>
  [
    ...widths.map((w) => `${card(`${base}-p-${w}.${ext}`)} ${w}w`),
    `${card(`${base}.${ext}`)} ${full}w`,
  ].join(", ");

export const projects: Project[] = [
  {
    slug: "soccer-score-checker",
    title: "Soccer Score Checker",
    tag: "Side project",
    summary:
      "Combining my love for tech and soccer to save myself the pain of watching a 0-0 match.",
    tone: "var(--olive)",
    image: card("641fc86d7e674ab753d61dd7_Soccer%20Score%20Checker%20Card.png"),
    srcSet: srcSet(
      "641fc86d7e674ab753d61dd7_Soccer%20Score%20Checker%20Card",
      "png",
      [500, 800, 1080, 1600],
      1758,
    ),
  },
  {
    slug: "optimize-with-ai",
    title: "Optimize with AI",
    tag: "Artificial intelligence",
    summary:
      "Leveraging no-code to create an MVP in 3 days to validate my AI concept that went viral on TikTok.",
    tone: "var(--mist)",
    image: card("641fbb347894bf2ca21d159b_Optimize%20with%20AI%20Card.png"),
    srcSet: srcSet(
      "641fbb347894bf2ca21d159b_Optimize%20with%20AI%20Card",
      "png",
      [500, 800, 1080, 1600, 2000, 2600, 3200],
      3840,
    ),
  },
  {
    slug: "ladder",
    title: "Ladder",
    tag: "Concept design",
    summary:
      "Questioning and re-imagining the collaborative writing process, using high-fidelity prototyping.",
    tone: "var(--sand)",
    image: card("6420abbaeca130f71726ab3e_Ladder%20Card%204-min.png"),
    srcSet: srcSet(
      "6420abbaeca130f71726ab3e_Ladder%20Card%204-min",
      "png",
      [500, 800, 1080, 1600, 2000, 2600, 3200],
      4905,
    ),
    comingSoon: true,
  },
  {
    slug: "shop-unknown",
    title: "Shop Unknown",
    tag: "Technical",
    summary:
      "Combining Python web scraping practices, API integrations and React JS to power a fully-featured complex search site.",
    tone: "var(--peach)",
    image: card("64209b1a0bbd0a62d212951d_Shop%20Unknown%20Card.png"),
    srcSet: srcSet(
      "64209b1a0bbd0a62d212951d_Shop%20Unknown%20Card",
      "png",
      [500, 800, 1080, 1600, 2000, 2600],
      2660,
    ),
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export function getNextProject(slug: string) {
  const index = projects.findIndex((p) => p.slug === slug);
  return projects[(index + 1) % projects.length];
}
