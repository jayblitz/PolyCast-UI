"use client"

import { Search, Menu, Info, Moon, Sun, Wallet } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useTheme } from "next-themes"
import Link from "next/link"
import { useState } from "react"

export function Header() {
  const { theme, setTheme } = useTheme()
  const [isWalletConnected, setIsWalletConnected] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/60">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between gap-4 px-4">
        <Link href="/" className="flex items-center gap-2">
          <h1 className="text-lg font-bold text-primary">PolyCast</h1>
        </Link>

        <div className="relative hidden flex-1 max-w-md md:block">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input type="search" placeholder="Search markets..." className="w-full pl-9 h-9 bg-muted/50" />
        </div>

        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            size="sm"
            className="hidden gap-1.5 md:flex text-primary hover:scale-105 transition-transform"
          >
            <Info className="h-4 w-4" />
            How it works
          </Button>
          <Button variant="ghost" size="sm" className="hidden md:inline-flex hover:scale-105 transition-transform">
            Log In
          </Button>
          <Button
            size="sm"
            className="hidden md:inline-flex bg-primary hover:bg-primary/90 hover:scale-105 transition-transform"
          >
            Sign Up
          </Button>

          <Button
            size="sm"
            variant={isWalletConnected ? "default" : "outline"}
            className={`gap-2 hover:scale-105 transition-all ${
              isWalletConnected ? "bg-green-600 hover:bg-green-700" : ""
            }`}
            onClick={() => setIsWalletConnected(!isWalletConnected)}
          >
            <Wallet className="h-4 w-4" />
            <span className="hidden sm:inline">{isWalletConnected ? "Connected" : "Connect Wallet"}</span>
          </Button>

          <Button
            size="icon"
            variant="ghost"
            className="h-9 w-9 hover:scale-105 transition-transform"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
          <Button size="icon" variant="ghost" className="h-9 w-9 hover:scale-105 transition-transform">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  )
}
