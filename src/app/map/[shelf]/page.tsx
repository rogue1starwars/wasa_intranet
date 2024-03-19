import Shelf1 from "@/components/map/shelf1/shelf1";
import { fetchMapData } from "@/lib/data";
import FooterButton from "@/components/map/FooterComponents/FooterComponents";
import { MapData } from "@/lib/types";
import { memo } from "react";

export default async function Page({
  params,
  searchParams,
}: {
  params: { shelf: string };
  searchParams: { id?: string; query?: string };
}) {

  // Getting all the data for the map
  const mapParentData = await fetchMapData(params.shelf);
  if(!mapParentData.child) return null;
  const mapData: {[key: string]: MapData} = {}
  mapParentData.child.map(async (id) => {
    mapData[id] = await fetchMapData(id)
  })

  const Shelf1Memo = memo(Shelf1)

  return (
    <>
      <Shelf1Memo parent={mapParentData} mapData={mapData} id={searchParams.id} />
      <FooterButton id={searchParams?.id} />
    </>
  );
}
