import React, { useEffect, useState } from "react";
import { Destination } from "../types";
import CreateDestinationForm from "../destinations/createDestinationForm.tsx";

const DestinationList: React.FC = () => {
  const [destinations, setDestinations] = useState<Destination[]>([]);
  const [editingDestination, setEditingDestination] = useState<Destination | null>(null);

  const fetchDestinations = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/destinations");
      const data: Destination[] = await res.json();
      setDestinations(data);
    } catch (err) {
      console.error(err);
      alert("Erreur lors de la récupération des destinations");
    }
  };

  const handleDelete = async (ID_Destination: number) => {
    try {
      const res = await fetch(`http://localhost:3000/api/destinations/${ID_Destination}`, { method: "DELETE" });
      if (!res.ok) throw new Error("Erreur suppression");
      setDestinations(destinations.filter(d => d.ID_Destination !== ID_Destination));
    } catch (err) {
      console.error(err);
      alert("Impossible de supprimer la destination");
    }
  };

  useEffect(() => {
    fetchDestinations();
  }, []);

  return (
    <div>
      <h1>Liste des destinations</h1>
      <CreateDestinationForm refresh={fetchDestinations} />
      <ul>
        {destinations.map(dest => (
          <li key={dest.ID_Destination}>
            {dest.Nom_Lieu} - {dest.Pays}{" "}
            <button onClick={() => setEditingDestination(dest)}>Modifier</button>
            <button onClick={() => handleDelete(dest.ID_Destination)}>Supprimer</button>
          </li>
        ))}
      </ul>

      {editingDestination && (
        <CreateDestinationForm
          destination={editingDestination}
          refresh={fetchDestinations}
          close={() => setEditingDestination(null)}
        />
      )}
    </div>
  );
};

export default DestinationList;




/*import React, { useEffect, useState } from "react";
import CreateDestinationForm from "../destinations/createDestinationForm.tsx";

const DestinationList = () => {
  const [destinations, setDestinations] = useState([]);
  const [editingDestination, setEditingDestination] = useState(null);

  const fetchDestinations = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/destinations");
      const data = await res.json();
      setDestinations(data);
    } catch (err) {
      console.error("Erreur fetch destinations :", err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await fetch(`http://localhost:3000/api/destinations/${id}`, { method: "DELETE" });
      setDestinations(destinations.filter(d => d.id !== id));
    } catch (err) {
      console.error("Erreur delete :", err);
    }
  };

  useEffect(() => {
    fetchDestinations();
  }, []);

  return (
    <div>
      <h1>Liste des destinations</h1>
      <CreateDestinationForm refresh={fetchDestinations} />
      <ul>
        {destinations.map(dest => (
          <li key={dest.id}>
            {dest.name} - {dest.description} 
            <button onClick={() => setEditingDestination(dest)}>Modifier</button>
            <button onClick={() => handleDelete(dest.id)}>Supprimer</button>
          </li>
        ))}
      </ul>

      {editingDestination && (
        <CreateDestinationForm
          destination={editingDestination}
          refresh={fetchDestinations}
          close={() => setEditingDestination(null)}
        />
      )}
    </div>
  );
};

export default DestinationList;*/
