import type { CSSProperties } from "react";

type PlaceholderProps = {
  label: string;
  tone?: string;
  ratio?: string;
  className?: string;
};

export function Placeholder({
  label,
  tone = "var(--paper-deep)",
  ratio = "4 / 3",
  className = "",
}: PlaceholderProps) {
  return (
    <div
      className={`placeholder ${className}`.trim()}
      style={{ "--tone": tone, "--ratio": ratio } as CSSProperties}
      role="img"
      aria-label={`Image placeholder: ${label}`}
    >
      <span className="label">{label}</span>
    </div>
  );
}
