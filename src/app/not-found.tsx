import Link from "next/link";

export default function NotFound() {
  return (
    <section className="simple-page container">
      <h1 className="simple-page__title">404</h1>
      <div className="simple-page__body">
        <p className="statement statement--md">
          This page doesn’t exist — or it moved.
        </p>
        <Link href="/" className="text-cta">
          Back home
          <span className="arrow arrow--right" aria-hidden>
            →︎
          </span>
        </Link>
      </div>
    </section>
  );
}
