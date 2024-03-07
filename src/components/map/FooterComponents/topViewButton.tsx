"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function TopViewButton({ title }: { title: string }) {
  console.log("probably only working in client side")
  return (
    <div className="flex justify-center mb-4">
      {/* <Link
        href={"/map"}
        className="bg-black text-white px-4 py-3 rounded-3xl drop-shadow-lg text-sm"
      >
        Top View
      </Link> */}
      <Button asChild>
        <Link href="/map">Top View</Link>
      </Button>
    </div>
  );
}
