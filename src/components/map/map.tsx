import Shelf1 from "./shelf1/shelf1";
import { fetchMapData } from "@/lib/data";

export default async function Map({ id }: { id?: string }) {
  const boxData = await fetchMapData();
  if (id) {
    // Object.keys(boxData).map((data) => {
    //     if (data.id === id) {
    //         switch (data.shelf) {
    //         case 1:
    //             return <Shelf1 boxData={boxData} id={id}/>;
    //         }
    //     }

    // })
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
