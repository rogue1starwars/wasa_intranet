"use client";

import { usePathname } from "next/navigation";
import Map from "@/components/map";

export default function Page() {
  const id = usePathname();
  return <Map id={id} />;
}
