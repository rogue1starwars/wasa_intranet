import Map from "@/components/map/map";
import Description from "@/components/map/FooterButton/description";
import Header from "@/components/search/header";
import TopViewButton from "@/components/map/FooterButton/topViewButton";

export default function Page({
  searchParams,
}: {
  searchParams?: { id: string; query: string; map: string };
}) {
  const id = searchParams?.id || "";
  const map = searchParams?.map || "";
  return (
    <>
      <Header />
      <Map searchParams={searchParams} />
      <TopViewButton title="topView" />
      <Description id={id} />
    </>
  );
}
