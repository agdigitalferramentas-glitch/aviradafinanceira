import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const TopBar = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 glass border-b border-primary/20">
      <div className="container mx-auto px-4 py-3 text-center">
        <p className="text-sm md:text-base font-semibold text-foreground">
          <span className="text-primary">LOTE ZERO:</span> vagas limitadas e podem virar a qualquer momento!
        </p>
      </div>
    </div>
  );
};

export default TopBar;
