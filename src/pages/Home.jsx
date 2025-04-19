import React, { useState, useEffect } from 'react';
import Hero from '../components/common/home/Hero';
import Section2 from '../components/common/home/Section2';
import FAQSection from '../components/common/home/FaqSection';
import Footer from '../components/common/home/Footer';
import Preloader from '../components/common/base/Preloader';

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 6000);
  }, []);

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
