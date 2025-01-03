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
import { Button } from "../ui/button";
import { Separator } from "@radix-ui/react-dropdown-menu";
import { HiMiniArchiveBoxArrowDown } from "react-icons/hi2";

import allTodosIcon from "../../assets/icons/All-todos-icon.png";
import favoriteTodosIcon from "../../assets/icons/Favorite-todos-icon.png";
import completedTodosIcon from "../../assets/icons/Completed-todos-icon.png";
import notCompletedTodosIcon from "../../assets/icons/Not-Completed-todos-icon.png";
import { Link } from "react-router-dom";
import AddTodoModal from "../logic/addTodoModal";
import { Dialog, DialogTrigger } from "@radix-ui/react-dialog";
import ArchiveTodosModal from "../logic/archiveTodosModal";

const data = {
  versions: ["1.0.1", "1.1.0-alpha", "2.0.0-beta1"],
  navMain: [
    {
      title: "Список задач",
      url: "#",
      items: [
        {
          icon: allTodosIcon,
          title: "Список всех задач",
          url: "/all",
        },
        {
          icon: favoriteTodosIcon,
          title: "Избранные задачи",
          url: "/favorite",
        },
        {
          icon: completedTodosIcon,
          title: "Выполненные задачи",
          url: "/completed",
        },
        {
          icon: notCompletedTodosIcon,
          title: "Не выполненные задачи",
          url: "/not-completed",
        },
      ],
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
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
                      <SidebarMenuButton asChild>
                        <Link
                          className="flex items-center font-semibold text-[#666] py-2.5 px-5 hover:bg-[#DCDCDC] hover:text-[#444]"
                          to={subItem.url}
                        >
                          <img src={subItem.icon} alt={subItem.title} className="w- h-4 mr-2" />
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
