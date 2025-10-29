"use client"

import { Search, Menu, Info, Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useTheme } from "next-themes"
import Link from "next/link"

export function Header() {
  const { theme, setTheme } = useTheme()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/60">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between gap-4 px-4">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded bg-foreground">
            <svg className="h-5 w-5 text-background" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3 3h8v8H3V3zm10 0h8v8h-8V3zM3 13h8v8H3v-8zm10 0h8v8h-8v-8z" />
            </svg>
          </div>
          <h1 className="text-lg font-bold">PolyCast 🇺🇸</h1>
        </Link>

        {/* Search Bar */}
        <div className="relative hidden flex-1 max-w-md md:block">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input type="search" placeholder="Search polymarket" className="w-full pl-9 h-9 bg-muted/50" />
        </div>

        <div className="flex items-center gap-3">
          <Button variant="ghost" size="sm" className="hidden gap-1.5 md:flex text-primary">
            <Info className="h-4 w-4" />
            How it works
          </Button>
          <Button variant="ghost" size="sm" className="hidden md:inline-flex">
            Log In
          </Button>
          <Button size="sm" className="hidden md:inline-flex bg-primary hover:bg-primary/90">
            Sign Up
          </Button>
          <Button
            size="icon"
            variant="ghost"
            className="h-9 w-9"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
          <Button size="icon" variant="ghost" className="h-9 w-9">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  )
}
