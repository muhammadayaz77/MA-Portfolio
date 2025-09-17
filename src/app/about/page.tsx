import AboutInfo from '@/components/About/aboutInfo'
import GithubHistory from '@/components/Home/GithubHistory'
import React from 'react'

export default function About() {
  return (
    <div className=' mx-3 sm:mx-10 md:mx-20'>
    <div className='max-w-7xl mx-auto'>
    <AboutInfo />
    <GithubHistory />
    </div>
    </div>
  )
}
