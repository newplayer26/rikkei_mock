const generateMockUserData = () => {
  const users = [
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      lastLogin: "2025-03-01",
      device: "Chrome Browser",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      lastLogin: "2025-02-20",
      device: "iOS App",
    },
    {
      id: 3,
      name: "Alice Johnson",
      email: "alice@example.com",
      lastLogin: "2025-03-01",
      device: "Android App",
    },
    {
      id: 4,
      name: "Bob Wilson",
      email: "bob@example.com",
      lastLogin: "2025-02-15",
      device: "Safari Browser",
    },
    {
      id: 5,
      name: "Carol Brown",
      email: "carol@example.com",
      lastLogin: "2025-02-25",
      device: "Safari Browser",
    },
  ];

  const loginsByDate = {
    "2025-03-01": 25,
    "2025-02-29": 30,
    "2025-02-28": 28,
    "2025-02-27": 35,
    "2025-02-26": 22,
    "2025-02-25": 15,
    "2025-02-24": 20,
  };
  const today = new Date();
  const firstDayOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);

  // Count active users
  const activeToday = users.filter(
    (user) => new Date(user.lastLogin).toDateString() === today.toDateString()
  ).length;

  const activeThisMonth = users.filter(
    (user) => new Date(user.lastLogin) >= firstDayOfMonth
  ).length;

  return {
    users,
    loginsByDate,
    activeToday,
    activeThisMonth,
  };
};

export default generateMockUserData;
