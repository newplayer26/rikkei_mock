import { ProtectedRoute } from "@/components/ProtectedRoute";
import DashboardLayout from "@/components/DashboardLayout";
import generateMockUserData from "@/utils/mockData";
import { useEffect, useState } from "react";
import {
  UserIcon,
  ClockIcon,
  ExclamationCircleIcon,
} from "@heroicons/react/24/outline";

export default function Dashboard() {
  const [stats, setStats] = useState({
    totalUsers: 0,
    inactiveUsers: [],
    loginsByDate: {},
    activeToday: 0,
    activeThisMonth: 0,
  });

  useEffect(() => {
    const { users, loginsByDate, activeToday, activeThisMonth } =
      generateMockUserData();
    const sevenDaysAgo = new Date();
    console.log(sevenDaysAgo);
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);

    const inactiveUsers = users.filter(
      (user) => new Date(user.lastLogin) < sevenDaysAgo
    );

    setStats({
      totalUsers: users.length,
      inactiveUsers,
      loginsByDate,
      activeToday,
      activeThisMonth,
    });
  }, []);
  return (
    <ProtectedRoute>
      <DashboardLayout>
        <div className="space-y-6">
          {/* Stats Grid */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {/* Total Users Card */}
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="p-5">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <UserIcon
                      className="h-6 w-6 text-gray-400"
                      aria-hidden="true"
                    />
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="text-sm font-medium text-gray-500 truncate">
                        Total Users
                      </dt>
                      <dd className="text-3xl font-semibold text-gray-900">
                        {stats.totalUsers}
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>

            {/* Active Today Card */}
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="p-5">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <UserIcon
                      className="h-6 w-6 text-green-400"
                      aria-hidden="true"
                    />
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="text-sm font-medium text-gray-500 truncate">
                        Active Today
                      </dt>
                      <dd className="text-3xl font-semibold text-gray-900">
                        {stats.activeToday}
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>

            {/* Active This Month Card */}
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="p-5">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <UserIcon
                      className="h-6 w-6 text-blue-400"
                      aria-hidden="true"
                    />
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="text-sm font-medium text-gray-500 truncate">
                        Active This Month
                      </dt>
                      <dd className="text-3xl font-semibold text-gray-900">
                        {stats.activeThisMonth}
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Inactive Users */}
          <div className="bg-white shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900 flex items-center">
                <ExclamationCircleIcon className="h-5 w-5 text-amber-400 mr-2" />
                Inactive Users (7+ days)
              </h3>
              <div className="mt-4">
                <div className="flow-root">
                  <ul className="-my-5 divide-y divide-gray-200">
                    {stats.inactiveUsers.map((user) => (
                      <li key={user.id} className="py-4">
                        <div className="flex items-center space-x-4">
                          <div className="flex-shrink-0">
                            <span className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-gray-100">
                              {user.name.charAt(0)}
                            </span>
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-gray-900 truncate">
                              {user.name}
                            </p>
                            <p className="text-sm text-gray-500 truncate">
                              {user.email}
                            </p>
                          </div>
                          <div>
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                              Last login:{" "}
                              {new Date(user.lastLogin).toLocaleDateString()}
                            </span>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DashboardLayout>
    </ProtectedRoute>
  );
}
