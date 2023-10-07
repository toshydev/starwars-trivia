import { useEffect, useState } from "react";
import { Item } from "../types";

export default function useName(url: string) {
    const [name, setName] = useState<string | undefined>();
    useEffect(() => {
        const fetchName = async () => {
        const response = await fetch(url);
        const data: Item = await response.json();
        if ("name" in data.data) {
            setName(data.data.name);
            return;
        } else if ("title" in data.data) {
            setName(data.data.title);
            return;
        }};
        fetchName();
    }, [url]);
    return name;
}