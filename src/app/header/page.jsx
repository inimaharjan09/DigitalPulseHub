'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const HeaderPage = () => {
  return (
    <div className="px-12 py-5 bg-[#1E42B2]">
      <div className="grid grid-cols-2 gap-2">
        <div className="p-5">
          <h2 className="font-bold  text-white text-[40px]">
            Master Digital Marketing
            <br />
            with
            <span className="text-[#F59E0B] font-bold">
              <br />
              Trends & Tools
            </span>
          </h2>
          <p className="text-white mt-10 text-[24px]">
            Learn,Experiment & Grow in Digital Marketing with cutting-edge
            insights,practical guides,and hands-on resources from industry
            experts.
          </p>
          <Link href={`/join`}>
            <button className="text-white border-1 rounded-[10px] py-2 px-4 mt-10 hover:cursor-pointer">
              Join Community
            </button>
          </Link>
        </div>
        <div className="pt-10">
          <Image
            src="/image1.jpg"
            width={550}
            height={367}
            alt="image"
            className="rounded-[170px]"
          ></Image>
        </div>
      </div>
    </div>
  );
};

export default HeaderPage;
