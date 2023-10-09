"use client";

import { useStore } from "@/store/store";
import { useEffect, useState } from "react";
import ItemLink from "./ItemLink";
import { nanoid } from "nanoid/non-secure";
import { Entry } from "../types";
import { StyledSpinner } from "./StyledSpinner";
import { StyledList } from "./StyledList";
import { StyledListItem } from "./StyledListItem";

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
    const data = await response.json();
    setItems(data.results);
    setLoading(false);
  }

  if (!items)
    return <>No information found. Please change the category or name.</>;

  if (loading) return <StyledSpinner />;

  return (
    <StyledList>
      {items.length > 0 &&
        items.map((item: Entry) => (
          <StyledListItem key={nanoid()}>
            <ItemLink url={item.url} />
          </StyledListItem>
        ))}
    </StyledList>
  );
}
