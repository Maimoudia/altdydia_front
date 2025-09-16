import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Minus, Plus, Users } from 'lucide-react';
import HerroBanner from '../assets/hero.jpg';
import { useState } from 'react';

const Hero = () => {
  const [activeTab, setActiveTab] = useState("Vols");
  const [tripType, setTripType] = useState("Aller-retour");
  const [showTravelersMenu, setShowTravelersMenu] = useState(false);
  const [travelers, setTravelers] = useState({
    adults: 1,
    children: 0,
    babies: 0,
  });

  const incrementTraveler = (type: keyof typeof travelers) => {
    setTravelers((prev) => ({
      ...prev,
      [type]: prev[type] + 1,
    }));
  };

  const decrementTraveler = (type: keyof typeof travelers) => {
    if (travelers[type] > 0) {
      setTravelers((prev) => ({
        ...prev,
        [type]: prev[type] - 1,
      }));
    }
  };

  const totalTravelers = travelers.adults + travelers.children + travelers.babies;

  return (
    <div className="relative h-screen">
      {/* Image d'arrière-plan */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${HerroBanner})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>
      </div>

      {/* Contenu */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Découvrez le Luxe à l'État Pur
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl">
              Voyagez dans les destinations les plus exclusives du monde avec un service sur mesure et des expériences uniques.
            </p>

            {/* Formulaire de recherche */}
            <motion.div
              className="mt-10 bg-white/10 backdrop-blur-md p-6 rounded-xl max-w-4xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="tabs mb-6 flex gap-2">
                {["Vols", "Hôtels", "Vol + Hôtel", "Location"].map((tab) => (
                  <button
                    key={tab}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeTab === tab ? 'bg-white text-black' : 'bg-transparent text-white hover:bg-white/20'}`}
                    onClick={() => setActiveTab(tab)}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              <div className="search-options mb-4 flex gap-6 items-center flex-wrap">
                {["Aller-retour", "Aller simple", "Multi-destinations"].map((type) => (
                  <label key={type} className="flex items-center gap-1 text-sm">
                    <input
                      type="radio"
                      name="trip-type"
                      checked={tripType === type}
                      onChange={() => setTripType(type)}
                      className="accent-white"
                    />
                    {type}
                  </label>
                ))}

                <select className="bg-transparent text-white border-b border-white/30 px-2 py-1 text-sm">
                  <option>Économique</option>
                  <option>Eco prenium</option>
                  <option>Affaire</option>
                  <option>Premiere</option>

                </select>

                <label className="flex items-center gap-1 text-sm">
                  <input type="checkbox" className="accent-white" />
                  Vols directs
                </label>
              </div>

              <div className="search-form mb-6 grid grid-cols-1 md:grid-cols-5 gap-4">
                <input
                  type="text"
                  placeholder="D'où partez-vous ?"
                  className="bg-white/10 border border-white/20 text-white placeholder-white/70 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
                />
                <input
                  type="text"
                  placeholder="Où allez-vous ?"
                  className="bg-white/10 border border-white/20 text-white placeholder-white/70 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
                />
                <input
                  type="date"
                  placeholder="Départ le"
                  className="bg-white/10 border border-white/20 text-white placeholder-white/70 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
                />
                <input
                  type="date"
                  placeholder="Retour le"
                  className="bg-white/10 border border-white/20 text-white placeholder-white/70 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
                />

                {/* Sélecteur de voyageurs personnalisé */}
                <div className="relative">
                  <button
                    type="button"
                    className="w-full bg-white/10 border border-white/20 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-white text-left flex justify-between items-center"
                    onClick={() => setShowTravelersMenu(!showTravelersMenu)}
                  >
                    <span>
                      <Users size={16} className="inline mr-2" />
                      {totalTravelers} voyageur{totalTravelers > 1 ? "s" : ""}
                    </span>
                  </button>

                  <AnimatePresence>
                    {showTravelersMenu && (
                      <motion.div
                        className="absolute right-0 mt-2 w-64 bg-white text-black rounded-lg shadow-xl p-4 z-20"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                      >
                        <div className="space-y-4">
                          <div className="flex justify-between items-center">
                            <div>
                              <p className="font-medium">Adulte(s)</p>
                              <p className="text-sm text-gray-500">(12 ans et plus)</p>
                            </div>
                            <div className="flex items-center gap-3">
                              <button
                                className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center"
                                onClick={() => decrementTraveler("adults")}
                              >
                                <Minus size={16} />
                              </button>
                              <span className="font-medium">{travelers.adults}</span>
                              <button
                                className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center"
                                onClick={() => incrementTraveler("adults")}
                              >
                                <Plus size={16} />
                              </button>
                            </div>
                          </div>

                          <div className="flex justify-between items-center">
                            <div>
                              <p className="font-medium">Enfant(s)</p>
                              <p className="text-sm text-gray-500">(2-11 ans)</p>
                            </div>
                            <div className="flex items-center gap-3">
                              <button
                                className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center"
                                onClick={() => decrementTraveler("children")}
                              >
                                <Minus size={16} />
                              </button>
                              <span className="font-medium">{travelers.children}</span>
                              <button
                                className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center"
                                onClick={() => incrementTraveler("children")}
                              >
                                <Plus size={16} />
                              </button>
                            </div>
                          </div>

                          <div className="flex justify-between items-center">
                            <div>
                              <p className="font-medium">Bébé(s)</p>
                              <p className="text-sm text-gray-500">(moins de 2 ans)</p>
                            </div>
                            <div className="flex items-center gap-3">
                              <button
                                className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center"
                                onClick={() => decrementTraveler("babies")}
                              >
                                <Minus size={16} />
                              </button>
                              <span className="font-medium">{travelers.babies}</span>
                              <button
                                className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center"
                                onClick={() => incrementTraveler("babies")}
                              >
                                <Plus size={16} />
                              </button>
                            </div>
                          </div>
                        </div>

                        <div className="border-t border-gray-200 mt-4 pt-4">
                          <button
                            className="w-full bg-green-600 text-white py-2 rounded-full font-medium hover:bg-green-700 transition-colors"
                            onClick={() => setShowTravelersMenu(false)}
                          >
                            Terminer
                          </button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              <div className="search-buttons flex gap-4">
                <button className="bg-white text-black px-6 py-3 rounded-full font-medium flex items-center gap-2 hover:bg-white/90 transition-colors">
                  Rechercher Vol + Hôtel
                </button>
                <button className="bg-white text-black px-6 py-3 rounded-full font-medium flex items-center gap-2 hover:bg-white/90 transition-colors">
                  Rechercher des vols <ArrowRight size={16} />
                </button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;