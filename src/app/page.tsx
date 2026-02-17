import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrustedBy from "@/components/TrustedBy";
import StepsSection from "@/components/StepsSection";
import TemplatesSection from "@/components/TemplatesSection";
import IntegrationsSection from "@/components/IntegrationsSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <StepsSection />
      <TrustedBy />
      <TemplatesSection />
      <IntegrationsSection />
      <Footer />
    </div>
  );
}
