import ladder from "../../content/projects/ladder.json";
import optimizeWithAi from "../../content/projects/optimize-with-ai.json";
import shopUnknown from "../../content/projects/shop-unknown.json";
import soccerScoreChecker from "../../content/projects/soccer-score-checker.json";

/** Rich-text fields contain trusted, first-party HTML. */
type Html = string;

export type CaseStudyBlock =
  | { type: "text"; body: Html }
  | { type: "entry"; title: string; body: Html }
  | { type: "feature"; image: string; alt: string; title: string; body: string };

export type CaseStudy = {
  title: string;
  lede: string;
  subhead: string;
  liveUrl?: string;
  cover?: { src: string; alt: string };
  meta: { label: string; value: string }[];
  summary: string;
  challenge?: {
    title: string;
    body: Html;
    points: { title: string; body: Html }[];
  };
  solution?: { title: string; body: Html };
  chapters: { label: string; blocks: CaseStudyBlock[] }[];
};

const caseStudies: Record<string, CaseStudy> = {
  "soccer-score-checker": soccerScoreChecker as CaseStudy,
  "optimize-with-ai": optimizeWithAi as CaseStudy,
  ladder: ladder as CaseStudy,
  "shop-unknown": shopUnknown as CaseStudy,
};

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies[slug];
}
