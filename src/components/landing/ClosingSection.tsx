import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import CTAButton from "./CTAButton";

const ClosingSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-10 md:py-16 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-primary/8 blur-[150px]" />
      </div>

      <div
        ref={ref}
        className={`container mx-auto px-4 max-w-3xl text-center relative z-10 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <h2 className="text-3xl md:text-4xl font-extrabold mb-10">
          Duas opções na minha frente agora.
        </h2>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="card-surface rounded-2xl p-8 text-left opacity-60">
            <p className="text-foreground/70 text-base md:text-lg leading-relaxed">
              Continuar como estou e torcer para que o governo ou a sorte resolvam por mim.
            </p>
          </div>
          <div className="glass-card rounded-2xl p-8 text-left border-primary/40">
            <p className="text-foreground text-base md:text-lg leading-relaxed font-medium">
              Ou investir R$47 e passar um dia inteiro aprendendo como construir o futuro que ninguém vai construir por mim.
            </p>
          </div>
        </div>

        <p className="text-xl font-bold text-primary mb-8">
          O Lote Zero ainda está aberto. Mas não por muito tempo.
        </p>

        <CTAButton text="COMPRAR INGRESSO — LOTE ZERO" size="lg" />

        <p className="mt-6 text-sm text-muted-foreground">
          Vagas limitadas. Lote Zero pode virar a qualquer momento.
        </p>
      </div>
    </section>
  );
};

export default ClosingSection;
