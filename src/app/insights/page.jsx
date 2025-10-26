import React from 'react';

const InsightPage = () => {
  return (
    <div className="bg-[#072D2D] text-[#ffffff]">
      <div>
        <h3 className="text-[48px] font-semibold">
          Do More with the Simpler Workflow
        </h3>
        <p className="text-[24px]">
          Practical articles and curated tools to help you focus on work that
          matters.Learn contribute and find right utilities for your day-to-day.
        </p>
        <button className="rounded-[10px] ">Read more</button>
        <button className="rounded-[10px]">Write for us</button>
        <button className="rounded-[10px]">Explore Tools</button>
      </div>
      <div className="grid grid-cols-2">
        <div>
          <h4 className="text-[24px] font-semibold">Today's Feature</h4>
          <p className="text-[16px]">
            Great workflows reduce cognitive load and keep you focused.Small
            changes compound over time-templates,batching and thoughtful
            defaults.
          </p>
        </div>
        <div>
          <h2 className="text-[24px]">Recommended Reads</h2>
        </div>
      </div>
    </div>
  );
};

export default InsightPage;
