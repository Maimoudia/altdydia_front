import { useState } from "react";
import { updateVoyage } from "../services/voyageService";

export default function UpdateVoyageForm({ voyage, onUpdated }: { voyage: any; onUpdated: () => void }) {
  const [nom, setNom] = useState(voyage.nom);
  const [description, setDescription] = useState(voyage.description);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateVoyage(voyage.id, { nom, description })
      .then(() => {
        alert("Voyage mis à jour !");
        onUpdated();
      })
      .catch((err) => console.error(err));
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2">
      <input
        type="text"
        value={nom}
        onChange={(e) => setNom(e.target.value)}
        className="border p-2 rounded"
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="border p-2 rounded"
      />
      <button type="submit" className="bg-green-500 text-white px-3 py-1 rounded">
        Mettre à jour
      </button>
    </form>
  );
}
