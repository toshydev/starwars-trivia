"use client";

import { nanoid } from "nanoid";
import ItemLink from "./ItemLink";

type ReferenceListProps = {
  urls: string[];
};

function getCategory(url: string) {
  if (!url) return;
  const urlParts = url.split("/");
  console.log(urlParts);
  return urlParts[urlParts.length - 3];
}

export default function ReferenceList({ urls }: ReferenceListProps) {
  const category = getCategory(urls[0]);
  return (
    <div>
      <h4>{category}: </h4>
      <ul>
        {urls.map((url) => (
          <li key={nanoid()}>
            <ItemLink url={url} />
          </li>
        ))}
      </ul>
    </div>
  );
}
