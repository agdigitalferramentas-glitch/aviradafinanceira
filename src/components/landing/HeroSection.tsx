import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import CTAButton from "./CTAButton";

const HeroSection = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Radial glow background */}
      <div className="absolute inset-0 bg-background" />
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-primary/10 blur-[150px]" />
      <div className="absolute top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-accent/15 blur-[100px]" />

      <div
        ref={ref}
        className={`container mx-auto px-4 relative z-10 py-20 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <div className="max-w-[50%] max-md:max-w-full text-left">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-primary/30 bg-primary/5 mb-8">
            <span className="text-xs md:text-sm font-semibold uppercase tracking-widest text-primary">
              Imersão ao vivo com Bruno Musa
            </span>
          </div>

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
          <CTAButton text="QUERO GARANTIR MINHA VAGA NO LOTE ZERO" size="lg" />

          <p className="mt-6 text-sm text-muted-foreground">
            Vagas do Lote Zero podem virar a qualquer momento
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
