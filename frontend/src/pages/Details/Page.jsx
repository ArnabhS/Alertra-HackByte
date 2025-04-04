import { motion } from "framer-motion"
import PhoneMockup from "../../components/Home/PhoneMockup"
import mapImage from "../../assets/Location/map.png";

export default function DetailsPage() {
  return (
    <div className="relative min-h-screen w-[96%] mx-auto overflow-hidden  px-4 py-12 sm:px-6 lg:px-8 bg-gradient-to-b from-[#FEF9FC] via-[#FEF6FA] to-[#FEF3F9]">
      {/* Background Circles */}
      <motion.div
        className="absolute right-0 -top-6 h-64 w-64 rounded-full bg-[#FBCFE8] opacity-50 animate-bounce"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1.5, opacity: 0.6 }}
        transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
      />
      <motion.div
        className="absolute bottom-20 right-[34rem] h-28 w-28 rounded-full bg-[#FF1493] opacity-50 animate-bounce"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1.5, opacity: 0.6 }}
        transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse", delay: 0.5 }}
      />

      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:justify-between">
          {/* Left Content */}
          <motion.div
            className="w-full lg:w-1/2"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-4xl font-bold leading-tight text-gray-900 sm:text-5xl lg:text-6xl">
              Your Personal Safety
              <br />
              <span className="text-pink-500">Made Smart & Simple</span>
            </h1>
            <p className="mt-6 text-sm lg:text-lg text-gray-600 text-justify">
              Experience peace of mind with real-time tracking, instant SOS alerts, and AI-powered safety features
              designed specifically for women&apos;s protection.
            </p>

            <div className="mt-8 flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
              <motion.button
                className="rounded-full bg-pink-500 px-8 py-3 font-semibold text-white shadow-lg transition-colors hover:bg-pink-600"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Download App
              </motion.button>
              <motion.button
                className="rounded-full border-2 border-pink-500 px-8 py-3 font-semibold text-pink-500 shadow-lg transition-colors hover:bg-pink-50"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More
              </motion.button>
            </div>

            <div className="mt-8 flex items-center space-x-2">
              <div className="flex -space-x-2">
             
                <div className="h-6 w-6 rounded-full bg-pink-300" />
                <div className="h-6 w-6 rounded-full bg-pink-400" />
                <div className="h-6 w-6 rounded-full bg-pink-500" />
              </div>
              <span className="ml-2 font-semibold text-gray-700">
                <span className="text-pink-500">10,000+</span> active users
              </span>
            </div>
          </motion.div>

          {/* Right Content - Phone Mockup */}
          <motion.div
            className="w-full lg:w-5/12"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <PhoneMockup>
              
               <img src={mapImage} alt="Map" className="w-full h-full object-cover" />
            </PhoneMockup>
          </motion.div>
        </div>
      </div>
    </div>
  )
}