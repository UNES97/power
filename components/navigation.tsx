"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

const navigationItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Sports", href: "/sports" },
  { name: "Membership", href: "/membership" },
  { name: "Contact", href: "/contact" },
]

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const handleNavClick = () => {
    setIsMenuOpen(false)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm z-50 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-primary font-serif" onClick={handleNavClick}>
              Power
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={handleNavClick}
                  className={cn(
                    "text-foreground hover:text-primary transition-colors font-medium",
                    pathname === item.href && "text-primary",
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="hidden md:block">
            <Link href="/membership" onClick={handleNavClick}>
              <Button className="bg-primary hover:bg-secondary text-primary-foreground font-semibold">Join Now</Button>
            </Link>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-foreground hover:text-primary">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-t border-border">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "block px-3 py-2 text-foreground hover:text-primary font-medium",
                  pathname === item.href && "text-primary",
                )}
                onClick={handleNavClick}
              >
                {item.name}
              </Link>
            ))}
            <div className="px-3 py-2">
              <Link href="/membership" onClick={handleNavClick}>
                <Button className="w-full bg-primary hover:bg-secondary text-primary-foreground font-semibold">
                  Join Now
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
