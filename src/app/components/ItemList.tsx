"use client";

import { useEffect, useState } from "react";
import ItemLink from "./ItemLink";
import { nanoid } from "nanoid/non-secure";
import { Entry } from "../types";
import { StyledSpinner } from "./StyledSpinner";
import { useStore } from "@/store/store";

export default function ItemList() {
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState([]);
  const category = useStore((state) => state.category);
  const name = useStore((state) => state.name);

  useEffect(() => {
    setLoading(true);
    fetchItems();
  }, [category, name]);

  async function fetchItems() {
    const response = await fetch(
      `https://swapi.dev/api/${category}/${name && "?search=" + name}`
    );

    if (!response.ok) throw new Error("Failed to fetch data");

    const data = await response.json();
    setItems(data.results);
    setLoading(false);
  }

  if (!items)
    return <>No information found. Please change the category or name.</>;

  return (
    <>
      <h2>{category}</h2>
      {loading ? (
        <StyledSpinner />
      ) : (
        <ul>
          {items.length > 0 &&
            items.map((item: Entry) => (
              <li key={nanoid()}>
                <ItemLink url={item.url} />
              </li>
            ))}
        </ul>
      )}
    </>
  );
}
