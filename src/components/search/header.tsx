import Search from "../base/search";

export default function Header() {
  return (
    <>
      <div className="bg-black w-full h-24 rounded-b-[40px]"></div>
      <div className="-mt-7">
        <Search placeholder="Search" />
      </div>
    </>
  );
}
