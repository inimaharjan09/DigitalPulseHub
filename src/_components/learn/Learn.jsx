'use client';

import Image from 'next/image';
import React from 'react';

const pointData = [
  { icon: '/tick.svg', name: '20+ Video Lessons' },
  { icon: '/tick.svg', name: 'Practical Exercises' },
  { icon: '/tick.svg', name: 'Certificate of Completion' },
];

const pointData2 = [
  { icon: '/tick.svg', name: '40+ Video Lessons' },
  { icon: '/tick.svg', name: 'Real Case Studies' },
  { icon: '/tick.svg', name: '1-on-1 Mentoring' },
];
const Learn = () => {
  return (
    <div className="bg-[#EFF6FF] px-20 py-5 mt-5">
      {/* Header */}
      <div>
        <h1 className="text-[40px] font-bold text-center mt-10">
          Learn Digital Marketing
        </h1>
        <p className="text-[#64676B] text-[20px] text-center mt-5">
          Master essential skills with our comprehensive tutorials
        </p>
      </div>

      <div className="grid grid-cols-2 gap-5 mt-10" width={588} height={339}>
        <div className="bg-[#DBC4F5] rounded-[18px] text-center p-6 ">
          <div className="flex justify-center items-center gap-4">
            <Image src="/cap.svg" width={50} height={50} alt="cap" />
            <h3 className="text-[20px] font-semibold">Beginner Course</h3>
          </div>

          <p className="text-[#64676B] text-[18px] mt-10">
            Perfect for those starting their digital marketing journey. Learn
            the fundamentals and best practices.
          </p>

          <div className="flex flex-col px-10 gap-2 mt-4">
            {pointData.map((item, index) => (
              <div key={index} className="flex gap-2">
                <Image src={item.icon} width={15} height={15} alt={item.name} />
                <span className="text-[#64676B]">{item.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Advanced Course */}
        <div className="bg-[#D3D1F7] rounded-[18px] text-center p-6">
          <div className="flex justify-center items-center gap-4">
            <Image src="/star.svg" width={50} height={50} alt="star" />
            <h3 className="text-[20px] font-semibold">Advanced Course</h3>
          </div>

          <p className="text-[#64676B] text-[18px] mt-10">
            Take your skills to the next level with advanced strategies and
            cutting-edge techniques.
          </p>

          <div className="flex flex-col px-10 gap-2 mt-4">
            {pointData2.map((item, index) => (
              <div key={index} className="flex gap-2">
                <Image src={item.icon} width={15} height={15} alt={item.name} />
                <span className="text-[#64676B]">{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Learn;
