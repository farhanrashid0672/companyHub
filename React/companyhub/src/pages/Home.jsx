import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div className="bg-gray-50 min-h-screen">

      <Navbar />

      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 grid md:grid-cols-2 gap-10 items-center">

        <div>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-800 leading-tight">
            Manage Your Company
            <span className="text-indigo-600"> Smarter</span>
          </h1>

          <p className="mt-6 text-gray-600 text-base md:text-lg">
            Professional employee management system
            built for modern companies.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a
              href="/login?role=admin"
              className="bg-indigo-600 text-white px-6 py-3 rounded-xl text-center"
            >
              Admin Login
            </a>
            <a
              href="/login?role=employee"
              className="bg-gray-200 px-6 py-3 rounded-xl text-center"
            >
              Employee Login
            </a>
          </div>
        </div>

        <div>
          <img
            src="https://images.unsplash.com/photo-1556761175-4b46a572b786"
            alt="office"
            className="rounded-3xl shadow-2xl w-full"
          />
        </div>

      </div>

      {/* Feature Cards */}
      <div className="max-w-6xl mx-auto px-6 md:px-12 pb-16 grid sm:grid-cols-2 gap-8">

        <div className="bg-white p-6 md:p-8 rounded-2xl shadow">
          <h3 className="text-xl md:text-2xl font-semibold text-indigo-600 mb-4">
            Employee Management
          </h3>
          <p className="text-gray-600">
            Easily manage employees with secure admin controls.
          </p>
        </div>

        <div className="bg-white p-6 md:p-8 rounded-2xl shadow">
          <h3 className="text-xl md:text-2xl font-semibold text-indigo-600 mb-4">
            Department Organization
          </h3>
          <p className="text-gray-600">
            Organize teams effectively and track productivity.
          </p>
        </div>

      </div>
    </div>
  );
}
