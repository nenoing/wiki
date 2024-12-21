"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { type ThemeProviderProps } from "next-themes"

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <NextThemesProvider {...props}>
      <div className="relative">
        {mounted && (
          <div
            className="pointer-events-none fixed inset-0 z-50 transition-colors duration-1000 ease-in-out"
            style={{
              backgroundColor: 'var(--background)',
              backgroundImage: 'radial-gradient(circle at center, var(--background) 0%, transparent 100%)',
            }}
          />
        )}
        <div className="transition-colors duration-1000 ease-in-out">
          {children}
        </div>
      </div>
    </NextThemesProvider>
  )
}

