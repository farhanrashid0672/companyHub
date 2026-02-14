import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../utils/auth";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <nav className="bg-white shadow-md px-6 md:px-12 py-4 sticky top-0 z-50">

      <div className="flex justify-between items-center">

        <h1 className="text-2xl font-bold text-indigo-600">
          CompanyHub
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center font-medium text-gray-700">
          <Link to="/" className="hover:text-indigo-600">Home</Link>
          <Link to="/employees" className="hover:text-indigo-600">Employees</Link>
          <Link to="/departments" className="hover:text-indigo-600">Department</Link>

          {token && role === "admin" && (
            <Link to="/admin/dashboard">Dashboard</Link>
          )}

          {token && role === "employee" && (
            <Link to="/employee/dashboard">Dashboard</Link>
          )}

          {!token ? (
            <>
              <Link to="/login?role=admin">Login</Link>
              <Link
                to="/admin/signup"
                className="bg-indigo-600 text-white px-4 py-2 rounded-lg"
              >
                Signup
              </Link>
            </>
          ) : (
            <button
              onClick={handleLogout}
              className="bg-red-500 text-white px-4 py-2 rounded-lg"
            >
              Logout
            </button>
          )}
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden mt-4 flex flex-col gap-4 text-gray-700 font-medium">
          <Link to="/">Home</Link>
          <Link to="/employees">Employees</Link>
          <Link to="/departments">Department</Link>
          <Link to="/login?role=admin">Login</Link>
        </div>
      )}
    </nav>
  );
}
