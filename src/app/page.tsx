import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import Projects from '@/components/Projects/Projects'
import Skill from '@/components/Skill'
import React from 'react'

export default function Home() {
  return (
    <div className="min-h-screen mx-10 max-w-[100%]">
      <Navbar />
      <main className='min-h-screen text-white pt-10 mx-auto'>
        <Hero />
        <Skill />
        <Projects />
      </main>
    </div>
  )
}
