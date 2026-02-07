import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import HomeContent from "@/components/home/HomeContent";
import StructuredData from "@/components/StructuredData";

export default function Home() {
  return (
    <>
      <StructuredData />
      <Navigation />
      <main>
        <HomeContent />
      </main>
      <Footer />
    </>
  );
}
