import React from 'react'
import Navbar from '../components/common/landing/Navbar'
import Hero from '../components/common/landing/Hero'
import Dashboard from '../components/common/landing/Dashboard'
import ChakraReleasing from '../components/common/landing/ChakraRelease'
import HowChakraWorks from '../components/common/landing/HowChakra'
import WhyChakra from '../components/common/landing/WhyChakra'
import FeatureSlider from '../components/common/landing/FeatureSliders'
import IntegrationSection from '../components/common/landing/IntegrationSection'
import Footer from '../components/common/landing/Footer'

export default function Landing() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Dashboard/>
      <ChakraReleasing/>
      <HowChakraWorks/>
      <WhyChakra/>
      <FeatureSlider/>
      <IntegrationSection/>
      <Footer/>
    </div>
  )
}
