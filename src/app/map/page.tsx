"use client";

import { useSearchParams } from "next/navigation";
import Map from "@/components/map";

export default function Page() {
  const idParams = useSearchParams();
  const id = idParams.get("id");
  console.log(id);
  return (id ? <Map id={id} /> : null);
}
