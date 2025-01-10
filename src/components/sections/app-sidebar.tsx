import * as React from "react";
import { VersionSwitcher } from "@/components/sections/version-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import { Separator } from "@radix-ui/react-dropdown-menu";
import { Link, useLocation } from "react-router-dom";
import AddTodoModal from "../logic/modals/addTodoModal";
import ArchiveTodosModal from "../logic/modals/archiveTodosModal";

const data = {
  versions: ["1.0.1", "1.1.0-alpha", "2.0.0-beta1"],
  navMain: [
    {
      title: "Список задач",
      url: "#",
      items: [
        {
          icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-calendar"><path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/></svg>,
          title: "Список всех задач",
          url: "/all",
        },
        {
          icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-calendar-heart"><path d="M3 10h18V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7"/><path d="M8 2v4"/><path d="M16 2v4"/><path d="M21.29 14.7a2.43 2.43 0 0 0-2.65-.52c-.3.12-.57.3-.8.53l-.34.34-.35-.34a2.43 2.43 0 0 0-2.65-.53c-.3.12-.56.3-.79.53-.95.94-1 2.53.2 3.74L17.5 22l3.6-3.55c1.2-1.21 1.14-2.8.19-3.74Z"/></svg>,
          title: "Избранные задачи",
          url: "/favorite",
        },
        {
          icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-calendar-check-2"><path d="M8 2v4"/><path d="M16 2v4"/><path d="M21 14V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8"/><path d="M3 10h18"/><path d="m16 20 2 2 4-4"/></svg>,
          title: "Выполненные задачи",
          url: "/completed",
        },
        {
          icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-calendar-x-2"><path d="M8 2v4"/><path d="M16 2v4"/><path d="M21 13V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8"/><path d="M3 10h18"/><path d="m17 22 5-5"/><path d="m17 17 5 5"/></svg>,
          title: "Не выполненные задачи",
          url: "/not-completed",
        },
      ],
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const location = useLocation();

  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <VersionSwitcher />
      </SidebarHeader>
      <SidebarContent>
        {data.navMain.map((item) => (
          <React.Fragment key={item.title}>
            <SidebarGroup>
              <Separator className="bg-gray-200 h-[1px] mt-2" />
              <SidebarGroupLabel>{item.title}</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  <AddTodoModal />
                  {item.items.map((subItem) => (
                    <SidebarMenuItem key={subItem.title}>
                      <SidebarMenuButton className="w-full" asChild>
                      <Link
                        className={`flex items-center font-semibold text-[#666] py-2.5 px-5 hover:bg-[#ddd] ${
                          location.pathname === subItem.url ? "bg-[#ddd] text-[#333]" : "bg-none"
                        }`}
                        to={subItem.url}
                      >
                          {subItem.icon}
                          {subItem.title}
                      </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                  <Separator className="bg-gray-200 h-[1px] my-2" />
                  <ArchiveTodosModal />
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </React.Fragment>
        ))}
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
