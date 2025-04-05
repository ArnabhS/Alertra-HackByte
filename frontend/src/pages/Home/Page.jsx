import React from "react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import safety from "../../assets/Home/safety.mp4"
import FeaturesPage from "../Features/Page"
import TimelinePage from "../Timeline/Page"
import SafetyPage from "../SafetyFeatures/Page"
import FrequentlyAskedQ from "../../components/Home/FrequentlyAskedQ"
import GetInTouch from "../../components/Home/GetInTouch"
import DetailsPage from "../Details/Page"
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";  
import Navbar from "../../components/common/Navbar"

const Home = () => {
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate(); 

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
    
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all ${scrolled ? "bg-pink-600 shadow-lg" : "bg-[#FFB2DC]"} rounded-b-3xl`}
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      />
      <div className="relative w-full min-h-screen flex items-center justify-center py-4 md:py-4 lg:py-12 px-4 md:px-6 lg:px-8 mb-12">
        
        <motion.img 
          src="/banner.svg" 
          alt="Background" 
          className="absolute w-full h-full object-cover" 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />

        <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between backdrop-blur-sm rounded-lg gap-2 lg:gap-4">
          {/* Left Content */}
          <motion.div
            className="text-white w-full lg:w-[44%] relative z-10 p-1 md:p-4 lg:mt-0"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold leading-tight">
              Stay Safe with <span className="text-pink-200">Alertra Smart ID</span>
            </h1>
            <p className=" mt-2 md:mt-4 md:text-base text-sm text-gray-200">
              Real-time location tracking and emergency alert system designed for women&apos;s safety
            </p>
            <div className="mt-6 flex flex-col sm:flex-row space-y-2 md:space-y-0 md:space-x-4">
              <motion.button
                className="px-6 py-2 md:py-3 bg-white text-sm md:text-base text-pink-500 font-semibold rounded-full shadow-lg hover:bg-gray-100 transition"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate("/login")}  // ✅ Redirect to login page
              >
                Get Started
              </motion.button>
              <motion.button
                className="px-6 py-2 lg:py-3 border border-white text-white font-semibold rounded-full shadow-lg hover:bg-white/20 transition text-sm md:text-base"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More
              </motion.button>
            </div>
          </motion.div>

          {/* Right Video Box */}
          <motion.div
            className="relative w-[96%] lg:w-[50%] h-44 md:h-50 lg:h-80 p-4 lg:p-7 bg-[#44232c] rounded-xl flex items-center justify-center overflow-hidden shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <div className="absolute inset-0 -m-1 rounded-lg bg-gradient-to-br from-[#d38469] via-[#98e7ac] to-[#b8a9e5] z-[-1]" />
            <div className="absolute inset-0 m-1 rounded-lg bg-[#44232c] z-[-1]" />
            <motion.video
              src={safety}
              autoPlay
              loop
              muted
              playsInline
              className=" w-full h-full object-cover rounded-lg shadow-lg"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            />
          </motion.div>
        </div>
      </div>

      <DetailsPage/>
      <FeaturesPage />
      <TimelinePage />
      <SafetyPage />
      <FrequentlyAskedQ/>    
      <GetInTouch/>  
    </>
  )
}

export default Home
