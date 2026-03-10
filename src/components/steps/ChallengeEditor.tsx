const ChallengeEditor = () => {
  const details = [
    {
      title: "Role Title",
      value: "Software Engineer",
    },
    {
      title: "Role Level",
      value: "Expert level",
    },
  ];
  return (
    <div className="bg-white p-8 rounded-xl shadow-md w-full mt-10 md:w-3/4 mx-auto">
      <h2 className="border-b border-b-gray-300 text-xl">Challenge Editor</h2>

      <div className="bg-white rounded-xl mt-12 ">
        <h2 className="">Scenerio</h2>
        <div className="border border-gray-100 bg-gray-50 p-5 rounded-lg">
          <h2 className="border-b border-gray-200">API Development</h2>
          <p className="mt-4">
            Your team manages a backend API for a growing e-commerce platform.
            As traffic increases, several endpoints have become slow, causing
            delays when users load products, place orders, or access their
            accounts. Your task is to identify performance bottlenecks in the
            existing API and optimize it while maintaining correct
            functionality.
          </p>
        </div>

        <div className="bg-white rounded-xl mt-12 ">
          <h2 className="">Deliverables</h2>
          <section>
            <div className="flex justify-between items-center">
              <div className="border border-gray-100 bg-gray-50 p-5 rounded-lg">
                <p className="mt-4">
                  Your team manages a backend API for a growing e-commerce
                  platform.
                </p>
              </div>
              <button>Delete</button>
            </div>
            <input
              type="text"
              placeholder="Add Deliverable"
              className="border border-dashed rounded-full p-2"
            />
          </section>
        </div>
      </div>
    </div>
  );
};

export default ChallengeEditor;
