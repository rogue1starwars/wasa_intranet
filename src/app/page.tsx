"use client";

import Image from "next/image";
import CardWrapper from "../components/card";
import { fetchCards } from "@/lib/data";
import { useEffect } from "react";

export default function Page() {
  return (
    <main>
      <CardWrapper />
    </main>
  );
}
