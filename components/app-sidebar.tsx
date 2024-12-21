"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { GalleryVerticalEnd, Menu, ChevronLeft, ChevronRight } from 'lucide-react'
import { ThemeToggle } from "./theme-toggle"
import { Button } from "./ui/button"
import { Sidebar, SidebarContent, SidebarHeader, SidebarMenu, SidebarMenuItem, SidebarMenuButton } from "./ui/sidebar"
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet"

const navItems = [
  { title: "Главная", url: "/" },
  { title: "Правила", url: "/rules" },
  { title: "Как вступить", url: "/join" },
  { title: "Лаунчер", url: "/launcher" },
  { title: "Моды", url: "/mods" },
  { title: "IP и Карта", url: "/ip" },
]

export function AppSidebar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = React.useState(true)
  const isMobile = typeof window !== 'undefined' ? window.innerWidth <= 768 : false

  const NavigationContent = () => (
    <>
      <div className="flex flex-col gap-1">
        {navItems.map(item => (
          <Link
            key={item.url}
            href={item.url}
            className={`px-4 py-3 rounded-lg transition-colors text-base ${
              pathname === item.url
                ? "bg-primary/10 text-primary font-medium"
                : "hover:bg-muted"
            }`}
            onClick={() => isMobile && setIsOpen(false)}
          >
            {item.title}
          </Link>
        ))}
      </div>
      <div className="mt-auto p-4 flex items-center justify-between">
        <ThemeToggle />
        <div className="flex gap-2">
          <Button asChild variant="outline" size="sm" className="h-10">
            <Link href="https://t.me/chat_sunset_house">Чат</Link>
          </Button>
          <Button asChild size="sm" className="h-10">
            <Link href="https://t.me/Catonis_dev">Админ</Link>
          </Button>
        </div>
      </div>
    </>
  )

  // Mobile View
  if (isMobile) {
    return (
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            className="fixed top-4 left-4 z-50 md:hidden"
          >
            <Menu className="h-6 w-6" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-[300px] p-0">
          <div className="flex h-full flex-col">
            <SidebarHeader className="flex justify-between items-center p-4 border-b">
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton size="lg" asChild>
                    <Link href="/">
                      <div className="bg-primary text-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                        <GalleryVerticalEnd className="size-4" />
                      </div>
                      <div className="flex flex-col gap-0.5 leading-none">
                        <span className="font-semibold">Sunset Wiki</span>
                        <span className="text-sm opacity-60">v1.0.0</span>
                      </div>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarHeader>
            <SidebarContent>
              <NavigationContent />
            </SidebarContent>
          </div>
        </SheetContent>
      </Sheet>
    )
  }

  // Desktop View
  return (
    <>
      <Sidebar className={`${isOpen ? 'translate-x-0' : '-translate-x-64'} transition-transform duration-300 ease-in-out`}>
        <SidebarHeader className="flex justify-between items-center">
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton size="lg" asChild>
                <Link href="/">
                  <div className="bg-primary text-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                    <GalleryVerticalEnd className="size-4" />
                  </div>
                  <div className="flex flex-col gap-0.5 leading-none">
                    <span className="font-semibold">Sunset Wiki</span>
                    <span className="text-sm opacity-60">v1.0.0</span>
                  </div>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
          <Button
            variant="ghost"
            size="icon"
            className="hidden md:flex"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <ChevronLeft className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
          </Button>
        </SidebarHeader>
        <SidebarContent>
          <NavigationContent />
        </SidebarContent>
      </Sidebar>

      <AnimatePresence>
        {!isOpen && (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.2 }}
          >
            <Button
              variant="secondary"
              size="icon"
              className="fixed top-4 left-4 z-40"
              onClick={() => setIsOpen(true)}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

