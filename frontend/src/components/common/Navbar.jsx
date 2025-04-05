
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Detect login changes
  useEffect(() => {
    const checkAuth = () => {
      setToken(localStorage.getItem("token")); // Update token state when localStorage changes
    };

    window.addEventListener("storage", checkAuth); // Listen for localStorage updates
    return () => window.removeEventListener("storage", checkAuth);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setToken(null);
    navigate("/login");
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b rounded-b-3xl ${
        scrolled ? "bg-pink-100 shadow-md" : "bg-[#FFB2DC]"
      }`}
      initial={{ y: -50 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.2 }}
    >
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-16 md:h-[4.6rem]">
          <Link to="/" className="text-xl md:text-2xl font-semibold tracking-tight text-rose-800">
            Alertra
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {["Home", "Features", "How It Works", "Safety", "FAQ", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                className="text-base font-medium text-rose-800 hover:text-gray-800 transition-colors"
              >
                {item}
              </a>
            ))}
          </div>

          <div className="relative">
            {token ? (
              <div className="relative">
                <button onClick={() => setDropdownOpen(!dropdownOpen)} className="relative">
                  <img
                    src="https://i.pravatar.cc/40"
                    alt="Profile"
                    className="w-10 h-10 rounded-full cursor-pointer border border-gray-300"
                  />
                </button>

                {dropdownOpen && (
                  <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-lg overflow-hidden">
                    <Link
                      to="/profile"
                      className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-200"
                      onClick={() => setDropdownOpen(false)}
                    >
                      Profile
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="w-full text-left px-4 py-2 text-sm text-gray-800 hover:bg-gray-200"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <button
                onClick={() => navigate("/sign-up")}
                className="hidden md:inline-flex bg-[#FF1493] text-white px-6 py-2 rounded-full text-sm"
              >
                Sign Up/Login
              </button>
            )}
          </div>

          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden p-2" aria-label="Menu">
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </nav>
      </div>
    </motion.header>
  );
}

