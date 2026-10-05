import type { CSSProperties, ReactNode } from "react";

type MediaProps = {
  src: string;
  alt: string;
  ratio?: string;
  position?: string;
  className?: string;
  caption?: ReactNode;
  captionHref?: string;
  tint?: string;
  captionInk?: string;
};

export function Media({
  src,
  alt,
  ratio = "4 / 3",
  position = "center",
  className = "",
  caption,
  captionHref,
  tint,
  captionInk,
}: MediaProps) {
  return (
    <figure
      className={`media ${className}`.trim()}
      style={
        {
          "--ratio": ratio,
          "--pos": position,
          ...(tint ? { "--tint": tint } : {}),
          ...(captionInk ? { "--caption-ink": captionInk } : {}),
        } as CSSProperties
      }
    >
      <div className="media__frame">
        <img src={src} alt={alt} loading="lazy" decoding="async" />
      </div>
      {caption ? (
        <figcaption className="media__caption">
          {captionHref ? (
            <a href={captionHref} target="_blank" rel="noreferrer">
              <span>{caption}</span>
              <span className="arrow" aria-hidden>
                ↗
              </span>
            </a>
          ) : (
            <span>{caption}</span>
          )}
        </figcaption>
      ) : null}
    </figure>
  );
}
