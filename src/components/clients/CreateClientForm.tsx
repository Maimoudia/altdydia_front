import React, { useState } from "react";
import api from "../../config.tsx/api";

interface CreateClientFormProps {
  onCreated: () => void;
}

const CreateClientForm: React.FC<CreateClientFormProps> = ({ onCreated }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await api.post("/clients", { name, email });
    setName("");
    setEmail("");
    onCreated();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Nom du client"
        required
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email du client"
        required
      />
      <button type="submit">Ajouter</button>
    </form>
  );
};

export default CreateClientForm;
