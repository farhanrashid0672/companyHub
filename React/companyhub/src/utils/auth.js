export const saveAuth = (token) => {
  localStorage.setItem("token", token);
};

export const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("role");
};

// export const isAuthenticated = () => {
//   return !!localStorage.getItem("token");
// };
