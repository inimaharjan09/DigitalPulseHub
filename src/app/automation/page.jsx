import Image from 'next/image';
import React from 'react';

const AutomationPage = () => {
  return (
    <div className="bg-[#F5F5F5]">
      {/* Header */}
      <header className="flex justify-between items-center p-6">
        <h1 className="font-bold text-[24px]">Marketing Guide</h1>
        <a href="#" className="text-[#2C40F1] hover:underline text-[24px]">
          Download
        </a>
      </header>
      <hr className="border-0 h-[1px] bg-[#ADAEBC]" />

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
      <div className="px-5 py-3">
        <div className="border-[1px] rounded-[18px] border-[#D9D9D9]">
          <div className="grid grid-cols-2 px-8 py-3 gap-5 items-center">
            <div className="grid grid-cols-4 border-[1px] h-[174px] w-[508px] border-[#D9D9D9] rounded-[18px] px-5 py-3">
              <div className="border-[1.25px] border-none rounded-[18px] h-[103px] w-[104px] bg-[#FFFFFF] px-5 py-3">
                <div className="flex justify-around gap-2">
                  <Image
                    src="/signup.svg"
                    width={10}
                    height={10.99189567565918}
                    alt="image"
                  />
                  <h4 className="text-[10px] font-semibold">Signup Trigger</h4>
                </div>
                <p className="text-[10px] text-[#4B5563]">User joins list</p>
              </div>

              <div className="border-[1.25px] border-none rounded-[18px] h-[103px] w-[104px] bg-[#FFFFFF] px-5 py-3">
                <div className="flex justify-around gap-2">
                  <Image
                    src="/email.svg"
                    width={10}
                    height={10.99189567565918}
                    alt="image"
                  />
                  <h4 className="text-[10px] font-semibold">Welcome Email</h4>
                </div>
                <p className="text-[10px] text-[#4B5563]">Sends in minutes</p>
              </div>

              <div className="border-[1.25px] border-none rounded-[18px] h-[103px] w-[104px] bg-[#FFFFFF] px-5 py-3">
                <div className="flex justify-around gap-2">
                  <Image
                    src="/time.svg"
                    width={10}
                    height={10.99189567565918}
                    alt="image"
                  />
                  <h4 className="text-[10px] font-semibold">Delay +1d</h4>
                </div>
                <p className="text-[10px] text-[#4B5563]">Drip 1:Value</p>
              </div>

              <div className="border-[1.25px] border-none rounded-[18px] h-[103px] w-[104px] bg-[#FFFFFF] px-5 py-3">
                <div className="flex justify-around gap-2">
                  <Image
                    src="/Group169.svg"
                    width={10}
                    height={10.99189567565918}
                    alt="image"
                  />
                  <h4 className="text-[10px] font-semibold">Brunch by Click</h4>
                </div>
                <p className="text-[10px] text-[#4B5563]">Segment paths</p>
              </div>
            </div>
            <div className="grid grid-rows-4">
              <div className="flex items-center gap-2 bg-[#CEE4FF] rounded-[18px] px-5 py-3">
                <Image
                  src="/Grou3p.svg"
                  width={15}
                  height={12.16021728515625}
                  alt="image"
                />
                <h3>Benchmarks</h3>
              </div>
              <div className="bg-[#E4E8ED] rounded-[18px] border border-[#D9D9D9] flex justify-between items-center px-4 py-3 mt-5">
                <h3 className="text-[12px] text-[#4B5563] font-semibold">
                  Typical Open Rate
                </h3>
                <p className="text-[12px] text-[#4B5563] font-semibold">
                  34-45%
                </p>
              </div>
              <div className="bg-[#E4E8ED] rounded-[18px] border border-[#D9D9D9] flex justify-between items-center px-4 py-3 mt-5">
                <h3 className="text-[12px] text-[#4B5563] font-semibold">
                  CTR on drips
                </h3>
                <p className="text-[12px] text-[#4B5563] font-semibold">5-8%</p>
              </div>
              <div className="bg-[#E4E8ED] rounded-[18px] border border-[#D9D9D9] flex justify-between items-center px-4 py-3 mt-5">
                <h3 className="text-[12px] text-[#4B5563] font-semibold">
                  Time to first email
                </h3>
                <p className="text-[12px] text-[#4B5563] font-semibold">
                  5 min
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Introduction */}
      <div className="px-5 py-3">
        <div className="px-10 py-5 bg-[#ffffff]">
          <h1 className="text-[40px] font-semibold mb-2">Introduction</h1>
          <p className="text-[24px] text-[#4B5563]">
            Email automation uses triggers and personalization to send the right
            message at the right time. It boosts engagement, open rates, and
            conversions while reducing manual work.
          </p>
        </div>
      </div>

      {/* Key Strategies */}
      <div className="px-5 py-3">
        <div className="px-10 py-5">
          <h1 className="text-[40px] font-semibold mb-6">Key Strategies</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border-[1px] rounded-[18px] border-[#D9D9D9] px-5 py-3">
              <h3 className="text-[24px] font-semibold">Welcome Emails</h3>
              <p className="text-[#4B5563] text-[16px]">
                Introduce your brand, set expectations, and offer a quick win or
                resource within minutes of signup.
              </p>
            </div>
            <div className="border-[1px] rounded-[18px] border-[#D9D9D9] px-5 py-3">
              <h3 className="text-[24px] font-semibold">Drip Campaigns</h3>
              <p className="text-[#4B5563] text-[16px]">
                Deliver sequenced educational content that nurtures leads based
                on time delays or user behavior.
              </p>
            </div>
            <div className="border-[1px] rounded-[18px] border-[#D9D9D9] px-5 py-3">
              <h3 className="text-[24px] font-semibold">Segmentation</h3>
              <p className="text-[#4B5563] text-[16px]">
                Group subscribers by lifecycle stage, interests, or actions to
                increase relevance and engagement.
              </p>
            </div>
            <div className="border-[1px] rounded-[18px] border-[#D9D9D9] px-5 py-3">
              <h3 className="text-[24px] font-semibold">Behavior Triggers</h3>
              <p className="text-[#4B5563] text-[16px]">
                Send targeted follow-ups after key actions such as product
                views, cart additions, or feature usage.
              </p>
            </div>
          </div>
        </div>
        {/* Call to Action */}
        <div className="flex flex-col md:flex-row bg-[#3B53E9] text-white mt-10 p-6 rounded-2xl items-center justify-between gap-4">
          <h3 className="text-[24px] font-semibold">
            Want to improve your Email Marketing?
          </h3>
          <div className="flex gap-4">
            <button className="flex items-center gap-2 border px-4 py-2 rounded-[18px]">
              <Image src="/talk.svg" width={20} height={20} alt="talk" />
              <span>Talk to an expert</span>
            </button>
            <button className="flex items-center gap-2 bg-white px-4 py-2 rounded-[18px] text-[#2C40F1] border border-[#2C40F1]">
              <Image src="/next1.svg" width={20} height={20} alt="next" />
              <span>Get the playbook</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AutomationPage;
