import React, { FC } from 'react'
import { SidebarTrigger } from '../ui/sidebar'
import { Separator } from '@radix-ui/react-dropdown-menu'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '../ui/breadcrumb'

interface iHeader {
    link?: string;
    linkName?: string;
    page: string;
}

const Header: FC<iHeader>= ({ link, linkName, page }) => {
  return (
    <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4 w-full">
       <SidebarTrigger className="-ml-1 lg:hidden md:block sm:block" />
          <Separator orientation="vertical" className="mr-2 h-4 lg:hidden md:block sm:block" />
          <Breadcrumb>
            <BreadcrumbList>
                {link &&  (
                <BreadcrumbItem>
                    <BreadcrumbSeparator className="hidden md:block" />
                    <BreadcrumbLink href={link}>{linkName}</BreadcrumbLink>
                </BreadcrumbItem>
                )}
              <BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbPage>{page}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
        </Breadcrumb>
    </header>
  )
}

export default Header