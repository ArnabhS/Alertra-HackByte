"use client"

import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useState, useEffect } from "react"

// Testimonial data
const testimonials = [
  {
    id: 1,
    name: "Sarah Brown",
    role: "Student",
    avatar: "SB",
    avatarColor: "bg-pink-100",
    textColor: "text-pink-500",
    quote:
      '"As a college student, Alertra gives me peace of mind when walking across campus late at night. The instant SOS feature is exactly what I needed."',
    rating: 5,
  },
  {
    id: 2,
    name: "Maria Patel",
    role: "Working Professional",
    avatar: "MP",
    avatarColor: "bg-mint-100",
    textColor: "text-emerald-500",
    quote:
      '"The real-time location sharing with my family has been invaluable. It\'s like having a personal security guard in my pocket."',
    rating: 5,
  },
  {
    id: 3,
    name: "Jennifer Lee",
    role: "Parent",
    avatar: "JL",
    avatarColor: "bg-pink-100",
    textColor: "text-pink-500",
    quote:
      '"I got this for my daughter and it\'s been a game changer. The safety zones feature helps me ensure she reaches school safely."',
    rating: 5,
  },
]

export default function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  // Auto-slide functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1)
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  }

  const swipeConfidenceThreshold = 10000
  const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity
  }

  const paginate = (newDirection) => {
    setDirection(newDirection)
    setCurrentIndex((prevIndex) => {
      let newIndex = prevIndex + newDirection
      if (newIndex < 0) newIndex = testimonials.length - 1
      if (newIndex >= testimonials.length) newIndex = 0
      return newIndex
    })
  }

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Trusted by Thousands</h2>
        <p className="text-gray-600 text-lg">
          Real stories from our users about how Alertra helps them feel safer every day
        </p>
      </div>

      <div className="relative h-[400px] md:h-[300px]">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            drag="x"
            dragElastic={1} // Allow slight drag effect
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x)

              if (swipe < -swipeConfidenceThreshold) {
                paginate(1)
              } else if (swipe > swipeConfidenceThreshold) {
                paginate(-1)
              }
            }}
            className="absolute w-full"
          >
            <div className="grid md:grid-cols-3 gap-6">
              {[-1, 0, 1].map((offset) => {
                const testimonialIndex = (currentIndex + offset + testimonials.length) % testimonials.length
                const testimonial = testimonials[testimonialIndex]

                return (
                  <div
                    key={testimonial.id}
                    className="bg-white rounded-xl p-6 shadow-lg transform transition-all duration-300 hover:scale-105"
                  >
                    <div className="flex items-center mb-4">
                      <div
                        className={`w-12 h-12 rounded-full ${testimonial.avatarColor} flex items-center justify-center ${testimonial.textColor} font-semibold text-lg`}
                      >
                        {testimonial.avatar}
                      </div>
                      <div className="ml-4">
                        <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                        <p className="text-gray-600">{testimonial.role}</p>
                      </div>
                    </div>
                    <p className="text-gray-700 mb-4">{testimonial.quote}</p>
                    <div className="flex text-yellow-400">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                )
              })}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Buttons */}
        <button
          onClick={() => paginate(-1)}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-8 bg-white p-2 rounded-full shadow-lg hover:scale-110 transition-transform"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={() => paginate(1)}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-8 bg-white p-2 rounded-full shadow-lg hover:scale-110 transition-transform"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Dots navigation */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1)
                setCurrentIndex(index)
              }}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentIndex ? "bg-blue-600" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
