import { ArrowRight } from "lucide-react";

interface CTAButtonProps {
  text: string;
  href?: string;
  className?: string;
  size?: "default" | "lg";
}

const CTAButton = ({ text, href = "#", className = "", size = "default" }: CTAButtonProps) => {
  const sizeClasses = size === "lg" 
    ? "px-10 py-5 text-base md:text-lg" 
    : "px-8 py-4 text-sm md:text-base";

  return (
    <a
      href={href}
      className={`
        group relative inline-flex items-center justify-center gap-3
        ${sizeClasses}
        bg-primary text-primary-foreground
        font-bold uppercase tracking-wide
        rounded-lg
        animate-pulse-glow
        hover:glow-green-intense
        transition-all duration-300
        hover:scale-[1.02] hover:brightness-110
        ${className}
      `}
    >
      <span className="text-center break-words hyphens-auto" lang="pt-BR">{text}</span>
      <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1 flex-shrink-0" />
    </a>
  );
};

export default CTAButton;
