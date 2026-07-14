import { BellDot, Menu, Search, Settings } from 'lucide-react'
import { Button } from '../atoms/button'
import { Input } from '../atoms/input'
import { Images } from '#/constant/image'
import { useSidebar } from '../molecules/sidebar'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from '../molecules/dropdown-menu'

function Header() {
  const { toggleSidebar } = useSidebar()

  return (
    <div className="flex items-center justify-between w-full bg-white m-0 h-[85px] px-3">
      <div className="flex md:gap-3 gap-5 items-center md:text-[25px] text-[20px] font-bold text-primary ">
        <Button onClick={toggleSidebar} className="sm:hidden p-2 bg-white">
          <Menu className="text-primary" />
        </Button>

        <h1>Overview</h1>
      </div>
      <div className="flex items-center gap-3 bg-input px-2 py-1 rounded-xl text-foreground w-[200px] md:w-[300px]">
        <Search />
        <Input
          placeholder="Search for something"
          className="placeholder:text-foreground placeholder:md:text-[16px] placeholder:text-[12px] outline-none border-0 shadow-none focus-visible:ring-0"
        />
      </div>
      <div className="flex items-center gap-5">
        <div className="rounded-xl hidden sm:block size-11 flex items-center bg-input">
          <Button className="bg-input text-primary ">
            <Settings className="size-[25px]" />
          </Button>
        </div>
        <div className="rounded-xl hidden sm:block size-11 flex items-center bg-input">
          <Button className="bg-input  text-secondary">
            <BellDot className="size-[25px]" />
          </Button>
        </div>
        <div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                className="border-0 outline-none hover:bg-white ring-0 focus-visible:ring-0"
              >
                <img
                  src={Images.user}
                  alt="User"
                  className="size-10 rounded-full"
                ></img>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-40" align="start">
              <DropdownMenuGroup>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuItem>
                  Profile
                  <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  Billing
                  <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  Settings
                  <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />

              <DropdownMenuGroup>
                <DropdownMenuItem>
                  Log out
                  <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  )
}

export default Header
