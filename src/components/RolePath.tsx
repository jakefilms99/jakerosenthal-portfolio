import { process } from "@/lib/cassidy";

export function RolePath({ className = "" }: { className?: string }) {
  return (
    <ol className={`path__steps ${className}`.trim()}>
      {process.map((step) => (
        <li
          key={step.role}
          className={`path__step${step.now ? " path__step--now" : ""}`}
        >
          <span className="path__rail" aria-hidden>
            <span className="path__branch" />
          </span>
          <span className="path__role">{step.role}</span>
          <p>{step.body}</p>
        </li>
      ))}
    </ol>
  );
}
