'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image 
                src="/logo.png" 
                alt="One Bowl Asian Cuisine" 
                width={100} 
                height={100} 
                className="h-50 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link href="#home" className="text-gray-900 hover:text-primary px-3 py-2 text-sm font-medium transition-colors">
                Home
              </Link>
              <Link href="#about" className="text-gray-900 hover:text-primary px-3 py-2 text-sm font-medium transition-colors">
                About
              </Link>
              <Link href="#menu" className="text-gray-900 hover:text-primary px-3 py-2 text-sm font-medium transition-colors">
                Menu
              </Link>
              <Link href="#contact" className="text-gray-900 hover:text-primary px-3 py-2 text-sm font-medium transition-colors">
                Contact
              </Link>
              <a 
                href="https://order.online/en/store/-24055085?hideModal=true&pickup=true&rwg_token=ACgRB3d1AypXdJirRuMbTj6yx97QBQzK8nsTUF0TqsBqlCWnqLEyH4UNA3Z331buqWzR34b6c7NgHt0c8GWvAtDKjoN8vmPJFQ%3D%3D&utm_source=gfo"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-red-700 transition-colors"
              >
                Order Now
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-900 hover:text-primary focus:outline-none focus:text-primary"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <Link href="#home" className="text-gray-900 hover:text-primary block px-3 py-2 text-base font-medium">
                Home
              </Link>
              <Link href="#about" className="text-gray-900 hover:text-primary block px-3 py-2 text-base font-medium">
                About
              </Link>
              <Link href="#menu" className="text-gray-900 hover:text-primary block px-3 py-2 text-base font-medium">
                Menu
              </Link>
              <Link href="#contact" className="text-gray-900 hover:text-primary block px-3 py-2 text-base font-medium">
                Contact
              </Link>
              <a 
                href="https://order.online/en/store/-24055085?hideModal=true&pickup=true&rwg_token=ACgRB3d1AypXdJirRuMbTj6yx97QBQzK8nsTUF0TqsBqlCWnqLEyH4UNA3Z331buqWzR34b6c7NgHt0c8GWvAtDKjoN8vmPJFQ%3D%3D&utm_source=gfo"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-white block px-3 py-2 text-base font-medium rounded-md mt-2 hover:bg-red-700 transition-colors"
              >
                Order Now
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
