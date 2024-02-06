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
    <>
      <Link href={id}>
        <h1>{title}</h1>
        <p>{description}</p>
      </Link>
    </>
  );
}
