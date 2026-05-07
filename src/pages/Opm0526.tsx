import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Calendar,
  TrendingUp,
  Users,
  Radio,
  BookOpen,
  Sparkles,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import logo from "@/assets/logo-opm0526.svg";
import seloGarantia from "@/assets/selo-garantia.png";
import heroBg from "@/assets/opm0526-hero-bg.webp";

const CHECKOUT_URL = "#garantir-vaga";

const CTA = ({
  text = "GARANTIR MINHA VAGA",
  size = "default",
  className = "",
}: {
  text?: string;
  size?: "default" | "lg";
  className?: string;
}) => {
  const sizeClasses =
    size === "lg" ? "px-10 py-5 text-base md:text-lg" : "px-8 py-4 text-base";
  return (
    <a
      href={CHECKOUT_URL}
      className={`group relative inline-flex items-center justify-center gap-3 ${sizeClasses} bg-primary text-primary-foreground font-bold uppercase tracking-wide rounded-lg animate-pulse-glow hover:glow-green-intense transition-all duration-300 hover:scale-[1.02] hover:brightness-110 ${className}`}
    >
      <span className="text-center">{text}</span>
      <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
    </a>
  );
};

const benefits = [
  {
    icon: Radio,
    title: "6 encontros ao vivo",
    text: "Bruno não entrega conteúdo gravado há 5 anos. Ele lê o mercado junto com você, semana a semana, durante os eventos que vão mover o câmbio e juros em 2026.",
  },
  {
    icon: Calendar,
    title: "A janela de 2026",
    text: "Eleições. Copa do Mundo. Câmbio. Juros. Datas reais, com ou sem você dentro. A diferença é estar operando enquanto os eventos acontecem — não assistindo depois que o movimento passou.",
  },
  {
    icon: Users,
    title: "100 vagas, grupo fechado",
    text: "Primeira turma. O dado histórico de referência é 2015–2016: quem estava posicionado naquele ciclo mudou de patamar. Quem esperou o mercado se estabilizar entrou depois do movimento.",
  },
  {
    icon: TrendingUp,
    title: "Sem curso gravado, sem fórmula",
    text: "Você acompanha a leitura em tempo real do que está acontecendo agora. O mercado não espera o conteúdo estar editado.",
  },
  {
    icon: BookOpen,
    title: "Bônus: Empreende Educa",
    text: "18 aulas · 8h51min para aprender como diversificar sua renda empreendendo no Brasil.",
  },
  {
    icon: Sparkles,
    title: "Bônus: Pílulas de Mercado",
    text: "6 aulas · 32 minutos de análises sobre o mercado financeiro brasileiro.",
  },
];

const steps = [
  {
    n: "01",
    title: "Você garante sua vaga",
    text: "100 vagas. Primeira turma. Sem fila de espera depois que o carrinho fecha.",
  },
  {
    n: "02",
    title: "Você acompanha Bruno ao vivo, semana a semana",
    text: "6 encontros durante 3 meses. Bruno lê o que está acontecendo com eleições, Copa, câmbio e juros — e você opera junto enquanto a janela está aberta.",
  },
  {
    n: "03",
    title: "Em agosto, você olha para trás",
    text: "E sabe que estava dentro enquanto o ciclo se movia. O mercado não vai pausar para quem decidiu esperar.",
  },
];

