import { item } from "@/lib/types";
import Link from "next/link";

type CardProps = {
  item: item;
};

export default function ItemCard({ item }: CardProps) {
  return (
    <div
      className="border-gray-300 border-b mx-2 hover:bg-gray-100"
      key={item.id}
    >
      <Link href={`item/${item.id}`}>
        <div className="px-2 py-2">
          <p className="text-base font-semibold  ">{item.name}</p>
          <p className="text-[10px]  pt-1">{item.description}</p>
        </div>
      </Link>
    </div>
  );
}
