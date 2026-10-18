import { About } from "@/components/home/About";
import { Archetype } from "@/components/home/Archetype";
import { Hero } from "@/components/home/Hero";
import { Mission } from "@/components/home/Mission";
import { Personal } from "@/components/home/Personal";
import { Work } from "@/components/home/Work";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Mission />
      <Work />
      <Archetype />
      <div className="night">
        <Personal />
        <About />
      </div>
    </>
  );
}
