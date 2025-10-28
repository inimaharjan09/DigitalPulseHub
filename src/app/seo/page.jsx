import Image from 'next/image';
import React from 'react';

const SEOPage = () => {
  return (
    <div className="bg-[#F5F5F5]">
      <div className="px-8 py-3 grid grid-cols-2 gap-5">
        <div>
          <h1 className="text-[48px] font-semibold">
            Mastering SEO for Local Businesses
          </h1>
          <p className="text-[#4B5563] text-[24px] mt-10">
            Practical strategies to rank higher in local search,attract nearby
            customers and turn online traffic into in-store visits.
          </p>
          <div className="flex px-3 py-2 gap-3 mt-15">
            <span className="flex justify-center items-center gap-2 text-[11px]  rounded-[18px] px-2 bg-[#C6E8FF] ">
              <Image
                src="/calendar.svg"
                alt="calendar"
                width={11}
                height={10.453280448913574}
              />
              12 Aug,2025
            </span>
            <span className="text-[#64676B] text-[11px]">• 8 min read</span>
          </div>
          <span className="flex px-5 gap-2 text-[11px]">
            <Image src="/user.svg" alt="user" width={11} height={10.45} />
            By James
          </span>
        </div>
        <div className="flex justify-center items-center mt-[50px]">
          <Image src="/seo.svg" width={488} height={326} alt="seo" />
        </div>
      </div>
      <hr className="mt-3 border-[#D9D9D9]" />
      <div className="px-4 py-3 mt-5">
        <div className=" px-3 bg-[#FFFFFF]">
          <h3 className="font-semibold text-[40px]">Introduction</h3>
          <p className="mt-2 text-[#4B5563] text-[24px]">
            Local SEO helps nearby customers discover your business at the exact
            moment they're searching.This guide distills the essentials so you
            can implement quick wins and build a sustainable strategy for
            long-term visibility.
          </p>
        </div>
      </div>
      <div className="px-4 py-3">
        <div className="px-3 bg-[#FFFFFF]">
          <h1 className="text-[40px] font-semibold">
            Step-by-Step Optimization Guide
          </h1>
          <div className="grid grid-cols-2 px-20 py-15 gap-5">
            <div className="bg-[#EFF6FF] rounded-[18px] p-5">
              <Image src="/location.svg" width={20} height={20} alt="check" />
              <h1 className="text-[20px] font-semibold">
                Optimize Google Business Profile
              </h1>
              <p className="text-[20px] text-[#4B5563]">
                Claim,verify and complete every field.Add
                categories,services,photos and accurate hours.
              </p>
            </div>
            <div className="bg-[#EFF6FF] rounded-[18px] p-5">
              <h1 className="text-[20px] font-semibold">
                Build Quality Reviews
              </h1>
              <p className="text-[20px] text-[#4B5563]">
                Request reviews after purchases and respond professionally to
                every review you receive.
              </p>
            </div>
            <div className="bg-[#EFF6FF] rounded-[18px] p-5">
              <h1 className="text-[20px] font-semibold">Local Citations</h1>
              <p className="text-[20px] text-[#4B5563]">
                Ensure consistent NAP(Name,Address,Phone)across directories and
                social profiles.
              </p>
            </div>
            <div className="bg-[#EFF6FF] rounded-[18px] p-5">
              <h1 className="text-[20px] font-semibold">Location Pages</h1>
              <p className="text-[20px] text-[#4B5563]">
                Create pages for each location with unique content,embedded map
                and driving directions.
              </p>
            </div>
            <div className="bg-[#EFF6FF] rounded-[18px] p-5">
              <h1 className="text-[20px] font-semibold">On-Page SEO</h1>
              <p className="text-[20px] text-[#4B5563]">
                Target local keywords in titles and Meta descriptions.Add schema
                for LocalBusinesses.
              </p>
            </div>
            <div className="bg-[#EFF6FF] rounded-[18px] p-5">
              <h1 className="text-[20px] font-semibold">Proximity Signals</h1>
              <p className="text-[20px] text-[#4B5563]">
                Embed a map,include neighbourhood terms and publish local events
                or community posts.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="px-4 py-3">
        <div className="bg-[#FFFFFF] px-3">
          <h1 className="text-[40px] font-semibold">Tools & Resources</h1>
          <div className="grid grid-cols-2 px-20 py-15 gap-5">
            <div className="bg-[#EFF6FF] rounded-[18px] p-5">
              <h1 className="text-[20px] font-semibold">Google Analytics</h1>
              <p className="tex-[20px] text-[#4B5563]">
                Measure traffic,conversions,and local landing page performance.
              </p>
            </div>
            <div className="bg-[#EFF6FF] rounded-[18px] p-5">
              <h1 className="text-[20px] font-semibold">
                Google Search Console
              </h1>
              <p className="tex-[20px] text-[#4B5563]">
                Track queries,impressions,and fix index coverage for local
                pages.
              </p>
            </div>
            <div className="bg-[#EFF6FF] rounded-[18px] p-5">
              <h1 className="text-[20px] font-semibold">
                Google Business Profile
              </h1>
              <p className="tex-[20px] text-[#4B5563]">
                Manage your listing,posts,reviews and Q&A from one dashboard.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="px-4 py-3">
        <div className="bg-[#ffffff] p-5">
          <h1 className="text-[40px] font-semibold">
            Conclusion & Key Takeaways
          </h1>
          <ul>
            <li>
              Complete and maintain your Google Business Profile to win map pack
              visibility.
            </li>
            <li>
              Consistency of NAP and reviews directly influences local rankings
              and trust.
            </li>
            <li>
              Publish localized content and events to strengthen proximity and
              relevance.
            </li>
            <li>
              Measure results with Analytics and Search Console, then iterate
              monthly.
            </li>
          </ul>
        </div>
      </div>
      <div className="px-4 py-3">
        <div className="bg-[#ffffff] p-5">
          <h1 className="text-[40px] font-semibold">
            Want to grow your business with SEO?
          </h1>
          <p className="text-[#4B5563]">Get Free SEO Guide</p>
          <div className="flex justify-end gap-3">
            <button className="flex items-center gap-2 bg-[#3B53E9] rounded-[18px] px-6 py-2 text-white">
              <Image
                src="/download.svg"
                width={20}
                height={20}
                alt="download"
              />
              <span>Download Now</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SEOPage;
