import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import CTAButton from "./CTAButton";
import { BookOpen, TrendingUp, Eye, Rocket, Lightbulb } from "lucide-react";

const items = [
  { icon: BookOpen, text: "Por que a maioria das pessoas nunca sai do lugar financeiramente" },
  { icon: TrendingUp, text: "Como organizar minha vida financeira independente de quanto ganho hoje" },
  { icon: Rocket, text: "Quais são os caminhos reais para construir minha própria aposentadoria" },
  { icon: Eye, text: "Como ler o cenário de 2026 e me posicionar antes da maioria" },
  { icon: Lightbulb, text: "Como começar do zero, com qualquer renda, sem experiência anterior" },
];

const ProductSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-12 md:py-20 relative">
      <div
        ref={ref}
        className={`container mx-auto px-4 max-w-5xl transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-center mb-6 leading-tight">
          Em 6 horas ao vivo com Bruno Musa,{" "}
          <span className="text-primary">vou entender:</span>
        </h2>

        <div className="grid gap-5 mt-12 max-w-3xl mx-auto">
          {items.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className="glass-card rounded-xl p-6 flex items-start gap-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_0_20px_rgba(201,168,76,0.4),_0_0_60px_rgba(201,168,76,0.15)]"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <p className="text-base md:text-lg text-foreground/90 leading-relaxed pt-2">
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>

        <p className="text-center text-lg text-muted-foreground mt-10 mb-8">
          Nada complexo. Nada teórico. Apenas o que funciona para quem está começando agora.
        </p>

        <div className="text-center">
          <CTAButton text="COMPRAR INGRESSO — LOTE ZERO" size="lg" href="#price-anchor" />
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
