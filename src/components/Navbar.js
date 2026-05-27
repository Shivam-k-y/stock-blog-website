"use client"
import { useState } from "react"
import Link from "next/link"

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const links = [
    { href: "/blog", label: "Blog", color: "hover:text-green-400" },
    { href: "/tools", label: "Tools", color: "hover:text-green-400" },
    { href: "/resources", label: "Resources", color: "hover:text-green-400" },
    { href: "/hire-me", label: "Hire Me", color: "hover:text-green-400" },
    { href: "/bundles", label: "Bundles", color: "hover:text-yellow-400" },
  ]

  return (
    <nav className="border-b border-gray-800 px-6 py-4">
      <div className="flex justify-between items-center">

        {/* Logo */}
        <Link href="/" className="text-green-400 font-bold text-lg">
          AlphaWithShivam
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-6 text-sm text-gray-400 items-center">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className={`${l.color} transition`}>
              {l.label}
            </Link>
          ))}
          
          <a
            href="https://www.youtube.com/@AlphaWithShivam"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-400 transition">
            YouTube
          </a>
        </div>

        {/* Hamburger Button — Mobile only */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-gray-400 hover:text-white transition"
          aria-label="Menu">
          {open ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden mt-4 flex flex-col gap-1 border-t border-gray-800 pt-4">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className={`text-gray-400 ${l.color} transition py-2 px-2 rounded-lg hover:bg-gray-900 text-sm`}>
              {l.label}
            </Link>
          ))}
          
          <a
            href="https://www.youtube.com/@AlphaWithShivam"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="text-gray-400 hover:text-red-400 transition py-2 px-2 rounded-lg hover:bg-gray-900 text-sm">
            YouTube
          </a>
        </div>
      )}
    </nav>
  )
}