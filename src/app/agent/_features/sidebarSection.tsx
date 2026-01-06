import { SidebarProvider } from "@/components/ui/sidebar";
import { SideBarUser } from "@/app/user/_component/SideBarUser";

export const SideBarSection = () => {
  return (
    <div>
      <SidebarProvider>
        <SideBarUser />
      </SidebarProvider>
    </div>
  );
};
