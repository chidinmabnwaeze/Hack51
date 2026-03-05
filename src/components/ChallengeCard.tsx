import React from "react";

const ChallengeCard = () => {
  return (
    <div className="shadow border border-grey-200">
      <div className="relative">
        <div className="bg-[#FF0046] text-white p-2 rounded-lg w-2/12 flex justify-right">
          Selected
        </div>

        <h2 className="text-2xl font-bold mt-4">Senior Backend Engineer</h2>
        <p className="text-gray-600 mt-2">
          A brief description of the challenge goes here. It should be concise
          and informative.
        </p>
      </div>
      <div className=" gap-4 mt-4">
        <h1>Tests for</h1>
        <ul className="list-disc list-inside">
          <li>Data Structures and Algorithms</li>
          <li>System Design</li>
          <li>Database Design</li>
        </ul>
      </div>
    </div>
  );
};

export default ChallengeCard;
