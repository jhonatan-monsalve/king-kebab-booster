import { motion } from "framer-motion";
import { ListOrdered, Phone, CheckCircle2 } from "lucide-react";

const steps = [
  {
    icon: ListOrdered,
    number: "01",
    title: "Elige tu pedido",
    description: "Mira nuestra carta y decide qué te apetece comer hoy.",
  },
  {
    icon: Phone,
    number: "02",
    title: "Llámanos o ven al local",
    description: "Haz tu pedido por teléfono o directamente en barra.",
  },
  {
    icon: CheckCircle2,
    number: "03",
    title: "Come aquí o recoge",
    description: "Disfruta en el local o llévate tu pedido sin esperar.",
  },
];

const HowItWorksSection = () => {
  return (
    <section className="py-20 bg-card/50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-foreground mb-4">
            FÁCIL Y <span className="text-gradient">RÁPIDO</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Tres pasos y listo. Así de simple.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="relative text-center"
            >
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-px bg-gradient-to-r from-primary/50 to-transparent" />
              )}

              {/* Number Badge */}
              <div className="relative inline-flex items-center justify-center w-16 h-16 mb-6">
                <div className="absolute inset-0 bg-primary/10 rounded-full" />
                <span className="font-display text-3xl text-primary">{step.number}</span>
              </div>

              <h3 className="font-display text-xl text-foreground mb-2">{step.title}</h3>
              <p className="text-muted-foreground text-sm">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
