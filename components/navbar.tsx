"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl font-bold" style={{ color: "#00F6ED" }}>
            Gumi School
          </span>
        </Link>

        {/* Mobile menu button */}
        <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          <span className="sr-only">Toggle menu</span>
        </Button>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-sm font-medium hover:underline underline-offset-4">
            Home
          </Link>
          <Link href="/teachers" className="text-sm font-medium hover:underline underline-offset-4">
            Teachers
          </Link>
          <Link href="/notices" className="text-sm font-medium hover:underline underline-offset-4">
            Notices
          </Link>
          <Link href="/routines" className="text-sm font-medium hover:underline underline-offset-4">
            Class Routines
          </Link>
          <Link href="/gallery" className="text-sm font-medium hover:underline underline-offset-4">
            Gallery
          </Link>
          <Link href="/contributors" className="text-sm font-medium hover:underline underline-offset-4">
            Contributors
          </Link>
        </nav>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <div className="absolute top-16 left-0 w-full bg-background border-b md:hidden">
            <div className="container flex flex-col space-y-4 py-4">
              <Link
                href="/"
                className="text-sm font-medium hover:underline underline-offset-4"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/teachers"
                className="text-sm font-medium hover:underline underline-offset-4"
                onClick={() => setIsMenuOpen(false)}
              >
                Teachers
              </Link>
              <Link
                href="/notices"
                className="text-sm font-medium hover:underline underline-offset-4"
                onClick={() => setIsMenuOpen(false)}
              >
                Notices
              </Link>
              <Link
                href="/routines"
                className="text-sm font-medium hover:underline underline-offset-4"
                onClick={() => setIsMenuOpen(false)}
              >
                Class Routines
              </Link>
              <Link
                href="/gallery"
                className="text-sm font-medium hover:underline underline-offset-4"
                onClick={() => setIsMenuOpen(false)}
              >
                Gallery
              </Link>
              <Link
                href="/contributors"
                className="text-sm font-medium hover:underline underline-offset-4"
                onClick={() => setIsMenuOpen(false)}
              >
                Contributors
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
