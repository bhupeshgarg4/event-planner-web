import { Nav } from "./Nav";
import { Hero } from "./Hero";
import { About } from "./About";
import { Services } from "./Services";
import { Reel } from "./Reel";
import { Categories } from "./Categories";
import { SocialProof } from "./SocialProof";
import { Booking } from "./Booking";
import { Calendar } from "./Calendar";
import { Footer } from "./Footer";

export function LandingPage() {
  return (
    <div className="relative min-h-screen bg-[#07060a] text-[#f5ecd6] overflow-x-hidden">
      <Nav />
      <main>
        <Hero />
        <About />
        <Services />
        <Reel />
        <Categories />
        <SocialProof />
        <Booking />
        <Calendar />
      </main>
      <Footer />
    </div>
  );
}