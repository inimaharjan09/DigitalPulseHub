'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const LatestPage = () => {
  return (
    <div className="px-12 py-5">
      <div className="mt-5 text-center">
        <h1 className="font-bold text-[40px]">Latest Insights</h1>
        <p className="mt-3 text-[24px] text-[#4B5563]">
          Stay ahead with our latest digital marketing trends and strategies
        </p>
      </div>
      <div className="grid grid-cols-3 gap-5 px-5 py-5 mt-3">
        <card className="shadow-[0_0_4px_0_#00000040] rounded-[18px] flex flex-col items-center text-center p-6">
          <Image
            src="/image2.png"
            alt="Latest image"
            width={259}
            height={199}
          />
          <h2 className="mt-8 font-semibold">
            Mastering SEO for Local Businesses
          </h2>
          <p className="mt-5 text-[#64676B] p-5">
            A comprehensive guide to optimizing your local SEO strategy to
            attract more customers in your area.
          </p>
          <Link href={'/'}>
            <button className="mt-5 px-4 py-2 text-[#2C40F1] flex gap-1 hover:cursor-pointer">
              Read more
              <Image src="/Vector.svg" alt="vector" width={20} height={20} />
            </button>
          </Link>
        </card>
        <card className="shadow-[0_0_4px_0_#00000040] rounded-[18px] flex flex-col items-center text-center p-6">
          <Image
            src="/image3.png"
            alt="Latest image"
            width={259}
            height={199}
          />
          <h2 className="mt-8 font-semibold">
            Social Media Trends You Can't Ignore
          </h2>
          <p className="mt-5 text-[#64676B] p-5">
            Stay ahead of the curve with the most impactful social media trends
            shaping the digital landscape.
          </p>
          <Link href={'/'}>
            <button className="mt-5 px-4 py-2 text-[#2C40F1] flex gap-1 hover:cursor-pointer">
              Read more
              <Image src="/Vector.svg" width={20} height={20} alt="vector" />
            </button>
          </Link>
        </card>
        <card className="shadow-[0_0_4px_0_#00000040] rounded-[18px] flex flex-col items-center text-center p-6">
          <Image
            src="/image6.png"
            alt="Latest image"
            width={259}
            height={199}
          />
          <h2 className="mt-8 font-semibold">
            Email Marketing Automation Strategies
          </h2>
          <p className="mt-5 text-[#64676B] p-5">
            Automate your email campaigns to nurture leads and drive conversions
            more efficiently.
          </p>
          <Link href={`/`}>
            <button className="mt-5 px-4 py-2 text-[#2C40F1] flex gap-1 hover:cursor-pointer">
              Read more
              <Image src="/Vector.svg" width={20} height={20} alt="vector" />
            </button>
          </Link>
        </card>
      </div>
    </div>
  );
};

export default LatestPage;
