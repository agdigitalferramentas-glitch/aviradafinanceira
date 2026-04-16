import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import CTAButton from "./CTAButton";
import painImage from "@/assets/pain-section-image.webp";

const PainSection = () => {
  const { ref: ref1, isVisible: v1 } = useScrollAnimation();
  const { ref: ref2, isVisible: v2 } = useScrollAnimation();

  return (
    <section className="pt-5 pb-20 md:pt-5 md:pb-32 relative">
      <div className="container mx-auto px-4 max-w-4xl">
        <div
          ref={ref1}
          className={`transition-all duration-700 ${v1 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-center mb-4 leading-tight">
            A aposentadoria que prometeram pra você{" "}
            <span className="text-primary">não existe mais.</span>
          </h2>
        </div>

        {/* Image after title */}
        <div className="flex justify-center mb-0">
          <img
            src={painImage}
            alt="Aposentadoria"
            className="w-full max-w-[700px] rounded-xl object-cover"
          />
        </div>

        <div
          ref={ref2}
          className={`space-y-8 transition-all duration-700 delay-200 -mt-[20px] relative z-10 ${v2 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          {/* Promise cards */}
          <div className="glass-card rounded-xl p-8 md:p-10 text-center">
            <div className="space-y-3 mb-8">
              <p className="text-lg md:text-xl text-foreground/80 italic">"Trabalhei a vida inteira..."</p>
              <p className="text-lg md:text-xl text-foreground/80 italic">"Contribuí todos os meses..."</p>
              <p className="text-lg md:text-xl text-foreground/80 italic">"E no final, estarei protegido."</p>
            </div>
            <p className="text-xl md:text-2xl font-bold text-primary mb-6">
              Essa promessa está se desfazendo diante dos nossos olhos.
            </p>
          </div>

          <div className="space-y-6 text-base md:text-lg text-foreground/80 leading-relaxed">
            <p>
              Hoje, a média de aposentadoria no Brasil é de apenas{" "}
              <span className="text-primary font-bold">R$1.863</span>. Alimentação, moradia, remédios, consultas e imprevistos. Responda com sinceridade: isso é suficiente para viver com tranquilidade?
            </p>
            <p>
              Em 1980, existiam 8 trabalhadores para cada aposentado. Hoje são menos de 3. A conta não fecha. E toda vez que o rombo aumenta, o governo muda as regras, aumenta o tempo de contribuição e diminui o valor.
            </p>
            <p className="text-xl md:text-2xl font-bold text-foreground">
              Se o seu único plano é o INSS, você não tem plano. Você tem esperança.
            </p>
            <p className="text-2xl md:text-3xl font-extrabold text-primary text-center py-4">
              E esperança não paga boleto.
            </p>
          </div>

          <div className="text-center pt-8">
            <CTAButton text="GARANTIR MINHA VAGA NA IMERSÃO" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PainSection;
