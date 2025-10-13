'use client';
import Feature from '@/_components/feature/Feature';
import Header from '@/_components/header/Header';
import Latest from '@/_components/latest/Latest';
import Navbar from '@/_components/navbar/Navbar';
import React from 'react';
import AboutPage from './about/page';
import LearnPage from './learn/page';
import UpdatePage from './updated/page';
import TransformPage from './transform/page';
import Footer from '@/_components/footer/Footer';

export default function Home() {
  return (
    <main>
      <Header />
      <Navbar />
      <Latest />
      <Feature />
      <AboutPage />
      <LearnPage />
      <UpdatePage />
      <TransformPage />
      <Footer />
    </main>
  );
}
