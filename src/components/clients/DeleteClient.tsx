import React from "react";
import api from "../../config.tsx/api";

interface DeleteClientProps {
  id: number;
  onDeleted: () => void;
}

const DeleteClient: React.FC<DeleteClientProps> = ({ id, onDeleted }) => {
  const handleDelete = async () => {
    if (window.confirm("Voulez-vous vraiment supprimer ce client ?")) {
      await api.delete(`/clients/${id}`);
      onDeleted();
    }
  };

  return <button onClick={handleDelete}>Supprimer</button>;
};

export default DeleteClient;
