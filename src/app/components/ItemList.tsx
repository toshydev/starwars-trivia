"use client";

import { useEffect, useState } from "react";
import ItemLink from "./ItemLink";
import { nanoid } from "nanoid/non-secure";
import { StyledSpinner } from "./StyledSpinner";
import { useStore } from "@/store/store";
import { Entry } from "../types";

const BASE_URL = "https://swapi.dev/api/";

export default function ItemList() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [nextPage, setNextPage] = useState<string | null>(null);
  const [previousPage, setPreviousPage] = useState<string | null>(null);
  const category = useStore((state) => state.category);
  const name = useStore((state) => state.name);

  useEffect(() => {
    fetchData(BASE_URL + category + (name ? "?search=" + name : ""));
  }, [category, name]);

  async function fetchData(url: string) {
    setLoading(true);
    const response = await fetch(url);
    const data = await response.json();
    setItems(data.results);
    setPage(data.next ? data.next[data.next.length - 1] - 1 : 1);
    setNextPage(data.next);
    setPreviousPage(data.previous);
    setLoading(false);
  }

  function handleNextPage() {
    if (nextPage) {
      fetchData(nextPage);
      setPage((p) => p + 1);
    }
  }

  function handlePreviousPage() {
    if (previousPage) {
      fetchData(previousPage);
      setPage((p) => p - 1);
    }
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
      <section>
        <button
          type="button"
          onClick={handlePreviousPage}
          disabled={previousPage === null}
        >
          Previous
        </button>
        <p>{page}</p>
        <button
          type="button"
          onClick={handleNextPage}
          disabled={nextPage === null}
        >
          Next
        </button>
      </section>
    </>
  );
}
