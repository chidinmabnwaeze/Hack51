const StepIndicator = ({ currentStep }: { currentStep: number }) => {
  const steps = [
    {
      name: "Request Details",
      status:
        currentStep > 1
          ? "completed"
          : currentStep === 1
            ? "current"
            : "pending",
    },
    {
      name: "Job Description",
      status:
        currentStep > 2
          ? "completed"
          : currentStep === 2
            ? "current"
            : "pending",
    },
    {
      name: "Review & Submit",
      status: currentStep === 3 ? "current" : "pending",
    },
  ];

  const getStatusStyles = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-[#FF0046] text-white";
      case "current":
        return "bg-[#FF0046] text-white";
      case "pending":
        return "bg-gray-300 text-gray-500";
      default:
        return "bg-gray-300 text-gray-500";
    }
  };

  return (
    <div>
      {/* indicators */}
      <section className=" indicators mt-6">
        <div className="bg-white p-4 gap-4 shadow rounded-2xl mx-auto w-full md:w-3/4 justify-center flex">
          {steps.map((step, index) => (
            <div key={index} className="flex items-center gap-4">
              <div className="flex items-center ">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${currentStep === index + 1 ? getStatusStyles("current") : getStatusStyles(step.status)}`}
                >
                  {index + 1}
                </div>
              </div>
              {index !== steps.length - 1 && (
                <div className="w-8 h-1 bg-gray-200 rounded-full"></div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default StepIndicator;
