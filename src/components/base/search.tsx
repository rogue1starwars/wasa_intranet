"use client";

import { usePathname, useSearchParams, useRouter } from "next/navigation";

export default function Search({ placeholder }: { placeholder: string }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  function handleSearch(term: string) {
    const params = new URLSearchParams();
    console.log(term);
    if (term) {
        console.log("setparam")
      params.set("query", term);
    } else {
      params.delete("query");
    }
    replace(`${pathname}?${params.toString()}`);
  }
  return (
    <div className="flex justify-items-center">
      <input
        type="text"
        placeholder={placeholder}
        onChange={(e) => handleSearch(e.target.value)}
        className="w-[90%] mx-auto border border-gray-300 rounded-full placeholder:text-gray-700 pl-4 py-[12px] tracking-wider focus:outline-none shadow-md"
        defaultValue={searchParams.get("query")?.toString() || ""}
      />
    </div>
  );
}
