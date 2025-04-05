import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import Loader from "./components/common/Loader";

// Pages
import Home from "./pages/Home/Page";
import SignUp from "./pages/SignUp/Page";
import Login from "./pages/Login/Page";


import SafetyDashboard from "./components/Dashboard/SafetyDashboard";
import Sidebar from "./components/common/Sidebar/Sidebar";
import EmergencyContacts from "./components/Dashboard/EmergencyContacts";
import Location from "./components/Dashboard/Location";
import Alerts from "./components/Dashboard/Alerts";

import History from "./components/Dashboard/History";
import ProfileSettings from "./components/Dashboard/Profile";

function App() {
  const [screenLoading, setScreenLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setScreenLoading(false);
    }, 2500);
  }, []);

  return (
    <BrowserRouter>
      {screenLoading ? <Loader /> : <MainLayout />}
    </BrowserRouter>
  );
}

function MainLayout() {
  const location = useLocation();
  const isDashboardPage =
    location.pathname.startsWith("/dashboard") ||
    location.pathname.startsWith("/user/dashboard") ||
    location.pathname.startsWith("/security/dashboard");

  return (
    <div className="flex">
      {isDashboardPage && (
        <div className="w-[250px] fixed h-screen">
          <Sidebar />
        </div>
      )}
      <div className={`flex-1 ${isDashboardPage ? " w-[94%] mx-auto lg:ml-[250px] h-screen lg:overflow-y-auto" : ""}`}>
        {!isDashboardPage && <Navbar />} {/* Show Navbar only on non-dashboard pages */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/login" element={<Login />} />

          {/* Dashboard Routes */}
          {/* <Route path="/security/dashboard" element={<SecurityDashboard />} /> */}
          

          <Route path="/user/dashboard" element={<SafetyDashboard />} />
          <Route path="/user/dashboard/contacts" element={<EmergencyContacts />} />
          <Route path="/user/dashboard/location" element={<Location />} />
          {/* <Route path="/dashboard/alerts" element={<Alerts />} />*/}
          <Route path="/user/dashboard/history" element={<History />} /> 

          <Route path="/security/dashboard" element={<SafetyDashboard />} />
          <Route path="/security/dashboard/contacts" element={<EmergencyContacts />} />
          <Route path="/security/dashboard/location" element={<Location />} />
          <Route path="/security/dashboard/alerts" element={<Alerts />} />
          <Route path="/security/dashboard/history" element={<History />} />


          <Route path="/dashboard/profile" element={<ProfileSettings />} />


          {/* 404 Route */}
          <Route
            path="*"
            element={
              <h1 className="text-center mt-10 text-2xl text-pink-500 flex items-center justify-center h-screen">
                404 - Page Not Found
              </h1>
            }
          />
        </Routes>
        {!isDashboardPage && <Footer />} {/* Show Footer only on non-dashboard pages */}
      </div>
    </div>
  );
}

export default App;
