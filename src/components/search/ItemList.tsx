import { item } from "@/lib/types";
import ItemCard from "./ItemCard";

export default async function ItemList() {
  const API_URL = process.env.NEXT_PUBLIC_API_URL;
  const res = await fetch(`${API_URL}/api/item`, { cache: "no-store" });
  const items = await res.json();

  return (
    <div>
      {items.map((item: item) => (
        <ItemCard key={item.id} item={item} />
      ))}
    </div>
  );
}
