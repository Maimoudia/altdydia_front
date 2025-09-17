import React, { useState } from "react";
import axios from "axios";

const DeleteForm = ({ itemId, onItemDeleted }) => {
  const [message, setMessage] = useState("");

  const handleDelete = async () => {
    // Demande de confirmation avant suppression
    if (!window.confirm("Voulez-vous vraiment supprimer cet élément ?")) return;

    try {
      await axios.delete(`http://localhost:5000/items/${itemId}`);
      setMessage("Item supprimé !");
      onItemDeleted(itemId);
    } catch (error) {
      setMessage(error.response?.data?.message || "Erreur lors de la suppression");
    }
  };

  return (
    <div>
      <button onClick={handleDelete}>Supprimer</button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default DeleteForm;
