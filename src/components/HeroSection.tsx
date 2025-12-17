import { Phone, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import heroImage from "@/assets/hero-kebab.jpg";

const HeroSection = () => {
  const scrollToMenu = () => {
    document.getElementById("carta")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Kebab en King Kebab Los Alcázares"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/80 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-primary/20 border border-primary/30 rounded-full px-4 py-2 mb-6"
          >
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-sm text-foreground/90 font-medium">4,6 ⭐ en Google · 69 reseñas</span>
          </motion.div>

          {/* Main Heading */}
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-foreground mb-6 leading-none">
            KEBAB Y PIZZAS EN{" "}
            <span className="text-gradient">LOS ALCÁZARES</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl sm:text-2xl text-foreground/80 font-light mb-4">
            Come bien, sin esperar y sin pagar de más
          </p>

          {/* Description */}
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
            En King Kebab preparamos kebabs, durums, pizzas y menús completos con buen sabor, 
            precios claros y atención cercana. Ideal para comer aquí o recoger tu pedido.
          </p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              variant="hero"
              size="xl"
              asChild
            >
              <a href="tel:+34671396405" className="flex items-center gap-3">
                <Phone className="w-5 h-5" />
                Llama y haz tu pedido
              </a>
            </Button>
            <Button
              variant="hero-outline"
              size="xl"
              onClick={scrollToMenu}
            >
              Ver carta
            </Button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <button
            onClick={scrollToMenu}
            className="flex flex-col items-center gap-2 text-foreground/50 hover:text-primary transition-colors"
          >
            <span className="text-xs uppercase tracking-widest">Descubre más</span>
            <ChevronDown className="w-6 h-6 animate-bounce" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
