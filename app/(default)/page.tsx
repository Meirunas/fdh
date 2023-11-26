export const metadata = {
  title: 'Frontend Dev Hub',
  description: 'Improving frontend skills',
}

import Hero from '@/components/hero'
import Features from '@/components/features'
import Newsletter from '@/components/newsletter'
import Zigzag from '@/components/zigzag'
import Testimonials from '@/components/testimonials'
import Head from 'next/head'

export default function Home() {
  return (
    <>

      <Hero />
      <Features />
      <Zigzag />
      <Testimonials />
      <Newsletter />
    </>
  )
}
