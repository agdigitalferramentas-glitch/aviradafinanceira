import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import CTAButton from "./CTAButton";

const WhyNowSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-top-center" 
        style={{ backgroundImage: "url('/src/assets/why-now-bg.jpg')" }}
      />

      <div
        ref={ref}
        className={`container mx-auto px-4 max-w-4xl relative z-10 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-center mb-12 leading-tight">
          2026 está abrindo uma janela que o mercado{" "}
          <span className="text-gradient">não via há uma década.</span>
        </h2>

        <div className="glass-card rounded-2xl p-8 md:p-12 space-y-6 text-base md:text-lg text-foreground/80 leading-relaxed">
          <p>
            Eleições. Copa do Mundo. Câmbio em alta. Juros elevados. Quando tudo isso acontece ao mesmo tempo, se forma o tipo de cenário que pessoas comuns usaram para mudar de vida.
          </p>
          <p>
            Quem aprendeu a ler esses ciclos em 2015 viu o patrimônio multiplicar. Quem não estava posicionado assistiu de fora.
          </p>
          <p className="text-xl font-bold text-foreground">
            Esse momento se repete agora. E a diferença entre os dois grupos nunca foi inteligência ou capital. Foi uma leitura de cenário que qualquer pessoa pode aprender.
          </p>
          <p className="text-primary font-semibold text-lg">
            Cada mês sem um plano é dinheiro perdido e tempo que não volta.
          </p>
        </div>

        <div className="text-center pt-10">
          <CTAButton text="QUERO ENTENDER ESSE CENÁRIO ANTES QUE MUDE" />
        </div>
      </div>
    </section>
  );
};

export default WhyNowSection;
