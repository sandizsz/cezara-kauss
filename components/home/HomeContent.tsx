"use client";

import ScrollReveal from "@/components/ScrollReveal";
import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import PrizePool from "@/components/home/PrizePool";
import HallOfFame from "@/components/home/HallOfFame";
import LocationMap from "@/components/home/LocationMap";
import MatchDayExperience from "@/components/home/MatchDayExperience";
import VideoSection from "@/components/home/VideoSection";
import Sponsors from "@/components/home/Sponsors";
import TeamSection from "@/components/home/TeamSection";

export default function HomeContent() {
  return (
    <>
      <Hero />
      <ScrollReveal>
        <About />
      </ScrollReveal>
      <ScrollReveal>
        <PrizePool />
      </ScrollReveal>
      <ScrollReveal>
        <VideoSection />
      </ScrollReveal>
      <ScrollReveal>
        <MatchDayExperience />
      </ScrollReveal>
      <ScrollReveal>
        <TeamSection />
      </ScrollReveal>
      <ScrollReveal>
        <HallOfFame />
      </ScrollReveal>
      <ScrollReveal>
        <LocationMap />
      </ScrollReveal>
      <ScrollReveal>
        <Sponsors />
      </ScrollReveal>
    </>
  );
}
