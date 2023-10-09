"use client";

import { useEffect, useState } from "react";

export default function useName(url: string) {
  const [name, setName] = useState<string>();
  useEffect(() => {
    const fetchName = async () => {
      const response = await fetch(url);
      const data = await response.json();
      if ("name" in data) {
        setName(data.name);
      } else if ("title" in data) {
        setName(data.title);
        return;
      }
    };
    fetchName();
  }, [url]);
  return name;
}
