import { motion } from "framer-motion";
import { MapPin, Home, Building2, MoreVertical, Plus } from "lucide-react";
import mapImage from "../../assets/Location/map.png";

const Location = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-7xl mx-auto mb-12 "
    >
      <div className="flex flex-col lg:flex-row gap-8 p-2">
        <motion.div
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
          className="lg:w-2/3  rounded-2xl shadow-lg overflow-hidden"
        >
          <div className=" px-2 py-4 bg-col-card border-gray-100">
          <div className="p-4 border-b bg-col-card border-gray-100">
            <h1 className="text-xl md:text-3xl font-bold text-pink-500">Location Tracking</h1>
            <p className="text-gray-600 text-sm">Monitor and manage your safe zones</p>
          </div>
         
          <div className="h-[400px] w-[96%] mx-auto bg-gray-100 rounded-2xl flex items-center justify-center overflow-hidden p-2">
            <img src={mapImage} alt="Map" className="w-full h-full object-cover" />
          </div>
          
          </div>
        </motion.div>

        <div className="lg:w-1/3">
          <motion.div
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-col-card rounded-xl shadow-lg p-4 mb-6"
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold text-pink-500">Current Location</h2>
              <span className="px-3 py-1 bg-green-100 text-green-600 text-sm rounded-full">Active</span>
            </div>
            <div className="flex items-start gap-3">
              
              <MapPin className="rounded-full text-pink-500 mt-1" size={20} />
              <div>
                <p className="text-rose-800 font-medium">123 Main Street, City</p>
                <p className="text-gray-500 text-sm">Last updated: 2 minutes ago</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="bg-col-card rounded-xl shadow-lg p-4"
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold text-pink-500">Safe Zones</h2>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-4 py-2 bg-primary-col text-white rounded-2xl text-sm font-semibold"
              >
                <Plus size={16} />
                Add Safe Zone
              </motion.button>
            </div>

            <div className="space-y-4">
              {[
                { icon: <Home className="text-pink-500" size={20} />, label: "Home", radius: "500m radius" },
                { icon: <Building2 className="text-pink-500" size={20} />, label: "Office", radius: "300m radius" },
              ].map((zone, index) => (
                <motion.div
                  key={index}
                  whileHover={{ x: 5 }}
                  className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                >
                  <div className="flex items-center gap-3">
                    {zone.icon}
                    <div>
                      <p className="font-medium text-rose-800">{zone.label}</p>
                      <p className="text-gray-500 text-sm">{zone.radius}</p>
                    </div>
                  </div>
                  <MoreVertical className="text-gray-400 cursor-pointer" size={20} />
                </motion.div>
              ))}
            </div>

            <div className="mt-6 flex items-center justify-between">
              <p className="text-gray-600 tracking-tight leading-6">Share location with contacts</p>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" />
                <div className="w-11 h-6 bg-gray-200  rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-pink-500"></div>
              </label>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Location;
