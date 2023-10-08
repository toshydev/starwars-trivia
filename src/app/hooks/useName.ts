import { useEffect, useState } from "react";
import { Item } from "../types";

export default function useName(url: string) {
  const [name, setName] = useState<string | undefined>();
  useEffect(() => {
    const fetchName = async () => {
      const response = await fetch(url);
      const data = await response.json();
      console.log("Data: ", data);
      if ("name" in data) {
        setName(data.name);
        return;
      } else if ("title" in data) {
        setName(data.title);
        return;
      }
    };
    fetchName();
  }, [url]);
  return name;
}
