import { useState } from 'react';
import { ChevronsUpDown, LogOut, Search, UserRound, UserRoundPen } from "lucide-react"

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
import ProfileModal from "../logic/modals/profileModal";
import { Dialog, DialogTrigger } from "../ui/dialog";
import { AlertDialogTrigger, AlertDialog } from '../ui/alert-dialog';
import LogOutAlertDialog from '../logic/modals/logoutAlertModal';
import SearchTodosModal from '../logic/modals/searchTodosModal';

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
                <UserRound size={18}/>
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
                <DialogTrigger className="w-full text-start flex items-center gap-2.5 text-[#444]" onClick={(e) => {
                  e.stopPropagation();
                  setIsFormModalOpen(true);
                }}>
                  <UserRoundPen size={18}/>Редактировать профиль
                </DialogTrigger>
              </DropdownMenuItem>
              {isFormModalOpen && <ProfileModal onClose={() => setIsFormModalOpen(false)} />}
            </Dialog>
            <AlertDialog open={isAlerLogOutOpen} onOpenChange={setIsAlertLogOutOpen}>
              <DropdownMenuItem className="text-[#FF3000]">
                <AlertDialogTrigger className="w-full text-start flex items-center gap-2.5"  onClick={(e) => {
                  e.stopPropagation();
                  setIsAlertLogOutOpen(true)
                }}>
                  <LogOut size={18}/>Выйти
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
              <DialogTrigger className='w-full'>
              <Button variant="ghost" className="flex justify-start items-center w-full text-[#666]">
                <Search />
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