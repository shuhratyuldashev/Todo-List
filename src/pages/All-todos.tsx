import { AppSidebar } from '@/components/sections/app-sidebar'
import Header from '@/components/sections/header'
import { SidebarProvider } from '@/components/ui/sidebar'

const All_todos = () => {
    return (
      <SidebarProvider>
          <AppSidebar />
          <main className="w-full">
            <Header link='/' linkName='Главная' page='Список всех задач'/>
          </main>
      </SidebarProvider>
    )
}

export default All_todos