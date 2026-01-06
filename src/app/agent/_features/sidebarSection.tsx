import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { SideBarAgent } from "../_components/sideBarAgent";

export const SideBarSection = () => {
  return (
    <SidebarProvider>
      <SidebarTrigger />
      <SideBarAgent />
    </SidebarProvider>
  );
};
