"use client";

import { nanoid } from "nanoid/non-secure";
import styles from "../page.module.css";
import { useStore } from "@/store/store";

export default function SearchForm() {
  const category = useStore((state) => state.category);
  const setCategory = useStore((state) => state.setCategory);
  const getRandomCategory = useStore((state) => state.getRandomCategory);
  const name = useStore((state) => state.name);
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
      <div className={styles.searchField}>
        <label>{category === "films" ? "Title" : "Name"}:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder={"e.g. skywalker"}
        />
        <button type="button" onClick={resetName}>
          Reset
        </button>
      </div>
    </div>
  );
}
