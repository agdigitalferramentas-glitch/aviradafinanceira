import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import CTAButton from "./CTAButton";
import { Check, Calendar, Video } from "lucide-react";

const deliverables = [
  "6 horas de imersão ao vivo com Bruno Musa",
  "Leitura completa do cenário econômico de 2026",
  "Passo a passo para eu construir meu plano financeiro do zero",
  "Perguntas e respostas ao vivo",
];

const OfferSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-12 md:py-20 relative overflow-hidden">
      {/* Candlestick-style background feel */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-primary/5 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/8 blur-[150px]" />
      </div>

      <div
        ref={ref}
        className={`container mx-auto px-4 max-w-4xl relative z-10 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <ul className="flex flex-col sm:flex-row sm:flex-wrap items-center justify-center gap-4 sm:gap-6 mb-4">
          <li className="flex items-center gap-3 text-base md:text-lg text-white">
            <Calendar className="w-5 h-5 md:w-6 md:h-6 text-primary shrink-0" aria-hidden="true" />
            <span>09 de Maio, das 9h às 15h</span>
          </li>
          <li className="flex items-center gap-3 text-base md:text-lg text-white">
            <Video className="w-5 h-5 md:w-6 md:h-6 text-primary shrink-0" aria-hidden="true" />
            <span>Ao vivo, no Zoom.</span>
          </li>
        </ul>

        <div className="glass-card rounded-3xl p-8 md:p-14 text-center relative overflow-hidden">
          {/* Glow ring */}
          <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-40 h-40 rounded-full border-2 border-dashed border-primary/30 animate-float" />

          <h2 className="text-2xl md:text-3xl font-bold mb-10">O que você vai receber:</h2>

          <div className="space-y-4 max-w-xl mx-auto mb-12 text-left">
            {deliverables.map((item, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="w-7 h-7 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-4 h-4 text-primary" />
                </div>
                <p className="text-base md:text-lg text-foreground/90">{item}</p>
              </div>
            ))}
          </div>

          {/* Price anchoring */}
          <div className="mb-8">
            <p className="text-lg text-muted-foreground mb-2">
              <span id="price-anchor">Uma sessão com um consultor financeiro particular custa entre R$500 e R$2.000.</span>
            </p>
            <p className="text-xl text-foreground/80">
              Aqui eu tenho 6 horas com Bruno Musa por:
            </p>
          </div>

          {/* Price */}
          <div className="mb-10">
            <div className="inline-block">
              <p className="text-lg text-muted-foreground line-through mb-1">R$ 497,00</p>
              <p className="text-6xl md:text-7xl font-extrabold text-primary">
                R$47<span className="text-3xl">,00</span>
              </p>
            </div>
          </div>

          <CTAButton text={"COMPRAR INGRESSO\n— LOTE ZERO"} size="lg" href="https://pay.kiwify.com.br/RGc6Doo" className="!px-6 !gap-2 md:!px-10 md:!gap-3 md:[&_span]:!whitespace-normal" />

          <p className="mt-6 text-sm text-primary/80 font-semibold">
            Lote Zero: vagas limitadas
          </p>
        </div>
      </div>
    </section>
  );
};

export default OfferSection;
