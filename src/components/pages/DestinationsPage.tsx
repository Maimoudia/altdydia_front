
import React, { useEffect, useState } from "react";
import CreateDestinationForm from "../destinations/createDestinationForm.tsx";
import api from "../../config.tsx/api";

// Définition du type Destination
interface Destination {
  id: number;
  nom: string;
  pays: string;
  description?: string;
}

const DestinationPage: React.FC = () => {
  const [destinations, setDestinations] = useState<Destination[]>([]);

  // Charger toutes les destinations
  const fetchDestinations = async () => {
    try {
      const response = await api.get<Destination[]>("/destinations");
      setDestinations(response.data);
    } catch (err) {
      console.error("Erreur chargement destinations :", err);
    }
  };

  useEffect(() => {
    fetchDestinations();
  }, []);

  // Ajouter une destination après création
  const handleCreated = (newDestination: Destination) => {
    setDestinations((prev) => [...prev, newDestination]);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Gestion des Destinations</h1>
      <CreateDestinationForm onCreated={handleCreated} />

      <h2>Liste des Destinations</h2>
      <ul>
        {destinations.map((d) => (
          <li key={d.id}>
            <strong>{d.nom}</strong> - {d.pays}
            {d.description && <p>{d.description}</p>}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DestinationPage;
