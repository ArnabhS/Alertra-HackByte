import React from "react";
import { motion } from "framer-motion";

const SidebarItem = ({ icon, text, isSmallScreen, active, onClick }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`flex items-center gap-2 p-2 cursor-pointer transition-all ${
        active
          ? "bg-pink-200 text-pink-700"
          : "hover:bg-pink-100 text-gray-700"
      } ${isSmallScreen ? "rounded-full p-3" : "rounded-md"}`}
    >
      {icon}
      {!isSmallScreen && <span className="text-sm font-medium">{text}</span>}
    </motion.div>
  );
};

export default SidebarItem;