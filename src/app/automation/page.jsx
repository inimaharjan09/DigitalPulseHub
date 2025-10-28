import Image from 'next/image';
import React from 'react';

const AutomationPage = () => {
  return (
    <div>
      {/* Header */}
      <header className="flex justify-between items-center p-6 border-b border-gray-200">
        <h1 className="font-semibold text-lg">Marketing Guide</h1>
        <a
          href="#"
          className="text-blue-600 hover:underline font-medium text-sm"
        >
          Download
        </a>
      </header>

      {/* Hero Section */}
      <div className="flex flex-col justify-center items-center text-center p-8 space-y-4">
        <h1 className="text-[48px] font-semibold">
          Email Marketing Automation Strategies
        </h1>
        <p className="text-[#4B5563] text-[24px] max-w-3xl">
          Automate your email campaigns to nurture leads and drive conversions
          more efficiently.
        </p>
        <Image src="/image10.svg" width={400} height={400} alt="image" />
      </div>

      {/* Workflow Steps */}
      <div className="px-6 pb-10">
        <div className="bg-gray-50 rounded-2xl p-6">
          <div className="flex flex-wrap justify-between gap-4 mb-6">
            {/* Step 1 */}
            <div className="bg-white rounded-xl p-4 border flex-1 min-w-[140px] text-center shadow-sm">
              <p className="font-medium text-sm">Signup Trigger</p>
              <p className="text-xs text-gray-500">User joins list</p>
            </div>
            {/* Step 2 */}
            <div className="bg-white rounded-xl p-4 border flex-1 min-w-[140px] text-center shadow-sm">
              <p className="font-medium text-sm">Welcome Email</p>
              <p className="text-xs text-gray-500">Sends in minutes</p>
            </div>
            {/* Step 3 */}
            <div className="bg-white rounded-xl p-4 border flex-1 min-w-[140px] text-center shadow-sm">
              <p className="font-medium text-sm">Delay +1d</p>
              <p className="text-xs text-gray-500">Drip follow-up</p>
            </div>
            {/* Step 4 */}
            <div className="bg-white rounded-xl p-4 border flex-1 min-w-[140px] text-center shadow-sm">
              <p className="font-medium text-sm">Branch by Click</p>
              <p className="text-xs text-gray-500">Segment paths</p>
            </div>
          </div>

          {/* Benchmarks Section */}
          <div className="bg-blue-50 rounded-xl p-4 border">
            <h3 className="font-semibold mb-3 flex items-center gap-2">
              <span className="text-blue-600">📊</span> Benchmarks
            </h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between border-b border-gray-200 pb-1">
                <p>Typical Open Rate</p>
                <p className="font-medium text-gray-700">34–48%</p>
              </div>
              <div className="flex justify-between border-b border-gray-200 pb-1">
                <p>CTR on drips</p>
                <p className="font-medium text-gray-700">5–8%</p>
              </div>
              <div className="flex justify-between">
                <p>Time to first email</p>
                <p className="font-medium text-gray-700">5 min</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Introduction */}
      <div className="px-6 py-10">
        <h1 className="text-[40px] font-semibold mb-2">Introduction</h1>
        <p className="text-[24px] text-[#4B5563]">
          Email automation uses triggers and personalization to send the right
          message at the right time. It boosts engagement, open rates, and
          conversions while reducing manual work.
        </p>
      </div>

      {/* Key Strategies */}
      <div className="px-6 pb-10">
        <h1 className="text-[40px] font-semibold mb-6">Key Strategies</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-[24px] font-semibold">Welcome Emails</h3>
            <p className="text-[#4B5563] text-[16px]">
              Introduce your brand, set expectations, and offer a quick win or
              resource within minutes of signup.
            </p>
          </div>
          <div>
            <h3 className="text-[24px] font-semibold">Drip Campaigns</h3>
            <p className="text-[#4B5563] text-[16px]">
              Deliver sequenced educational content that nurtures leads based on
              time delays or user behavior.
            </p>
          </div>
          <div>
            <h3 className="text-[24px] font-semibold">Segmentation</h3>
            <p className="text-[#4B5563] text-[16px]">
              Group subscribers by lifecycle stage, interests, or actions to
              increase relevance and engagement.
            </p>
          </div>
          <div>
            <h3 className="text-[24px] font-semibold">Behavior Triggers</h3>
            <p className="text-[#4B5563] text-[16px]">
              Send targeted follow-ups after key actions such as product views,
              cart additions, or feature usage.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="flex flex-col md:flex-row bg-[#3B53E9] text-white mt-10 p-6 rounded-2xl items-center justify-between gap-4">
          <h3 className="text-[24px] font-semibold">
            Want to improve your Email Marketing?
          </h3>
          <div className="flex gap-4">
            <button className="bg-white text-[#3B53E9] px-4 py-2 rounded-lg font-medium hover:bg-gray-100">
              Talk to an expert
            </button>
            <button className="bg-[#1E3AD1] px-4 py-2 rounded-lg font-medium hover:bg-[#172FA6]">
              Get the playbook
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AutomationPage;
