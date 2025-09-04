import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import React from 'react'

export default function Home() {
  return (
    <div className="min-h-screen  relative overflow-hidden ">
      <Navbar />
      <main className=''>
        <Hero />
      </main>
    </div>
  )
}
