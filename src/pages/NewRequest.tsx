import React from "react";
import { useNavigate } from "react-router-dom";

const NewRequest = () => {
  const navigate = useNavigate();

  return (
    <div className="">
      <span
        onClick={() => navigate("/requests")}
        className="cursor-pointer hover:text-red-700 my-5 text-sm text-gray-500"
      >
        Back to requests
      </span>
      <section className="flex justify-between">
        <div>
          <h1 className="text-2xl font-bold mb-4">New Request</h1>
          <p className="text-gray-600 mb-6">
            Create a new hiring request to find the best candidates for your
            team.
          </p>
        </div>
        <button className="bg-[#FF0046] hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
          Create Custom Request
        </button>
      </section>
      {/* create a progress indicator for the steps of creating a new request, with
      the current step highlighted */}
      <section className=" indicators mt-6">
        <div className="bg-gray-100">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-[#FF0046] text-white flex items-center justify-center text-xs font-bold">
                1
              </div>
              <span className="text-sm font-medium">Request Details</span>
            </div>
            <div className="w-8 h-1 bg-gray-200 rounded-full"></div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-gray-300 text-gray-500 flex items-center justify-center text-xs font-bold">
                2
              </div>
              <span className="text-sm font-medium">Job Description</span>
            </div>
            <div className="w-8 h-1 bg-gray-200 rounded-full"></div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-gray-300 text-gray-500 flex items-center justify-center text-xs font-bold">
                3
              </div>
              <span className="text-sm font-medium">Review & Submit</span>
            </div>
          </div>
        </div>
        {/* </section>      
        <section className="mt-6 shadow bg-white p-6 rounded-2xl">  
            

</div> */}
      </section>
    </div>
  );
};

export default NewRequest;
