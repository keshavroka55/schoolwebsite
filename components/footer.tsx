import Link from "next/link"
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="w-full border-t bg-[#CAD8DE]/20 py-8">
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          <div className="space-y-4">
            <h3 className="text-lg font-medium" style={{ color: "#00F6ED" }}>
              NayaGhaun Gumi School
            </h3>
            <p className="text-sm text-gray-500">
              Empowering young minds through quality education, innovation, and values.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-500 hover:text-[#00F6ED]">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-gray-500 hover:text-[#00F6ED]">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-gray-500 hover:text-[#00F6ED]">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-500">
              <li>
                <Link href="/" className="hover:text-[#00F6ED]">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#00F6ED]">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/notices" className="hover:text-[#00F6ED]">
                  Notices
                </Link>
              </li>
              <li>
                <Link href="/routines" className="hover:text-[#00F6ED]">
                  Class Routines
                </Link>
              </li>
              <li>
                <Link href="/teachers" className="hover:text-[#00F6ED]">
                  Our Teachers
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-[#00F6ED]">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/contributors" className="hover:text-[#00F6ED]">
                  Contributors
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Contact</h3>
            <ul className="space-y-2 text-sm text-gray-500">
              <li className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-[#00F6ED]" />
                <span>NayaGhaun Gumi, Surkeht, Nepal</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-[#00F6ED]" />
                <span>9748313642</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-[#00F6ED]" />
                <span>info@gumischool.edu</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Gumi School. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
