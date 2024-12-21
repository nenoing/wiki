"use client"

import * as React from "react"

interface SidebarContextType {
  isOpen: boolean
  setIsOpen: (value: boolean) => void
}

const SidebarContext = React.createContext<SidebarContextType | undefined>(undefined)

export function Sidebar({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const [isOpen, setIsOpen] = React.useState(true)

  return (
    <SidebarContext.Provider value={{ isOpen, setIsOpen }}>
      <aside className={`fixed inset-y-0 left-0 z-50 w-64 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'} border-r bg-background ${className}`}>
        {children}
      </aside>
    </SidebarContext.Provider>
  )
}

export function useSidebar() {
  const context = React.useContext(SidebarContext)
  if (context === undefined) {
    throw new Error("useSidebar must be used within a Sidebar")
  }
  return context
}

export function SidebarTrigger({ className = "", ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const { setIsOpen } = useSidebar()
  return (
    <button
      type="button"
      className={`rounded-lg p-2 hover:bg-accent ${className}`}
      onClick={() => setIsOpen(true)}
      {...props}
    />
  )
}

export function SidebarHeader({ children }: { children: React.ReactNode }) {
  return <div className="border-b px-6 py-4">{children}</div>
}

export function SidebarContent({ children }: { children: React.ReactNode }) {
  return <div className="flex flex-1 flex-col overflow-y-auto p-4">{children}</div>
}

export function SidebarMenu({ children }: { children: React.ReactNode }) {
  return <div className="flex items-center gap-4">{children}</div>
}

export function SidebarMenuItem({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>
}

export function SidebarMenuButton({ children, asChild, size = "default", isActive, className = "", ...props }: {
  children: React.ReactNode
  asChild?: boolean
  size?: "default" | "lg"
  isActive?: boolean
  className?: string
} & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const Comp = asChild ? "div" : "button"
  return (
    <Comp
      className={`flex items-center gap-3 rounded-lg px-4 py-2 text-sm hover:bg-accent ${
        size === "lg" ? "py-3" : ""
      } ${isActive ? "bg-primary/10 text-primary" : ""} ${className}`}
      {...props}
    >
      {children}
    </Comp>
  )
}

