import React from 'react'
import Hero from '../components/common/home/Hero'
import Services from '../components/common/home/Services'
import Product from '../components/common/home/Product'
import Review from '../components/common/home/Review'
import Gift from '../components/common/home/Gift'
import Footer from '../components/common/home/Footer'

export default function Home() {
  return (
    <div className=''>
      <Hero/>
      <Services/>
      <Product/>
      <Review/>
      <Gift/>
      <Footer/>
    </div>
  )
}
