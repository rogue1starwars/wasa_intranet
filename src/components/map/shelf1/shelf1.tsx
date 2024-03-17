"use client";
import { BoxData, MapData } from "@/lib/types";
import Shelf1_raw from "./shelf_raw";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import getWindowSize from "@/components/ui/getWindowSize";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import Image from "next/image";

export default function Shelf1({
  parent,
  mapData,
  id,
}: {
  parent: MapData;
  mapData: { [key: string]: MapData };
  id: string | undefined;
}) {
  //Get the current URL
  const { replace } = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const handleClick = (id: string) => {
    const params = new URLSearchParams(searchParams);
    if (id) {
      params.set("id", id);
    } else {
      params.delete("id");
    }
    replace(`${pathname}?${params.toString()}`);
  };

  const { width, height } = getWindowSize();
  return (
    <div className="m-auto">
      <TransformWrapper>
        <TransformComponent>
          <Image
            src={parent.imgUrl}
            alt={parent.title}
            width={width}
            height={height}
            className="m-auto height-auto"
          />
        </TransformComponent>
      </TransformWrapper>
    </div>
  );
}
