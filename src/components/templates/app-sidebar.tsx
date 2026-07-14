import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from '../molecules/sidebar'
import logo from '#/assets/icons/logo.svg'
import {
  BadgeDollarSign,
  BanknoteArrowUp,
  HandCoins,
  House,
  Landmark,
  Lightbulb,
  Settings,
  User,
  WrenchIcon,
} from 'lucide-react'
import { Link } from '@tanstack/react-router'


const items = [
  {
    name: 'Dashboard',
    icon: House,
    url: '/',
  },
  {
    name: 'Transactions',
    icon: BadgeDollarSign,
    url: '/transaction',
  },
  {
    name: 'Accounts',
    icon: User,
    url: '/account',
  },
  {
    name: 'Investments',
    icon: Landmark,
    url: '/investments',
  },
  {
    name: 'Credit Cards',
    icon: BanknoteArrowUp,
    url: '/creditCard',
  },
  {
    name: 'Loans',
    icon: HandCoins,
    url: 'loans',
  },
  {
    name: 'Services',
    icon: WrenchIcon,
    url: 'services',
  },
  {
    name: 'My Privileges',
    icon: Lightbulb,
    url: 'privileges',
  },
  {
    name: 'Setting',
    icon: Settings,
    url: '/setting',
  },
]
export function AppSidebar() {
 
  
  return (
    <Sidebar className='min-h-screen'>
      <SidebarHeader className="mb-5">
        <div className="flex gap-2 items-center px-3 pt-2">
          <img src={logo} alt="logo" className="size-6"></img>
          <h1 className="text-primary font-bold text-[25px]">BankDash.</h1>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup className="p-0">
          <SidebarMenu>
            {items.map((item) => (
              <SidebarMenuItem key={item.name}>
                <SidebarMenuButton asChild className="px-3">
                  <Link
                    to={item.url}
                    className="text-foreground flex gap-4 text-[16px] relative"
                    activeProps={{
                      className: 'text-primary font-bold',
                    }}
                    
                  >
                    {({ isActive }) => (
                      <>
                        {isActive && (
                          <div className="absolute left-0 top-0 bottom-0 w-[5px] bg-card rounded-md" />
                        )}

                        <span className="text-[16px]">
                          <item.icon />
                        </span>
                        <span className="text-[16px]">{item.name}</span>
                      </>
                    )}
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
        <SidebarGroup />
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  )
}
