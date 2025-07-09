import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

// Top navigation bar with logo and page links
export default function NavBar() {
  return (
    <nav className="flex justify-between items-center px-8 py-4">
      
      {/* Left side: ACMW logo linking to home */}
      <div className="flex items-center space-x-2">
        <Link href="/">
          <Image 
            src="/images/homepage/acmw-logo.jpg"
            width={64}
            height={64}
            alt="ACMW Logo"
            className="cursor-pointer"
          />
        </Link>
      </div>

      {/* Right side: Navigation links to new pages */}
      <ul className="flex space-x-8 text-maroon font-inter">
        {[
          { name: 'Home', href: '/' },
          { name: 'About', href: '/about' },
          { name: 'Team', href: '/team' },
          { name: 'Events', href: '/events' },
        ].map((link) => (
          <li key={link.name} className="relative group">
            <Link href={link.href} className="text-maroon">
              {link.name}
              <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-maroon transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>
        ))}
      </ul>

    </nav>
  )
}
