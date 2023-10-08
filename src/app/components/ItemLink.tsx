import Link from "next/link";
import useName from "../hooks/useName";

type ItemProps = {
  url: string;
};

export default function ItemLink({ url }: ItemProps) {
  const name = useName(url);
  const path = url.split("/");
  return <Link href={`/${path[4]}/${path[5]}`}>{name}</Link>;
}
