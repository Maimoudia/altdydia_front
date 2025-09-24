// src/components/UpdateDestinationForm.jsx
import React, { useState } from "react";
import api from "../../config.tsx/api";

const UpdateDestinationForm = ({ destination, onUpdated }) => {
  const [nom, setNom] = useState(destination.nom);
  const [pays, setPays] = useState(destination.pays);
  const [description, setDescription] = useState(destination.description || "");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.put(`/destinations/${destination.id}`, {
        nom, pays, description
      });
      onUpdated(response.data);
    } catch (err) {
      console.error("Erreur mise à jour :", err);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: "20px", border: "1px solid blue", padding: "10px" }}>
      <input placeholder="Nom" value={nom} onChange={(e) => setNom(e.target.value)} required />
      <input placeholder="Pays" value={pays} onChange={(e) => setPays(e.target.value)} required />
      <input placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
      <button type="submit">Mettre à jour</button>
    </form>
  );
};

export default UpdateDestinationForm;