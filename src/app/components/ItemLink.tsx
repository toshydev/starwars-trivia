import Link from "next/link";
import useName from "../hooks/useName";

type ItemProps = {
  url: string;
};

export default function ItemLink({ url }: ItemProps) {
  const name = useName(url);
  return <Link href={url}>{name}</Link>;
}
