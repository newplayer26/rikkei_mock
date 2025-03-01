import { useState } from "react";
import { ProtectedRoute } from "@/components/ProtectedRoute";
import DashboardLayout from "@/components/DashboardLayout";
import generateMockUserData from "@/utils/mockData";
import { ChevronDownIcon, PlusIcon } from "@heroicons/react/24/solid";
import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";

export default function Dashboard2() {
  const [users] = useState(generateMockUserData().users);

  const handleAddUser = () => {
    console.log("Add user clicked");
    // Implement add user functionality
  };
  const getDeviceIcon = (device) => {
    switch (device) {
      case "Chrome Browser":
        return "💻";
      case "Safari Browser":
        return "🌐";
      case "iOS App":
        return "📱";
      case "Android App":
        return "📱";
      default:
        return "💻";
    }
  };

  const ActionMenu = ({ user }) => (
    <Menu as="div" className="relative inline-block text-left">
      <Menu.Button className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
        Actions
        <ChevronDownIcon className="w-5 h-5 ml-2 -mr-1" aria-hidden="true" />
      </Menu.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 w-56 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <button
                  onClick={() => console.log("View details", user)}
                  className={`${
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700"
                  } block px-4 py-2 text-sm w-full text-left`}
                >
                  View details
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  onClick={() => console.log("Edit details", user)}
                  className={`${
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700"
                  } block px-4 py-2 text-sm w-full text-left`}
                >
                  Edit details
                </button>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );

  return (
    <ProtectedRoute>
      <DashboardLayout>
        <div className="px-4 py-6">
          <div className="sm:flex sm:items-center sm:justify-between">
            <div>
              <h1 className="text-2xl font-semibold text-gray-900">
                User Activity Log
              </h1>
              <p className="mt-2 text-sm text-gray-700">
                A list of all users in your account including their login
                details.
              </p>
            </div>
            <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
              <button
                type="button"
                onClick={handleAddUser}
                className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
              >
                <PlusIcon className="h-4 w-4 mr-2" />
                Add user
              </button>
            </div>
          </div>
          <div className="mt-6">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Email
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Last Login
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Device
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {users.map((user) => (
                    <tr key={user.id}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">
                          {user.email}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-500">
                          {new Date(user.lastLogin).toLocaleString()}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-500">
                          <span className="mr-2">
                            {getDeviceIcon(user.device)}
                          </span>
                          {user.device}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <ActionMenu user={user} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </DashboardLayout>
    </ProtectedRoute>
  );
}
