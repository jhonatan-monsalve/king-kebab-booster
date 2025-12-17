import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const FloatingCallButton = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 md:hidden">
      <Button
        variant="floating-call"
        size="icon-lg"
        asChild
      >
        <a href="tel:+34671396405" aria-label="Llamar a King Kebab">
          <Phone className="w-6 h-6" />
        </a>
      </Button>
    </div>
  );
};

export default FloatingCallButton;
