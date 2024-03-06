import Shelf1 from "@/components/map/shelf1/shelf1";
import { fetchMapData } from "@/lib/data";
import FooterButton from "@/components/map/FooterButton/FooterButton";
import { item } from "@/lib/types";

const Item = async ({ params }: { params: { id: string } }) => {
  // const switchShelf = (shelf: number) => {
  //   switch (shelf) {
  //     case 1:
  //       return <Shelf1 boxData={boxData} id={searchParams.id} />;
  //   }
  // };
  const API_URL = process.env.NEXT_PUBLIC_API_URL;
  const res = await fetch(`${API_URL}/api/item/${params.id}`, {
    cache: "no-store",
  });
  const ItemDetail: item = await res.json();

  // const boxData = await fetchMapData(parseInt(params.shelf));
  return (
    <>
      {/* {switchShelf(parseInt(params.shelf))} */}
      <h1 className="mt-24">{ItemDetail.name}</h1>
    </>
  );
};

export default Item;
