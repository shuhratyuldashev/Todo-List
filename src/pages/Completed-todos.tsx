import { AppSidebar } from '@/components/sections/app-sidebar'
import Header from '@/components/sections/header'
import { SidebarProvider } from '@/components/ui/sidebar'

const Completed_todos = () => {
    return (
      <SidebarProvider>
          <AppSidebar />
          <main className="w-full">
            <Header link='/' linkName='Главная' page='Выполненные задачи'/>
          </main>
      </SidebarProvider>
    )
}

export default Completed_todos