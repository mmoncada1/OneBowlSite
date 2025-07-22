'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 pt-16">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="Asian cuisine bowl with chopsticks"
          fill
          className="object-cover opacity-30"
          priority
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6">
          One Bowl
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-4 font-light">
          Authentic Asian Cuisine in Ann Arbor
        </p>
        <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Experience the finest flavors of Asia with our signature pho, ramen, Korean dishes, and traditional Chinese cuisine
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link 
            href="#menu"
            className="bg-primary hover:bg-red-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            View Our Menu
          </Link>
          <a 
            href="https://order.online/en/store/-24055085?hideModal=true&pickup=true&rwg_token=ACgRB3d1AypXdJirRuMbTj6yx97QBQzK8nsTUF0TqsBqlCWnqLEyH4UNA3Z331buqWzR34b6c7NgHt0c8GWvAtDKjoN8vmPJFQ%3D%3D&utm_source=gfo"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300"
          >
            Order Now via DoorDash
          </a>
        </div>

        {/* Location Info */}
        <div className="mt-12 text-gray-300">
          <p className="text-sm">📍 Ann Arbor Plaza, 1220 S University Ave #110, Ann Arbor, MI 48104</p>
          <p className="text-sm mt-1">🕐 Hours: 11:00 AM - 8:40 PM</p>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Link href="#about" className="text-white hover:text-primary transition-colors">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </Link>
      </div>
    </section>
  )
}
