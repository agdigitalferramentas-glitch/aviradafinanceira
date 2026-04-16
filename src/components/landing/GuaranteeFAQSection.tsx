import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Shield } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Eu nunca investi antes. Essa imersão é pra mim?",
    a: "Sim. Foi criada exatamente para quem está começando do zero.",
  },
  {
    q: "E se eu tiver renda baixa?",
    a: "O plano será adaptado à sua realidade, com foco em organização e construção gradual da sua independência.",
  },
  {
    q: "É ao vivo?",
    a: "100% ao vivo no Zoom, dia 09 de maio, das 8h às 15h. Você tira dúvidas diretamente com Bruno Musa.",
  },
  {
    q: "Vai ficar gravado?",
    a: "Não. Mas você pode adquirir a gravação ao finalizar a compra.",
  },
  {
    q: "Por que o preço está tão baixo?",
    a: "Porque o objetivo do dia 09 não é o ingresso. É te mostrar na prática o que é possível quando você tem o caminho certo.",
  },
];

const GuaranteeFAQSection = () => {
  const { ref: gRef, isVisible: gV } = useScrollAnimation();
  const { ref: fRef, isVisible: fV } = useScrollAnimation();

  return (
    <section className="py-10 md:py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Guarantee */}
        <div
          ref={gRef}
          className={`glass-card rounded-3xl p-8 md:p-14 text-center mb-20 transition-all duration-700 ${gV ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="w-24 h-24 rounded-full border-2 border-primary/40 bg-primary/10 mx-auto mb-8 flex items-center justify-center animate-float">
            <Shield className="w-12 h-12 text-primary" />
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
            GARANTIA TOTAL DE SATISFAÇÃO
          </h2>
          <p className="text-base md:text-lg text-foreground/80 leading-relaxed max-w-2xl mx-auto mb-4">
            Se ao final eu sentir que o conteúdo não atendeu minhas expectativas, basta pedir o reembolso. Sem burocracia. Sem questionamento.
          </p>
          <p className="text-lg font-semibold text-primary">
            Ou a imersão muda a forma como eu enxergo meu futuro financeiro, ou recebo meu dinheiro de volta.
          </p>
        </div>

        {/* FAQ */}
        <div
          ref={fRef}
          className={`transition-all duration-700 ${fV ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-4">
            FAQ — <span className="text-primary">Perguntas Frequentes</span>
          </h2>
          <p className="text-center text-muted-foreground mb-10">Tire suas dúvidas antes de garantir sua vaga</p>

          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="glass-card rounded-xl px-6 border-none"
              >
                <AccordionTrigger className="text-base md:text-lg font-semibold text-foreground hover:text-primary hover:no-underline py-5">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-base text-foreground/70 leading-relaxed pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default GuaranteeFAQSection;
