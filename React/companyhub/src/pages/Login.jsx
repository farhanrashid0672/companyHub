import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Api from "../services/api";
import { saveAuth } from "../utils/auth";

function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const roleQuery = new URLSearchParams(location.search).get("role");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      setLoading(true);

      const res = await Api.post(`${import.meta.env.baseURL}/api/login${form}`);

      // Save token
      saveAuth(res.data.token);
      localStorage.setItem("role", res.data.user.role);

      // Get role from backend response
      const userRole = res.data.user.role;

      if (userRole === "admin") {
        navigate("/admin/dashboard");
      } else {
        navigate("/employee/dashboard");
      }

    } catch (err) {
      setError(err.response?.data?.message || "Invalid Credentials");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 to-blue-500">

      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl shadow-2xl w-96 space-y-4"
      >
        <h2 className="text-2xl font-bold text-center text-indigo-600">
          {roleQuery === "admin" ? "Admin Login" : "Employee Login"}
        </h2>

        {error && (
          <p className="text-red-500 text-center">{error}</p>
        )}

        <input
          type="email"
          placeholder="Email"
          required
          className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none"
          onChange={(e) =>
            setForm({ ...form, email: e.target.value })
          }
        />

        <input
          type="password"
          placeholder="Password"
          required
          className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none"
          onChange={(e) =>
            setForm({ ...form, password: e.target.value })
          }
        />

        <button
          disabled={loading}
          className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition"
        >
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
}

export default Login;
