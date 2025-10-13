'use client';

import Link from 'next/link';
import React from 'react';

const Header = () => {
  const navitems = ['Home', 'About', 'Blog', 'Tools', 'Learn', 'Contact'];
  return (
    <nav className="">
      <div className="flex justify-between items-center px-25 py-5 gap-6">
        <Link href="/">
          <h4 className="text-[32px] font-semibold text-[#2563EB]">
            Digital Pulse Hub
          </h4>
        </Link>
        <div className="flex gap-10">
          {navitems.map((item, idx) => (
            <Link key={idx} href="/home" className="font-medium">
              {item}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Header;
