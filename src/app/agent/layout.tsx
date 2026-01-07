import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { SideBarAgent } from "./_components/sideBarAgent";
import { Header } from "./_features/header";

export const metadata = {
  title: "Agent Dashboard",
};

export default function AgentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <div className="flex flex-col w-full min-h-screen">
        <Header />
        <div className="flex flex-row min-w-full h-full">
          <SideBarAgent />
          <SidebarTrigger className="hidden max-md:block" />
          <main className="flex-1">{children}</main>
        </div>
      </div>
    </SidebarProvider>
  );
}
