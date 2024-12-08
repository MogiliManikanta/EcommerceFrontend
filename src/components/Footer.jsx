import { FaGithubSquare, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-4 md:px-16 lg:px-24">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Company Info */}
        <div>
          <h3 className="text-2xl font-semibold text-white">e-Shop</h3>
          <p className="mt-4 text-sm">
            Your one-stop shop for all your needs. Shop with us and experience
            the best online shopping experience.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col md:items-center">
          <h4 className="text-lg font-semibold text-white">Quick Links</h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <Link to="/" className="hover:text-red-500 transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link to="/shop" className="hover:text-red-500 transition-colors">
                Shop
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-red-500 transition-colors"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="hover:text-red-500 transition-colors"
              >
                About
              </Link>
            </li>
          </ul>
        </div>

        {/* Follow Us & Subscribe */}
        <div>
          <h4 className="text-lg font-semibold text-white">Follow Us</h4>
          <div className="flex space-x-4 mt-4 text-xl">
            <a
              href="#"
              className="hover:text-red-500 transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="#"
              className="hover:text-red-500 transition-colors"
              aria-label="GitHub"
            >
              <FaGithubSquare />
            </a>
          </div>
          <form className="flex mt-8">
            <input
              type="email"
              placeholder="Enter Email"
              className="w-full p-2 rounded-l-lg bg-gray-800 border border-gray-700 focus:ring-2 focus:ring-red-500"
            />
            <button className="bg-red-600 px-4 py-2 rounded-r-lg text-white hover:bg-red-700 transition-all">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="mt-12 border-t border-gray-800 pt-6">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-sm">
          <p>&copy; 2024 e-Shop. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a
              href="#"
              className="hover:text-red-500 transition-colors hover:underline"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="hover:text-red-500 transition-colors hover:underline"
            >
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
