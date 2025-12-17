import { MapPin, Phone, Clock, UtensilsCrossed } from "lucide-react";
import { motion } from "framer-motion";

const infoItems = [
  {
    icon: MapPin,
    label: "Ubicación",
    value: "C. de la Concepción, 1",
    subvalue: "Los Alcázares",
  },
  {
    icon: Phone,
    label: "Teléfono",
    value: "671 39 64 05",
    href: "tel:+34671396405",
  },
  {
    icon: Clock,
    label: "Horario",
    value: "Abierto desde 12:30",
  },
  {
    icon: UtensilsCrossed,
    label: "Servicio",
    value: "Local y recogida",
    subvalue: "Sin entrar al local",
  },
];

const InfoBar = () => {
  return (
    <section className="bg-card border-y border-border">
      <div className="container mx-auto px-4 py-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {infoItems.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex items-start gap-3"
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <item.icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
                  {item.label}
                </p>
                {item.href ? (
                  <a
                    href={item.href}
                    className="text-foreground font-semibold hover:text-primary transition-colors"
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="text-foreground font-semibold">{item.value}</p>
                )}
                {item.subvalue && (
                  <p className="text-sm text-muted-foreground">{item.subvalue}</p>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default InfoBar;
