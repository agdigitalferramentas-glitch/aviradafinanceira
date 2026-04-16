import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { AlertTriangle, MessageCircle } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";
import logo from "@/assets/logo.svg";
import FooterSection from "@/components/landing/FooterSection";

const WHATSAPP_LINK = "https://chat.whatsapp.com/CSQo396NnwQ4ccRAYvXPiP";

const AvfObrigado = () => {
  const { ref, isVisible } = useScrollAnimation(0.05);

  return (
    <>
    <main className="relative min-h-screen flex items-start pt-10 overflow-hidden">
      {/* Desktop background */}
      <div className="absolute inset-0 bg-background hidden md:block">
        <img
          src={heroBackground}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-90"
        />
        <div className="absolute inset-0 bg-background/70" />
      </div>

      {/* Mobile background - solid only, no image */}
      <div className="absolute inset-0 bg-background md:hidden" />

      <div
        ref={ref}
        className={`container mx-auto px-4 relative z-10 pb-12 md:pb-20 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="max-w-2xl mx-auto text-center">
          {/* Logo */}
          <img
            src={logo}
            alt="A Virada Financeira"
            className="h-[38px] md:h-[51px] w-auto mb-8 mx-auto"
          />


          {/* Progress bar */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs md:text-sm uppercase tracking-wide text-muted-foreground">
                Progresso
              </span>
              <span className="text-xs md:text-sm font-bold text-primary">
                98% concluída
              </span>
            </div>
            <div
              className="w-full h-2 rounded-full bg-muted overflow-hidden"
              role="progressbar"
              aria-valuenow={98}
              aria-valuemin={0}
              aria-valuemax={100}
              aria-label="Progresso da inscrição"
            >
              <div
                className="h-full rounded-full glow-green"
                style={{
                  width: "98%",
                  background:
                    "linear-gradient(135deg, #F5E6B8 0%, #D4B96A 39%, #C9A84C 70%, #A07D2E 100%)",
                }}
              />
            </div>
          </div>

          {/* Heading */}
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-extrabold leading-tight mb-5">
            Sua inscrição está{" "}
            <span className="text-gradient">quase confirmada...</span>
          </h1>

          <p className="text-base md:text-lg text-foreground/90 mb-8">
            Falta apenas um último passo para garantir seu acesso à Imersão A
            Virada Financeira!
          </p>

          {/* CTA */}
          <div className="flex flex-col items-center w-full mb-10">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center gap-3 px-10 py-5 text-base md:text-lg bg-primary text-primary-foreground font-bold uppercase tracking-wide rounded-lg animate-pulse-glow hover:glow-green-intense transition-all duration-300 hover:scale-[1.02] hover:brightness-110 w-full sm:w-auto"
            >
              <MessageCircle className="w-5 h-5 md:w-6 md:h-6 flex-shrink-0" />
              <span className="text-center" style={{ textWrap: "balance" as any }}>
                Entrar no grupo
              </span>
            </a>

            <p className="mt-3.5 text-muted-foreground uppercase text-center text-[12px] md:text-[14px]">
              Acesso exclusivo aos participantes confirmados
            </p>
          </div>

          {/* Call-out card */}
          <div className="card-surface rounded-xl p-6 md:p-8 mb-8 text-left">
            <h2 className="text-base md:text-2xl font-bold uppercase tracking-wide mb-5 text-center">
              Para concluir sua confirmação, você precisa entrar no{" "}
              <span className="text-gradient">grupo exclusivo</span> de
              participantes no WhatsApp.
            </h2>

            <p className="text-sm md:text-base text-muted-foreground mb-3">
              É por lá que você vai receber:
            </p>

            <ul className="space-y-3 text-sm md:text-base text-foreground/90 mb-8">
              {[
                "O link oficial da imersão ao vivo",
                "Os avisos importantes antes do evento",
                "Orientações para aproveitar a imersão ao máximo",
                "Todos os materiais complementares",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1.5 w-2 h-2 rounded-full bg-primary shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Warning */}
          <div className="glass-card rounded-xl p-5 md:p-6 text-left flex gap-4 items-start">
            <AlertTriangle
              className="w-6 h-6 md:w-7 md:h-7 text-primary shrink-0 mt-0.5"
              aria-hidden="true"
            />
            <div>
              <p className="font-bold uppercase tracking-wide text-sm md:text-base mb-2">
                Importante
              </p>
              <p className="text-sm md:text-base text-foreground/90">
                O acesso à sala onde a imersão acontecerá será enviado
                exclusivamente pelo grupo. Os participantes que não estiverem no
                grupo podem não conseguir acessar a aula ao vivo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AvfObrigado;
