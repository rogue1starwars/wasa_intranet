import Description from "@/components/map/FooterButton/description";
import TopViewButton from "@/components/map/FooterButton/topViewButton";

export default function FooterButton({ id }: { id?: string }) {
  return (
    <div className="absolute bottom-10 w-full">
      <TopViewButton title="title" />
      {id ? <Description id={id} /> : null}
    </div>
  );
}
