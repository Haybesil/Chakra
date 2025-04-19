import React from 'react';
import Hero from '../components/common/home/Hero';
import Section2 from '../components/common/home/Section2';
import FAQSection from '../components/common/home/FaqSection';
import Footer from '../components/common/home/Footer';


export default function Home() {
  
  return (
    <>
      <div className="!mx-0 !px-0">
        <Hero />
        <Section2 />
        <FAQSection />
        <Footer />
      </div>
    </>
  );
}
