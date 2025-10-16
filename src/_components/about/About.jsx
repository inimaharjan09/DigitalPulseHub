import Image from 'next/image';
import React from 'react';

const About = () => {
  const point = [
    'Hands-on learning experiences',
    'Real-world case studies',
    'Community-driven content',
  ];
  return (
    <div className="px-12 py-5">
      <h1 className="font-bold text-[40px] mt-5">About Digital Pulse Hub</h1>
      <div className="grid grid-cols-2 gap-5">
        <div>
          <p className="mt-10 text-[20px] text-[#64676B]">
            Digital Pulse Hub is your ultimate learning space for digital
            marketing experimentation and SEO practice.We're a dynamic platform
            designed to bridge the gap between theory and real - world
            application.
          </p>
          <p className=" mt-4 text-[20px] text-[#64676B]">
            Run by Mindrisers' Digital Marketing Interns, our platform serves as
            a digital marketing playground where aspiring marketers can
            learn,experiment,and grow their skills in a supportive environment.
          </p>
          <ul className="text-[20px] text-[#64676B] mt-4">
            {point.map((item, idx) => (
              <li key={idx} className="flex gap-5 mt-3">
                <Image
                  src={'/point.svg'}
                  width={18}
                  height={18}
                  alt="group"
                ></Image>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-10">
          <Image src="/image7.png" width={562} height={375} alt="" />
        </div>
      </div>
    </div>
  );
};

export default About;
