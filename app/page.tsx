import Navbar from "@/components/ui/Navbar";
import Hero from "@/components/sections/Hero";
import AudienceSelector from "@/components/sections/AudienceSelector";
import Problem from "@/components/sections/Problem";
import Solution from "@/components/sections/Solution";
import HowItWorks from "@/components/sections/HowItWorks";
import Benefits from "@/components/sections/Benefits";
import WaitlistForm from "@/components/sections/WaitlistForm";
import FAQ from "@/components/sections/FAQ";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <AudienceSelector />
        <Problem />
        <Solution />
        <HowItWorks />
        <Benefits />
        <WaitlistForm />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
