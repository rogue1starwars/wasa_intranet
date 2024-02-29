"use client";

import { usePathname, useSearchParams, useRouter } from "next/navigation";
import {
  Command,
  CommandEmpty,
  CommandInput,
  CommandItem,
  CommandList,
} from "../ui/command";

export default function Search({ placeholder }: { placeholder: string }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  function handleSearch(term: string) {
    // const params = new URLSearchParams(searchParams);
    // console.log(term);
    // if (term) {
    //   params.set("query", term);
    //   console.log(`params:${params}`);
    //   console.log(`searchParams:${searchParams}`);
    // } else {
    //   params.delete("query");
    // }
    // replace(`${pathname}?${params.toString()}`);
    console.log("searching!!")
  }

  return (
    <div className="flex justify-items-center">
      <Command className="w-[90%] mx-auto">
        <CommandInput
          placeholder={placeholder}
          onValueChange={(value) => handleSearch(value)}
        />
      </Command>
    </div>
  );
}