const faqs = [
  {
    q: "Preciso ter experiência com mercado financeiro para entrar?",
    a: "Não. O objetivo da Operação Musa é acompanhar a leitura em tempo real — não pressupõe que você já opera. Se você saiu do evento hoje com a tese de 2026 clara e quer saber o que fazer com o dinheiro que tem agora, é para isso que a mentoria existe.",
  },
  {
    q: "E se eu não puder participar ao vivo de todos os encontros?",
    a: "Os encontros serão gravados. Mas o valor está na leitura em tempo real — Bruno analisa o que está acontecendo naquela semana. Assistir depois é acompanhar a análise, não participar dela.",
  },
  {
    q: "Qual é a garantia?",
    a: "7 dias, pelo Código de Defesa do Consumidor. Se nos primeiros 7 dias você decidir que não é para você, devolução integral sem burocracia.",
  },
  {
    q: "Não tenho muito capital para investir — vale a pena entrar?",
    a: "O valor da Operação Musa não está no tamanho do capital que você coloca no mercado agora. Está em aprender a ler um ciclo ao lado de quem está lendo em tempo real.",
  },
  {
    q: "Já tentei investir antes e não foi bem — o que muda aqui?",
    a: "A maior parte das tentativas anteriores foi autodidata: curso gravado, conteúdo no YouTube, tentativa sozinha. A Operação Musa não é isso. É Bruno lendo ao vivo o que está acontecendo naquela semana — eleições, câmbio, Copa — e você acompanhando a leitura enquanto ela acontece.",
  },
];

