import Map from "@/components/map/map";
import Description from "@/components/map/description";
import Header from "@/components/search/header";

export default function Page({
  searchParams,
}: {
  searchParams?: { id: string };
}) {
  const id = searchParams?.id || "";
  console.log("id", id);
  return (
    <>
      <Header />
      <Map id={id} />
      <Description id={id}/>
    </>
  );
}
