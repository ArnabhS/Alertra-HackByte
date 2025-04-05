import { MapPin, Phone, Shield, Users, ClipboardCheck, BarChart3 } from 'lucide-react'

export default function FeaturesPage() {
  const features = [
    {
      icon: MapPin,
      title: "Real-time Tracking",
      description: "Live location tracking with GPS precision and instant updates to trusted contacts"
    },
    {
      icon: Phone,
      title: "One-Tap SOS",
      description: "Instant emergency alerts with your location sent to emergency contacts and authorities"
    },
    {
      icon: Shield,
      title: "AI-Powered Security",
      description: "Smart threat detection and predictive alerts using advanced AI algorithms"
    },
    {
      icon: Users,
      title: "Trusted Contacts",
      description: "Add and manage verified emergency contacts for immediate response"
    },
    {
      icon: ClipboardCheck,
      title: "Safety Zones",
      description: "Set up custom safe zones with automatic notifications for zone exits"
    },
    {
      icon: BarChart3,
      title: "Safety Analytics",
      description: "Detailed safety reports and insights for better security awareness"
    }
  ]

  return (
    <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className=" w-[96%] lg:w-[90%] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-pink-500 sm:text-4xl">
            Comprehensive Safety Features
          </h2>
          <p className="mt-4 text-lg tracking-tight leading-6 text-slate-600 max-w-3xl mx-auto">
            Advanced security features designed to keep you protected 24/7 with real-time tracking and instant emergency response
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative group bg-[#FDF2F9] rounded-xl p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-500 to-pink-600 rounded-xl opacity-0 group-hover:opacity-10 transition duration-300" />
              <div className="relative">
                <div className="w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center mb-5 transform group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}