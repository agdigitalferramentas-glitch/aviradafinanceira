import TopBar from "@/components/landing/TopBar";
import HeroSection from "@/components/landing/HeroSection";
import PainSection from "@/components/landing/PainSection";
import WhyNowSection from "@/components/landing/WhyNowSection";
import ProductSection from "@/components/landing/ProductSection";
import SocialProofSection from "@/components/landing/SocialProofSection";
import MentorSection from "@/components/landing/MentorSection";
import OfferSection from "@/components/landing/OfferSection";
import GuaranteeFAQSection from "@/components/landing/GuaranteeFAQSection";
import ClosingSection from "@/components/landing/ClosingSection";
import FooterSection from "@/components/landing/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <TopBar />
      <HeroSection />
      <PainSection />
      <WhyNowSection />
      <ProductSection />
      <SocialProofSection />
      <MentorSection />
      <OfferSection />
      <GuaranteeFAQSection />
      <ClosingSection />
      <FooterSection />
    </div>
  );
};

export default Index;
