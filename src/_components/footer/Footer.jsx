'use client';

import Image from 'next/image';
import React from 'react';

const Footer = () => {
  return (
    <div className="bg-[#1F2937] px-12 py-5">
      <div className="grid grid-cols-3 gap-10 ">
        <div>
          <h1 className="text-[36px] font-bold text-[#2563EB] text-center">
            Digital Pulse Hub
          </h1>
          <p className="text-[20px] text-[#FFFFFF]">
            Your ultimate destination for digital marketing learning
            experimentation and growth. Join our community of passionate
            marketers.
          </p>
          <div className="flex justify-center items-center gap-5 mt-5">
            <Image src="/fbicon.svg" width={38} height={38} alt="fb"></Image>
            <Image
              src="/twitter.svg"
              width={38}
              height={38}
              alt="twitter"
            ></Image>
            <Image
              src="/linklin.svg"
              width={38}
              height={38}
              alt="linkedin"
            ></Image>
            <Image
              src="/instagram.svg"
              width={38}
              height={38}
              alt="insta"
            ></Image>
          </div>
        </div>
        <div>
          <h2 className="text-[#FFFFFF] text-[24px] font-semibold mt-3">
            Quick links
          </h2>
          <ul className="text-[#FFFFFF]">
            <li>About Us</li>
            <li>Blog</li>
            <li>Case Studies</li>
            <li>Tools</li>
          </ul>
        </div>
        <div>
          <h2 className="text-[#FFFFFF] text-[24px] font-semibold mt-3">
            Resources
          </h2>
          <ul className="text-[#FFFFFF]">
            <li>SEO Guides</li>
            <li>Social Media</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
