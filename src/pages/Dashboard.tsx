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

const Dashboard = ({ title, description }: DashboardProps) => {
  const metrics: Metrics[] = [
    {
      name: "Total Active Requests",
      value: 120,
      status: "current",
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
  return (
    <div>
      <section className="flex justify-between">
        <div>
          <h1 className="text-3xl font-bold">{title}</h1>
          <p className="text-gray-600 mt-2">{description}</p>
        </div>
        <div>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Hire A New Role
          </button>
        </div>
      </section>

      {/* dashboard content */}

      <section className="grid grid-cols-4 gap-4 mt-6">
        {/* Example metric card */}
        {metrics.map((metric, index) => (
          <div key={index} className="bg-white p-4 rounded shadow">
            <h3 className="text-lg font-semibold">{metric.name}</h3>
            <p className="text-2xl font-bold">{metric.value}</p>
            <p
              className={`text-sm ${metric.status === "Growth" ? "text-green-500" : metric.status === "Action Needed" ? "text-red-500" : "text-gray-500"}`}
            >
              {metric.info}
            </p>
          </div>
        ))}
      </section>

      <section>
        <div>
          <h2 className="text-2xl font-bold mt-8">Active Requests</h2>
          <div>
            <input
              type="text"
              placeholder="Search by role, department..."
              className="border p-2 rounded w-full mt-4"
            />
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2">
              View All
            </button>
          </div>
        </div>
        {/* Active requests table */}
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="py-2 px-4 border-b text-left">Request Title</th>
              <th className="py-2 px-4 border-b text-left">Submissions</th>
              <th className="py-2 px-4 border-b text-left">Days Left</th>
              <th className="py-2 px-4 border-b text-left">Status</th>
              <th className="py-2 px-4 border-b text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* Example rows */}
            <tr className="border-b">
              <td className="py-2 px-4">Software Engineer</td>
              <td className="py-2 px-4">Engineering</td>
              <td className="py-2 px-4">John Doe</td>
              <td className="py-2 px-4 text-green-500">Open</td>
              <td className="py-2 px-4">
                <button className="text-blue-500 hover:text-blue-700 mr-2">
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
    </div>
  );
};

export default Dashboard;
