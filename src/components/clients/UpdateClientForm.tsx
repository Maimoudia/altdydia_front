import React, { useState } from "react";
import api from "../../config.tsx/api";

interface UpdateClientFormProps {
  client: {
    id: number;
    name: string;
    email: string;
  };
  onUpdated: () => void;
  onCancel: () => void;
}

const UpdateClientForm: React.FC<UpdateClientFormProps> = ({
  client,
  onUpdated,
  onCancel,
}) => {
  const [name, setName] = useState(client.name);
  const [email, setEmail] = useState(client.email);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await api.put(`/clients/${client.id}`, { name, email });
    onUpdated();
    onCancel();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <button type="submit">Mettre à jour</button>
      <button type="button" onClick={onCancel}>
        Annuler
      </button>
    </form>
  );
};

export default UpdateClientForm;
