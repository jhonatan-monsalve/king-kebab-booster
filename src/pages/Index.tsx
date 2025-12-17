import { Helmet } from "react-helmet-async";
import HeroSection from "@/components/HeroSection";
import InfoBar from "@/components/InfoBar";
import MenuSection from "@/components/MenuSection";
import BenefitsSection from "@/components/BenefitsSection";
import ReviewsSection from "@/components/ReviewsSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import LocationSection from "@/components/LocationSection";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import FloatingCallButton from "@/components/FloatingCallButton";

const Index = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: "King Kebab Los Alcázares",
    image: "",
    "@id": "",
    url: "",
    telephone: "+34671396405",
    address: {
      "@type": "PostalAddress",
      streetAddress: "C. de la Concepción, 1",
      addressLocality: "Los Alcázares",
      postalCode: "30710",
      addressRegion: "Murcia",
      addressCountry: "ES",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 37.7443,
      longitude: -0.8527,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "12:30",
      closes: "23:00",
    },
    servesCuisine: ["Kebab", "Pizza", "Comida rápida"],
    priceRange: "€",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.6",
      reviewCount: "69",
    },
  };

  return (
    <>
      <Helmet>
        <title>King Kebab Los Alcázares | Kebab, pizzas y menús baratos</title>
        <meta
          name="description"
          content="Kebab, durums y pizzas en Los Alcázares. Precios económicos, servicio rápido y comida sabrosa. Comer aquí o recoger tu pedido."
        />
        <meta
          name="keywords"
          content="kebab Los Alcázares, kebab en Los Alcázares, comida rápida Los Alcázares, durum Los Alcázares, pizzas Los Alcázares, restaurante barato Los Alcázares"
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="King Kebab Los Alcázares | Kebab, pizzas y menús baratos" />
        <meta
          property="og:description"
          content="Kebab, durums y pizzas en Los Alcázares. Precios económicos, servicio rápido y comida sabrosa."
        />
        <meta property="og:type" content="restaurant" />
        <meta property="og:locale" content="es_ES" />
        <link rel="canonical" href="https://kingkebablosalcazares.com" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <main>
        <HeroSection />
        <InfoBar />
        <MenuSection />
        <BenefitsSection />
        <ReviewsSection />
        <HowItWorksSection />
        <LocationSection />
        <FinalCTA />
      </main>

      <Footer />
      <FloatingCallButton />
    </>
  );
};

export default Index;
