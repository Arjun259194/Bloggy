import { HeroParallax } from "@/components/ui/hero-parallex";
import { heroCat } from "@/lib/data";

export default function Home() {
  return (
    <main className="py-5">
      <HeroParallax cats={heroCat} />
    </main>
  );
}
