import Link from "next/link";
import { fetchCards } from "@/lib/data";

//component to create card

export default async function CardWrapper() {
  const fetchedData = await fetchCards();
  return (
    <div>
      {fetchedData.map((data) => {
        console.log(data);
        return (
          <Card
            title={data.title}
            description={data.description}
            id={data.id}
          />
        );
      })}
    </div>
  );
}

export function Card({
  title,
  description,
  id,
}: {
  title: string;
  description: string;
  id: string;
}) {
  return (
    <div className="border-gray-300 border-b mx-2 hover:bg-gray-100">
      <Link href={{ pathname: "map", query: { id: id } }}>
        <div className="px-2 py-2">
          <p className="text-base font-semibold text-gray-700 ">
            {title}
          </p>
          <p className="text-xs text-gray-700 pt-1">{description}</p>
        </div>
      </Link>
    </div>
  );
}
