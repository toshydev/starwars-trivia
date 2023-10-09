import { Film, Person, Species, Starship, Vehicle, Planet } from "../types";
import ReferenceList from "./ReferenceList";
import DateSection from "./DateSection";
import ItemLink from "./ItemLink";

type ItemProps = {
  item: Film | Planet | Person | Species | Starship | Vehicle;
};

function FilmDetail(item: Film) {
  return (
    <>
      <h2>
        Episode {item.episode_id}: {item.title}
      </h2>
      <blockquote>{item.opening_crawl}</blockquote>
      <table>
        <tbody>
          <tr>
            <td>Release Date</td>
            <td>{item.release_date}</td>
          </tr>
          <tr>
            <td>Director</td>
            <td>{item.director}</td>
          </tr>
          <tr>
            <td>Producer</td>
            <td>{item.producer}</td>
          </tr>
        </tbody>
      </table>
      <ReferenceList urls={item.characters} />
      <ReferenceList urls={item.planets} />
      <ReferenceList urls={item.species} />
      <ReferenceList urls={item.starships} />
      <ReferenceList urls={item.vehicles} />
      <DateSection created={item.created} edited={item.edited} />
    </>
  );
}

function PersonDetail(item: Person) {
  return (
    <>
      <h2>{item.name}</h2>
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
      <ReferenceList urls={item.films} />
      <ReferenceList urls={item.species} />
      <ReferenceList urls={item.starships} />
      <ReferenceList urls={item.vehicles} />
      <DateSection created={item.created} edited={item.edited} />
    </>
  );
}

function StarshipDetail(item: Starship) {
  return (
    <>
      <h3>{item.name}</h3>
      <table>
        <tbody>
          <tr>
            <td>Manufacturer</td>
            <td>{item.manufacturer}</td>
          </tr>
          <tr>
            <td>Model</td>
            <td>{item.model}</td>
          </tr>
          <tr>
            <td>Starship Class</td>
            <td>{item.starship_class}</td>
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
            <td>Hyperdrive Rating</td>
            <td>{item.hyperdrive_rating}</td>
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
            <td>MGLT</td>
            <td>{item.MGLT}</td>
          </tr>
          <tr>
            <td>Consumables</td>
            <td>{item.consumables}</td>
          </tr>
          <tr>
            <td>Cost in Credits</td>
            <td>{item.cost_in_credits}</td>
          </tr>
        </tbody>
      </table>
      <ReferenceList urls={item.pilots} />
      <ReferenceList urls={item.films} />
      <DateSection created={item.created} edited={item.edited} />
    </>
  );
}

function VehicleDetail(item: Vehicle) {
  return (
    <>
      <h3>{item.name}</h3>
      <table>
        <tbody>
          <tr>
            <td>Manufacturer</td>
            <td>{item.manufacturer}</td>
          </tr>
          <tr>
            <td>Model</td>
            <td>{item.model}</td>
          </tr>
          <tr>
            <td>Vehicle Class</td>
            <td>{item.vehicle_class}</td>
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
            <td>Cost in Credits</td>
            <td>{item.cost_in_credits}</td>
          </tr>
        </tbody>
      </table>
      <ReferenceList urls={item.pilots} />
      <ReferenceList urls={item.films} />
      <DateSection created={item.created} edited={item.edited} />
    </>
  );
}

function SpeciesDetail(item: Species) {
  return (
    <>
      <h3>{item.name}</h3>
      <table>
        <tbody>
          <tr>
            <td>Designation</td>
            <td>{item.designation}</td>
          </tr>
          <tr>
            <td>Classification</td>
            <td>{item.classification}</td>
          </tr>
          <tr>
            <td>Average Lifespan</td>
            <td>{item.average_lifespan}</td>
          </tr>
          <tr>
            <td>Average Height</td>
            <td>{item.average_height}</td>
          </tr>
          <tr>
            <td>Eye Colors</td>
            <td>{item.eye_colors}</td>
          </tr>
          <tr>
            <td>Hair Colors</td>
            <td>{item.hair_colors}</td>
          </tr>
          <tr>
            <td>Skin Colors</td>
            <td>{item.skin_colors}</td>
          </tr>
          <tr>
            <td>Language</td>
            <td>{item.language}</td>
          </tr>
          <tr>
            <td>Homeworld</td>
            <td>
              <ItemLink url={item.homeworld} />
            </td>
          </tr>
        </tbody>
      </table>
      <ReferenceList urls={item.people} />
      <ReferenceList urls={item.films} />
      <DateSection created={item.created} edited={item.edited} />
    </>
  );
}

function PlanetDetail(item: Planet) {
  return (
    <>
      <h3>{item.name}</h3>
      <table>
        <tbody>
          <tr>
            <td>Diameter</td>
            <td>{item.diameter}</td>
          </tr>
          <tr>
            <td>Gravity</td>
            <td>{item.gravity}</td>
          </tr>
          <tr>
            <td>Rotation Period</td>
            <td>{item.rotation_period}</td>
          </tr>
          <tr>
            <td>Orbital Period</td>
            <td>{item.orbital_period}</td>
          </tr>
          <tr>
            <td>Climate</td>
            <td>{item.climate}</td>
          </tr>
          <tr>
            <td>Terrain</td>
            <td>{item.terrain}</td>
          </tr>
          <tr>
            <td>Surface Water</td>
            <td>{item.surface_water}</td>
          </tr>
          <tr>
            <td>Population</td>
            <td>{item.population}</td>
          </tr>
        </tbody>
      </table>
      <ReferenceList urls={item.residents} />
      <ReferenceList urls={item.films} />
      <DateSection created={item.created} edited={item.edited} />
    </>
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
  } else if ("rotation_period" in item) {
    return PlanetDetail(item);
  } else {
    return <>No information found. Please change the category or name.</>;
  }
}
