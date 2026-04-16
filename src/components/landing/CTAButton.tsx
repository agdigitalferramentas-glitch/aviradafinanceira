import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { appendTrackingParams } from "@/lib/tracking";

interface CTAButtonProps {
  text: string;
  href?: string;
  className?: string;
  size?: "default" | "lg";
}

const CTAButton = ({ text, href = "#", className = "", size = "default" }: CTAButtonProps) => {
  const sizeClasses = size === "lg" 
    ? "px-10 py-5 text-base md:text-lg" 
    : "px-8 py-4 text-base";

  // Compute final href with current query params appended (for external checkout links)
  const [finalHref, setFinalHref] = useState(href);
  useEffect(() => {
    setFinalHref(appendTrackingParams(href));
  }, [href]);

  // Prevent orphan words by adding non-breaking spaces between last 3 words
  const preventOrphans = (text: string) => {
    const words = text.split(' ');
    if (words.length <= 3) return text;
    
    const lastThree = words.slice(-3).join('\u00A0'); // \u00A0 is non-breaking space
    const rest = words.slice(0, -3).join(' ');
    
    return rest + ' ' + lastThree;
  };

  return (
    <a
      href={finalHref}
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
      <span className="text-center break-words hyphens-none" style={{ textWrap: 'balance' as any }}>
        {preventOrphans(text)}
      </span>
      <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1 flex-shrink-0" />
    </a>
  );
};

export default CTAButton;
