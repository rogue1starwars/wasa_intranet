"use client";

import Map from "@/components/map/map";

export default function Page({
  searchParams,
}: {
  searchParams?: { id: string };
}) {
  const id = searchParams?.id || "";
  return <Map id={id} />;
}
