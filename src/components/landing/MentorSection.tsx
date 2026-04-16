import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import bioImage from "@/assets/bio-bruno-musa.webp";

const MentorSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-12 md:py-20 relative">
      <div
        ref={ref}
        className={`container mx-auto px-4 max-w-5xl transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Photo */}
          <div className="relative">
            <div className="aspect-[3/4] rounded-2xl overflow-hidden">
              <img src={bioImage} alt="Bruno Musa" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -inset-2 rounded-2xl bg-gradient-to-t from-primary/10 to-transparent blur-2xl -z-10" />
          </div>

          {/* Title + Bio */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight">
              Quem vai me guiar nesse dia é{" "}
              <span className="text-gradient">Bruno Musa.</span>
            </h2>
            <p className="text-lg md:text-xl text-foreground/85 leading-relaxed">
              Um dos comunicadores financeiros mais respeitados do Brasil, com décadas de experiência acompanhando ciclos econômicos e traduzindo o mercado em uma linguagem que qualquer pessoa entende.
            </p>
            <div className="h-px bg-gradient-to-r from-primary/40 to-transparent" />
            <p className="text-lg md:text-xl font-semibold text-foreground">
              Sem promessas irreais. Sem complicação. Só o que funciona na prática.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MentorSection;
