import { motion } from "framer-motion";
import { Flame, Pizza, Beef, Salad } from "lucide-react";

const menuCategories = [
  {
    icon: Flame,
    title: "Kebabs & Durums",
    description: "Nuestro plato estrella. Carne asada en vertical con salsas caseras.",
    items: ["Kebab en pan", "Durum enrollado", "Menú kebab completo", "Kebab mixto"],
    price: "Desde 5€",
  },
  {
    icon: Pizza,
    title: "Pizzas",
    description: "Pizzas artesanas con masa fresca y ingredientes de calidad.",
    items: ["Pizzas medianas", "Pizzas familiares", "Pizza kebab especial", "4 Quesos"],
    price: "Desde 7€",
  },
  {
    icon: Beef,
    title: "Hamburguesas",
    description: "Hamburguesas jugosas con pan brioche y acompañamientos.",
    items: ["Hamburguesa clásica", "Hamburguesa doble", "Hamburguesa especial", "Menú completo"],
    price: "Desde 5€",
  },
  {
    icon: Salad,
    title: "Platos Combinados",
    description: "Raciones generosas para los más hambrientos.",
    items: ["Plato kebab", "Plato mixto", "Patatas bravas", "Extras y bebidas"],
    price: "Desde 6€",
  },
];

const MenuSection = () => {
  return (
    <section id="carta" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-foreground mb-4">
            NUESTRA <span className="text-gradient">CARTA</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Opciones para todos los gustos. Kebabs, durums, pizzas, hamburguesas y platos combinados, 
            con menús completos y precios accesibles.
          </p>
        </motion.div>

        {/* Menu Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {menuCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-card rounded-2xl p-6 border border-border hover:border-primary/50 transition-all duration-300 overflow-hidden"
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                {/* Icon and Title */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <category.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-display text-2xl text-foreground">{category.title}</h3>
                      <p className="text-primary font-bold">{category.price}</p>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-muted-foreground mb-4">{category.description}</p>

                {/* Items */}
                <ul className="space-y-2">
                  {category.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-foreground/80">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Price Note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-muted-foreground mt-10"
        >
          Precios orientativos. Consulta nuestra carta completa en el local.
        </motion.p>
      </div>
    </section>
  );
};

export default MenuSection;
