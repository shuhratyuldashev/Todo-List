import { AppSidebar } from "@/components/sections/app-sidebar"
import Header from "@/components/sections/header"
import Cards from "@/components/sections/cards-home-page"
import { SidebarProvider } from "@/components/ui/sidebar"
import ChartPie from "@/components/sections/chartPie"

const Home = () => {
  return (
    <SidebarProvider>
        <AppSidebar />
          <main className="w-full">
            <Header page="Главная"/>
            <Cards />
            <ChartPie />
        </main>
    </SidebarProvider>
  )
}

export default Home