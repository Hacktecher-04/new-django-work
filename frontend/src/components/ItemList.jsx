import { useEffect, useState } from "react";
import { fetchItems } from "../api";

const ItemList = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const getItems = async () => {
      const data = await fetchItems();
      setItems(data);
    };
    getItems();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Items List</h1>
      <ul>
        {items.map((item) => (
          <li key={item.id} className="p-2 border rounded mb-2">
            <strong>{item.name}</strong>: {item.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;

