import Shelf1 from "./shelf1/shelf1";
import { fetchMapData } from "@/lib/data";

export default async function Map({ id }: { id?: string }) {
  const boxData = await fetchMapData();
  if (id) {
    switch (boxData[id].shelf) {
      case 1:
        return (
          <div className="">
            <Shelf1 boxData={boxData} id={id}/>
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
