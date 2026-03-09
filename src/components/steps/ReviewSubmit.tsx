import React from "react";

const ReviewSubmit = () => {
  return (
    <div className="bg-white p-8 rounded-xl shadow-md w-full mt-8 md:w-3/4 mx-auto">
      <h2 className="border-b border-b-gray-300 text-xl">Review & Submit</h2>
      <p className="mt-4">Review your request details and submit.</p>
      {/* Add review content here */}
      <div>
        <button className="bg-[#FF0046] hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg mt-6">
          Submit Request
        </button>
      </div>
    </div>
  );
};

export default ReviewSubmit;
