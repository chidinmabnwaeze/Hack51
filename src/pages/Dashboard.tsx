interface DashboardProps {
  title: string;
  description: string;
}

interface Metrics {
  name: string;
  value: number;
  status: string;
  info: string;
}
interface ActiveRequest {
  title: string;
  submissions: [{}];
  hiringManager: string;
  status: string;
}

const Dashboard = ({ title, description }: DashboardProps) => {
  const metrics: Metrics[] = [
    {
      name: "Total Active Requests",
      value: 120,
      status: "Current",
      info: "12% more than last month",
    },

    {
      name: "Submissions Received",
      value: 45,
      status: "Growth",
      info: "2 more than last month",
    },
    {
      name: "In Evaluation",
      value: 30,
      status: "Action Needed",
      info: "Pending review",
    },

    {
      name: "Shortlisted Candidates",
      value: 5,
      status: "Success",
      info: "Completed Hiring Cycles",
    },
  ];
  const tableHeaders = [
    "Request Title",
    "Submissions",
    "Days Left",
    "Status",
    "Actions",
  ];

  const activeRequests = [
    {
      title: "Software Engineer",
      submissions: "Engineering",
      days_left: 15,
      status: "Open",
    },
    {
      title: "Product Manager",
      submissions: "Product",
      days_left: 10,
      status: "Open",
    },
  ];

  return (
    <div>
      <section className="flex justify-between">
        <div>
          <h1 className="text-3xl font-bold">{title}</h1>
          <p className="text-gray-600 mt-2">{description}</p>
        </div>
        <div>
          <button className="bg-[#FF0046] hover:bg-red-700 text-white font-bold py-2 px-6 rounded-lg">
            Hire A New Role
          </button>
        </div>
      </section>

      {/* dashboard content */}

      <section className="grid grid-cols-4 gap-4 mt-6">
        {/* Example metric card */}
        {metrics.map((metric, index) => (
          <div
            key={index}
            className="bg-white p-8 rounded-lg shadow  border-t-3 border-[#FF0046]"
          >
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">{metric.name}</h3>
              <div
                className={`px-3 py-1 rounded text-xs font-bold ${metric.status === "Success" ? "bg-green-100 text-green-800" : metric.status === "Growth" ? "bg-green-100 text-green-800" : metric.status === "Action Needed" ? "bg-red-100 text-red-800" : "bg-gray-100 text-gray-800"}`}
              >
                {metric.status}
              </div>
            </div>
            <p className="text-2xl font-bold">{metric.value}</p>
            <p
              className={`text-sm ${metric.status === "Current" ? "text-green-500" : metric.status === "Growth" ? "text-green-500" : metric.status === "Action Needed" ? "text-red-500" : "text-gray-500"}`}
            >
              {metric.info}
            </p>
          </div>
        ))}
      </section>

      <section className="bg-white p-4 shadow mt-8 rounded-2xl">
        <div className="flex justify-between items-center my-4 mb-6">
          <h2 className="text-xl font-bold">Active Requests</h2>
          <div className="flex items-center">
            <input
              type="text"
              placeholder="Search requests..."
              className="border border-gray-100 p-2 rounded-lg shadow w-full  mx-6"
            />
            <button className="bg-[#FF0046] hover:bg-red-700 text-white font-bold py-2 px-6 whitespace-nowrap rounded">
              View All
            </button>
          </div>
        </div>
        {/* Active requests table */}
        <table className="min-w-full bg-white">
          <thead>
            <tr className="bg-gray-50">
              {tableHeaders.map((header, index) => (
                <th
                  key={index}
                  className="py-2 px-4 border-b border-gray-100 text-left"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="">
            {/* Example rows */}
            <tr className="border-b border-gray-100 p-6">
              <td className="py-2 px-4">Software Engineer</td>
              <td className="py-2 px-4">Engineering</td>
              <td className="py-2 px-4">15</td>
              <td className="py-2 px-4 text-green-500">Open</td>
              <td className="py-2 px-4">
                <button className="text-gray-500 hover:text-gray-700 mr-2 border border-gray-200 px-3 py-1 rounded">
                  View Details
                </button>
                <button className="text-red-500 hover:text-red-700">
                  Close Request
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="bg-white p-34 shadow mt-8 rounded-2xl"></section>
    </div>
  );
};

export default Dashboard;
