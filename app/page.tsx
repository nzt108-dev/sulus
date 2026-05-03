import Navbar from "@/components/ui/Navbar";
import Hero from "@/components/sections/Hero";
import Ticker from "@/components/sections/Ticker";
import NetworkViz from "@/components/sections/NetworkViz";
import Compare from "@/components/sections/Compare";
import HowItWorks from "@/components/sections/HowItWorks";
import WaitlistForm from "@/components/sections/WaitlistForm";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Ticker />
        <NetworkViz />
        <Compare />
        <HowItWorks />
        <WaitlistForm />
      </main>
      <Footer />
    </>
  );
}
