import { AppSidebar } from '@/components/sections/app-sidebar'
import Header from '@/components/sections/header'
import { SidebarProvider } from '@/components/ui/sidebar'

const Not_Completed_todos = () => {
    return (
      <SidebarProvider>
          <AppSidebar />
          <main className="w-full">
            <Header link='/' linkName='Главная' page='Не выполненные задачи'/>
          </main>
      </SidebarProvider>
    )
}

export default Not_Completed_todos