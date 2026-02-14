import { useEffect, useState } from "react";
import Api from "../services/api";
import Navbar from "../components/Navbar";
import { logout } from "../utils/auth";
import { useNavigate } from "react-router-dom";

export default function EmployeeDashboard() {
  const navigate = useNavigate();
  const [profile, setProfile] = useState(null);

  const fetchProfile = async () => {
    try {
      const res = await Api.get("/employee/profile");
      console.log(res.data);
      setProfile(res.data);
    } catch (err) {
      console.log("Profile Error: ", err.response);
      logout();
      navigate("/");
    }
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  if (!profile) {
    return (
      <div className="min-h-screen flex items-center justify-center text-xl">
        Loading...
      </div>
    );
  }

  return (
    <div className="bg-gray-100 min-h-screen">

      <Navbar />

      <div className="max-w-xl mx-auto px-6 py-16">

        <div className="bg-white p-8 rounded-2xl shadow text-center">

          <h2 className="text-2xl font-semibold text-indigo-600 mb-6">
            My Profile
          </h2>

          <div className="space-y-4 text-gray-700">
            <p><strong>Name:</strong> {profile.name}</p>
            <p><strong>Email:</strong> {profile.email}</p>
            <p><strong>Department:</strong> {profile.department}</p>
            <p><strong>Role:</strong> {profile.role}</p>
          </div>

        </div>

      </div>
    </div>
  );

}
