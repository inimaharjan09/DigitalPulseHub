'use client';

import React from 'react';

const UpdatePage = () => {
  return (
    <div className="bg-[#2563EB] justify-center items-center text-center p-6">
      <h1 className="font-bold text-[40px] text-[#FFFFFF]">Stay Updated</h1>
      <p className="text-[20px] text-[#FFFFFF] mt-5">
        Get the latest digital marketing insights delivered to your inbox
      </p>
      <div className="mt-5 px-25 py-15 flex items-center justify-center gap-10">
        <input
          type="email"
          placeholder="Enter your email"
          className="rounded-[10px] bg-[#D9D9D9] px-9 py-3"
        />
        <button
          className="bg-[#F59E0B] px-9 py-3 rounded-[10px] cursor-pointer"
          width={151}
          height={48}
        >
          Subcribe
        </button>
      </div>
    </div>
  );
};

export default UpdatePage;
