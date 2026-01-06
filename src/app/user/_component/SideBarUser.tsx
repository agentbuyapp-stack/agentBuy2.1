"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { Home, Settings, Users, FileText, BarChart } from "lucide-react";

const menuItems = [
  {
    title: "Home",
    icon: Home,
    url: "/user",
  },
  {
    title: "Orders",
    icon: BarChart,
    url: "/Orders",
  },
  {
    title: "Гарах",
    icon: Settings,
    url: "/",
  },
];

export function SideBarUser() {
  const { toggleSidebar, isMobile } = useSidebar();

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <div className="flex items-center gap-2 px-2 py-1 group-data-[collapsible=icon]:justify-center">
          <button
            onClick={toggleSidebar}
            className="flex size-8 items-center justify-center rounded-lg bg-linear-to-r from-[#0b4ce5] to-[#4a90e2] text-white cursor-pointer hover:scale-105 transition-transform shrink-0"
          >
            <span className="text-lg font-bold">A</span>
          </button>
          <div className="flex flex-col overflow-hidden group-data-[collapsible=icon]:hidden">
            <span className="text-sm font-semibold">Agent Buy</span>
            {/* <span className="text-xs text-muted-foreground">Dashboard</span> */}
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          {/* <SidebarGroupLabel>Navigation</SidebarGroupLabel> */}
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild tooltip={item.title}>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <div className="px-2 py-1 text-xs text-muted-foreground">
          © 2026 Agent Buy
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
