import ItemList from "@/components/search/ItemList";
import Header from "@/components/search/searchHeader";

export default function Page({
  searchParams,
}: {
  searchParams?: { query: string };
}) {
  return (
    <main>
      <Header />
      <div className="pt-32">
        <ItemList />
      </div>
    </main>
  );
}
