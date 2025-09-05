import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import Skill from '@/components/Skill'
import React from 'react'

export default function Home() {
  return (
    <div className="min-h-screen  relative overflow-hidden ">
      <Navbar />
      <main className='min-h-screen text-white relative overflow-hidden pt-10 w-[83%] lg:w-[91%] mx-auto'>
        <Hero />
        <Skill />
      </main>
    </div>
  )
}
