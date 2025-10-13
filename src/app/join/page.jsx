import Image from 'next/image';
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
    <div className="px-15 py-10 bg-[#EFF6FF]">
      <div className="">
        <h1 className="text-[48px] font-semibold text-center mt-10">
          Join Our Digital Pulse Hub Community
        </h1>
        <p className="text-center text-[#4B5563] mt-5">
          Connect,Share and Grow with fellow digital marketing enthusiasts.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-5 mt-10">
        <card className="bg-white rounded-[18px] px-8 py-6 shadow shadow-[#00000040]">
          <h1 className="text-[24px] font-semibold mb-5">Why Join?</h1>
          <div className="rounded-[18px] bg-[#E4E8ED] px-8 py-6 space-y-5">
            {card.map((item, index) => (
              <div key={index} className="flex items-start gap-4">
                <Image
                  src={item.icon}
                  width={28}
                  height={28}
                  alt={item.name}
                  className="flex"
                />
                <div>
                  <h3 className="font-semibold">{item.name}</h3>
                  <p className="text-[#4B5563] text-sm">{item.note}</p>
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
        </card>

        <card className=" bg-[#FFFFFF] rounded-[18px] px-3 py-1 shadow shadow-[#00000040]">
          <h1 className="text-[24px] font-semibold">Create Your Account</h1>
          <form>
            <label>Full Name</label>
            <input type="text" placeholder="John Doe" />
          </form>
        </card>
      </div>
    </div>
  );
};

export default JoinPage;
