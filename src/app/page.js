'use client';
import HeaderPage from './header/page';
import LatestPage from './latest/page';
import React from 'react';
import UpdatePage from './updated/page';
import TransformPage from './transform/page';
import Footer from '@/_components/footer/Footer';
import Feature from '@/_components/feature/Feature';
import Navbar from '@/_components/navbar/Navbar';
import About from '@/_components/about/About';
import Learn from '@/_components/learn/Learn';

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
