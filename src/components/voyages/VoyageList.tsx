// src/components/voyages/VoyagesList.tsx
import { useEffect, useState } from "react";
import { getVoyages, deleteVoyage } from "../services/voyageService";

export default function VoyagesList() {
  const [voyages, setVoyages] = useState<any[]>([]);

  useEffect(() => {
    getVoyages().then((res) => setVoyages(res.data));
  }, []);

  const handleDelete = (id: number) => {
    deleteVoyage(id).then(() => setVoyages(voyages.filter((v) => v.id !== id)));
  };

  return (
    <div>
      <h2>Liste des voyages</h2>
      <ul>
        {voyages.map((voyage) => (
          <li key={voyage.id}>
            {voyage.nom} ({voyage.description})
            <button onClick={() => handleDelete(voyage.id)}>Supprimer</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
