import React, { useEffect, useState } from "react";
import api from "../../config.tsx/api";
import CreateClientForm from "./CreateClientForm";
import UpdateClientForm from "./UpdateClientForm";
import DeleteClient from "./DeleteClient";

interface Client {
  id: number;
  name: string;
  email: string;
}

const ClientList: React.FC = () => {
  const [clients, setClients] = useState<Client[]>([]);
  const [editingClient, setEditingClient] = useState<Client | null>(null);

  const fetchClients = async () => {
    const response = await api.get("/clients");
    setClients(response.data);
  };

  useEffect(() => {
    fetchClients();
  }, []);

  return (
    <div>
      <h2>Liste des clients</h2>
      <CreateClientForm onCreated={fetchClients} />

      <ul>
        {clients.map((c) => (
          <li key={c.id}>
            {editingClient?.id === c.id ? (
              <UpdateClientForm
                client={c}
                onUpdated={fetchClients}
                onCancel={() => setEditingClient(null)}
              />
            ) : (
              <>
                {c.name} ({c.email})
                <button onClick={() => setEditingClient(c)}>Modifier</button>
                <DeleteClient id={c.id} onDeleted={fetchClients} />
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ClientList;
