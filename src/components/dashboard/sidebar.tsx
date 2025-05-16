"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { BarChart3, Calendar, CreditCard, Home, Settings, Users, HelpCircle } from "lucide-react"

const sidebarItems = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: Home,
  },
  {
    title: "Customers",
    href: "/dashboard/customers",
    icon: Users,
  },
  {
    title: "Scheduling",
    href: "/dashboard/scheduling",
    icon: Calendar,
  },
  {
    title: "Calendar",
    href: "/dashboard/calendar",
    icon: Calendar,
  },
  {
    title: "Billing",
    href: "/dashboard/billing",
    icon: CreditCard,
  },
  {
    title: "Reports",
    href: "/dashboard/reports",
    icon: BarChart3,
  },
  {
    title: "Settings",
    href: "/dashboard/settings",
    icon: Settings,
  },
  {
    title: "Help",
    href: "/dashboard/help",
    icon: HelpCircle,
  },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <div className="flex h-full w-[70px] flex-col border-r bg-background md:w-[240px]">
      <div className="flex flex-1 flex-col gap-2 p-2">
        {sidebarItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "flex h-12 items-center gap-3 rounded-2xl px-4 text-sm font-medium transition-all duration-200 ease-in-out",
              "hover:bg-gray-100 active:bg-gray-200 active:scale-[0.98]",
              pathname === item.href ? "bg-[#228B22]/10 text-[#228B22] shadow-sm" : "text-gray-600 hover:text-gray-900",
            )}
          >
            <item.icon
              className={cn("h-5 w-5 transition-colors", pathname === item.href ? "text-[#228B22]" : "text-gray-500")}
            />
            <span className="hidden md:inline-flex">{item.title}</span>
          </Link>
        ))}
      </div>
    </div>
  )
}
