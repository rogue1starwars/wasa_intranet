import { item } from "@/lib/types";

const Item = async ({ params }: { params: { id: string } }) => {
  const API_URL = process.env.NEXT_PUBLIC_API_URL;
  const res = await fetch(`${API_URL}/api/item/${params.id}`, {
    cache: "no-store",
  });
  const ItemDetail: item = await res.json();

  return (
    <div className="mt-32 flex flex-col text-center">
      <h1 className="text-bold text-3xl">{ItemDetail.name}</h1>
      <p className="text-gray-500">{ItemDetail.description}</p>
      <p className="text-red-500">shelf:{ItemDetail.shelf}</p>
    </div>
  );
};

export default Item;
