
const SafetyFeatures = () => {
    const features = [
      {
        icon: "📍",
        title: "Real-Time Location Tracking",
        description:
          "Advanced GPS tracking with custom safety zones and automatic alerts for unusual movements.",
      },
      {
        icon: "🔒",
        title: "One-Tap SOS Alert",
        description:
          "Instant emergency activation with automatic notifications to trusted contacts and authorities.",
      },
      {
        icon: "🛡️",
        title: "Smart ID Verification",
        description:
          "Secure authentication with facial recognition and multi-factor verification system.",
      },
      {
        icon: "📞",
        title: "Emergency Contacts",
        description:
          "Manage and instantly alert your trusted network during emergencies.",
      },
      {
        icon: "📊",
        title: "Safety Analytics",
        description:
          "Detailed safety reports and movement patterns for better security insights.",
      },
      {
        icon: "📴",
        title: "Offline Mode",
        description:
          "Critical safety features available even without internet connectivity.",
      },
    ];
  
    return (
      <section className="py-16 bg-gray-50 text-gray-900">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">
            Smart Features for Your Safety
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Advanced security features designed to keep you protected 24/7 with
            real-time monitoring and instant emergency response.
          </p>
  
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center text-center transition-transform transform hover:-translate-y-2"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold">{feature.title}</h3>
                <p className="text-gray-600 mt-2">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default SafetyFeatures;