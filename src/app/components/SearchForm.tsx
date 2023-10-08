"use client";

import { useStore } from "@/store/store";
import { nanoid } from "nanoid/non-secure";

export default function SearchForm() {
  const category = useStore((state) => state.category);
  const setCategory = useStore((state) => state.setCategory);
  const resetCategory = useStore((state) => state.resetCategory);
  const getRandomCategory = useStore((state) => state.getRandomCategory);
  const name = useStore((state) => state.name);
  const setName = useStore((state) => state.setName);
  const resetName = useStore((state) => state.resetName);

  const resources = [
    "people",
    "planets",
    "films",
    "species",
    "vehicles",
    "starships",
  ];

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    console.log("Submit");

    console.log("Category:", category);
    console.log("Name:", name);
  }

  return (
    <form onSubmit={handleSubmit}>
      {resources.map((resource) => (
        <label key={nanoid()}>
          <input
            type="radio"
            name="resource"
            value={resource}
            checked={resource === category}
            onChange={(e) => setCategory(e.target.value)}
          />
          {resource}
        </label>
      ))}
      <button type="button" onClick={resetCategory}>
        Reset Category
      </button>
      <button type="button" onClick={getRandomCategory}>
        Random Category
      </button>
      <br />
      <label>
        {category === "films" ? "Title" : "Name"}:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <button type="button" onClick={resetName}>
        Reset {category === "films" ? "Title" : "Name"}
      </button>
      <br />
      <button type="submit">Search</button>
    </form>
  );
}
