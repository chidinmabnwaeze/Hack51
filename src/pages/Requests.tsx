import RequestTable from "../components/RequestTable";
import type { ActiveRequest } from "../components/RequestTable";

const Requests = () => {
  // build a more detailed data set to resemble the screenshot
  const activeRequests: ActiveRequest[] = [
    {
      id: "REQ-2401-09",
      title: "Senior Product Designer",
      role: "Product Designer (L3)",
      submissions: [{ submitted: 13, total: 21, percentage: 62 }],
      days_left: 12,
      status: "Open for submissions",
    },
    {
      id: "REQ-2401-12",
      title: "Backend Engineer (Go/Rust)",
      role: "Backend Engineer (L4)",
      submissions: [{ submitted: 21, total: 21, percentage: 100 }],
      days_left: 2,
      status: "Evaluation in progress",
    },
    {
      id: "REQ-2401-15",
      title: "Marketing Lead (Growth)",
      role: "Marketing Lead (L4)",
      submissions: [{ submitted: 50, total: 50, percentage: 100 }],
      days_left: 0,
      status: "Shortlist ready",
    },
    {
      id: "REQ-2402-01",
      title: "Q2 Junior Frontend Intake",
      role: "Frontend Engineer (L1)",
      submissions: [{ submitted: 0, total: 30, percentage: 0 }],
      days_left: "-",
      status: "Draft",
    },
    {
      id: "REQ-2312-05",
      title: "Staff Data Scientist",
      role: "Data Scientist (L5)",
      submissions: [{ submitted: 15, total: 15, percentage: 100 }],
      days_left: "-",
      status: "Closed",
    },
  ];

  return (
    <div>
      <section className="flex justify-between">
        <div>
          <h1 className="text-3xl font-bold">All Requests</h1>
          <p className="text-gray-600 mt-2">
            Manage the lifecycle of your hiring challenges across all statuses.
          </p>
        </div>
      </section>

      <div className="flex flex-col md:flex-row justify-between items-center mt-6 gap-4">
        <input
          type="text"
          placeholder="Search requests by title or ID..."
          className="border border-gray-100 p-2 rounded-lg shadow w-full md:w-1/2"
        />
        <div className="flex gap-2">
          <button className="border border-gray-200 px-4 py-2 rounded hover:bg-gray-50">
            Filter Status
          </button>
          <button className="border border-gray-200 px-4 py-2 rounded hover:bg-gray-50">
            Sort
          </button>
        </div>
      </div>

      <section className="mt-6">
        <RequestTable requests={activeRequests} detailed />
      </section>

      {/* simple pagination control as seen in screenshot */}
      <div className="flex justify-end items-center mt-4 gap-2">
        <button className="px-4 py-2 border border-gray-200 rounded text-gray-600 hover:bg-gray-50">
          PREV
        </button>
        <button className="px-4 py-2 border border-gray-200 rounded text-gray-600 hover:bg-gray-50">
          NEXT
        </button>
      </div>
    </div>
  );
};

export default Requests;
