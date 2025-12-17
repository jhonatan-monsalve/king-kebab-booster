import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "María G.",
    rating: 5,
    text: "El mejor kebab de la zona, sin duda. Raciones generosas y el trato es genial.",
    date: "Hace 2 semanas",
  },
  {
    name: "Carlos R.",
    rating: 5,
    text: "Rápido, barato y bueno. La pizza kebab está increíble. Repetiremos seguro.",
    date: "Hace 1 mes",
  },
  {
    name: "Ana P.",
    rating: 5,
    text: "Siempre que vengo a Los Alcázares paso por aquí. Nunca decepciona.",
    date: "Hace 3 semanas",
  },
];

const ReviewsSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-8 h-8 fill-primary text-primary" />
            ))}
          </div>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-foreground mb-4">
            OPINIONES <span className="text-gradient">REALES</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            4,6 sobre 5 en Google · 69 reseñas verificadas
          </p>
        </motion.div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-card rounded-2xl p-6 border border-border relative"
            >
              <Quote className="absolute top-4 right-4 w-8 h-8 text-primary/20" />
              
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>

              {/* Text */}
              <p className="text-foreground/90 mb-4 italic">"{review.text}"</p>

              {/* Author */}
              <div className="flex items-center justify-between">
                <p className="text-foreground font-semibold">{review.name}</p>
                <p className="text-xs text-muted-foreground">{review.date}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Google Link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <a
            href="https://www.google.com/maps/place/King+Kebab/@37.7443,-0.8527,17z"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-primary/80 underline underline-offset-4 transition-colors"
          >
            Ver todas las reseñas en Google →
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ReviewsSection;
