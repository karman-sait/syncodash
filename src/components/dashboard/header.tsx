"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Bell, Menu, Search, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { UserNav } from "@/components/dashboard/user-nav"
import { Sidebar } from "@/components/dashboard/sidebar"
import { useState } from "react"

export function Header() {
  const pathname = usePathname()
  const [searchOpen, setSearchOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle Menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-72 p-0">
          <Sidebar />
        </SheetContent>
      </Sheet>
      <Link href="/dashboard" className="flex items-center gap-2 md:gap-3">
        <div className="h-8 w-8 rounded-full bg-[#023020] flex items-center justify-center">
          <span className="text-white text-lg font-bold">S</span>
        </div>
        <span className="font-semibold text-lg hidden md:inline-flex">Synco</span>
      </Link>
      <div className={`relative ${searchOpen ? "flex flex-1" : "hidden md:flex md:flex-1"}`}>
        <Button
          variant="ghost"
          size="icon"
          className="absolute left-2.5 top-2.5 h-5 w-5 text-muted-foreground md:hidden"
          onClick={() => setSearchOpen(false)}
        >
          <X className="h-4 w-4" />
          <span className="sr-only">Close search</span>
        </Button>
        <div className="flex-1"></div>
      </div>
      <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setSearchOpen(true)}>
        <Search className="h-5 w-5" />
        <span className="sr-only">Search</span>
      </Button>
      <div className="flex items-center gap-2">
        <div className="relative hidden md:block">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input type="search" placeholder="Search..." className="w-[200px] pl-8" />
        </div>
        <Button variant="ghost" size="icon" aria-label="Notifications">
          <Bell className="h-5 w-5" />
        </Button>
        <UserNav />
      </div>
    </header>
  )
}
