import { Calendar, Video } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import CTAButton from "./CTAButton";
import heroBackground from "@/assets/hero-background.jpg";
import heroBackgroundMobile from "@/assets/hero-background-mobile.webp";
import logo from "@/assets/logo.svg";

const HeroSection = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section className="relative min-h-screen flex items-start md:items-center pt-16 overflow-hidden">
      {/* Desktop background image */}
      <div className="absolute inset-0 bg-background hidden md:block">
        <img 
          src={heroBackground} 
          alt="Background" 
          className="absolute inset-0 w-full h-full object-cover object-center opacity-90"
        />
      </div>

      {/* Mobile background image - bottom center, cover */}
      <div className="absolute inset-0 bg-background md:hidden">
        <img 
          src={heroBackgroundMobile} 
          alt="Background" 
          className="absolute inset-0 w-full h-full object-cover object-bottom opacity-90"
        />
      </div>

      <div
        ref={ref}
        className={`container mx-auto px-4 relative z-10 py-12 md:py-20 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <div className="max-w-[50%] max-md:max-w-full text-left">
          {/* Logo */}
          <img src={logo} alt="Logotipo" className="h-12 md:h-16 w-auto mb-8" />

          {/* Main Heading */}
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold leading-tight mb-8">
            Descubra como qualquer pessoa pode construir sua própria aposentadoria{" "}
            <span className="text-gradient">
              no cenário mais favorável dos últimos dez anos
            </span>
            , mesmo começando do zero e sem nunca ter investido um centavo na vida.
          </h1>

          {/* Subtitle - icon list */}
          <ul className="flex flex-col sm:flex-row sm:flex-wrap gap-4 sm:gap-6 mb-10">
            <li className="flex items-center gap-3 text-base md:text-lg text-white">
              <Calendar className="w-5 h-5 md:w-6 md:h-6 text-primary shrink-0" aria-hidden="true" />
              <span>Dia 09 de maio, das 8h às 15h.</span>
            </li>
            <li className="flex items-center gap-3 text-base md:text-lg text-white">
              <Video className="w-5 h-5 md:w-6 md:h-6 text-primary shrink-0" aria-hidden="true" />
              <span>Ao vivo, no Zoom.</span>
            </li>
          </ul>

          {/* CTA */}
          <div className="flex flex-col items-center md:items-start w-full">
            <CTAButton text="QUERO GARANTIR MINHA VAGA NO LOTE ZERO" size="lg" href="#price-anchor" />

            <p className="mt-3.5 text-muted-foreground uppercase text-center text-[12px] md:text-[14px]">
              VAGAS DO LOTE ZERO PODEM VIRAR A QUALQUER MOMENTO
            </p>
          </div>

          {/* Spacer for mobile so expert photo isn't covered */}
          <div className="h-[calc(40vh+20px)] md:hidden" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
