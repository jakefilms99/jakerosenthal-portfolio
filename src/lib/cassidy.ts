import { site } from "@/lib/site";

export const cassidyDescription =
  "Cassidy is an AI Agent platform that lets business teams automate work around how their organization actually operates – connecting to the tools, documents, and knowledge already in place, with the governance, permissions, and reliability IT needs to scale agents safely across the company.";

export const process = [
  {
    role: "Product",
    body: "First I helped scope many of the core features – speccing, designing, and shipping whatever the product needed next.",
    now: false,
  },
  {
    role: "Marketing",
    body: "Then I stood up our social channels and started bringing prospects in.",
    now: false,
  },
  {
    role: "Sales engineer",
    body: "Those people we attracted needed demos, so I built the demo environment and became our first SE.",
    now: false,
  },
  {
    role: "Customer success",
    body: "Once we closed those deals, we needed them to succeed – so I built our first CSM trackers and onboarding playbooks.",
    now: false,
  },
  {
    role: "Product marketing",
    body: "Today my work spans a number of areas, from inbound and brand to launches, and I still jump in wherever I’m needed.",
    now: true,
  },
] as const;

export const gallery = [
  {
    src: "/media/cassidy-ui.jpg",
    alt: "Cassidy sales enablement agent building a proposal deck",
    caption: "UI of Cassidy Agents",
    position: "left top",
  },
  {
    src: "/media/cassidy-content.jpg",
    alt: "Jake filming Cassidy content at his desk",
    caption: "Filming Cassidy content",
    position: "center 22%",
  },
  {
    src: "/media/cassidy-brand.jpg",
    alt: "Cassidy brand guidelines in Figma",
    caption: "Brand guidelines",
    position: "center top",
  },
] as const;

export const highlights = [
  {
    title: "Led the full rebrand",
    body: "Owned Cassidy’s rebrand end to end: identity, website, and how we talk about the product.",
    fill: "var(--butter)",
    ink: "var(--ink)",
    media: "var(--silver)",
  },
  {
    title: "Inbound, end to end",
    body: "Responsible for all inbound today: the landing page, campaigns, and the funnel behind them.",
    fill: "var(--slate)",
    ink: "var(--foam)",
    media: "var(--butter)",
  },
  {
    title: "Sales collateral & demos",
    body: "Built the decks, one-pagers, and demo environments the sales team uses every day.",
    fill: "var(--butter)",
    ink: "var(--ink)",
    media: "var(--silver)",
  },
  {
    title: "Product launches",
    body: "Taking new features from internal release to story, page, and announcement.",
    fill: "var(--slate)",
    ink: "var(--foam)",
    media: "var(--butter)",
  },
  {
    title: "Socials & content",
    body: "Running our social channels and content, drawing on what I learned growing my own audience.",
    fill: "var(--butter)",
    ink: "var(--ink)",
    media: "var(--silver)",
  },
  {
    title: "Our biggest logos",
    body: "Closed and onboarded some of our largest accounts as a sales engineer, including OneDigital. The team we’ve built since is the real reason those accounts keep growing.",
    fill: "var(--slate)",
    ink: "var(--foam)",
    media: "var(--butter)",
    href: site.oneDigital,
    link: "Read the OneDigital story",
  },
] as const;
