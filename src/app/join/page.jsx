import Footer1 from '@/_components/footer/Footer1';
import Navbar from '@/_components/navbar/Navbar';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
const card = [
  {
    icon: '/group.svg',
    name: 'Vibrant Community',
    note: 'Meet peers,ask questions and share insights.',
  },
  {
    icon: '/library.svg',
    name: 'Exclusive Resources',
    note: 'Access guides,templates and toolkits.',
  },
  {
    icon: '/star+.svg',
    name: 'Events & Workshops',
    note: 'Join live sessions and hands-on learning.',
  },
];

const JoinPage = () => {
  return (
    <>
      <div className="bg-[#EFF6FF]">
        <Navbar />
      </div>
      <div className="px-15 py-10 bg-[#EFF6FF]">
        <h1 className="text-[48px] font-semibold text-center mt-10">
          Join Our Digital Pulse Hub Community
        </h1>
        <p className="text-center text-[#4B5563] mt-5">
          Connect,Share and Grow with fellow digital marketing enthusiasts.
        </p>

        <div className="grid grid-cols-2 gap-5 mt-10">
          <div className="bg-[#ffffff] rounded-[18px] px-2 py-6 drop-shadow-[0_0_4px_#00000040]">
            <h1 className="text-[24px] font-semibold mb-5">Why Join?</h1>
            <div className="rounded-[18px] bg-[#E4E8ED] px-8 py-6 space-y-5">
              {card.map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <Image
                    src={item.icon}
                    width={28}
                    height={28}
                    alt={item.name}
                  />
                  <div>
                    <h3 className="font-semibold">{item.name}</h3>
                    <p className="text-[#4B5563]">{item.note}</p>
                  </div>
                </div>
              ))}
            </div>
            <Image
              src="/peoples.svg"
              width={193.41573533355182}
              height={218.6454098917048}
              alt="peoples"
            ></Image>
          </div>

          <div className=" bg-[#FFFFFF] rounded-[18px] px-2 py-6 drop-shadow-[0_0_4px_#00000040]">
            <h1 className="text-[24px] font-semibold mb-5">
              Create Your Account
            </h1>
            <form>
              <div>
                <label className="text-[12px] font-semibold">Full Name</label>
                <br />
                <input
                  type="text"
                  placeholder="John Doe"
                  className="border border-[#D9D9D9] rounded-[18px] w-full h-[35px] text-[#4B5563] px-3 mt-2"
                />
              </div>
              <div className="mt-5">
                <label className="text-[12px] font-semibold">
                  Email Address
                </label>
                <br />
                <input
                  type="email"
                  placeholder="johndoe@example.com"
                  className="border border-[#D9D9D9] rounded-[18px] w-full h-[35px] text-[#4B5563] px-3 mt-2"
                ></input>
              </div>
              <div className="grid grid-cols-2 gap-5 mt-5">
                <div>
                  <label className="text-[12px] font-semibold">Password</label>
                  <br />
                  <input
                    type="password"
                    placeholder="********"
                    className="border border-[#D9D9D9] rounded-[18px] w-[179px] h-[35px] text-[#4B5563] px-3 mt-2"
                  ></input>
                </div>

                <div>
                  <label className="text-[12px] font-semibold">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    placeholder="********"
                    className="border border-[#D9D9D9] rounded-[18px] w-[179px] h-[35px] text-[#4B5563] px-3 mt-2"
                  />
                </div>
              </div>
              <button type="submit" className="bg-[#fffff]"></button>
            </form>
            <p className="text-center text-[13px]">
              I agree to the <span className="text-[#F59E0B]">terms</span> and{' '}
              <span className="text-[#F59E0B]">privacy policy</span>
            </p>
            <div className=" flex justify-center mt-3">
              <button className="flex items-center gap-1 rounded-[18px] px-3 bg-[#FFC107] h-[39px]">
                <Image
                  src="/Group243.svg"
                  width={15}
                  height={11.666666984558105}
                  alt="group"
                ></Image>
                Create Account
              </button>
            </div>
            <p className="text-center text-[13px] mt-3">
              Already a member?
              <span className="text-[#FFC107]">
                <Link href={'/login'}>Login</Link>
              </span>
            </p>
          </div>
          <Footer1 />
        </div>
      </div>
    </>
  );
};

export default JoinPage;
