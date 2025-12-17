import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const FinalCTA = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-card relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-foreground mb-6">
            ¿TE APETECE COMER{" "}
            <span className="text-gradient">BIEN HOY</span>?
          </h2>
          <p className="text-lg text-muted-foreground mb-10">
            Llámanos y prepara tu pedido en minutos. Te esperamos en King Kebab Los Alcázares.
          </p>

          <Button
            variant="cta"
            size="xl"
            asChild
            className="text-xl"
          >
            <a href="tel:+34671396405" className="flex items-center gap-3">
              <Phone className="w-6 h-6" />
              Llamar ahora: 671 39 64 05
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
