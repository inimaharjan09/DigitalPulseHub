import React from 'react';

const TrendsPage = () => {
  return (
    <div>
      <nav></nav>
      <div className="grid grid-cols-2">
        <div>
          <h1 className="text-[48px] font-semibold">
            Socail Media Trends You Can't Ignore
          </h1>
          <p className="text-[24px] text-[#4B5563]">
            Stay ahead with concise insights on social trends—from short-form
            videos to creator-led commerce—and learn how they boost your brand's
            reach and engagement.
          </p>
        </div>
        <div></div>
      </div>
      <hr />
      <div>
        <div>
          <h1 className="text-[40px] font-semibold">Introduction</h1>
          <p className="text-[#4B5563] text-[24px]">
            Social Media evolves at breakneck speed.Understanding the most
            impactful shifts helps teams plan smarter content,partnerships and
            campaigns.Below we outline the key movements redefining how
            audiences discover,engage and buy.
          </p>
        </div>
      </div>
      <div>
        <h1 className="text-[40px] font-semibold">Top Trends</h1>
        <div className="grid grid-cols-2">
          <div>
            <h1 className="text-[24px] font-semibold">Short-Form Videos</h1>
            <p className="text-[16px] text-[#4B5563]">
              Bite-sized vertical clips dominate attention,driving discovery and
              repeat engagement across platforms.
            </p>
          </div>
          <div>
            <h1 className="text-[24px] font-semibold">
              Influencer Collaborations
            </h1>
            <p className="text-[16px] text-[#4B5563]">
              Brand team up with niche creators for authentic storytelling and
              measurable conversions.
            </p>
          </div>
          <div>
            <h1 className="text-[24px] font-semibold">Social Commerce</h1>
            <p className="text-[16px] text-[#4B5563]">
              Seamless in app shopping experiences reduce friction from
              discovery to checkout.
            </p>
          </div>
        </div>
      </div>
      <div>
        <h1 className="text-center text-[40px] font-semibold">
          Want more social media insights?
        </h1>
        <button className="bg-[#3B53E9] rounded-[18px]">
          Subscribe for updates
        </button>
      </div>
      <div>
        <h1 className="text-[40px] font-semibold">Related Articles</h1>
        <h2 className="text-[24px] font-semibold">
          How to Build a Creator-Led Launch Plan
        </h2>
        <h2 className="text-[24px] font-semibold">
          Optimizing Short-Form clips for Retention
        </h2>
        <h2 className="text-[24px] font-semibold">
          Turning Views into Sales In-App Shops
        </h2>
      </div>
    </div>
  );
};

export default TrendsPage;
