import logo from "@/assets/logo.svg";

const FooterSection = () => {
  return (
    <footer className="py-12 border-t border-primary/10">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-6 flex justify-center">
          <img src={logo} alt="A Virada Financeira" className="h-12 md:h-14 w-auto" />
        </div>
        <p className="text-sm text-muted-foreground mb-4">
          Imersão ao vivo com Bruno Musa — Dia 09 de maio de 2025
        </p>
        <div className="h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent mb-6 max-w-sm mx-auto" />
        <p className="text-sm text-muted-foreground mb-2">
          Transformamos conhecimento em negócios lucrativos
        </p>
        <p className="text-sm text-muted-foreground mb-6">
          Venha ser um Expert{" "}
          <a href="https://agwebi.com.br/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-semibold">
            AG WEBi
          </a>
        </p>
        <p className="text-xs text-muted-foreground/60">
          © 2026 Bruno Musa. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default FooterSection;
