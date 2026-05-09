import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { CheckCircle2, MessageCircle, Calendar, UserCheck, ArrowRight } from "lucide-react";
import logo from "@/assets/logo-opm0526.svg";
import logoFooter from "@/assets/logo-niu.png";
import heroBg from "@/assets/hero-background-desktop.webp";
import heroBgMobileTablet from "@/assets/hero-background-mobile-tablet.webp";

const WHATSAPP_LINK = "https://chat.whatsapp.com/HXUR0U3dFGx0P4KBtV9pk9";

const steps = [
  {
    icon: MessageCircle,
    n: "Passo 1",
    title: "Entre no grupo exclusivo",
    text: "Este é o ambiente onde tudo acontece: encontros ao vivo, materiais e acesso direto ao Bruno e à turma.",
    cta: true,
  },
  {
    icon: Calendar,
    n: "Passo 2",
    title: "Aguarde o calendário",
    text: "São 6 encontros ao vivo, um a cada 15 dias. Datas e horários serão enviados no grupo.",
  },
  {
    icon: UserCheck,
    n: "Passo 3",
    title: "Apresente-se",
    text: "Quando entrar, mande seu nome e de onde você está vindo.",
  },
];

const Opm0526Obg = () => {
  const { ref, isVisible } = useScrollAnimation(0.05);

  return (
    <main className="opm0526-theme min-h-screen bg-background text-foreground flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-background/70 border-b border-border">
        <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
          <img src={logo} alt="Bruno Musa" className="h-8 w-auto" />
        </nav>
      </header>

      {/* HERO / Confirmation */}
      <section className="relative overflow-hidden flex-1 flex items-center py-16 md:py-24">
        <img
          src={heroBgMobileTablet}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover object-top z-0 lg:hidden opacity-40"
        />
        <img
          src={heroBg}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover object-bottom z-0 hidden lg:block opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background z-0" />

        <div
          ref={ref}
          className={`container mx-auto px-4 relative z-10 max-w-4xl transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm text-primary font-semibold mb-6">
              <CheckCircle2 className="w-4 h-4" />
              Vaga confirmada
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1] mb-6">
              Sua vaga na{" "}
              <span className="text-gradient">Operação Musa</span>{" "}
              está confirmada.
            </h1>
            <p className="text-base md:text-xl text-foreground/80 leading-relaxed max-w-2xl mx-auto">
              A partir de agora, você tem acompanhamento direto do Bruno Musa pelos próximos 3 meses.
            </p>
          </div>

          {/* Next steps */}
          <div className="mb-10">
            <h2 className="text-2xl md:text-3xl font-extrabold text-center mb-8">
              Próximos <span className="text-gradient">passos</span>
            </h2>

            <div className="grid gap-5">
              {steps.map((s, i) => {
                const Icon = s.icon;
                return (
                  <div
                    key={i}
                    className="glass-card dark-card rounded-2xl p-6 md:p-7 transition-all duration-300 hover:border-primary/40"
                  >
                    <div className="flex items-start gap-5">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs uppercase tracking-[0.2em] text-primary font-bold mb-1">
                          {s.n}
                        </p>
                        <h3 className="text-lg md:text-xl font-bold mb-2">
                          {s.title}
                        </h3>
                        <p className="text-sm md:text-base text-foreground/70 leading-relaxed">
                          {s.text}
                        </p>
                        {s.cta && (
                          <a
                            href={WHATSAPP_LINK}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group mt-5 inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-bold uppercase tracking-wide rounded-lg text-sm md:text-base animate-pulse-glow hover:glow-green-intense transition-all duration-300 hover:scale-[1.02] hover:brightness-110 w-full md:w-auto"
                          >
                            <span>Acessar o grupo agora</span>
                            <ArrowRight className="w-4 h-4 md:w-5 md:h-5 transition-transform group-hover:translate-x-1" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Signature */}
          <div className="text-center">
            <p className="text-base md:text-lg text-foreground/80 mb-2">
              Nos vemos no primeiro encontro.
            </p>
            <p className="text-lg md:text-xl font-bold text-gradient">
              Bruno Musa
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-primary/10 py-10">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-6 flex justify-center">
            <img src={logoFooter} alt="Niu Cursos" className="h-12 md:h-14 w-auto" />
          </div>
          <p className="text-sm text-muted-foreground mb-2">
            Dúvidas? Fale com a equipe pelo nosso canal de suporte.
          </p>
          <p className="text-sm text-muted-foreground">
            ©2026 Niu Cursos - Todos os direitos reservados
          </p>
        </div>
      </footer>
    </main>
  );
};

export default Opm0526Obg;
