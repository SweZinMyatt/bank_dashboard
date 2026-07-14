import { SidebarProvider, SidebarTrigger } from "#/components/molecules/sidebar"
import { Outlet } from "@tanstack/react-router"
import { AppSidebar } from "./app-sidebar"
import Header from "../organisms/header"


export default function Layout() {
  return (
    <SidebarProvider
    className="flex min-h-screen"
  style={
    {
      "--sidebar-width": "13rem",
      "--sidebar-width-mobile": "20rem",
      
    } as React.CSSProperties
  }
>

      <AppSidebar />
      <main className="w-full">
        <Header/>
        <Outlet/>
      </main>
    </SidebarProvider>
  )
}