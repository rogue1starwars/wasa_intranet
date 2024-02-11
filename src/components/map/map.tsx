import Shelf1 from "./shelf1/shelf1";
import { fetchMapData } from "@/lib/data";
import TopViewButton from "@/components/map/FooterButton/topViewButton";
import Description from "@/components/map/FooterButton/description";
import { useSearchParams } from "next/navigation";

export default async function Map({
  searchParams,
}: {
  searchParams?: { id: string };
}) {
  const boxData = await fetchMapData();
  if (searchParams) {
    const id = searchParams.id;
    switch (boxData[id].shelf) {
      case 1:
        const params = new URLSearchParams(searchParams);
        params.set("map", "shelf1");
        return (
          <div className="">
            <Shelf1 boxData={boxData} id={id} />
          </div>
        );
    }
  }
  return (
    <div className="">
      <Shelf1 boxData={boxData} />
    </div>
  );
}
