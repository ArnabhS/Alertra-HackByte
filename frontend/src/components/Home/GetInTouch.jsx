const GetInTouch = () => {
  return (
    <div className="bg-white text-gray-900 min-h-screen flex items-center justify-center p-6">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Contact Form */}
        <div className="bg-gray-100 p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
          <p className="text-gray-600 mb-6">
            Have questions about Alertra? We&apos;re here to help 24/7.
          </p>
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Full Name"
                className="p-3 border rounded-lg w-full"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="p-3 border rounded-lg w-full"
              />
            </div>
            <select className="p-3 border rounded-lg w-full">
              <option>Technical Support</option>
              <option>Safety Inquiry</option>
              <option>Billing Quetion</option>
              <option>Partnership</option>
              <option>Other</option>
            </select>
            <textarea
              placeholder="Your message"
              className="p-3 border rounded-lg w-full h-32 resize-none overflow-y-auto"
            ></textarea>
            <button className="bg-pink-500 text-white py-3 px-6 rounded-lg w-full hover:bg-pink-600">
              Send Message →
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="bg-gray-100 p-8 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold mb-4">Emergency Support</h3>
          <div className="mb-6">
            <p className="font-semibold">24/7 Emergency Hotline</p>
            <p className="text-pink-600 font-bold">1-800-ALERTRA</p>
          </div>
          <div className="mb-6">
            <p className="font-semibold">Email Support</p>
            <p className="text-green-600">support@alertra.com</p>
          </div>
          <hr className="my-6 border-gray-300" />
          <h4 className="text-xl font-semibold mb-4">Follow Us</h4>
          <div className="flex space-x-4">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
                alt="Facebook"
                className="w-8 h-8 hover:opacity-80"
              />
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/5/53/X_logo_2023_original.svg"
                alt="Twitter"
                className="w-8 h-8 hover:opacity-80"
              />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
                alt="Instagram"
                className="w-8 h-8 hover:opacity-80"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
