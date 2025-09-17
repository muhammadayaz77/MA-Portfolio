import ProjectPage from '@/components/Home/Projects/Projects'
import React from 'react'

export default function Projects() {
  return (
    <div className='mb-10 mx-3 sm:mx-6 md:mx-10'>
    <div className='pt-28 max-w-7xl mx-auto'>
      <h1 className="relative inline-block text-3xl md:text-4xl font-bold text-white">
        Projects
        <span className="absolute left-0 -bottom-[5px] w-1/2 h-[3px] bg-blue-500 rounded-md"></span>
      </h1>
    </div>
    <ProjectPage />
    </div>
  )
}
