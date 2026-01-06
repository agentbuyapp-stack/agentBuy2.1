import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { SideBarAgent } from "../_components/sideBar";

export const SideBarSection = () => {
  return (
    <div className="w-fit h-fit">
      <SidebarProvider>
        <SidebarTrigger />
        <SideBarAgent />
      </SidebarProvider>
    </div>
  );
};
