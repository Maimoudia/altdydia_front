import { useState } from "react";
import { createVoyage } from "../services/voyageService";

export default function CreateVoyageForm() {
  const [nom, setNom] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    createVoyage({ nom, description })
      .then(() => {
        alert("Voyage créé !");
        setNom("");
        setDescription("");
      })
      .catch((err) => console.error(err));
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2">
      <input
        type="text"
        placeholder="Nom du voyage"
        value={nom}
        onChange={(e) => setNom(e.target.value)}
        className="border p-2 rounded"
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="border p-2 rounded"
      />
      <button type="submit" className="bg-blue-500 text-white px-3 py-1 rounded">
        Créer
      </button>
    </form>
  );
}
