import React, { useState, useEffect } from "react";
import axios from "axios";
import UpdateForm from "../voyages/UpdateVoyageForm";
import DeleteForm from "../crud/DeleteForm";

const ListItems = () => {
  const [items, setItems] = useState([]);
  const [editingItem, setEditingItem] = useState(null);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    const response = await axios.get("http://localhost:3000/items");
    setItems(response.data);
  };

  const handleItemCreated = (newItem) => {
    setItems([...items, newItem]);
  };

  const handleItemUpdated = (updatedItem) => {
    setItems(items.map((i) => (i.id === updatedItem.id ? updatedItem : i)));
    setEditingItem(null);
  };

  const handleItemDeleted = (id) => {
    setItems(items.filter((i) => i.id !== id));
  };

  return (
    <div>
      <h2>Liste des éléments</h2>
      {items.map((item) => (
        <div key={item.id} style={{ border: "1px solid gray", padding: "10px", marginBottom: "5px" }}>
          <p><strong>{item.name}</strong>: {item.description}</p>
          <button onClick={() => setEditingItem(item)}>Modifier</button>
          <DeleteForm itemId={item.id} onItemDeleted={handleItemDeleted} />
        </div>
      ))}

      {editingItem && (
        <UpdateForm item={editingItem} onItemUpdated={handleItemUpdated} />
      )}

    </div>
  );
};

export default ListItems;
