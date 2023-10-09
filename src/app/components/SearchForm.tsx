"use client";

import { useStore } from "@/store/store";
import { nanoid } from "nanoid/non-secure";
import styled from "styled-components";

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
    <StyledSearchBar>
      <h3>Categories</h3>
      <StyledTabBar>
        {resources.map((resource) => (
          <StyledFilterLabel checked={resource === category} key={nanoid()}>
            <input
              type="radio"
              name="resource"
              value={resource}
              checked={resource === category}
              onChange={(e) => setCategory(e.target.value)}
            />
            {resource.replace(/^\w/, (c) => c.toUpperCase())}
          </StyledFilterLabel>
        ))}
        <StyledFilterButton type="button" onClick={getRandomCategory}>
          Random
        </StyledFilterButton>
      </StyledTabBar>
      <StyledDivider />
      <StyledSearchField>
        <label>{category === "films" ? "Title" : "Name"}:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder={`e.g. ${
            category === "films"
              ? "phantom menace"
              : "people"
              ? "skywalker"
              : "planets"
              ? "tattoine"
              : "vehicles"
              ? "sandcrawler"
              : "species"
              ? "wookie"
              : "starships"
              ? "death star"
              : ""
          }`}
        />
        <StyledFilterButton type="button" onClick={resetName}>
          Reset
        </StyledFilterButton>
      </StyledSearchField>
    </StyledSearchBar>
  );
}

const StyledSearchBar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #00002c;
  gap: 0.5rem;
  color: gold;
  padding: 1rem;
  border-radius: 0.5rem;
  border: 2px solid gold;
  transition: all 0.2s ease-in-out;
  width: 100%;
`;

const StyledTabBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  flex-wrap: wrap;
`;

const StyledSearchField = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  flex-wrap: wrap;

  label {
    font-weight: bold;
  }

  input {
    width: 10rem;
    height: 2rem;
    border-radius: 0.5rem;
    border: 2px solid gold;
    padding: 0.5rem;
    font-size: 1rem;
    text-align: center;
    transition: all 0.2s ease-in-out;
    background: black;

    &:focus {
      outline: none;
      border: 2px solid cyan;
      background: blue;
      color: cyan;
      scale: 1.1;

      &::placeholder {
        color: cyan;
      }
    }

    &::placeholder {
      color: gold;
    }
  }
`;

const StyledFilterLabel = styled.label<{ checked: boolean }>`
  background-color: ${({ checked }) => (checked ? "darkblue" : "#00002c")};
  color: ${({ checked }) => (checked ? "cyan" : "gold")};
  padding: 0.5rem;
  border-radius: 0.5rem;
  width: 6rem;
  border: 2px solid ${({ checked }) => (checked ? "cyan" : "gold")};
  transition: all 0.2s ease-in-out;
  text-align: center;

  &:active {
    scale: 0.9;
  }

  input {
    display: none;
  }
`;

const StyledFilterButton = styled.button`
  background-color: gold;
  color: darkblue;
  font-weight: bold;
  padding: 0.5rem;
  border-radius: 0.5rem;
  border: 2px solid gold;
  transition: all 0.2s ease-in-out;
  font-size: 1rem;
  width: 6rem;

  &:active {
    scale: 0.9;
  }
`;

const StyledDivider = styled.div`
  width: 100%;
  height: 1px;
  background-color: gold;
`;
