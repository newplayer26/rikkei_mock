const generateMockUserData = () => {
  const mockUsers = [
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      lastLogin: "2025-03-01",
      device: "Chrome Browser",
      active: true,
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      lastLogin: "2025-02-20",
      device: "iOS App",
      active: true,
    },
    {
      id: 3,
      name: "Alice Johnson",
      email: "alice@example.com",
      lastLogin: "2025-03-01",
      device: "Android App",
      active: true,
    },
    {
      id: 4,
      name: "Bob Wilson",
      email: "bob@example.com",
      lastLogin: "2025-02-15",
      device: "Safari Browser",
      active: true,
    },
    {
      id: 5,
      name: "Carol Brown",
      email: "carol@example.com",
      lastLogin: "2025-02-25",
      device: "Safari Browser",
      active: true,
    },
  ];
  try {
    // Check if running in browser
    if (typeof window === "undefined") {
      return {
        users: [],
        loginsByDate: {},
        activeToday: 0,
        activeThisMonth: 0,
      };
    }

    // Get users from localStorage or initialize with mock data
    let users = JSON.parse(localStorage.getItem("users") || "null");
    if (!users) {
      localStorage.setItem("users", JSON.stringify(mockUsers));
      users = mockUsers;
    }
    console.log(users);
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
  } catch (error) {
    console.error("Error generating mock data:", error);
    return {
      users: [],
      loginsByDate: {},
      activeToday: 0,
      activeThisMonth: 0,
    };
  }
};

export default generateMockUserData;
