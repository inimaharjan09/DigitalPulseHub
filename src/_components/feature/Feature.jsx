import Image from 'next/image';
import React from 'react';

const Feature = () => {
  return (
    <div className="px-12 py-5 bg-[#EFF6FF]">
      <div className="mt-3 flex flex-col items-center justify-center ">
        <h1 className="font-bold text-[40px] mt-5">Featured Marketing Tools</h1>
        <p className="text-[24px] text-[#4B5563] mt-2">
          Powerful tools to supercharge your digital marketing efforts
        </p>
      </div>
      <div className="grid grid-cols-4 gap-4 mt-5">
        <div
          className="shadow-[0_0_4px_0_#00000040]  rounded-[18px] flex flex-col items-center text-center p-6 bg-[#FFFFFF]"
          width={296}
          height={326}
        >
          <Image src="/Group1.svg" width={73} height={73} alt="group"></Image>
          <h1 className="font-semibold text-[20px] mt-5">Google Analytics</h1>
          <p className="text-[15px] text-[#64676B] mt-5">
            Track website performance and user behaviour with insights.
          </p>
          <button className="bg-[#DCFCE7] text-[#166534] rounded-[25px] px-4 py-2 mt-5">
            Free
          </button>
        </div>
        <div
          className="shadow-[0_0_4px_0_#00000040] rounded-[18px] flex flex-col items-center text-center p-6 bg-[#FFFFFF]"
          width={296}
          height={326}
        >
          <Image src="/Group2.svg" width={73} height={73} alt="group"></Image>
          <h1 className="font-semibold text-[20px] mt-5">Canva</h1>
          <p className="text-[15px] text-[#64676B] mt-5">
            Create stunning visual content for all your marketing campaigns.
          </p>
          <button className="bg-[#FEF9C3] text-[#854D0E] rounded-[25px] px-4 py-2 mt-5">
            Premium
          </button>
        </div>
        <div
          className="shadow-[0_0_4px_0_#00000040] rounded-[18px] flex flex-col items-center text-center p-6 bg-[#FFFFFF]"
          width={296}
          height={326}
        >
          <Image src="/Group3.svg" width={73} height={73} alt="group"></Image>
          <h1 className="font-semibold text-[20px] mt-5">Buffer</h1>
          <p className="text-[15px] text-[#64676B] mt-5">
            Schedule and manage your social media posts across platforms.
          </p>
          <button className="bg-[#FEF9C3] text-[#854D0E] rounded-[25px] px-4 py-2 mt-5">
            Premium
          </button>
        </div>
        <div
          className="shadow-[0_0_4px_0_#00000040] rounded-[18px] flex flex-col items-center text-center p-6 bg-[#FFFFFF]"
          width={296}
          height={326}
        >
          <Image src="/Group4.svg" width={73} height={73} alt="group"></Image>
          <h1 className="font-semibold text-[20px] mt-5">SEMrush</h1>
          <p className="text-[15px] text-[#64676B] mt-5">
            Comprehensive SEO and competitive analysis platform.
          </p>
          <button className="bg-[#FEE2E2] text-[#991B1B] rounded-[25px] px-4 py-2 mt-5">
            Paid
          </button>
        </div>
      </div>
    </div>
  );
};

export default Feature;
