import React from "react";

const FullStoryBtn = ({ value }) => {
  return (
    <>
      <div className="py-4">
        <button className="uppercase text-xs font-black border-2 border-primary w-full md:w-1/3 py-3 hover:bg-secondary hover:text-white transition ease duration-500 tracking-wider">
          {value}
        </button>
      </div>
    </>
  );
};

export default FullStoryBtn;
