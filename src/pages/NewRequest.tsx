import { useState } from "react";
import { useNavigate } from "react-router-dom";
import StepContent from "../components/StepContent";
import StepIndicator from "../components/StepIndicator";

const NewRequest = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);

  const nextStep = () => {
    setStep(step + 1);
  };
  const prevStep = () => {
    setStep((prev) => prev - 1);
  };

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
        <div>
          <button className="bg-[#FF0046] hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg">
            Create Custom Request
          </button>
        </div>
      </section>
      {/* indicators */}
      <StepIndicator currentStep={step} />
      {/* content */}
      <StepContent step={step} />

      <div className="flex justify-end mt-6">
        {step > 1 && (
          <button
            onClick={prevStep}
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-lg"
          >
            Previous
          </button>
        )}
        {step < 6 ? (
          <button
            onClick={nextStep}
            className="bg-[#FF0046] hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg ml-4"
          >
            {step === 6 ? "Submit" : "Next"}
          </button>
        ) : (
          <button
            onClick={() => navigate("/requests")}
            className="bg-[#FF0046] hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg ml-4"
          >
            Submit
          </button>
        )}
      </div>
    </div>
  );
};

export default NewRequest;
