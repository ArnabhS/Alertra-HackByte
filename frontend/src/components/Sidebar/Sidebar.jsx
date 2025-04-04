
import React, { useState, useEffect } from "react";
import { Home, Users, MapPin, Bell, History, Shield, User, LogOut } from 'lucide-react';
import { motion } from "framer-motion";
import SidebarItem from "./SidebarItem";
import { useNavigate, useLocation } from "react-router-dom";

const Sidebar = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [activeItem, setActiveItem] = useState("Dashboard");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 1024);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleItemClick = (item, path) => {
    setActiveItem(item);
    navigate(path);
  };

  const sidebarVariants = {
    open: { width: "250px", height: "100vh" },
    closed: { width: "100%", height: "80px" },
  };

  const userNavItems = [
    { icon: <Home />, text: "Dashboard", path: "/user/dashboard" },
    { icon: <Users />, text: "Contacts", path: "/user/dashboard/contacts" },
    { icon: <MapPin />, text: "Location", path: "/user/dashboard/location" },
    // { icon: <Bell />, text: "Alerts", path: "/dashboard/user/alerts" },
    { icon: <History />, text: "History", path: "/user/dashboard/history" },
  ];

  const securityNavItems = [
    { icon: <Home />, text: "Dashboard", path: "/security/dashboard" },
    { icon: <Users />, text: "Emergency Contacts", path: "/security/dashboardcontacts" },
    { icon: <MapPin />, text: "Incident Location", path: "/security/dashboard/location" },
    { icon: <Bell />, text: "Security Alerts", path: "/security/dashboard/alerts" },
    { icon: <History />, text: "Incident History", path: "/security/dashboard/history" },
  ];

  const navItems = location.pathname.startsWith("/security/dashboard") ? securityNavItems : userNavItems;

  return (
    <motion.div
      initial={isSmallScreen ? "closed" : "open"}
      animate={isSmallScreen ? "closed" : "open"}
      variants={sidebarVariants}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className={`bg-pink-50 p-5 flex ${
        isSmallScreen
          ? "flex-row justify-around items-center fixed bottom-0 left-0 right-0 shadow-lg z-50"
          : "flex-col justify-between shadow-lg fixed top-0 left-0 h-screen"
      }`}
    >
      <div>
        <div className={`${isSmallScreen ? "hidden" : "block"}`}>
          <h1 className="text-xl font-bold text-pink-700 mb-10">Alertra</h1>
        </div>

        <div
          className={`${
            isSmallScreen ? "flex justify-around w-full" : "flex flex-col gap-2"
          }`}
        >
          {navItems.map((item) => (
            <SidebarItem
              key={item.text}
              icon={item.icon}
              text={item.text}
              isSmallScreen={isSmallScreen}
              active={activeItem === item.text}
              onClick={() => handleItemClick(item.text, item.path)}
            />
          ))}
        </div>
      </div>

      {!isSmallScreen && (
        <div className="flex items-center gap-3 p-2 hover:bg-pink-100 rounded-md cursor-pointer transition-all" 
        onClick={() => navigate("/dashboard/profile")} >

          <motion.div
            whileHover={{ scale: 1.1 }}
            className="w-10 h-10 bg-pink-600 rounded-full flex items-center justify-center text-white"
          >
            SJ
          </motion.div>
          <div>
            <h3 className="text-sm font-semibold">Sarah Johnson</h3>
            <p className="text-xs text-gray-500">sarah@example.com</p>
          </div>
          <LogOut className="ml-auto text-gray-500 cursor-pointer hover:text-pink-700" />
        </div>
      )}
    </motion.div>
  );
};

export default Sidebar;
