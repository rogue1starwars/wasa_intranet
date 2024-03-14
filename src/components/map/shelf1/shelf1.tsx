"use client";
import { BoxData, MapData } from "@/lib/types";
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
import Image from "next/image";

export default function Shelf1({
  mapData,
}: {
  mapData: { [key: string]: MapData };
}) {
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
            src="/PXL_20240314_052042568.jpg"
            alt="Shelf 1"
            width={width}
            height={height}
            className="m-auto"
          />
        </TransformComponent>
      </TransformWrapper>
    </div>
  );
}
