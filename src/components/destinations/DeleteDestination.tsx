import React from "react";
import api from "../../config.tsx/api";

interface DeleteDestinationProps {
  id: number;
  onDeleted: () => void;
}

const DeleteDestination: React.FC<DeleteDestinationProps> = ({ id, onDeleted }) => {
  const handleDelete = async () => {
    if (window.confirm("Voulez-vous vraiment supprimer cette destination ?")) {
      await api.delete(`/destinations/${id}`);
      onDeleted();
    }
  };

  return <button onClick={handleDelete}>Supprimer</button>;
};

export default DeleteDestination;
