import { Header } from "./_features/header";
import { SideBarSection } from "./_features/sidebarSection";

export const metadata = {
  title: "Agent Dashboard",
};

export default function AgentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col w-full h-screen">
      <Header />
      <div className="flex flex-row">
        <SideBarSection />
        <main className="">{children}</main>
      </div>
    </div>
  );
}
