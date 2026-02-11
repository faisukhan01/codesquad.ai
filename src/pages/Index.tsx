import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrustedBy from "@/components/TrustedBy";
import StepsSection from "@/components/StepsSection";
import UseCasesSection from "@/components/UseCasesSection";
import TemplatesSection from "@/components/TemplatesSection";
import IntegrationsSection from "@/components/IntegrationsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <TrustedBy />
      <StepsSection />
      <UseCasesSection />
      <TemplatesSection />
      <IntegrationsSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
