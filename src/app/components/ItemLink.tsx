"use client";

import useName from "@/hooks/useName";
import Link from "next/link";
import { StyledSpinner } from "./StyledSpinner";

type ItemProps = {
  url: string;
};

export default function ItemLink({ url }: ItemProps) {
  const name = useName(url);
  const path = url.split("/");
  return (
    <Link href={`/${path[4]}/${path[5]}`}>{name ?? <StyledSpinner />}</Link>
  );
}
