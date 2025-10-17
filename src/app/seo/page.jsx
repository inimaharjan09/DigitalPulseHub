import Image from 'next/image';
import React from 'react';

const SEOPage = () => {
  return (
    <div className=" bg-[#F5F5F5]">
      <div className="px-15 py-10 grid grid-cols-2 gap-5">
        <div>
          <h1 className="text-[48px] font-semibold">
            Mastering SEO for Local Businesses
          </h1>
          <p className="text-[#4B5563] text-[24px]">
            Practical strategies to rank higher in local search,attract nearby
            customers and turn online traffic into in-store visits.
          </p>
          <div className="flex px-3 py-2 gap-3 mt-5">
            <span className="flex justify-center items-center gap-2 text-[11px]  rounded-[18px] px-2 bg-[#C6E8FF] ">
              <Image
                src="/calendar.svg"
                alt="calendar"
                width={11}
                height={10.453280448913574}
              />
              12 Aug,2025
            </span>
            <span className="text-[#64676B] text-[11px]">• 8 min read</span>
          </div>
          <span className="flex px-5 gap-2 text-[11px]">
            <Image src="/user.svg" alt="user" width={11} height={10.45} />
            By James
          </span>
        </div>
        <div className="">
          <Image src="/seo.svg" width={488} height={326} alt="seo" />
        </div>
      </div>
      <hr className="mt-3 border-[#D9D9D9]" />
      <div className="px-4 py-3 mt-5">
        <div className=" px-3 bg-[#FFFFFF]">
          <h3 className="font-semibold text-[40px]">Introduction</h3>
          <p className="mt-2 text-[#4B5563] text-[24px]">
            Local SEO helps nearby customers discover your business at the exact
            moment they're searching.This guide distills the essentials so you
            can implement quick wins and build a sustainable strategy for
            long-term visibility.
          </p>
        </div>
      </div>
      <div>
        <h1>Step-by-Step Optimization Guide</h1>
        <div className="grid grid-cols-2 grid-rows-3"></div>
      </div>
    </div>
  );
};

export default SEOPage;
