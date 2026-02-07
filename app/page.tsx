import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import PrizePool from "@/components/home/PrizePool";
import TournamentTimeline from "@/components/home/TournamentTimeline";
import MemorialLegacy from "@/components/home/MemorialLegacy";
import HallOfFame from "@/components/home/HallOfFame";
import LocationMap from "@/components/home/LocationMap";
import MatchDayExperience from "@/components/home/MatchDayExperience";
import PhotoCarousel from "@/components/home/PhotoCarousel";
import VideoSection from "@/components/home/VideoSection";
import Sponsors from "@/components/home/Sponsors";
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
        <VideoSection />
        <TournamentTimeline />
        <MemorialLegacy />
        <HallOfFame />
        <LocationMap />
        <MatchDayExperience />
        <PhotoCarousel />
        <Sponsors />
      </main>
      <Footer />
    </>
  );
}
