"use client";

import { nanoid } from "nanoid/non-secure";
import styles from "../page.module.css";
import { useStore } from "@/store/store";
import { useState } from "react";

export default function SearchForm() {
  const [nameValue, setNameValue] = useState("");
  const category = useStore((state) => state.category);
  const setCategory = useStore((state) => state.setCategory);
  const getRandomCategory = useStore((state) => state.getRandomCategory);
  const setName = useStore((state) => state.setName);
  const resetName = useStore((state) => state.resetName);

  const resources = [
    "films",
    "people",
    "planets",
    "vehicles",
    "species",
    "starships",
  ];

  function handleSearch(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setName(nameValue);
  }

  return (
    <div className={styles.menu}>
      <h2>Categories</h2>
      <div className={styles.tabBar}>
        {resources.map((resource) => (
          <label
            key={nanoid()}
            className={
              resource === category ? styles.tabLabel__active : styles.tabLabel
            }
          >
            <input
              type="radio"
              name="resource"
              value={resource}
              checked={resource === category}
              onChange={(e) => setCategory(e.target.value)}
            />
            {resource.replace(/^\w/, (c) => c.toUpperCase())}
          </label>
        ))}
        <button type="button" onClick={getRandomCategory}>
          Random
        </button>
      </div>
      <div className={styles.divider} />
      <form className={styles.searchField} onSubmit={handleSearch}>
        <label>{category === "films" ? "Title" : "Name"}:</label>
        <input
          type="text"
          value={nameValue}
          onChange={(e) => setNameValue(e.target.value)}
          placeholder={"e.g. skywalker"}
        />
        <button type="submit">Search</button>
        <button
          type="button"
          onClick={() => {
            setNameValue("");
            resetName();
          }}
        >
          Reset
        </button>
      </form>
    </div>
  );
}
