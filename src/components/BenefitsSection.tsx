import { motion } from "framer-motion";
import { Sparkles, Coins, Zap, Heart } from "lucide-react";

const benefits = [
  {
    icon: Sparkles,
    title: "Buen sabor",
    description: "Ingredientes frescos y recetas que enamoran. El sabor que te hace volver.",
  },
  {
    icon: Coins,
    title: "Precios económicos",
    description: "Menús completos sin romper el bolsillo. Calidad a precio justo.",
  },
  {
    icon: Zap,
    title: "Servicio rápido",
    description: "Tu pedido listo en minutos. Sin esperas, sin complicaciones.",
  },
  {
    icon: Heart,
    title: "Trato cercano",
    description: "Te atendemos como en casa. Conocemos a nuestros clientes por nombre.",
  },
];

const BenefitsSection = () => {
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
            POR QUÉ <span className="text-gradient">REPETIR</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Nuestros clientes no vienen una vez, vuelven siempre. Esto es lo que nos diferencia.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                <benefit.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-display text-xl text-foreground mb-2">{benefit.title}</h3>
              <p className="text-muted-foreground text-sm">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
