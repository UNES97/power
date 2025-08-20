import Link from "next/link"
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold font-serif text-primary mb-4">Power</h3>
            <p className="text-muted-foreground mb-4">Transform your life through fitness. Join our community today.</p>
            <div className="flex space-x-4">
              <Facebook className="w-5 h-5 text-primary hover:text-secondary cursor-pointer transition-colors" />
              <Instagram className="w-5 h-5 text-primary hover:text-secondary cursor-pointer transition-colors" />
              <Twitter className="w-5 h-5 text-primary hover:text-secondary cursor-pointer transition-colors" />
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/sports" className="text-muted-foreground hover:text-primary transition-colors">
                  Sports
                </Link>
              </li>
              <li>
                <Link href="/membership" className="text-muted-foreground hover:text-primary transition-colors">
                  Membership
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold text-foreground mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/sports" className="text-muted-foreground hover:text-primary transition-colors">
                  Sports Facilities
                </Link>
              </li>
              <li>
                <Link href="/membership" className="text-muted-foreground hover:text-primary transition-colors">
                  Membership Plans
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Nutrition Coaching
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Fitness Assessment
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold text-foreground mb-4">Contact Info</h4>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-primary" />
                <span>123 Fitness Street, Gym City, GC 12345</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-primary" />
                <span>(555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-primary" />
                <span>info@power.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground">© 2024 Power. All rights reserved. Built with passion for fitness.</p>
        </div>
      </div>
    </footer>
  )
}
