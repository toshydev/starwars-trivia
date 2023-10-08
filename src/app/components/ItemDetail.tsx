import { Film, Item, Person, Species, Starship, Vehicle } from "../types";
import ReferenceList from "./ReferenceList";

type ItemProps = {
  item: Item;
};

function renderFilm(item: Film) {
  return (
    <div>
      <h2>
        Episode {item.episode_id}: {item.title}
      </h2>
      <blockquote>{item.opening_crawl}</blockquote>
      <p>Director: {item.director}</p>
      <p>Producer: {item.producer}</p>
      <p>Release Date: {item.release_date}</p>
      <ReferenceList urls={item.characters} />
      <ReferenceList urls={item.planets} />
      <ReferenceList urls={item.species} />
      <ReferenceList urls={item.starships} />
      <ReferenceList urls={item.vehicles} />
      <small>Created: {item.created}</small>
      <small>Edited: {item.edited}</small>
    </div>
  );
}

function renderPerson(item: Person) {
  return (
    <div>
      <h2>{item.name}</h2>
      <p>Birth Year: {item.birth_year}</p>
      <p>Eye Color: {item.eye_color}</p>
      <p>Gender: {item.gender}</p>
      <p>Hair Color: {item.hair_color}</p>
      <p>Height: {item.height}</p>
      <p>Mass: {item.mass}</p>
      <p>Sking Color: {item.skin_color}</p>
      <p>Homeworld: {item.homeworld}</p>
      <ReferenceList urls={item.films} />
      <ReferenceList urls={item.species} />
      <ReferenceList urls={item.starships} />
      <ReferenceList urls={item.vehicles} />
      <small>Created: {item.created}</small>
      <small>Edited: {item.edited}</small>
    </div>
  );
}

function renderStarship(item: Starship) {
  return (
    <div>
      <h2>{item.name}</h2>
      <p>Model: {item.model}</p>
      <p>Manufacturer: {item.manufacturer}</p>
      <p>Cost in Credits: {item.cost_in_credits}</p>
      <p>Length: {item.length}</p>
      <p>Max Atmosphering Speed: {item.max_atmosphering_speed}</p>
      <p>Crew: {item.crew}</p>
      <p>Passengers: {item.passengers}</p>
      <p>Cargo Capacity: {item.cargo_capacity}</p>
      <p>Consumables: {item.consumables}</p>
      <p>Hyperdrive Rating: {item.hyperdrive_rating}</p>
      <p>MGLT: {item.MGLT}</p>
      <p>Starship Class: {item.starship_class}</p>
      <ReferenceList urls={item.pilots} />
      <ReferenceList urls={item.films} />
      <small>Created: {item.created}</small>
      <small>Edited: {item.edited}</small>
    </div>
  );
}

function renderVehicle(item: Vehicle) {
  return (
    <div>
      <h2>{item.name}</h2>
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
      <ReferenceList urls={item.pilots} />
      <ReferenceList urls={item.films} />
      <small>Created: {item.created}</small>
      <small>Edited: {item.edited}</small>
    </div>
  );
}

function renderSpecies(item: Species) {
  return (
    <div>
      <h2>{item.name}</h2>
      <p>Classification: {item.classification}</p>
      <p>Designation: {item.designation}</p>
      <p>Average Height: {item.average_height}</p>
      <p>Average Lifespan: {item.average_lifespan}</p>
      <p>Eye Colors: {item.eye_colors}</p>
      <p>Hair Colors: {item.hair_colors}</p>
      <p>Skin Colors: {item.skin_colors}</p>
      <p>Language: {item.language}</p>
      <p>Homeworld: {item.homeworld}</p>
      <ReferenceList urls={item.people} />
      <ReferenceList urls={item.films} />
      <small>Created: {item.created}</small>
      <small>Edited: {item.edited}</small>
    </div>
  );
}

export default function ItemDetail({ item }: ItemProps) {
  const data = item.data;
  if ("director" in data) {
    return renderFilm(data);
  } else if ("birth_year" in data) {
    return renderPerson(data);
  } else if ("starship_class" in data) {
    return renderStarship(data);
  } else if ("vehicle_class" in data) {
    return renderVehicle(data);
  } else if ("classification" in data) {
    return renderSpecies(data);
  }
}
