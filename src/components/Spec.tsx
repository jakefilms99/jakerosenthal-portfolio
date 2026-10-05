import type { CSSProperties, ReactNode } from "react";

export type SpecItem = { label: string; value: ReactNode };

type SpecProps = {
  items: SpecItem[];
  className?: string;
  columns?: number;
};

export function Spec({ items, className = "", columns }: SpecProps) {
  const style = columns ? ({ "--cols": columns } as CSSProperties) : undefined;
  return (
    <dl className={`spec ${className}`.trim()} style={style}>
      {items.map((item) => (
        <div key={item.label} className="spec__item">
          <dt className="label">{item.label}</dt>
          <dd>{item.value}</dd>
        </div>
      ))}
    </dl>
  );
}
