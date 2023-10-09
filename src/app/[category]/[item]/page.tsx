import ItemDetail from "@/app/components/ItemDetail";
import Link from "next/link";

export default async function ItemPage({
  params,
}: {
  params: { item: string; category: string };
}) {
  const response = await fetch(
    `https://swapi.dev/api/${params.category}/${params.item}/`
  );
  const data = await response.json();

  return (
    <>
      <Link href="/">Back</Link>
      <ItemDetail item={data} />
    </>
  );
}
