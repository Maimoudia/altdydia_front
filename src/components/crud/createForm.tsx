import React, { useState } from "react";
import axios from "axios";

const CreateForm = ({ onItemCreated }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/items", {
        name,
        description,
      });
      setMessage("Item créé !");
      onItemCreated(response.data);
      setName("");
      setDescription("");
    } catch (error) {
      setMessage(error.response?.data?.message || "Erreur lors de la création");
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <h3>Créer un élément</h3>
      <input
        type="text"
        placeholder="Nom"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <button type="submit">Créer</button>
      {message && <p>{message}</p>}
    </form>
  );
};

export default CreateForm;
