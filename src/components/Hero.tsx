import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Minus, Plus, Users } from "lucide-react";
import HeroBanner from "../assets/hero.jpg";

const Hero = () => {
  const [activeTab, setActiveTab] = useState("Vols");
  const [tripType, setTripType] = useState("Aller-retour");
  const [showTravelersMenu, setShowTravelersMenu] = useState(false);
  const [travelers, setTravelers] = useState({
    adults: 1,
    children: 0,
    babies: 0,
  });

  const [departure, setDeparture] = useState("");
  const [arrival, setArrival] = useState("");
  const [departDate, setDepartDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [results, setResults] = useState([]);

  const incrementTraveler = (type) => {
    setTravelers((prev) => ({ ...prev, [type]: prev[type] + 1 }));
  };

  const decrementTraveler = (type) => {
    setTravelers((prev) => ({
      ...prev,
      [type]: prev[type] > 0 ? prev[type] - 1 : 0,
    }));
  };

  const totalTravelers =
    travelers.adults + travelers.children + travelers.babies;

  // Fonction pour récupérer les voyages depuis ton backend
  const handleSearchFlights = async () => {
    try {
      const params = new URLSearchParams();
      if (departure) params.append("departure", departure);
      if (arrival) params.append("arrival", arrival);
      if (departDate) params.append("departDate", departDate);
      if (returnDate) params.append("returnDate", returnDate);

      const res = await fetch(
        `http://localhost:3000/api/voyages?${params.toString()}`
      );
      const data = await res.json();
      setResults(data);
    } catch (err) {
      console.error(err);
      alert("Erreur lors de la récupération des voyages");
    }
  };

  return (
    <div className="relative h-screen">
      {/* Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${HeroBanner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="text-white max-w-7xl mx-auto p-4">
          <motion.h1
            className="text-5xl md:text-6xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Découvrez le Luxe à l'État Pur
          </motion.h1>
          <motion.p
            className="mb-6 text-xl max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Voyagez dans les destinations les plus exclusives du monde avec un
            service sur mesure et des expériences uniques.
          </motion.p>

          {/* Form */}
          <motion.div
            className="bg-white/10 backdrop-blur-md p-6 rounded-xl max-w-4xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            {/* Tabs */}
            <div className="tabs mb-4 flex gap-2">
              {["Vols", "Hôtels", "Vol + Hôtel", "Location"].map((tab) => (
                <button
                  key={tab}
                  className={`px-4 py-2 rounded-full text-sm font-medium ${
                    activeTab === tab
                      ? "bg-white text-black"
                      : "bg-transparent text-white hover:bg-white/20"
                  }`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Inputs */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-4">
              <input
                type="text"
                placeholder="D'où partez-vous ?"
                className="bg-white/10 border border-white/20 rounded-lg px-4 py-3 placeholder-white text-white focus:outline-none focus:ring-2 focus:ring-white"
                value={departure}
                onChange={(e) => setDeparture(e.target.value)}
              />
              <input
                type="text"
                placeholder="Où allez-vous ?"
                className="bg-white/10 border border-white/20 rounded-lg px-4 py-3 placeholder-white text-white focus:outline-none focus:ring-2 focus:ring-white"
                value={arrival}
                onChange={(e) => setArrival(e.target.value)}
              />
              <input
                type="date"
                className="bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-white"
                value={departDate}
                onChange={(e) => setDepartDate(e.target.value)}
              />
              <input
                type="date"
                className="bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-white"
                value={returnDate}
                onChange={(e) => setReturnDate(e.target.value)}
              />

              {/* Travelers */}
              <div className="relative">
                <button
                  type="button"
                  className="w-full bg-white/10 border border-white/20 px-4 py-3 rounded-lg flex justify-between items-center text-left"
                  onClick={() => setShowTravelersMenu(!showTravelersMenu)}
                >
                  <span>
                    <Users size={16} className="inline mr-2" />
                    {totalTravelers} voyageur
                    {totalTravelers > 1 ? "s" : ""}
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
                      {["adults", "children", "babies"].map((type) => (
                        <div
                          key={type}
                          className="flex justify-between items-center mb-2"
                        >
                          <span className="capitalize">{type}</span>
                          <div className="flex items-center gap-2">
                            <button onClick={() => decrementTraveler(type)}>
                              <Minus size={16} />
                            </button>
                            <span>{travelers[type]}</span>
                            <button onClick={() => incrementTraveler(type)}>
                              <Plus size={16} />
                            </button>
                          </div>
                        </div>
                      ))}
                      <button
                        className="mt-2 w-full bg-green-600 text-white py-2 rounded-full"
                        onClick={() => setShowTravelersMenu(false)}
                      >
                        Terminer
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Search buttons */}
            <div className="flex gap-4">
              <button
                onClick={handleSearchFlights}
                className="bg-white text-black px-6 py-3 rounded-full font-medium flex items-center gap-2 hover:bg-white/90 transition-colors"
              >
                Rechercher Vol + Hôtel
              </button>
              <button
                onClick={handleSearchFlights}
                className="bg-white text-black px-6 py-3 rounded-full font-medium flex items-center gap-2 hover:bg-white/90 transition-colors"
              >
                Rechercher des vols <ArrowRight size={16} />
              </button>
            </div>

            {/* Results */}
            {results.length > 0 && (
              <div className="mt-4 bg-white/20 p-4 rounded-lg text-black">
                <h2 className="font-bold mb-2">Résultats :</h2>
                <ul>
                  {results.map((voyage, idx) => (
                    <li key={idx}>
                      {voyage.name} - {voyage.departure} → {voyage.arrival}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
