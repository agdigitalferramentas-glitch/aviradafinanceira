import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import testimonial01 from "@/assets/testimonial-01.webp";

const testimonials = [testimonial01];

const SocialProofSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-10 md:py-16 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[120px]" />

      <div
        ref={ref}
        className={`container mx-auto px-4 max-w-5xl relative z-10 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-center mb-4 leading-tight">
          Veja o que acontece com quem decide agir{" "}
          <span className="text-primary">antes de ser tarde demais.</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 text-lg">
          Depoimentos reais de quem já acompanha Bruno Musa
        </p>

        <div className="flex flex-col items-center gap-6">
          {testimonials.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`Depoimento ${i + 1}`}
              className="w-full max-w-2xl rounded-xl"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
