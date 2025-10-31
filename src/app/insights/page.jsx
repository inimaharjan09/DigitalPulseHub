import Image from 'next/image';
import React from 'react';

const recommended = [
  {
    icon: '/planning.svg',
    heading: 'Planning With Intent',
    content: 'Systems to reduce chaos',
  },
  {
    icon: '/24hour.svg',
    heading: 'Time Blocking',
    content: 'Make room for deep work',
  },
  {
    icon: '/Group205.svg',
    heading: 'Your 30-60-90 Plan',
    content: 'Set the ground running',
  },
];

const InsightPage = () => {
  return (
    <div className="bg-[#072D2D] text-[#ffffff] min-h-screen">
      {/* Navbar */}
      <nav className="px-6 py-3">
        <h1 className="text-[24px] font-bold">Insights</h1>
      </nav>
      <hr />

      {/* Header Section */}
      <div className="text-center mt-10 px-8">
        <h4 className="text-[24px] font-bold mb-2">Guides · Tools · Ideas</h4>
        <h3 className="text-[48px] font-semibold mb-6">
          Do More with the Simpler Workflow
        </h3>
        <p className="text-[20px] text-gray-200 leading-relaxed max-w-4xl mx-auto">
          Practical articles and curated tools to help you focus on work that
          matters. Learn, contribute, and find the right utilities for your
          day-to-day.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4 justify-center mt-10 mb-12">
          <button className="border border-white/50 rounded-[10px] px-6 py-2 hover:bg-white hover:text-black transition-all">
            Read more
          </button>
          <button className="border border-white/50 rounded-[10px] px-6 py-2 hover:bg-white hover:text-black transition-all">
            Write for us
          </button>
          <button className="border border-white/50 rounded-[10px] px-6 py-2 hover:bg-white hover:text-black transition-all">
            Explore Tools
          </button>
        </div>
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-8 pb-16">
        {/* Today's Feature */}
        <div className="border border-[#ADAEBC] rounded-[18px] p-10">
          <h4 className="text-[24px] font-semibold mb-2">Today's Feature</h4>
          <p className="text-[16px] text-gray-300 leading-relaxed">
            Great workflows reduce cognitive load and keep you focused. Small
            changes compound over time — templates, batching, and thoughtful
            defaults.
          </p>

          {/* Button Group */}
          <div className="flex items-center justify-center border border-[#ADAEBC] rounded-[18px] w-[459px] h-[86px] gap-4 mt-6 p-4">
            {/* Template Kits */}
            <button className="flex items-center gap-2 bg-black text-white font-semibold rounded-[18px] px-5 py-3">
              <Image
                src="/template.svg"
                width={10}
                height={10}
                alt="Template Kits Icon"
              />
              <span className="text-[10px] font-semibold">Template Kits</span>
            </button>

            {/* Batch Planner */}
            <button className="flex items-center gap-2 bg-black text-white font-semibold rounded-[18px] px-5 py-3">
              <Image
                src="/batch.svg"
                width={10}
                height={10}
                alt="Batch Planner Icon"
              />
              <span className="text-[10px] font-semibold">Batch Planner</span>
            </button>

            {/* Focus Mode */}
            <button className="flex items-center gap-2 bg-black text-white font-semibold rounded-[18px] px-5 py-3">
              <Image
                src="/focus.svg"
                width={10}
                height={10}
                alt="Focus Mode Icon"
              />
              <span className="text-[10px] font-semibold">Focus Mode</span>
            </button>
          </div>
        </div>

        {/* Recommended Reads */}
        <div className="border border-[#ADAEBC] rounded-[18px] p-10">
          <h2 className="text-[24px] font-semibold mb-4">Recommended Reads</h2>
          <div>
            {recommended.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-20 border-none bg-[#000000] rounded-[18px] mt-3 px-2 w-[510] h-[53px]"
              >
                <div className="flex items-center justify-center rounded-[18px] ">
                  <Image
                    src={item.icon}
                    alt={item.heading}
                    width={38}
                    height={34}
                  />
                </div>
                <div>
                  <p className="font-semibold text-[12px]">{item.heading}</p>
                  <p className="font-semibold text-[#64676B] text-[12px]">
                    {item.content}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InsightPage;