const Opm0526 = () => {
  const { ref: heroRef, isVisible: heroV } = useScrollAnimation(0.1);
  const { ref: bRef, isVisible: bV } = useScrollAnimation();
  const { ref: hRef, isVisible: hV } = useScrollAnimation();
  const { ref: pRef, isVisible: pV } = useScrollAnimation();
  const { ref: aRef, isVisible: aV } = useScrollAnimation();
  const { ref: fRef, isVisible: fV } = useScrollAnimation();
  const { ref: cRef, isVisible: cV } = useScrollAnimation();

  return (
    <main className="opm0526-theme min-h-screen bg-background text-foreground">
      {/* Sticky Navbar */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-background/70 border-b border-border">
        <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
          <img src={logo} alt="Bruno Musa" className="h-8 w-auto" />
          <div className="hidden md:flex items-center gap-8 text-sm text-foreground/80">
            <a href="#beneficios" className="hover:text-primary transition">Benefícios</a>
            <a href="#como-funciona" className="hover:text-primary transition">Como funciona</a>
            <a href="#bruno" className="hover:text-primary transition">Bruno Musa</a>
            <a href="#faq" className="hover:text-primary transition">FAQ</a>
          </div>
          <a
            href={CHECKOUT_URL}
            className="px-5 py-2 rounded-md bg-primary text-primary-foreground text-sm font-bold uppercase tracking-wide hover:brightness-110 transition"
          >
            Garantir vaga
          </a>
        </nav>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden pt-12 pb-16 md:pt-20 md:pb-24">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-primary/10 blur-[160px]" />
        <div
          ref={heroRef}
          className={`container mx-auto px-4 relative z-10 grid md:grid-cols-2 gap-12 items-center transition-all duration-1000 ${heroV ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm text-primary font-semibold mb-6">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Apenas 100 vagas disponíveis · Até segunda-feira meio-dia
            </div>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold leading-[1.15] mb-6">
              100 pessoas vão operar ao lado de Bruno Musa durante os próximos meses.{" "}
              <span className="text-gradient">As outras vão assistir de fora.</span>
            </h1>
            <p className="text-base md:text-lg text-foreground/80 leading-relaxed mb-8">
              Operação Musa — 3 meses, 6 encontros ao vivo. Bruno Musa lê o mercado junto com você durante eleições, Copa do Mundo e oscilação do câmbio. Quando o ciclo fechar, você vai se arrepender de não ter aproveitado.
            </p>
            <CTA size="lg" />
            <p className="mt-4 text-xs text-muted-foreground uppercase tracking-wider">
              Primeira turma · Carrinho fecha em 3 dias
            </p>
          </div>
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl glass-card overflow-hidden flex items-center justify-center relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-primary/5" />
              <div className="text-center px-8 relative z-10">
                <div className="text-7xl font-extrabold text-gradient mb-2">2026</div>
                <p className="text-lg text-foreground/70">A janela já está aberta.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PARTNERS / Trust strip */}
      <section className="py-8 border-y border-border">
        <div className="container mx-auto px-4">
          <p className="text-center text-xs uppercase tracking-[0.3em] text-muted-foreground mb-6">
            Visto e ouvido em
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-4 text-foreground/60 font-bold text-lg md:text-xl">
            <span>Jovem Pan</span>
            <span className="opacity-40">•</span>
            <span>JP News</span>
            <span className="opacity-40">•</span>
            <span>Pan Rádio</span>
            <span className="opacity-40">•</span>
            <span>YouTube</span>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section id="beneficios" className="py-16 md:py-24">
        <div
          ref={bRef}
          className={`container mx-auto px-4 max-w-6xl transition-all duration-700 ${bV ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <h2 className="text-3xl md:text-5xl font-extrabold text-center mb-4">
            O que você vai <span className="text-gradient">acessar</span>
          </h2>
          <p className="text-center text-muted-foreground mb-14 max-w-2xl mx-auto">
            Tudo o que está dentro da Operação Musa — leitura ao vivo, grupo fechado e bônus.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {benefits.map((b, i) => {
              const Icon = b.icon;
              return (
                <div
                  key={i}
                  className="glass-card rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_0_20px_rgba(201,168,76,0.4),_0_0_60px_rgba(201,168,76,0.15)]"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold mb-3">{b.title}</h3>
                  <p className="text-sm md:text-base text-foreground/70 leading-relaxed">
                    {b.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="como-funciona" className="py-16 md:py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
        <div
          ref={hRef}
          className={`container mx-auto px-4 max-w-5xl relative z-10 transition-all duration-700 ${hV ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <h2 className="text-3xl md:text-5xl font-extrabold text-center mb-14">
            Como <span className="text-gradient">funciona</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {steps.map((s, i) => (
              <div key={i} className="glass-card rounded-2xl p-8 relative">
                <div className="text-5xl font-extrabold text-primary/30 mb-4">{s.n}</div>
                <h3 className="text-lg md:text-xl font-bold mb-3">{s.title}</h3>
                <p className="text-sm md:text-base text-foreground/70 leading-relaxed">
                  {s.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="garantir-vaga" className="py-16 md:py-24">
        <div
          ref={pRef}
          className={`container mx-auto px-4 max-w-3xl transition-all duration-700 ${pV ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <h2 className="text-3xl md:text-5xl font-extrabold text-center mb-12 leading-tight">
            Tudo que está dentro da{" "}
            <span className="text-gradient">Operação Musa</span>
          </h2>

          <div className="glass-card rounded-3xl p-6 md:p-10 mb-8">
            <div className="divide-y divide-border">
              {[
                ["Operação Musa — 3 meses, 6 encontros ao vivo com Bruno Musa", "R$ 1.997"],
                ["Bônus: Empreende Educa", "R$ 997"],
                ["Bônus: Pílulas de Mercado com Bruno Musa", "R$ 497"],
              ].map(([item, val], i) => (
                <div key={i} className="flex items-center justify-between py-4 gap-4">
                  <span className="text-sm md:text-base text-foreground/90">{item}</span>
                  <span className="text-sm md:text-base font-semibold text-foreground/70 whitespace-nowrap">
                    {val}
                  </span>
                </div>
              ))}
              <div className="flex items-center justify-between py-4 gap-4">
                <span className="text-base md:text-lg font-bold">Total</span>
                <span className="text-base md:text-lg font-bold text-muted-foreground line-through">
                  R$ 3.491
                </span>
              </div>
            </div>
          </div>

          <div className="glass-card rounded-3xl p-8 md:p-12 text-center relative overflow-hidden border-primary/40">
            <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-40 h-40 rounded-full border-2 border-dashed border-primary/30 animate-float" />
            <p className="text-sm uppercase tracking-[0.25em] text-muted-foreground mb-4">
              Nessa página
            </p>
            <p className="text-6xl md:text-7xl font-extrabold text-primary mb-2">
              R$697
            </p>
            <p className="text-base md:text-lg text-foreground/80 mb-8">
              ou 12x de R$ 72,09
            </p>

            <CTA text="GARANTIR MINHA VAGA" size="lg" />

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-foreground/70">
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                100 vagas · Carrinho fecha em 3 dias
              </span>
              <span className="hidden sm:inline opacity-40">•</span>
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                Garantia de 7 dias — CDC
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT BRUNO */}
      <section id="bruno" className="py-16 md:py-24">
        <div
          ref={aRef}
          className={`container mx-auto px-4 max-w-4xl transition-all duration-700 ${aV ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <h2 className="text-3xl md:text-5xl font-extrabold text-center mb-12">
            Quem é <span className="text-gradient">Bruno Musa</span>
          </h2>
          <div className="glass-card rounded-3xl p-8 md:p-14 space-y-6 text-base md:text-lg text-foreground/80 leading-relaxed">
            <p>
              Bruno Musa analisa o mercado financeiro brasileiro para a audiência da Jovem Pan — TV e rádio. Na Operação Musa, você não só ouve a análise: opera ao lado de quem a está fazendo, enquanto os eventos acontecem.
            </p>
            <p>
              Em 2015, durante o governo Dilma e a transição Temer, quem estava posicionado no mercado mudou de patamar. Quem esperou o mercado se estabilizar entrou depois que o movimento já tinha acontecido. A leitura de 2026 — eleições, Copa, câmbio — é a mais clara desde então.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-16 md:py-24">
        <div
          ref={fRef}
          className={`container mx-auto px-4 max-w-3xl transition-all duration-700 ${fV ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="text-center mb-10">
            <img src={seloGarantia} alt="Garantia" className="w-24 mx-auto mb-6 animate-float" />
            <h2 className="text-3xl md:text-5xl font-extrabold mb-3">
              Perguntas <span className="text-gradient">frequentes</span>
            </h2>
            <p className="text-muted-foreground">Tire suas dúvidas antes de garantir sua vaga</p>
          </div>

          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((f, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="glass-card rounded-xl px-6 border-none"
              >
                <AccordionTrigger className="text-base md:text-lg font-semibold hover:text-primary hover:no-underline py-5 text-left">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-base text-foreground/70 leading-relaxed pb-5">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-16 md:py-24">
        <div
          ref={cRef}
          className={`container mx-auto px-4 max-w-4xl transition-all duration-700 ${cV ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="glass-card rounded-3xl p-10 md:p-16 text-center relative overflow-hidden border-primary/40">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[400px] rounded-full bg-primary/10 blur-[120px]" />
            <h2 className="relative text-3xl md:text-5xl font-extrabold mb-6 leading-tight">
              A janela de 2026{" "}
              <span className="text-gradient">já está aberta.</span>
            </h2>
            <p className="relative text-base md:text-lg text-foreground/80 max-w-2xl mx-auto mb-10">
              O mercado vai se mover com eleições, Copa do Mundo e câmbio. Com você dentro ou fora.
            </p>
            <div className="relative">
              <CTA size="lg" />
              <p className="mt-6 text-sm text-foreground/60">
                Garantia de 7 dias. Se não for para você, devolução integral.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border py-12">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <img src={logo} alt="Bruno Musa" className="h-8 w-auto mb-3" />
              <p className="text-sm text-muted-foreground">
                Bruno Musa — A Virada Financeira
              </p>
            </div>
            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider mb-3">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition">Política de Privacidade</a></li>
                <li><a href="#" className="hover:text-primary transition">Termos de Uso</a></li>
                <li><a href="#" className="hover:text-primary transition">Contato</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider mb-3">Canais</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition">YouTube</a></li>
                <li><a href="#" className="hover:text-primary transition">WhatsApp</a></li>
                <li><a href="#" className="hover:text-primary transition">Jovem Pan</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-6 border-t border-border text-center text-xs text-muted-foreground">
            © 2026 Bruno Musa. Todos os direitos reservados.
          </div>
        </div>
      </footer>
    </main>
  );
};

export default Opm0526;
