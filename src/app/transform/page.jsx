'use client';

import React from 'react';

const TransformPage = () => {
  return (
    <div className="px-25 py-15 mt-5">
      <div
        className="bg-[#1E42B2] justify-center items-center text-center p-6 rounded-[18px]"
        width={1240}
        height={310}
      >
        <h1 className="text-[40px] font-bold text-[#FFFFFF]">
          Ready to Transform Your Digital Marketing?
        </h1>
        <p className="text-[20px] text-[#FFFFFF] mt-5">
          Join thousands of marketers who are already using our resources to
          grow their businesses and advance their careers.
        </p>
        <div className="flex items-center justify-center p-10 mt-10 gap-5">
          <button className="rounded-[10px] px-5 py-3 bg-[#F59E0B]">
            Read more
          </button>
          <button className="border px-5 py-3 rounded-[10px] text-[#FFFFFF]">
            Write for us
          </button>
          <button className="border px-5 py-3 rounded-[10px] text-[#FFFFFF]">
            Explore Tools
          </button>
        </div>
      </div>
    </div>
  );
};

export default TransformPage;
