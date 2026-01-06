import { SideBarSection } from "./_features/sidebarSection";
import { Header } from "./_features/header";

export default function Page() {
  return (
    <div className="flex flex-col w-full h-screen">
      <Header />
      <SideBarSection />
    </div>
  );
}
