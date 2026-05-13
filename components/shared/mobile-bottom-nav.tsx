"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"
import {
  Home,
  LayoutDashboard,
} from "lucide-react"
import { cn } from "@/lib/utils"

interface NavItem {
  href: string
  label: string
  icon: typeof Home
}

const navItems: NavItem[] = [
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/", label: "Home", icon: Home },
]

export function MobileBottomNav() {
  const pathname = usePathname()

  return (
    <nav
      className={cn(
        "fixed bottom-0 left-0 right-0 z-50 md:hidden",
        "border-t border-white/10 bg-gradient-to-t from-background/95 to-background/80 backdrop-blur-2xl",
      )}
    >
      <div className="flex items-center justify-around px-2 pb-safe-or-2 pt-2">
        {navItems.map((item) => {
          const isActive = pathname === item.href
          const Icon = item.icon

          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex flex-col items-center gap-1 rounded-xl px-3 py-1.5 transition-all duration-200",
                isActive
                  ? "text-purple-400"
                  : "text-muted-foreground hover:text-foreground",
              )}
            >
              <Icon className="h-5 w-5" />
              <span className="text-[10px] font-medium">{item.label}</span>
              {isActive && (
                <div className="h-1 w-6 rounded-full bg-gradient-to-r from-purple-400 to-pink-400" />
              )}
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
