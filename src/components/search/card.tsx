import Link from "next/link";
import { fetchCards } from "@/lib/data";
import { map } from "@firebase/util";

//component to create card

export default async function CardWrapper({
  searchParams,
}: {
  searchParams?: { query?: string };
}) {
  const searchQuery = searchParams?.query || "";
  const fetchedData = await fetchCards(searchQuery);
  return (
    <div>
      {Object.keys(fetchedData).map((data) => {
        // console.log(data);
        return (
          <Card
            title={fetchedData[data].title}
            description={fetchedData[data].description}
            id={data}
            map={fetchedData[data].map}
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
  map,
}: {
  title: string;
  description: string;
  id: string;
  map: string;
}) {
  return (
    <div className="border-gray-300 border-b mx-2 hover:bg-gray-100">
      <Link href={{ pathname: `map/${map}`, query: { id: id } }}>
        <div className="px-2 py-2">
          <p className="text-base font-semibold  ">{title}</p>
          <p className="text-[10px]  pt-1">{description}</p>
        </div>
      </Link>
    </div>
  );
}
