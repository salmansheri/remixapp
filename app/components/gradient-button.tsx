import { useState } from "react";
import { Button } from "~/components/ui/button";
import { ArrowRight } from "lucide-react";

interface GradientButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  onClick?: () => void;
}

export default function GradientButton({
  children,
  onClick,
  ...props
}: GradientButtonProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Button
      {...props}
      className={`
        relative overflow-hidden bg-gradient-to-r from-purple-500 to-pink-500
        hover:from-purple-600 hover:to-pink-600
        text-white font-bold py-2 px-4 rounded-lg
        transition-all duration-300 ease-in-out
        transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-400
      `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      {children}
    </Button>
  );
}
