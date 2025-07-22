'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import Menu from '@/components/Menu'
import About from '@/components/About'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <About />
      <Menu />
      <Contact />
      <Footer />
    </main>
  )
}
