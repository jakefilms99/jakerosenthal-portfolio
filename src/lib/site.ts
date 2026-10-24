export const site = {
  name: "Jake Rosenthal",
  title: "Jake Rosenthal — Early-stage startup operator",
  description:
    "Early-stage startup operator making powerful technology accessible. Employee #3 at Cassidy, co-founder of Interviews by AI (80k+ users, $100k+ revenue), sharing AI in public with 50k+ followers.",
  emailAddress: "career@jakerosenthal.ca",
  email: "mailto:career@jakerosenthal.ca?subject=Hi%20Jake!",
  tiktok: "https://www.tiktok.com/@jakerosenthal_",
  tiktokHandle: "@jakerosenthal_",
  linkedin: "https://www.linkedin.com/in/jake-rosenthal/",
  cassidy: "https://www.cassidyai.com/",
  oneDigital:
    "https://www.cassidyai.com/customer/how-onedigital-got-6-000-employees-to-actually-use-ai-coworkers",
  interviewsByAi: "https://interviewsby.ai/",
  url: "https://www.jakerosenthal.ca",
} as const;

export const socialLinks = [
  { label: "TikTok", href: site.tiktok, detail: site.tiktokHandle },
  { label: "LinkedIn", href: site.linkedin, detail: "in/jake-rosenthal" },
  { label: "Email", href: site.email, detail: site.emailAddress },
] as const;
