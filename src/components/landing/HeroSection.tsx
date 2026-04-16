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

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground mb-10">
            Dia 09 de maio, das 8h às 15h. Ao vivo, no Zoom.
          </p>

          {/* CTA */}
          <CTAButton text="QUERO GARANTIR MINHA VAGA NO LOTE ZERO" size="lg" href="#price-anchor" />

          <p className="mt-6 text-sm text-muted-foreground">
            Vagas do Lote Zero podem virar a qualquer momento
          </p>

          {/* Spacer for mobile so expert photo isn't covered */}
          <div className="h-[40vh] md:hidden" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
