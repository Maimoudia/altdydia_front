import React, { useState } from "react";
import axios from "axios";

const UpdateForm = ({ item, onItemUpdated, onCancel }) => {
  const [name, setName] = useState(item.name);
  const [description, setDescription] = useState(item.description);
  const [message, setMessage] = useState("");

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`http://localhost:5000/items/${item.id}`, {
        name,
        description,
      });
      setMessage("Item mis à jour !");
      onItemUpdated(response.data);
    } catch (error) {
      setMessage(error.response?.data?.message || "Erreur lors de la mise à jour");
    }
  };

  return (
    <form onSubmit={handleUpdate} style={{ marginTop: "10px" }}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <button type="submit">Mettre à jour</button>
      {onCancel && <button type="button" onClick={onCancel}>Annuler</button>}
      {message && <p>{message}</p>}
    </form>
  );
};

export default UpdateForm;
