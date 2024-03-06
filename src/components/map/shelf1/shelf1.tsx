"use client";
import { BoxData } from "@/lib/index";
import Shelf1_raw from "./shelf_raw";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import getWindowSize from "@/components/ui/getWindowSize";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

export default function Shelf1({
  boxData,
  id,
}: {
  boxData: { [key: string]: BoxData };
  id?: string;
}) {
  const { replace } = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const handleClick = (id: string) => {
    console.log(id);
    const params = new URLSearchParams(searchParams);
    if (id) {
      params.set("id", id);
    } else {
      params.delete("id");
    }
    replace(`${pathname}?${params.toString()}`);
  };

  const { width, height } = getWindowSize();
  console.log(getWindowSize());
  return (
    <TransformWrapper>
      <TransformComponent>
        <svg
          width={width}
          height={height}
          viewBox="0.00 0.00 1051.00 1500.00"
          xmlns="http://www.w3.org/2000/svg"
        >
          <Shelf1_raw />
          {Object.keys(boxData).map((data) => {
            return (
              <>
                <g
                  strokeLinecap="round"
                  key={data}
                  onClick={() => handleClick(data)}
                >
                  <path
                    d={boxData[data].box}
                    fill="white"
                    stroke="rgb(51, 51, 51)"
                    strokeWidth="4.00"
                    strokeOpacity="1.00"
                    strokeLinejoin="round"
                  />
                  {/* <path
                    d={boxData[data].dot}
                    fill="white"
                    stroke={
                      id === data ? "rgb(255, 102, 255)" : "rgb(51, 51, 51)"
                    }
                    strokeWidth="20"
                    strokeOpacity="1.00"
                    strokeLinejoin="round"
                  /> */}
                  <circle
                    cx={boxData[data].x_center}
                    cy={boxData[data].y_center}
                    r="10"
                    fill={
                      id === data ? "rgb(255, 102, 255)" : "rgb(51, 51, 51)"
                    }
                  />
                  {id === data && (
                    <>
                      <rect
                        x={boxData[data].x_center - 15}
                        y={boxData[data].y_center - 15}
                        width="30"
                        height="30"
                        fill="#c5ff17"
                      ></rect>
                      <rect
                        x={boxData[data].x_center - 10}
                        y={boxData[data].y_center - 10}
                        width="20"
                        height="20"
                        fill="black"
                      ></rect>
                      <foreignObject
                        x={boxData[data].x_center + 30}
                        y={boxData[data].y_center - 30}
                        width="160"
                        height="160"
                        className="z-50"
                      >
                        <div className="text-gray-700 bg-white text-2xl font-bold w-fit">
                          {boxData[data].title}
                        </div>
                      </foreignObject>
                    </>
                  )}
                </g>
                {/* <text
                  x={boxData[data].x_center + 50}
                  y={boxData[data].y_center}
                  fontSize="25"
                  textDecoration="bold"
                  fontWeight="bold"
                  className=""
                  >
                  {boxData[data].title}
                </text> */}
              </>
            );
          })}
        </svg>
      </TransformComponent>
    </TransformWrapper>
  );
}
