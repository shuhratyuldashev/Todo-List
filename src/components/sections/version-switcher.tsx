import { ChevronsUpDown } from "lucide-react"
import { RiUser3Line } from "react-icons/ri";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

import { Button } from "../ui/button";
import searchTodosIcon from "../../assets/icons/Search-todos-icon.png";

export function VersionSwitcher() {
  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
            >
              <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-[#444] text-sidebar-primary-foreground">
                <RiUser3Line size={17}/>
              </div>
              <div className="flex flex-col gap-0.5 leading-none">
                <span className="font-semibold ">User Name</span>
                <span className="text-[#FC3000]">usergmail@gmail.com</span>
              </div>
              <ChevronsUpDown className="ml-auto" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-[--radix-dropdown-menu-trigger-width]"
            align="start"
          >
            <DropdownMenuItem>Редактирировать профиль</DropdownMenuItem>
            <DropdownMenuItem className="text-[#FF3000]">Выйти</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
      <SidebarMenuItem>
        <SidebarMenuButton>
          <Button variant="ghost" className="flex justify-start items-center w-full text-[#666]">
            <img src={searchTodosIcon} alt="" className="w- h-4 mr-2" />
            Поиск
          </Button>
        </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}
