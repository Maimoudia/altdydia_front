import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const PourquoiAltydia = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const features = [
    {
      icon: "🌍", // Remplace par une icône ou un SVG personnalisé
      title: "Voyagez en toute sérénité",
      description:
        "Avec Altydia, organisez vos voyages en quelques clics. Réservez vos vols, hôtels et activités en un seul endroit.",
    },
    {
      icon: "✈️", // Remplace par une icône ou un SVG personnalisé
      title: "Des offres exclusives",
      description:
        "Bénéficiez d'offres et de réductions exclusives sur vos réservations grâce à nos partenariats avec les meilleures compagnies.",
    },
    {
      icon: "💳", // Remplace par une icône ou un SVG personnalisé
      title: "Paiement sécurisé et flexible",
      description:
        "Payez en toute sécurité et profitez de nos options de paiement flexibles pour adapter vos réservations à vos besoins.",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % features.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + features.length) % features.length);
  };

  return (
    <section className="py-16 bg-blue-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Pourquoi utiliser Altydia ?
        </h2>

        <div className="relative">
          <div className="flex justify-center gap-8 mb-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`bg-white p-6 rounded-lg shadow-md w-80 text-center transition-opacity duration-300 ${
                  index === currentSlide ? "opacity-100" : "opacity-50"
                }`}
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-4">
            <button
              onClick={prevSlide}
              className="bg-green-600 text-white p-2 rounded-full hover:bg-green-700 transition-colors"
            >
              <ChevronLeft size={20} />
            </button>
            <div className="flex gap-2">
              {features.map((_, index) => (
                <div
                  key={index}
                  className={`w-3 h-3 rounded-full ${
                    index === currentSlide ? "bg-green-600" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={nextSlide}
              className="bg-green-600 text-white p-2 rounded-full hover:bg-green-700 transition-colors"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PourquoiAltydia;
