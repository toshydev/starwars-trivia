"use client";

import { useStore } from "@/store/store";
import { useEffect, useState } from "react";
import { Entry, Item } from "../types";
import ItemLink from "./ItemLink";
import { nanoid } from "nanoid/non-secure";

export default function ItemList() {
  const [items, setItems] = useState([]);
  const category = useStore((state) => state.category);
  const name = useStore((state) => state.name);

  useEffect(() => {
    fetchItems();
    console.log(items);
  }, [category, name]);

  async function fetchItems() {
    const response = await fetch(
      `https://swapi.dev/api/${category}/${name && `?search=${name}`}`
    );
    const data = await response.json();
    setItems(data.results);
  }

  if (!items) return null;

  return (
    <ul>
      {items.length > 0 &&
        items.map((item) => (
          <li key={nanoid()}>
            <ItemLink url={item.url} />
          </li>
        ))}
    </ul>
  );
}
