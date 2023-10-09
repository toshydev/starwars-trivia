"use client";

import styled from "styled-components";
import { Film, Person, Species, Starship, Vehicle, Planet } from "../types";
import ReferenceList from "./ReferenceList";
import DateSection from "./DateSection";
import useName from "../hooks/useName";
import ItemLink from "./ItemLink";

type ItemProps = {
  item: Film | Planet | Person | Species | Starship | Vehicle;
};

function FilmDetail(item: Film) {
  return (
    <StyledContent>
      <StyledItemName>
        Episode {item.episode_id}: {item.title}
      </StyledItemName>
      <StyledQuote>{item.opening_crawl}</StyledQuote>
      <StyledStats>
        <p>Director: {item.director}</p>
        <p>Producer: {item.producer}</p>
        <p>Release Date: {item.release_date}</p>
      </StyledStats>
      <ReferenceList urls={item.characters} />
      <ReferenceList urls={item.planets} />
      <ReferenceList urls={item.species} />
      <ReferenceList urls={item.starships} />
      <ReferenceList urls={item.vehicles} />
      <DateSection created={item.created} edited={item.edited} />
    </StyledContent>
  );
}

function PersonDetail(item: Person) {
  return (
    <StyledContent>
      <StyledItemName>{item.name}</StyledItemName>
      <StyledStats>
        <table>
          <tbody>
            <tr>
              <td>Birth Year</td>
              <td>{item.birth_year}</td>
            </tr>
            <tr>
              <td>Gender</td>
              <td>{item.gender}</td>
            </tr>
            <tr>
              <td>Height</td>
              <td>{item.height}</td>
            </tr>
            <tr>
              <td>Mass</td>
              <td>{item.mass}</td>
            </tr>
            <tr>
              <td>Eye Color</td>
              <td>{item.eye_color}</td>
            </tr>
            <tr>
              <td>Hair Color</td>
              <td>{item.hair_color}</td>
            </tr>
            <tr>
              <td>Skin Color</td>
              <td>{item.skin_color}</td>
            </tr>
            <tr>
              <td>Home World</td>
              <td>
                <ItemLink url={item.homeworld} />
              </td>
            </tr>
          </tbody>
        </table>
      </StyledStats>
      <ReferenceList urls={item.films} />
      <ReferenceList urls={item.species} />
      <ReferenceList urls={item.starships} />
      <ReferenceList urls={item.vehicles} />
      <DateSection created={item.created} edited={item.edited} />
    </StyledContent>
  );
}

function StarshipDetail(item: Starship) {
  return (
    <StyledContent>
      <StyledItemName>{item.name}</StyledItemName>
      <StyledStats>
        <table>
          <tbody>
            <tr>
              <td>Model</td>
              <td>{item.model}</td>
            </tr>
            <tr>
              <td>Manufacturer</td>
              <td>{item.manufacturer}</td>
            </tr>
            <tr>
              <td>Cost in Credits</td>
              <td>{item.cost_in_credits}</td>
            </tr>
            <tr>
              <td>Length</td>
              <td>{item.length}</td>
            </tr>
            <tr>
              <td>Max Atmosphering Speed</td>
              <td>{item.max_atmosphering_speed}</td>
            </tr>
            <tr>
              <td>Crew</td>
              <td>{item.crew}</td>
            </tr>
            <tr>
              <td>Passengers</td>
              <td>{item.passengers}</td>
            </tr>
            <tr>
              <td>Cargo Capacity</td>
              <td>{item.cargo_capacity}</td>
            </tr>
            <tr>
              <td>Consumables</td>
              <td>{item.consumables}</td>
            </tr>
            <tr>
              <td>Hyperdrive Rating</td>
              <td>{item.hyperdrive_rating}</td>
            </tr>
            <tr>
              <td>MGLT</td>
              <td>{item.MGLT}</td>
            </tr>
            <tr>
              <td>Starship Class</td>
              <td>{item.starship_class}</td>
            </tr>
          </tbody>
        </table>
      </StyledStats>
      <ReferenceList urls={item.pilots} />
      <ReferenceList urls={item.films} />
      <DateSection created={item.created} edited={item.edited} />
    </StyledContent>
  );
}

function VehicleDetail(item: Vehicle) {
  return (
    <StyledContent>
      <StyledItemName>{item.name}</StyledItemName>
      <StyledStats>
        <p>Model: {item.model}</p>
        <p>Manufacturer: {item.manufacturer}</p>
        <p>Cost in Credits: {item.cost_in_credits}</p>
        <p>Length: {item.length}</p>
        <p>Max Atmosphering Speed: {item.max_atmosphering_speed}</p>
        <p>Crew: {item.crew}</p>
        <p>Passengers: {item.passengers}</p>
        <p>Cargo Capacity: {item.cargo_capacity}</p>
        <p>Consumables: {item.consumables}</p>
        <p>Vehicle Class: {item.vehicle_class}</p>
      </StyledStats>
      <ReferenceList urls={item.pilots} />
      <ReferenceList urls={item.films} />
      <DateSection created={item.created} edited={item.edited} />
    </StyledContent>
  );
}

function SpeciesDetail(item: Species) {
  return (
    <StyledContent>
      <StyledItemName>{item.name}</StyledItemName>
      <StyledStats>
        <p>Classification: {item.classification}</p>
        <p>Designation: {item.designation}</p>
        <p>Average Height: {item.average_height}</p>
        <p>Average Lifespan: {item.average_lifespan}</p>
        <p>Eye Colors: {item.eye_colors}</p>
        <p>Hair Colors: {item.hair_colors}</p>
        <p>Skin Colors: {item.skin_colors}</p>
        <p>Language: {item.language}</p>
        <p>
          Homeworld: <ItemLink url={item.homeworld} />
        </p>
      </StyledStats>
      <ReferenceList urls={item.people} />
      <ReferenceList urls={item.films} />
      <DateSection created={item.created} edited={item.edited} />
    </StyledContent>
  );
}

export default function ItemDetail({ item }: ItemProps) {
  if (!item)
    return <>No information found. Please change the category or name.</>;

  if ("director" in item) {
    return FilmDetail(item);
  } else if ("birth_year" in item) {
    return PersonDetail(item);
  } else if ("starship_class" in item) {
    return StarshipDetail(item);
  } else if ("vehicle_class" in item) {
    return VehicleDetail(item);
  } else if ("classification" in item) {
    return SpeciesDetail(item);
  }
}

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: 0 auto;
  gap: 1rem;

  td a {
    color: gold;

    &:hover {
      color: black;
      background: gold;
    }
  }
`;

const StyledStats = styled.div`
  color: cyan;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 1px solid gold;
  border-radius: 10px;
  padding: 0.5rem;
`;

const StyledItemName = styled.h2`
  text-align: center;
  margin: 0;
  padding: 0;
  color: gold;
`;

const StyledQuote = styled.blockquote`
  color: gold;
  font-style: italic;
`;
