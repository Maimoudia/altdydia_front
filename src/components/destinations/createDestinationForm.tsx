import React, { useState, useEffect } from "react";
import { Destination } from "../types";

interface CreateDestinationFormProps {
  destination?: Destination;
  refresh: () => void;
  close?: () => void;
}

const CreateDestinationForm: React.FC<CreateDestinationFormProps> = ({ destination, refresh, close }) => {
  const [Nom_Lieu, setNom_Lieu] = useState<string>("");
  const [Pays, setPays] = useState<string>("");

  useEffect(() => {
    if (destination) {
      setNom_Lieu(destination.Nom_Lieu);
      setPays(destination.Pays);
    }
  }, [destination]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const method = destination ? "PUT" : "POST";
    const url = destination 
      ? `http://localhost:3000/api/destinations/${destination.ID_Destination}`
      : "http://localhost:3000/api/destinations";

    try {
      await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ Nom_Lieu, Pays }),
      });
      setNom_Lieu("");
      setPays("");
      if (close) close();
      refresh();
    } catch (err) {
      console.error("Erreur submit :", err);
      alert("Impossible de créer/modifier la destination");
    }
  };

  return (
    <div>
      <h2>{destination ? "Modifier" : "Créer"} une destination</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Nom du lieu" 
          value={Nom_Lieu} 
          onChange={(e) => setNom_Lieu(e.target.value)} 
          required 
        />
        <input 
          type="text" 
          placeholder="Pays" 
          value={Pays} 
          onChange={(e) => setPays(e.target.value)} 
          required 
        />
        <button type="submit">{destination ? "Modifier" : "Créer"}</button>
        {close && <button type="button" onClick={close}>Annuler</button>}
      </form>
    </div>
  );
};

export default CreateDestinationForm;








// src/components/CreateDestinationForm.jsx
/*import React, { useState } from "react";
import api from "../../config.tsx/api";

const CreateDestinationForm = () => { 

//const CreateDestinationForm = ({ onCreated }) => {
  const [nom, setNom] = useState("");
  const [pays, setPays] = useState("");
  const [description, setDescription] = useState("");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      //const response = await api.post("/destinations", { nom, pays, description });
      //onCreated(response.data);
      setNom(""); setPays(""); setDescription("");
    } catch (err) {
      console.error("Erreur création :", err);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <input placeholder="Nom" value={nom} onChange={(e) => setNom(e.target.value)} required />
      <input placeholder="Pays" value={pays} onChange={(e) => setPays(e.target.value)} required />
      <input placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
      <button type="submit">Créer</button>
    </form>
  );
};

export default CreateDestinationForm;*/
