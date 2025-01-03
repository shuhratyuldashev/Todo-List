import { useState } from 'react';
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
import ProfileModal from "../logic/profileModal";
import { Dialog, DialogTrigger } from "@radix-ui/react-dialog";
import { AlertDialog } from '@radix-ui/react-alert-dialog';
import { AlertDialogTrigger } from '../ui/alert-dialog';
import LogOutAlertDialog from '../logic/logoutAlertModal';
import SearchTodosModal from '../logic/searchTodosModal';

export function VersionSwitcher() {
  const [isFormModalOpen, setIsFormModalOpen] = useState(false);
  const [isAlerLogOutOpen, setIsAlertLogOutOpen] = useState(false)
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
            <Dialog open={isFormModalOpen} onOpenChange={setIsFormModalOpen}>
              <DropdownMenuItem>
                <DialogTrigger className="w-full text-start" onClick={(e) => {
                  e.stopPropagation();
                  setIsFormModalOpen(true);
                }}>
                  Редактировать профиль
                </DialogTrigger>
              </DropdownMenuItem>
              {isFormModalOpen && <ProfileModal onClose={() => setIsFormModalOpen(false)} />}
            </Dialog>
            <AlertDialog open={isAlerLogOutOpen} onOpenChange={setIsAlertLogOutOpen}>
              <DropdownMenuItem className="text-[#FF3000]">
                <AlertDialogTrigger className='w-full text-start' onClick={(e) => {
                  e.stopPropagation();
                  setIsAlertLogOutOpen(true)
                }}>
                  Выйти
                </AlertDialogTrigger>
              </DropdownMenuItem>
                {isAlerLogOutOpen && <LogOutAlertDialog />}
            </AlertDialog>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>

      <SidebarMenuItem>
        <SidebarMenuButton>
          <Dialog>
            <DialogTrigger>
              <Button variant="ghost" className="flex justify-start items-center w-full text-[#666]">
                <img src={searchTodosIcon} alt="" className="w- h-4 mr-2" />
                Поиск
              </Button>
            </DialogTrigger>
            <SearchTodosModal />
          </Dialog>
        </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}