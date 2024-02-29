import CardWrapper from "@/components/search/card";
import Header from "@/components/search/searchHeader";
import Search from "@/components/search/search";

export default function Page({
  searchParams,
}: {
  searchParams?: { query: string };
}) {
  return (
    <main>
      <Header/>
      <div className="pt-32">
        <CardWrapper searchParams={searchParams} />
      </div>
    </main>
  );
}
