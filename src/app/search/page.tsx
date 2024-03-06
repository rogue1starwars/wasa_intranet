import ItemList from "@/components/search/ItemList";
import Header from "@/components/search/header";

export default function Page({
  searchParams,
}: {
  searchParams?: { query: string };
}) {
  return (
    <main>
      <Header />
      <div className="pt-32">
        <ItemList searchParams={searchParams} />
      </div>
    </main>
  );
}
