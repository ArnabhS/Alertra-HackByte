import { ShieldAlert, Fingerprint, MapPin, Zap } from "lucide-react";
import { motion } from "framer-motion";

export default function SafetyPage() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 py-12
    bg-gradient-to-b from-[#FDF4F9] to-[#FFFCFD] ">
      {/* Left Section - SOS UI */}
      <div className="relative w-full md:w-1/2 flex justify-center">
        <div className="relative w-[92%] lg:w-[80%] h-[20rem] lg:h-[28rem] bg-pink-100 rounded-xl flex items-center justify-center shadow-lg"> 
          <div className=" w-32 h-32 bg-rose-500 border-pink-500 border-2 opacity-20 rounded-full animate-pulse"></div>
          {/* <div className="w-20 h-20 rounded-full border-2 border-pink-500 flex items-center justify-center animate-pulse">
            <div className="w-6 h-6 bg-pink-500  rounded-full animate-pulse"></div>
          </div> */}
          
          <button className="absolute bottom-4 px-6 py-4 bg-pink-500 text-white font-bold rounded-full shadow-lg">SOS</button>
        </div>
      </div>

      {/* Right Section - Features */}
      <div className="w-full md:w-1/2 space-y-4 mt-8 md:mt-0">
        <h2 className="text-3xl font-bold text-center md:text-left text-gray-800">Advanced Safety Features</h2>
        <p className="text-gray-600 text-center md:text-left">
          Comprehensive protection with cutting-edge technology and real-time monitoring.
        </p>
        
        {/* Feature Cards */}
        <div className="space-y-4">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="flex items-center p-4 bg-pink-100 rounded-lg shadow-md"
              whileHover={{ scale: 1.05, boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.1)" }}
            >
              <div className="p-2 bg-pink-500 text-white rounded-full">
                {feature.icon}
              </div>
              <div className="ml-4">
                <h3 className="font-semibold text-gray-800">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

const features = [
  {
    title: "Biometric Authentication",
    description: "Secure access with fingerprint and facial recognition technology.",
    icon: <Fingerprint size={20} />,
  },
  {
    title: "Safe Zone Mapping",
    description: "Create custom safety zones with automated entry/exit alerts.",
    icon: <MapPin size={20} />,
  },
  {
    title: "Instant SOS Alert",
    description: "One-tap emergency activation with immediate response system.",
    icon: <Zap size={20} />,
  },
  {
    title: "AI Threat Detection",
    description: "Advanced AI algorithms to detect and prevent potential threats.",
    icon: <ShieldAlert size={20} />,
  },
];