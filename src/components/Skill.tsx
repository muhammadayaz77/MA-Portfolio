import { Laptop } from 'lucide-react'
import React from 'react'

export default function Skill() {
  return (
    <div className='grid grid-cols-12 max-w-6xl mx-auto'>
      <div className='col-span-6 border border-gray-500 border-dashed border-r-0'>
        <div className='p-6 border border-gray-500 border-dashed border-r-0 border-l-0 border-t-0'>
          <h2 className='text-2xl font-bold'>Technical Skills</h2>
          <p className='text-sm sm:text-base text-gray-400'>My expertise in various technologies and tools</p>
        </div>  
        <div className='p-6'>
          <div className='flex items-center gap-2'> 
        <Laptop className='text-gray-400' />
          <h2 className='text-2xl font-bold'>Programming Languages</h2>
          </div>
          <p className='text-sm sm:text-base text-gray-400'>My expertise in various technologies and tools</p>
        </div>
      </div>
      <div className='col-span-6 border border-gray-500 border-dashed p-6'>
      <div>
          <h2 className='text-2xl font-bold'>Professional Journey</h2>
          <p className='text-sm sm:text-base text-gray-400'>My work experience and educational background</p>
        </div>
      </div>
    </div>
  )
}
