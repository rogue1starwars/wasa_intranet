"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function TopViewButton({ title }: { title: string }) {
  const pathName = usePathname();
  if (pathName == "/map/topview") {
    return;
  }
  return (
    <div className="flex justify-center mb-4">
      <Link
        href={"/map"}
        className="bg-black text-white px-4 py-3 rounded-3xl drop-shadow-lg text-sm"
      >
        Top View
      </Link>
    </div>
  );
}

export function TopButton() {
  return <div>hello!</div>;
}
