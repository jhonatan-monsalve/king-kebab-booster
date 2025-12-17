import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";

const LocationSection = () => {
  return (
    <section id="contacto" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-foreground mb-4">
            DÓNDE <span className="text-gradient">ESTAMOS</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            En pleno Los Alcázares, fácil de llegar y con sitio para aparcar.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden border border-border h-[400px]"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3152.4!2d-0.8527!3d37.7443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sC.%20de%20la%20Concepci%C3%B3n%2C%201%2C%20Los%20Alc%C3%A1zares%2C%20Murcia!5e0!3m2!1ses!2ses!4v1702000000000"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación de King Kebab Los Alcázares"
            />
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Address Card */}
            <div className="bg-card rounded-2xl p-6 border border-border">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-xl text-foreground mb-1">Dirección</h3>
                  <p className="text-foreground/80">C. de la Concepción, 1</p>
                  <p className="text-muted-foreground">30710 Los Alcázares, Murcia</p>
                </div>
              </div>
            </div>

            {/* Phone Card */}
            <div className="bg-card rounded-2xl p-6 border border-border">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-xl text-foreground mb-1">Teléfono</h3>
                  <a
                    href="tel:+34671396405"
                    className="text-primary text-xl font-bold hover:text-primary/80 transition-colors"
                  >
                    671 39 64 05
                  </a>
                  <p className="text-muted-foreground text-sm mt-1">
                    Llama para hacer tu pedido
                  </p>
                </div>
              </div>
            </div>

            {/* Hours Card */}
            <div className="bg-card rounded-2xl p-6 border border-border">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-xl text-foreground mb-1">Horario</h3>
                  <p className="text-foreground/80">Abierto todos los días</p>
                  <p className="text-muted-foreground">Desde las 12:30</p>
                </div>
              </div>
            </div>

            {/* Directions Button */}
            <Button
              variant="outline"
              size="lg"
              asChild
              className="w-full"
            >
              <a
                href="https://www.google.com/maps/dir//C.+de+la+Concepci%C3%B3n,+1,+30710+Los+Alc%C3%A1zares,+Murcia"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Navigation className="w-5 h-5" />
                Cómo llegar
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
