import Shelf1 from "@/components/map/shelf1/shelf1";
import { fetchMapData } from "@/lib/data";
import FooterButton from "@/components/map/FooterComponents/FooterComponents";
import { MapData } from "@/lib/types";

export default async function Page({
  params,
  searchParams,
}: {
  params: { shelf: string };
  searchParams: { id?: string; query?: string };
}) {

  const mapParentData = await fetchMapData(params.shelf);
  console.log(`mapParentData:${mapParentData.imgUrl}`);
  if(!mapParentData.child) return null;
  // const mapData = mapParentData.child.map((id) => fetchMapData(id))
  const mapData: {[key: string]: MapData} = {}
  mapParentData.child.map(async (id) => {
    mapData[id] = await fetchMapData(id)
    // console.log(`mapData:${mapData[id]}`)
  })
  // console.log(`mapData:${mapData["1"]}`)

  const switchShelf = (shelf: number) => {
    switch (shelf) {
      case 1:
        return <Shelf1 parent={mapParentData} mapData={mapData} id={searchParams.id} />;
    }
  };

  return (
    <>
      {/* {switchShelf(parseInt(params.shelf))} */}
      <Shelf1 parent={mapParentData} mapData={mapData} id={searchParams.id} />
      <FooterButton id={searchParams?.id} />
    </>
  );
}
