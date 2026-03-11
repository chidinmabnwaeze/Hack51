import { Trash2, PlusCircle } from "lucide-react";
import { useState } from "react";

interface Challengeprops {
  title: string;
  scenario: string;
  deliverables: string[];
  rules: string;
  submission_requirements: string;
}

const RubricEditor = () => {
  const [deliverables, setDeliverables] = useState<string[]>([]);
  const [value, setValue] = useState("");

  const addDeliverable = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    setDeliverables([...deliverables, value]);
    setValue("");
  };

  const removeDeliverable = (index: number) => {
    const newDeliverables = [...deliverables];
    newDeliverables.splice(index, 1);
    setDeliverables(newDeliverables);
  };

  return (
    <div className="bg-white p-8 rounded-xl shadow-md w-full mt-10 md:w-3/4 mx-auto">
      <h2 className="border-b border-b-gray-300 text-xl">Rubric Editor</h2>

      <div className="bg-white rounded-xl mt-12 ">
        <div className="flex">
        <h2 className="">Scoring Weight % :</h2>
        <span className={50 >= 50 ? "text-green-500" : "text-red-500"}>50%</span>
        </div>
        <div className="border border-gray-100 bg-gray-50 p-5 rounded-lg">
          <p className="mt-4">
            Your team manages a backend API for a growing e-commerce platform.
            As traffic increases, several endpoints have become slow, causing
            delays when users load products, place orders, or access their
            accounts. Your task is to identify performance bottlenecks in the
            existing API and optimize it while maintaining correct
            functionality.
          </p>
        </div>
      </div>
      <div className="bg-white rounded-xl mt-12 ">
        <h2 className="">Deliverables</h2>
        <section className="mt-4">
          {deliverables.map((deliverable, index) => (
            <div className="flex justify-between items-center" key={index}>
              <div className="border border-gray-100 bg-gray-50 p-2 rounded-lg w-full">
                <p className="">{deliverable}</p>
              </div>
              <button
                onClick={() => removeDeliverable(index)}
                className="ml-4 hover:text-red-700"
              >
                <Trash2 />
              </button>
            </div>
          ))}
          <form action="" onSubmit={(e) => addDeliverable(e)} className="mt-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Add Deliverable"
                className="border border-dashed rounded-full p-2 pl-10"
                value={value}
                onChange={(e) => setValue(e.target.value)}
              />
              <PlusCircle
                className="ml-2 cursor-pointer absolute top-0 bottom-0 left-0 my-auto text-gray-400"
                onClick={(e: React.MouseEvent<SVGSVGElement>) =>
                  addDeliverable(
                    e as unknown as React.SubmitEvent<HTMLFormElement>,
                  )
                }
              />
            </div>
          </form>
        </section>
      </div>

      <div className="bg-white rounded-xl mt-12 ">
        <h2 className="">Tooling Requirements & Restrictions</h2>
        <div className="border border-gray-100 bg-gray-50 p-5 rounded-lg">
          <p className="mt-4">
            Restrictions on AI usage if used place citations / references to the
            model or agent used
          </p>
        </div>
      </div>
      <div className="bg-white rounded-xl mt-12 ">
        <h2 className="">Submission Requirements</h2>
        <div className="border border-gray-100 bg-gray-50 p-5 rounded-lg">
          <p className="mt-4">
            Provide a link to a public GitHub repository. Include a
            comprehensive README.md.
          </p>
        </div>
      </div>
    </div>
  );
};

export default RubricEditor;
