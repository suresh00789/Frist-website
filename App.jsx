import { useState } from 'react'
import Navbar from './components/Navbar.jsx'
import HeroSection from './components/HeroSection.jsx'
import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import ProductScetion from './components/ProductScetion.jsx';
import CatogorySection from './components/CatogorySection.jsx';
import SecondBanner from './components/SecondBanner.jsx';
import SmallBoxes from './components/SmallBoxes.jsx';
import ThridSection from './components/ThridSection.jsx';
import Marqee from './components/Marqee.jsx';
import  Footer from './components/Footer.jsx';



const App = function App() {

  return (
    <>
      <Navbar />
      <HeroSection />
      <ProductScetion />
       <CatogorySection />
       <SecondBanner />
       <SmallBoxes />
       <ThridSection />
       <Marqee />
       <Footer  />
    </>
  );
}




export default App