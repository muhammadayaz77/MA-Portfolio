import GithubHistory from '@/components/Home/GithubHistory'
import Hero from '@/components/Home/Hero'
import Projects from '@/components/Home/Projects/Projects'
import Skill from '@/components/Home/Skill'
import React from 'react'

export default function Home() {
  return (
    <div className="min-h-screen mx-3 sm:mx-10 md:mx-20 max-w-[100%]">
      <main className='min-h-screen text-white pt-10 mx-auto'>
        <Hero />
        <Skill />
        <Projects />
        <GithubHistory />
      </main>
    </div>
  )
}
