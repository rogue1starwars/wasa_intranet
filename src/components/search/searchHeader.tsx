import Search from "../search/search";

export default function SearchHeader() {
  return (
    <div className="relative z-50">
      <div className="bg-black w-full h-24 rounded-b-[40px] fixed inset-x-0 top-0"></div>
      <div className="fixed inset-x-0 top-16 ">
        <Search placeholder="Search"/>
      </div>
    </div>
  );
}
