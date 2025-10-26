import Image from 'next/image';
import React from 'react';

const AutomationPage = () => {
  return (
    <div>
      <nav></nav>
      <div className="justify-center items-center">
        <h1 className="text-[48px] font-semibold">
          Email Marketing Automation Strategies
        </h1>
        <p className="text-[#4B5563] text-[24px]">
          Automate your email campaigns to nurture leads and drive conversions
          more efficiently.
        </p>
        <Image src="/image10.svg" width={400} height={400} alt="image" />
      </div>
      <div>
        <h1 className="text-[40px] font-semibold">Introduction</h1>
        <p className="text-[24px] text-[#4B5563]">
          Email automation uses triggers and personalization to send the right
          message at the right time. It boosts engagement, open rates, and
          conversions while reducing manual work.
        </p>
      </div>
      <div>
        <h1 className="text-[40px] font-semibold">Key Strategies</h1>
        <div className="grid grid-cols-2">
          <div>
            <h3 className="text-[24px] font-semibold">Welcome Emails</h3>
            <p className="text-[#4B5563] text-[16px]">
              Introduce your brand,set expectations and offer a quick win or
              resource within minutes of signup.
            </p>
          </div>
          <div>
            {' '}
            <h3 className="text-[24px] font-semibold">Drip Campaigns</h3>
            <p className="text-[#4B5563] text-[16px]">
              Deliver sequenced educational content that nurtures leads based on
              time delays or user behavior.
            </p>
          </div>
          <div>
            <h3 className="text-[24px] font-semibold">Segmentation</h3>
            <p className="text-[#4B5563] text-[16px]">
              Group subscribers by lifecycle stage,interests, or actions to
              increase relevance and engagement.
            </p>
          </div>
          <div>
            <h3 className="text-[24px] font-semibold">Behavior Triggers</h3>
            <p className="text-[#4B5563] text-[16px]">
              Send targeted follow-ups after key actions such as product
              views,cart additions,or feature usage.
            </p>
          </div>
        </div>
        <div className="flex bg-[#3B53E9] text-[#ffffff]">
          <h3 className="text-[24px] font-semibold">
            Want to improve your Email Marketing?
          </h3>
          <button>Talk to an expert</button>
          <button>Get the playbook</button>
        </div>
      </div>
    </div>
  );
};

export default AutomationPage;
