import { Planet } from "@/app/types";

export default async function ItemDetail({
  params,
}: {
  params: { item: string; category: string };
}) {

  const response = await fetch(
    `https://swapi.dev/api/${params.category}/${params.item}/`
  );
  const item: Planet = await response.json();

  return (
    <div>
      <h2>{item.name}</h2>
      <p>Population: {item.population}</p>
      <p>Climate: {item.climate}</p>
      <p>Terrain: {item.terrain}</p>
      <p>Surface Water: {item.surface_water}</p>
      <p>Gravity: {item.gravity}</p>
      <p>Rotation Period: {item.rotation_period}</p>
      <p>Orbital Period: {item.orbital_period}</p>
      <p>Diameter: {item.diameter}</p>
    </div>
  );
}
