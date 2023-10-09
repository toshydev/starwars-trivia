import { nanoid } from "nanoid";
import ItemLink from "./ItemLink";
import { StyledList } from "./StyledList";
import { StyledListItem } from "./StyledListItem";

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
  const category = getCategory(urls[0])?.replace(/^\w/, (c) => c.toUpperCase());
  return (
    <div>
      <h4>{category}: </h4>
      <StyledList>
        {urls.map((url) => (
          <StyledListItem key={nanoid()}>
            <ItemLink url={url} />
          </StyledListItem>
        ))}
      </StyledList>
    </div>
  );
}
