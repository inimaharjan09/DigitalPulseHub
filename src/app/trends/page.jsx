import Image from 'next/image';
import React from 'react';
const trend = [
  {
    icon: '/79.svg',
    heading: 'Short-Form Videos',
    content:
      'Bite-sized vertical clips dominate attention, driving discovery and repeat engagement across platforms.',
  },
  {
    icon: '/81.svg',
    heading: 'Influencer Collaborations',
    content:
      'Brands team up with niche creators for authentic storytelling and measurable conversions.',
  },
];
const trends = [
  {
    icons: '/80.svg',
    title: 'Social Commerce',
    paragraph:
      'Seamless in-app shopping experiences reduce friction from discovery to checkout.',
  },
];

const TrendsPage = () => {
  return (
    <div className="bg-[#F5F5F5]">
      {/* Header */}
      <header className="flex justify-between items-center p-6">
        <h1 className="font-bold text-[24px]">Trendscope</h1>
        <nav className="space-x-6 text-[24px]">
          <a href="#" className="hover:text-blue-600">
            Articles
          </a>
          <a href="#" className="hover:text-blue-600">
            Guides
          </a>
          <a href="#" className="hover:text-blue-600">
            Newsletter
          </a>
        </nav>
      </header>
      <hr className="border-0 h-[1px] bg-[#ADAEBC]" />

      {/* Hero Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
        <div>
          <h2 className="text-[48px] md:text-5xl font-semibold mb-6">
            Social Media Trends You Can't Ignore
          </h2>
          <p className="text-[24px] text-[#4B5563]">
            Stay ahead with concise insights on social trends—from short-form
            videos to creator-led commerce—and learn how they boost your brand's
            reach and engagement.
          </p>
        </div>

        <div className="border-[1px] border-[#ADAEBC] rounded-[30px] p-6">
          <h3 className="text-[24px] border-[1px] border-[#ADAEBC] rounded-[30px] px-4 py-2 mb-4">
            Trending Now
          </h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="border-[1px] rounded-[30px] border-[#ADAEBC] h-[198px] w-[263px] p-4">
              <div className="border-[1px] rounded-[30px] border-[#ADAEBC] h-[93px] w-[227px] flex justify-center items-center">
                <span className="bg-[#D9E8FB] px-2 py-[2px] rounded-[18px] text-[9px] w-[81px] inline-flex justify-center items-center">
                  Short Clips
                </span>
              </div>

              <p className="text-[12px] font-semibold mt-5">
                Short-Form Videos
              </p>
              <p className="text-[12px] text-[#ADAEBC]">+24% Watch Time</p>
            </div>

            <div className="border-[1px] border-[#ADAEBC] rounded-[30px] h-[198px] w-[263px] p-4">
              <div className="border-[1px] border-[#ADAEBC] rounded-[30px] h-[93px] w-[227px] flex justify-center items-center">
                <span className="bg-[#D9E8FB] px-2 py-[2px] rounded-[18px] text-[9px] w-[81px] inline-flex justify-center items-center">
                  Collab
                </span>
              </div>

              <p className="text-[12px] font-semibold mt-5">
                Influencer Collabs
              </p>
              <p className="text-[12px] text-[#ADAEBC]">CTR 1.8x</p>
            </div>
          </div>
        </div>
      </div>
      <hr className="my-8" />

      {/* Introduction */}
      <div className="px-8 mb-10 ">
        <div className="bg-[#FFFFFF] px-3">
          <h1 className="text-[40px] font-semibold mb-3">Introduction</h1>
          <p className="text-[#4B5563] text-[18px]">
            Social Media evolves at breakneck speed. Understanding the most
            impactful shifts helps teams plan smarter content, partnerships, and
            campaigns. Below we outline the key movements redefining how
            audiences discover, engage, and buy.
          </p>
        </div>
      </div>

      {/* Top Trends */}
      <div className="mb-10">
        <h1 className="text-[40px] font-semibold px-5 mb-6">Top Trends</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 px-2 gap-6">
          {trend.map((item, index) => (
            <div
              key={index}
              className="border-[1px] border-[#D9D9D9] rounded-[18px] px-3 bg-[#EFF6FF] p-5 flex gap-10 items-start"
            >
              <div className="flex items-center justify-center">
                <Image
                  src={item.icon}
                  alt={item.heading}
                  width={30}
                  height={54}
                />
              </div>
              <div className="flex-1">
                <h2 className="text-[24px] font-semibold text-center">
                  {item.heading}
                </h2>
                <p className="text-[16px] text-[#4B5563]">{item.content}</p>
              </div>
            </div>
          ))}

          {trends.map((item, index) => (
            <div
              key={index}
              className="md:col-span-2 border-[1px] border-[#D9D9D9] rounded-[18px] px-3 bg-[#EFF6FF] flex gap-10 items-start p-5"
            >
              <div className="flex items-center justify-center">
                <Image
                  src={item.icons}
                  alt={item.title}
                  width={55}
                  height={51}
                />
              </div>
              <div className="flex-1">
                <h2 className="text-[24px] font-semibold text-center">
                  {item.title}
                </h2>
                <p className="text-[16px] text-[#4B5563]">{item.paragraph}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="text-center p-10 bg-[#FFFFFF] rounded-[18px] mx-8">
        <h1 className="text-[32px] font-semibold mb-4">
          Want more social media insights?
        </h1>
        <button className="bg-[#3B53E9] hover:bg-blue-700 text-white rounded-[18px] px-6 py-2">
          Subscribe for updates
        </button>
      </div>

      {/* Related Articles */}
      <div className="p-8">
        <h1 className="text-[40px] font-semibold mb-4">Related Articles</h1>
        <div className="border border-gray-300 rounded-[18px] p-4 flex justify-between items-center mt-10">
          <span className="font-semibold text-[24px]">
            How to Build a Creator-Led Launch Plan
          </span>
          <span className="text-[#ADAEBC] text-[16px]">7 min read</span>
        </div>

        <div className="border border-gray-300 rounded-[18px] p-4 flex justify-between items-center mt-10">
          <span className="font-semibold text-[24px]">
            Optimizing Short-Form Clips for Retention
          </span>
          <span className="text-[#ADAEBC] text-[16px]">5 min read</span>
        </div>

        <div className="border border-gray-300 rounded-[18px] p-4 flex justify-between items-center mt-10">
          <span className="font-semibold text-[24px]">
            Turning Views into Sales In-App Shops
          </span>
          <span className="text-[#ADAEBC] text-[16px]">6 min read</span>
        </div>
      </div>
    </div>
  );
};

export default TrendsPage;
