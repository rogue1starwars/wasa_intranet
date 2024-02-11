import Search from "@/components/base/search";
import Header from "@/components/search/header";
import Description from "@/components/map/FooterButton/description";
import TopViewButton from "@/components/map/FooterButton/topViewButton";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
}
