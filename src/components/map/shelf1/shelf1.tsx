"use client";
import { BoxData, MapData } from "@/lib/types";
import Shelf1_raw from "./shelf_raw";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import getWindowSize from "@/components/ui/getWindowSize";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import Image from "next/image";
import Link from "next/link";
import { setDescription } from "@/lib/reduxFeatures/description/descriptionSlice";
import { useAppDispatch } from "@/lib/hooks";

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
  const { replace, push } = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();


  const handleClickBox = (id: string) => {
    const params = new URLSearchParams(searchParams);
    params.set("id", id);
    replace(`${pathname}?${params.toString()}`);
    useAppDispatch(setDescription({ id: id, title: mapData[id].title, description: mapData[id].description }));
  };

  const handleClickShelf = (id: string) => {
    push(`${id}`);
  };

  const { width, height } = getWindowSize();
  console.log(`width:${width}, height:${height}`);
  return (
    <div className="m-auto flex justify-center items-center h-screen">
      <TransformWrapper>
        <TransformComponent>
          <svg width="100%" height="100%" className="absolute">
            {Object.keys(mapData).map((id) => {
              const child = mapData[id];
              if (child.type === "box") {
                return (
                  <g onClick={() => handleClickBox(id)}>
                    <circle
                      cx={child.xCenter}
                      cy={child.yCenter}
                      fill="black"
                      className="z-50"
                      r="10"
                    />
                    <ellipse
                      cx={child.xCenter}
                      cy={child.yCenter}
                      fill="transparent"
                      stroke="white"
                      stroke-width="4"
                      className="z-20"
                      rx="10"
                      ry="10"
                    />
                  </g>
                );
              } else if (child.type === "shelf") {
                return (
                  <>
                    <g onClick={() => handleClickShelf(id)}>
                      <rect
                        x={child.xCenter}
                        y={child.yCenter}
                        width="20"
                        height="20"
                        fill="black"
                      />
                      <rect
                        x={child.xCenter}
                        y={child.yCenter}
                        width="20"
                        height="20"
                        fill="transparent"
                        stroke="white"
                        stroke-width="4"
                      />
                    </g>
                  </>
                );
              }
            })}
            {/* <circle cx="430" cy="00" r="50" /> */}
          </svg>
          <Image
            src={parent.imgUrl}
            alt={parent.title}
            width={width}
            height={height}
            priority={true}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="py-32"
          />
        </TransformComponent>
      </TransformWrapper>
    </div>
  );
}
