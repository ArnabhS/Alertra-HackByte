'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Phone, Mail, MoreVertical, Plus, X } from 'lucide-react'

const contacts = [
  {
    id: 1,
    name: 'Jane Doe',
    type: 'Primary Contact',
    phone: '+1 234 567 890',
    email: 'jane.doe@example.com',
    initials: 'JD'
  },
  {
    id: 2,
    name: 'Mary Smith',
    type: 'Secondary Contact',
    phone: '+1 345 678 901',
    email: 'mary.smith@example.com',
    initials: 'MS'
  }
]

export default function EmergencyContacts() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [editingContact, setEditingContact] = useState(null)

  const openModal = (contact = null) => {
    setEditingContact(contact)
    setIsModalOpen(true)
  }

  return (
    <div className="p-4 md:p-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-xl md:text-3xl font-bold text-rose-800">Emergency Contacts</h1>
          <p className="text-slate-600 mt-1">Manage your trusted emergency contacts</p>
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => openModal()}
          className="bg-primary-col hover:bg-pink-800 text-white px-4 py-2 rounded-3xl flex items-center gap-2 transition-colors duration-200"
        >
          <Plus size={20} />
          Add Contact
        </motion.button>
      </div>

      {/* Contacts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <AnimatePresence>
          {contacts.map((contact) => (
            <motion.div
              key={contact.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="bg-col-card rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-pink-200 flex items-center justify-center text-pink-600 font-semibold text-lg">
                    {contact.initials}
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">{contact.name}</h3>
                    <p className="text-sm text-slate-500">{contact.type}</p>
                  </div>
                </div>
                <div className="relative group">
                  <button className="p-2 hover:bg-slate-100 rounded-full transition-colors duration-200">
                    <MoreVertical size={20} className="text-slate-600" />
                  </button>
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-10">
                    <button 
                      onClick={() => openModal(contact)}
                      className="w-full text-left px-4 py-2 hover:bg-slate-100 text-slate-700 first:rounded-t-lg"
                    >
                      Edit
                    </button>
                    <button className="w-full text-left px-4 py-2 hover:bg-slate-100 text-rose-600 last:rounded-b-lg">
                      Remove
                    </button>
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-slate-600">
                  <Phone size={16} />
                  <span>{contact.phone}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-600">
                  <Mail size={16} />
                  <span>{contact.email}</span>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Add New Contact Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col items-center justify-center min-h-[200px] cursor-pointer"
            onClick={() => openModal()}
          >
            <div className="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center mb-4">
              <Plus size={24} className="text-pink-600" />
            </div>
            <h3 className="font-semibold text-slate-900 mb-1">Add New Contact</h3>
            <p className="text-sm text-slate-500 text-center">Click to add a new emergency contact</p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-xl p-6 w-full max-w-md"
            >
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold text-slate-900">
                  {editingContact ? 'Edit Contact' : 'Add New Contact'}
                </h2>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="p-2 hover:bg-slate-100 rounded-full transition-colors duration-200"
                >
                  <X size={20} className="text-slate-600" />
                </button>
              </div>
              
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
                  <input
                    type="text"
                    defaultValue={editingContact?.name}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                    placeholder="Enter full name"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Contact Type</label>
                  <select
                    defaultValue={editingContact?.type || "Primary Contact"}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  >
                    <option>Primary Contact</option>
                    <option>Secondary Contact</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Phone Number</label>
                  <input
                    type="tel"
                    defaultValue={editingContact?.phone}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                    placeholder="Enter phone number"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                  <input
                    type="email"
                    defaultValue={editingContact?.email}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                    placeholder="Enter email address"
                  />
                </div>

                <div className="flex gap-3 pt-4">
                  <button
                    type="submit"
                    className="flex-1 bg-rose-600 hover:bg-rose-700 text-white px-4 py-2 rounded-lg transition-colors duration-200"
                  >
                    {editingContact ? 'Save Changes' : 'Add Contact'}
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="flex-1 bg-slate-100 hover:bg-slate-200 text-slate-700 px-4 py-2 rounded-lg transition-colors duration-200"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
