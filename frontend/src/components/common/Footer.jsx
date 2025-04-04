import { Facebook, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-purple-100 text-slate-600 py-10">
      <div className="container mx-auto px-6 lg:px-20 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Left Section */}
        <div>
          <h2 className="text-2xl font-bold">Alertra</h2>
          <p className="mt-2 text-gray-600">
            Empowering women with smart safety solutions through real-time tracking and instant emergency response.
          </p>
          <div className="flex items-center mt-6 space-x-4 space-y-1">
  {/* Facebook */}
  <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
    <div className="flex bg-blue-600 p-1 rounded-2xl hover:scale-105 transition-transform duration-300">
      <Facebook className="text-white cursor-pointer" size={20} />
    </div>
  </a>

  {/* Twitter */}
  <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
    <div className="flex bg-blue-400 p-1 rounded-2xl hover:scale-105 transition-transform duration-300">
      <Twitter className="text-white cursor-pointer" size={20} />
    </div>
  </a>

  {/* Instagram */}
  <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
    <div className="flex bg-pink-500 p-1 rounded-xl hover:scale-105 transition-transform duration-300">
      <Instagram className="text-white cursor-pointer" size={20} />
    </div>
  </a>
</div>

        </div>

        {/* Middle Section */}
        <div className="flex justify-between">
          <div>
            <h3 className="font-semibold text-lg">Quick Links</h3>
            <ul className="mt-0 space-y-1">
              <li><a href="#" className="hover:text-blue-500">Home</a></li>
              <li><a href="#" className="hover:text-blue-500">Features</a></li>
              <li><a href="#" className="hover:text-blue-500">How It Works</a></li>
              <li><a href="#" className="hover:text-blue-500">Safety Features</a></li>
              <li><a href="#" className="hover:text-blue-500">Pricing</a></li>
              <li><a href="#" className="hover:text-blue-500">FAQ</a></li>
              <li><a href="#" className="hover:text-blue-500">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg">Legal</h3>
            <ul className="mt-0 space-y-1">
              <li><a href="#" className="hover:text-blue-500">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-blue-500">Terms of Service</a></li>
              <li><a href="#" className="hover:text-blue-500">Contact Us</a></li>
              <li><a href="#" className="hover:text-blue-500">Download App</a></li>
              <li><a href="#" className="hover:text-blue-500">FAQ</a></li>
            </ul>
          </div>
        </div>

        {/* Right Section */}
        <div>
        <div className="flex flex-col items-center justify-center">
          <h3 className="font-semibold  text-lg mb-2">Download App</h3>
          <div className="flex flex-col md:flex-row items-center justify-center space-y-2 md:space-y-0 md:space-x-3 mb-6">
  {/* Apple App Store Button */}
  <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer" className="w-30">
    <img 
      src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" 
      alt="Download on the App Store" 
    className="h-10 w-25 hover:scale-105 transition-transform duration-300" 
    />
  </a>

  {/* Google Play Store Button */}
  <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer" className="w-22">
    <img 
      src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" 
      alt="Get it on Google Play" 
      className="h-10 w-25 hover:scale-105 transition-transform duration-300"
    />
  </a>
</div>
</div>
 </div>
</div>
      <hr className="border-t border-gray-300 h-2 my-4 w-full" />

      <div className="text-center text-gray-600 h-2 text-sm mt-4">
        © 2025 Alertra. All rights reserved. Made with ❤️ for women-safety.
      </div>
    </footer>
  );
};
export default Footer;

