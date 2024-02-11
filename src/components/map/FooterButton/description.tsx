import { fetchDescription } from "@/lib/data";

export default async function Description({ id }: { id: string }) {
  const { title, description } = await fetchDescription(id);
  return (
    <div className="inset-x-0 z-60 bg-white p-4 w-[90%] mx-auto shadow-md rounded-2xl">
      <h1 className="text-base font-bold">{title}</h1>
      <p className="text-xs">{description}</p>
    </div>
  );
}
