import Shelf1 from "@/components/map/shelf1/shelf1";
import { fetchMapData } from "@/lib/data";
import FooterButton from "@/components/map/FooterComponents/FooterComponents";

export default async function Page({
  params,
  searchParams,
}: {
  params: { shelf: string };
  searchParams: { id?: string; query?: string };
}) {
  const switchShelf = (shelf: number) => {
    switch (shelf) {
      case 1:
        return <Shelf1 boxData={boxData} id={searchParams.id} />;
    }
  };

  const boxData = await fetchMapData(parseInt(params.shelf));
  return (
    <>
      {switchShelf(parseInt(params.shelf))}
      <FooterButton id={searchParams?.id} />
    </>
  );
}
