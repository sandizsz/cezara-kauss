import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import PrizePool from "@/components/PrizePool";
import TournamentTimeline from "@/components/TournamentTimeline";
import MemorialLegacy from "@/components/MemorialLegacy";
import HallOfFame from "@/components/HallOfFame";
import LocationMap from "@/components/LocationMap";
import MatchDayExperience from "@/components/MatchDayExperience";
import PhotoCarousel from "@/components/PhotoCarousel";
import VideoSection from "@/components/VideoSection";
import Sponsors from "@/components/Sponsors";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";

export default function Home() {
  return (
    <>
      <StructuredData />
      <Navigation />
      <main className="animate-fade-in">
        <Hero />
        <About />
        <PrizePool />
        <TournamentTimeline />
        <MemorialLegacy />
        <HallOfFame />
        <LocationMap />
        <MatchDayExperience />
        <PhotoCarousel />
        <VideoSection />
        <Sponsors />
      </main>
      <Footer />
    </>
  );
}
