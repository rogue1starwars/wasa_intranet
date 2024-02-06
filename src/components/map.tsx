import { fetchMapData } from "@/lib/data";

export default async function Map({ id }: { id: string }) {
  if (id) {
    const mapData = await fetchMapData(id);
    return (
      <div>
        <h1>{`shelf: ${mapData.shelf}`}</h1>
        <h1>{`row: ${mapData.row}`}</h1>
      </div>
    );
  } else {
    return null;
  }
}
