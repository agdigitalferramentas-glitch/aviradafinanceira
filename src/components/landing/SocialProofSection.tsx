import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { MessageSquareQuote } from "lucide-react";

const SocialProofSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  const testimonials = [
    { name: "Depoimento 1", text: "Espaço reservado para depoimento real de aluno." },
    { name: "Depoimento 2", text: "Espaço reservado para depoimento real de aluno." },
    { name: "Depoimento 3", text: "Espaço reservado para depoimento real de aluno." },
  ];

  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[120px]" />

      <div
        ref={ref}
        className={`container mx-auto px-4 max-w-5xl relative z-10 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-center mb-4 leading-tight">
          Veja o que acontece com quem decide agir{" "}
          <span className="text-primary">antes de ser tarde demais.</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 text-lg">[Inserir prints de depoimentos]</p>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="glass-card rounded-2xl p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:border-primary/40 hover:shadow-[0_0_25px_rgba(38,213,143,0.1)]"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 border border-primary/20 mx-auto mb-5 flex items-center justify-center">
                <MessageSquareQuote className="w-7 h-7 text-primary" />
              </div>
              <p className="text-foreground/70 italic mb-4">{t.text}</p>
              <p className="text-sm font-semibold text-primary">{t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
