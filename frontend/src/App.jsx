import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import Loader from "./components/common/Loader";
import Sidebar from "./components/common/Sidebar/Sidebar";
import Home from "./pages/Home/Page";
import SignUp from "./pages/SignUp/Page";
import Login from "./pages/Login/Page";

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
  const isDashboardPage = location.pathname.includes("/dashboard");

  return (
    <div className="flex">
      {isDashboardPage && (
        <div className="w-[250px] fixed h-screen">
          <Sidebar />
        </div>
      )}
      <div
        className={`flex-1 ${isDashboardPage ? "w-[94%] mx-auto lg:ml-[250px] h-screen lg:overflow-y-auto" : ""}`}
      >
        {!isDashboardPage && <Navbar />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="*"
            element={
              <h1 className="text-center mt-10 text-2xl text-pink-500 flex items-center justify-center h-screen">
                404 - Page Not Found
              </h1>
            }
          />
        </Routes>
        {!isDashboardPage && <Footer />}
      </div>
    </div>
  );
}

export default App;
