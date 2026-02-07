import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import RegistrationForm from "@/components/RegistrationForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reģistrēt Komandu | Cēzara Kauss 2026",
  description: "Piesakiet savu komandu Cēzara Kauss 2026 futbola turnīram. Dalības maksa €100. Formāts 5 vs 5.",
};

export default function RegistretKomandu() {
  return (
    <>
      <Navigation />
      <main className="animate-fade-in">
        <RegistrationForm />
      </main>
      <Footer />
    </>
  );
}
