"use client"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { Button } from "./ui/button"
import { Zap } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { links } from "@/data/links"
import { ModeToggle } from "./ModeToggle"

export function AppSidebar() {
  const pathname = usePathname()
  return (
    <Sidebar className='bg-background'>
      <SidebarHeader className='  '>
        <Link href='/' className='flex items-center gap-2'>
          <Button
            variant='ghost'
            size='icon'
            className='w-12 h-12 rounded-full bg-primary text-background'
          >
            <Zap className=' size-8 ' />
          </Button>
          <div className='flex flex-col items-start justify-center'>
            <h1 className='text-2xl  font-bold '>Ember Vault</h1>
            <p className='text-sm text-muted-foreground font-bold  uppercase '>
              Premium Ledger
            </p>
          </div>
        </Link>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup />
        <SidebarMenu className='flex flex-col gap-6 p-2'>
          {links.map((link) => (
            <SidebarMenuItem key={link.name}>
              <SidebarMenuButton asChild>
                <Link
                  href={link.url}
                  className={`flex items-center gap-2 transition-all duration-300 ease-in-out  ${pathname === link.url ? "text-primary" : "text-muted-foreground"}`}
                >
                  <link.icon style={{ width: "1.5rem", height: "1.5rem" }} />
                  <span className='text-base'>{link.name}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
        <SidebarGroup />
      </SidebarContent>
      <SidebarFooter className='w-full flex items-center justify-center'>
        <ModeToggle />
      </SidebarFooter>
    </Sidebar>
  )
}
