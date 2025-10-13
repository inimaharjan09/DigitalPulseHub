'use client';
import Feature from '@/_components/feature/Feature';
import HeaderPage from './header/page';
import LatestPage from './latest/page';
import Navbar from '@/_components/navbar/Navbar';
import React from 'react';
import About from '@/_components/about/About';
import Learn from '@/_components/learn/Learn';
import UpdatePage from './updated/page';
import TransformPage from './transform/page';
import Footer from '@/_components/footer/Footer';

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeaderPage />
      <LatestPage />
      <Feature />
      <About />
      <Learn />
      <UpdatePage />
      <TransformPage />
      <Footer />
    </main>
  );
}
