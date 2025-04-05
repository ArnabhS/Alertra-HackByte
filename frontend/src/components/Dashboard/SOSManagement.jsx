import React from 'react'
import { motion } from "framer-motion";
import { AlertTriangle, MapPin, MoreVertical, Phone } from 'lucide-react';

const SOSManagement = () => {
  return (
    <div > 
        	
	<div className=" p-8 rounded-lg">
	  <motion.header 
	    initial={{ opacity: 0, y: -20 }}
	    animate={{ opacity: 1, y: 0 }}
	    className="flex justify-between items-center mb-8"
	  >
	    <div>
	      <h1 className="text-xl md:text-3xl font-bold text-pink-500">SOS Management</h1>
	      <p className="text-sm leading-6 tracking-tight text-gray-500">Configure your emergency response settings</p>
	    </div>
	    <motion.button
	      whileHover={{ scale: 1.05 }}
	      whileTap={{ scale: 0.95 }}
	      className="bg-pink-500 hover:bg-pink-800 text-white px-2 py-1 lg:px-4 lg:py-2 rounded-3xl font-bold transition-colors duration-200 flex items-center gap-2"
	    >
	      <AlertTriangle className="w-5 h-5" />
	      TRIGGER SOS
	    </motion.button>
	  </motion.header>
	
	  <div className="grid grid-cols-2 gap-8">
	    <div className="space-y-8">
	      <section>
	        <h2 className="text-lg text-pink-800 font-semibold mb-4">Quick Actions</h2>
	        <div className="flex gap-4">
	          <motion.div
	            whileHover={{ scale: 1.02 }}
	            className="bg-col-card p-6 rounded-lg shadow-sm flex-1 hover:shadow-md transition-all duration-200 cursor-pointer"
	          >
	            <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mb-3">
	              <Phone className="w-6 h-6 text-pink-500" />
	            </div>
	            <p className="font-medium text-slate-800">Emergency Call</p>
	          </motion.div>
	          
	          <motion.div
	            whileHover={{ scale: 1.02 }}
	            className="bg-col-card p-6 rounded-lg shadow-sm flex-1 hover:shadow-md transition-all duration-200 cursor-pointer"
	          >
	            <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mb-3">
	              <MapPin className="w-6 h-6 text-pink-500" />
	            </div>
	            <p className="font-medium text-slate-800">Share Location</p>
	          </motion.div>
	        </div>
	      </section>
	
	      <section>
	        <h2 className="text-lg font-semibold text-pink-800 mb-4">Emergency Message</h2>
	        <motion.div
	          whileHover={{ scale: 1.01 }}
	          className="bg-col-card p-4 rounded-lg shadow-sm border-1 border-gray-300"
	        >
	          <textarea 
	            className="w-full h-28 border-1 border-slate-900 resize-none  rounded-xl p-2 " 
	            defaultValue="I need immediate assistance. This is an emergency."
	          />
	          <div className="flex justify-end mt-2">
	            <motion.button
	              whileHover={{ scale: 1.05 }}
	              whileTap={{ scale: 0.95 }}
	              className="text-white hover:bg-pink-800 font-medium transition-colors duration-200 bg-primary-col px-3 py-2 rounded-3xl "
	            >
	              Save Message
	            </motion.button>
	          </div>
	        </motion.div>
	      </section>
	
	      <section>
	        <h2 className="text-lg font-semibold mb-4 text-primary-col">Auto-Call Settings</h2>
	        <motion.div
	          whileHover={{ scale: 1.01 }}
	          className="bg-col-card p-4 rounded-lg shadow-sm space-y-4"
	        >
	          <div className="flex items-center justify-between text-slate-800">
	            <span>Auto-call primary contact</span>

                <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" defaultChecked />
                <div className="w-11 h-6 bg-gray-400 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-pink-500"></div>
                </label>

	           
              
	          </div>
	          <div className="flex items-center justify-between text-slate-800">
	            <span>Call emergency services</span>
	            <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" />
                <div className="w-11 h-6 bg-gray-400  rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-pink-500"></div>
              </label>
	          </div>
	        </motion.div>
	      </section>
	    </div>
	
	    <div className="space-y-8">
	      <section>
	        <h2 className="text-lg font-semibold mb-4 text-pink-800">Emergency Contacts Priority</h2>
	        <div className="space-y-3">
	          <motion.div
	            whileHover={{ scale: 1.02 }}
	            className="bg-pink-50 p-4 rounded-lg flex items-center justify-between"
	          >
	            <div className="flex items-center gap-3">
	              <span className="bg-pink-500 w-6 h-6 rounded-full flex items-center justify-center text-white text-sm">1</span>
	              <div>
	                <p className="font-medium text-slate-800">Jane Doe</p>
	                <p className="text-sm text-gray-500">Primary Contact</p>
	              </div>
	            </div>
	            <MoreVertical className="w-5 h-5 text-gray-400 hover:text-gray-600 cursor-pointer" />
	          </motion.div>
	
	          <motion.div
	            whileHover={{ scale: 1.02 }}
	            className="bg-pink-50 p-4 rounded-lg flex items-center justify-between"
	          >
	            <div className="flex items-center gap-3">
	              <span className="bg-pink-500 w-6 h-6 rounded-full flex items-center justify-center text-sm text-white">2</span>
	              <div>
	                <p className="font-medium text-slate-800">Mary Smith</p>
	                <p className="text-sm text-gray-500">Secondary Contact</p>
	              </div>
	            </div>
	            <MoreVertical className="w-5 h-5 text-gray-400 hover:text-gray-600 cursor-pointer" />
	          </motion.div>
	        </div>
	      </section>
	
	      <section>
	        <h2 className="text-lg font-semibold mb-4 text-pink-800">Recent SOS Activity</h2>
	        <motion.div
	          whileHover={{ scale: 1.02 }}
	          className="bg-white p-4 rounded-lg shadow-sm"
	        >
	          <div className="flex items-center justify-between">
	            <div className="flex items-center gap-3">
	              <AlertTriangle className="w-10 h-10 text-pink-500 font-bold bg-rose-200 p-2" />
	              <div>
	                <p className="font-medium">SOS Triggered</p>
	                <p className="text-sm text-gray-500">2 hours ago</p>
	              </div>
	            </div>
	            <span className="bg-green-100 text-green-600 px-2 py-1 rounded-xl text-sm">Resolved</span>
	          </div>
	        </motion.div>
	      </section>
	    </div>
	  </div>
	</div>
	 
        </div>
  )
}

export default SOSManagement