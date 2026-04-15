import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import CTAButton from "./CTAButton";

const HeroSection = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Radial glow background */}
      <div className="absolute inset-0 bg-background" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-primary/10 blur-[150px]" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-accent/15 blur-[100px]" />

      <div
        ref={ref}
        className={`container mx-auto px-4 text-center relative z-10 py-20 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-primary/30 bg-primary/5 mb-8">
          <span className="text-xs md:text-sm font-semibold uppercase tracking-widest text-primary">
            Imersão ao vivo com Bruno Musa
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight max-w-5xl mx-auto mb-8">
          Descubra como qualquer pessoa pode construir sua própria aposentadoria{" "}
          <span className="text-gradient">
            no cenário mais favorável dos últimos dez anos
          </span>
          , mesmo começando do zero e sem nunca ter investido um centavo na vida.
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
          Dia 09 de maio, das 8h às 15h. Ao vivo, no Zoom.
        </p>

        {/* CTA */}
        <CTAButton text="QUERO GARANTIR MINHA VAGA NO LOTE ZERO" size="lg" />

        <p className="mt-6 text-sm text-muted-foreground">
          Vagas do Lote Zero podem virar a qualquer momento
        </p>

        {/* Specialist image placeholder */}
        <div className="mt-16 relative max-w-lg mx-auto">
          <div className="aspect-[4/3] rounded-2xl glass-card flex items-center justify-center">
            <div className="text-center p-8">
              <div className="w-24 h-24 rounded-full bg-primary/20 border-2 border-primary/40 mx-auto mb-4 flex items-center justify-center">
                <span className="text-3xl font-bold text-primary">BM</span>
              </div>
              <p className="text-sm text-muted-foreground">Bruno Musa</p>
              <p className="text-xs text-muted-foreground/60">Imagem/Vídeo do Especialista</p>
            </div>
          </div>
          <div className="absolute -inset-1 rounded-2xl bg-gradient-to-b from-primary/20 to-transparent blur-xl -z-10" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
