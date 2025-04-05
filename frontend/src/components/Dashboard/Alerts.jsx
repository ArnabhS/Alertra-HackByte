import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, Filter, Bell, MapPin, UserPlus, Settings } from 'lucide-react';
import SOSManagement from './SOSManagement';

const Alerts = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-7xl mx-auto p-4 md:p-6 lg:p-8"
    >
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-lg md:text-3xl font-bold text-pink-500">Alerts & Notifications</h1>
          <p className="text-slate-600 tracking-tight leading-6 text-sm ">Manage your emergency alerts and notifications</p>
        </div>
        <div className="flex gap-3">
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-4 py-2 bg-white text-gray-700 rounded-xl hover:bg-rose-100 text-sm border border-gray-200"
          >
            <Filter size={16} />
            Filter
          </motion.button>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-4 py-2 bg-pink-500 text-white rounded-3xl font-bold text-sm"
          >
            <Bell size={16} />
            Send Alert
          </motion.button>
        </div>
      </div>

      {/* Active Alerts Section */}
      <div className="mb-8">
        <h2 className="text-lg font-semibold text-pink-800 mb-4">Active Alerts</h2>
        <motion.div 
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
          className="bg-white rounded-xl shadow-lg overflow-hidden hover:bg-col-card"
        >
          <motion.div 
            
            className="p-4 border-b border-gray-100"
          >
            <div className="flex items-start gap-4">
              <div className="bg-red-100 p-2 rounded-lg">
                <AlertTriangle className="text-pink-600" size={24} />
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-semibold text-gray-800">SOS Alert</h3>
                    <p className="text-gray-500 text-sm">Triggered 3 minutes ago</p>
                  </div>
                  <span className="px-3 py-1 bg-red-100 text-red-600 text-sm rounded-full">Active</span>
                </div>
                <p className="text-gray-700 mb-3">
                  Emergency situation reported at Central Park. Immediate assistance required.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex gap-2">
                    <button className="px-4 py-1.5  text-xs lg:text-sm font-medium text-gray-700 bg-gray-100 rounded-xl hover:bg-gray-200">
                      View Details
                    </button>
                    <button className="px-4 py-1.5  text-xs lg:text-sm font-medium text-green-700 bg-green-100 rounded-xl hover:bg-green-200">
                      Mark as Resolved
                    </button>
                  </div>
                  <button className="flex items-center gap-1 text-gray-500 text-base hover:bg-slate-300 bg-slate-100  py-1 px-2 rounded-3xl hover:text-blue-600">
                    <MapPin size={14} />
                    Location attached
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Recent Notifications Section */}
      <div>
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Recent Notifications</h2>
        <div className="space-y-4">
          {/* Zone Exit Alert */}
          <motion.div 
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            whileHover={{ x: 5 }}
            className="bg-white p-4 rounded-xl shadow-sm flex items-start gap-4"
          >
            <div className="bg-rose-100 p-2 rounded-lg">
              <MapPin className="text-rose-600" size={20} />
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-medium text-gray-800">Zone Exit Alert</h3>
                  <p className="text-gray-600 text-sm">You have left the safe zone "Home"</p>
                </div>
                <span className="text-gray-400 text-sm">2h ago</span>
              </div>
            </div>
          </motion.div>

          {/* Contact Added */}
          <motion.div 
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            whileHover={{ x: 5 }}
            className="bg-white p-4 rounded-xl shadow-sm flex items-start gap-4"
          >
            <div className="bg-blue-100 p-2 rounded-lg">
              <UserPlus className="text-blue-600" size={20} />
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-medium text-gray-800">Contact Added</h3>
                  <p className="text-gray-600 text-sm">New emergency contact "Jane Doe" has been verified</p>
                </div>
                <span className="text-gray-400 text-sm">5h ago</span>
              </div>
            </div>
          </motion.div>

          {/* System Update */}
          <motion.div 
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            whileHover={{ x: 5 }}
            className="bg-white p-4 rounded-xl shadow-sm flex items-start gap-4"
          >
            <div className="bg-purple-100 p-2 rounded-lg">
              <Settings className="text-purple-600" size={20} />
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-medium text-gray-800">System Update</h3>
                  <p className="text-gray-600 text-sm">New safety features have been added to your account</p>
                </div>
                <span className="text-gray-400 text-sm">1d ago</span>
              </div>
            </div>
          </motion.div>
        </div>
        <SOSManagement />
      </div>
    </motion.div>
  );
};

export default Alerts;