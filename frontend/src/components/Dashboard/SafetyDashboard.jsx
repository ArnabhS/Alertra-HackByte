"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Camera, Check } from "lucide-react"
import { Switch } from "../../components/ui/switch"
import { Button } from "../../components/ui/button"
import { Input } from "../../components/ui/input"

export default function ProfileSettings() {
  const [notifications, setNotifications] = useState({
    push: true,
    email: true,
    sms: false,
  })

  const handlePhotoChange = (e) => {
    // Handle photo upload
    console.log("Photo changed:", e.target.files[0])
  }

  return (
    <div className="min-h-screen  p-4 md:p-6 lg:p-8 bg-gradient-to-b from-[#FDF4F9] to-[#FFFCFD]">
      <motion.div
        className=" space-y-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Header */}
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-pink-500">Profile Settings</h1>
          <p className="text-slate-600 mt-1">Manage your account and preferences</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Settings */}
          <div className="lg:col-span-2 space-y-8">
            {/* Personal Information */}
            <motion.section
              className="bg-white rounded-xl p-6 shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <h2 className="text-xl font-semibold text-pink-800 mb-6 ">Personal Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">Full Name</label>
                  <Input type="text" defaultValue="Sarah Johnson" className="w-full" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">Email Address</label>
                  <Input type="email" defaultValue="sarah@example.com" className="w-full" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">Phone Number</label>
                  <Input type="tel" defaultValue="+91 23465 67890" className="w-full" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">Date of Birth</label>
                  <Input type="date" className="w-full" />
                </div>
              </div>
            </motion.section>

            {/* Security Settings */}
            <motion.section
              className="bg-white rounded-xl p-6 shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-xl font-semibold text-pink-800 mb-6">Security Settings</h2>
              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">Current Password</label>
                  <Input type="password" className="w-full" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">New Password</label>
                  <Input type="password" className="w-full" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">Confirm New Password</label>
                  <Input type="password" className="w-full" />
                </div>
              </div>
            </motion.section>

            {/* Notification Preferences */}
            <motion.section
              className="bg-gray-50 rounded-xl p-6 shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h2 className="text-xl font-semibold text-pink-500 mb-6">Notification Preferences</h2>
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium text-pink-800">Push Notifications</h3>
                    <p className="text-sm text-slate-500">Receive alerts on your device</p>
                  </div>
                  
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" defaultChecked />
                    <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-pink-500"></div>
                    </label>

                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium text-pink-800">Email Notifications</h3>
                    <p className="text-sm text-slate-500">Receive alerts via email</p>
                  </div>
                  
                  <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" />
                <div className="w-11 h-6 bg-gray-200  rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-pink-500"></div>
              </label>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium text-pink-800">SMS Notifications</h3>
                    <p className="text-sm text-slate-500">Receive alerts via SMS</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" defaultChecked />
                    <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-pink-500"></div>
                    </label>

                </div>
              </div>
            </motion.section>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Profile Photo */}
            <motion.section
              className="bg-white rounded-xl p-6 shadow-sm text-center"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <div className="relative inline-block">
                <div className="w-24 h-24 rounded-full bg-pink-100 flex items-center justify-center text-pink-600 text-2xl font-semibold mb-4 mx-auto">
                  SJ
                </div>
                <label className="absolute bottom-0 right-0 bg-white rounded-full p-2 shadow-md cursor-pointer hover:bg-slate-50 transition-colors duration-200">
                  <Camera size={20} className="text-slate-600" />
                  <input type="file" className="hidden" accept="image/*" onChange={handlePhotoChange} />
                </label>
              </div>
              <button className="text-rose-600 hover:text-rose-700 text-sm font-medium">Change Photo</button>
            </motion.section>

            {/* Account Status */}
            <motion.section
              className="bg-white rounded-xl p-6 shadow-sm"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
            >
              <h2 className="text-xl font-semibold text-pink-800 mb-4">Account Status</h2>
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-sm">
                  <Check size={16} className="text-emerald-500" />
                  <span className="text-slate-600">Email Verified</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Check size={16} className="text-emerald-500" />
                  <span className="text-slate-600">Phone Verified</span>
                </div>
              </div>
            </motion.section>

            {/* Danger Zone */}
            <motion.section
              className="bg-white rounded-xl p-6 shadow-sm"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
            >
              <h2 className="text-xl font-semibold text-pink-800 mb-4">Danger Zone</h2>
              <Button variant="destructive" className="w-full rounded-xl bg-col-mid text-rose-600 hover:bg-red-400 hover:text-white">
                Delete Account
              </Button>
            </motion.section>
          </div>
        </div>

        {/* Save Button */}
        <motion.div
          className="flex justify-end"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          <Button size="lg" className=" rounded-3xl font-bold bg-pink-600 hover:bg-rose-700 text-white">
            Save Changes
          </Button>
        </motion.div>
      </motion.div>
    </div>
  )
}

