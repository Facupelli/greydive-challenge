import { useEffect, useState } from "react";
import { fetchItems } from "../utils/item";

export const useFetchItems = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchItems()
      .then((res) => res.json())
      .then((res) => setItems(res.items));
  }, []);

  return { items, setItems };
};
