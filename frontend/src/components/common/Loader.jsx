

import { motion } from "framer-motion";
const Loader = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-white">
      <motion.div
        className="w-12 h-12 border-4 border-rose-600 border-t-transparent rounded-full animate-spin"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
      ></motion.div>
      <p className="mt-4 text-gray-600 text-lg font-medium">Loading...</p>
    </div>
  );
};

export default Loader;