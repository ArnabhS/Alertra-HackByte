import { motion } from "framer-motion";
import { AlertTriangle, MapPin, UserPlus, CalendarCheck, Filter, Upload } from "lucide-react";

const notifications = [
  {
    title: "SOS Alert Triggered",
    description: "Emergency alert triggered at Central Park. Location shared with emergency contacts.",
    time: "2 hours ago",
    status: "Active",
    statusColor: "bg-red-200 text-red-600",
    icon: <AlertTriangle className="text-red-500" />,
    category: "Today",
  },
  {
    title: "Safe Zone Exit",
    description: 'You have left the "Home" safe zone.',
    time: "5 hours ago",
    status: "Resolved",
    statusColor: "bg-blue-200 text-blue-600",
    icon: <MapPin className="text-pink-500" />,
    category: "Today",
  },
  {
    title: "New Contact Added",
    description: 'Emergency contact "Jane Doe" has been added and verified.',
    time: "1 day ago",
    status: "Verified",
    statusColor: "bg-green-200 text-green-600",
    icon: <UserPlus className="text-pink-500" />,
    category: "Yesterday",
  },
  {
    title: "System Update",
    description: "New safety features have been added to your account.",
    time: "3 days ago",
    status: null,
    statusColor: "",
    icon: <CalendarCheck className="text-pink-500" />,
    category: "Earlier this Week",
  },
];

const History = () => {
  return (
    <div className="bg-pink-50 min-h-screen p-6 md:p-10">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-pink-500">Notification History</h1>
          <p className="text-gray-600 text-sm md:text-base">
            View and manage your past notifications and alerts
          </p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2 text-sm md:text-base bg-white shadow-md rounded-lg hover:bg-gray-100 transition">
            <Filter size={18} />
            Filter
          </button>
          <button className="flex items-center gap-2 px-4 py-2 text-sm md:text-base bg-white shadow-md rounded-lg hover:bg-gray-100 transition">
            <Upload size={18} />
            Export
          </button>
        </div>
      </div>

      {/* Notifications */}
      <div className="bg-white p-4 md:p-6 rounded-lg shadow-lg">
        {["Today", "Yesterday", "Earlier this Week"].map((category) => (
          <div key={category} className="mb-6">
            <h2 className="text-lg md:text-xl font-semibold text-slate-800 mb-3">{category}</h2>
            {notifications
              .filter((n) => n.category === category)
              .map((notif, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2, delay: index * 0.1 }}
                  className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50 transition"
                >
                  <div className="p-3 rounded-full bg-pink-100">{notif.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-md md:text-lg font-semibold text-pink-800">{notif.title}</h3>
                    <p className="text-gray-600 text-sm md:text-base">{notif.description}</p>
                    <p className="text-gray-500 text-xs mt-1">{notif.time}</p>
                  </div>
                  {notif.status && (
                    <span
                      className={`text-xs font-medium px-3 py-1 rounded-full ${notif.statusColor}`}
                    >
                      {notif.status}
                    </span>
                  )}
                </motion.div>
              ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default History;
