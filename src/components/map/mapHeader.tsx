import MapSearch from "./mapSearch";

export default function Header() {
  return (
    <div className="relative z-50">
      <div className="bg-black w-full h-24 rounded-b-[40px] fixed inset-x-0 top-0"></div>
      <div className="fixed inset-x-0 top-16 ">
        <MapSearch placeholder="Search"/>
      </div>
    </div>
  );
}
