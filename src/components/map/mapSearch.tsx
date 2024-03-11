"use client";

import { usePathname, useSearchParams, useRouter } from "next/navigation";
import {
  Command,
  CommandEmpty,
  CommandInput,
  CommandItem,
  CommandList,
} from "../ui/command";
import Link from "next/link";

export default function MapSearch({ placeholder }: { placeholder: string }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  
  function handleSearch(term: string) {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }
    replace(`${pathname}?${params.toString()}`);
  }

  return (
    <div className="flex justify-items-center">
      <Command className="w-[90%] mx-auto">
        <Link href="/search">
          <CommandInput
            placeholder={placeholder}
            onValueChange={(value) => handleSearch(value)}
          />
        </Link>
      </Command>
    </div>
  );
}
