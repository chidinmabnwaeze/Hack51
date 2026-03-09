import React from "react";

interface RoleProps {
  roles: string[];
}

const SelectRole = () => {
  const roles = ["Software Engineer", "Product Manager", "Designer"];

  return (
    <div className="bg-white p-8 rounded-xl shadow-md w-full mt-8 md:w-3/4 mx-auto">
      <h2 className="border-b border-b-gray-300 text-xl">
        Select from existing roles
      </h2>
      {roles.map((role, index) => (
        <div
          key={index}
          className="p-4 mt-4 gap-4 cursor-pointer hover:bg-gray-100"
        >
          <input type="checkbox" className="rounded-full" />
          <label htmlFor="role" className="ml-5">
            {role}
          </label>
        </div>
      ))}
    </div>
  );
};

export default SelectRole;
