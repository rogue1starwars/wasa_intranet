import SearchHeader from "@/components/search/searchHeader";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <SearchHeader />
      {children}
    </div>
  );
}
