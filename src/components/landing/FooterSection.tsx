const FooterSection = () => {
  return (
    <footer className="py-12 border-t border-primary/10">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-6">
          <span className="text-2xl font-extrabold text-gradient">A Virada Financeira</span>
        </div>
        <p className="text-sm text-muted-foreground mb-4">
          Imersão ao vivo com Bruno Musa — Dia 09 de maio de 2025
        </p>
        <div className="h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent mb-6 max-w-sm mx-auto" />
        <p className="text-xs text-muted-foreground/60">
          © {new Date().getFullYear()} Bruno Musa. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default FooterSection;
