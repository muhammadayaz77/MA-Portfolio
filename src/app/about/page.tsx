import AboutInfo from '@/components/About/aboutInfo'
import GithubHistory from '@/components/Home/GithubHistory'
import React from 'react'

export default function About() {
  return (
    <div className='mx-3 sm:mx-6 md:mx-10'>
    <div className='max-w-7xl mx-auto'>
    <AboutInfo />
    <GithubHistory />
    </div>
    </div>
  )
}
