const userLoginAPI = {
  login: async (username, password) => {
    const users = [
      { id: 1, username: "user1", password: "password1" },
      { id: 2, username: "user2", password: "password2" },
      // Add more user data as needed
    ];

    const user = users.find(
      (user) => user.username === username && user.password === password
    );

    if (user) {
      return { id: user.id, username: user.username };
    } else {
      throw new Error("Invalid credentials");
    }
  },
};

export default userLoginAPI;
