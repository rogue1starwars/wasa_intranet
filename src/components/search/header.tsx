import Search from "../base/search";

export default function Header() {
  return (
    <header className="relative z-50">
      <div className="bg-black w-full h-24 rounded-b-[40px] fixed inset-x-0 top-0"></div>
      <div className="fixed inset-x-0 top-16 ">
        <Search placeholder="Search" />
      </div>
    </header>
  );
}
