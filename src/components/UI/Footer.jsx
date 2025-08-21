import { NavLink } from "react-router-dom";
import { FaInstagram, FaLinkedin, FaFacebook, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-yellow-300 py-12">
      <div className="container mx-auto px-6 grid md:grid-cols-3 gap-8 text-center md:text-left">
        <div>
          <h2 className="text-xl font-bold mb-4">Contact Us</h2>
          <p className="mb-2 flex items-center justify-center md:justify-start gap-2">
            <FaMapMarkerAlt /> Street # 03 E-17/3, Islamabad, Pakistan
          </p>
          <p className="mb-2 flex items-center justify-center md:justify-start gap-2">
            <FaPhoneAlt /> +92 332 5194422
          </p>
          <p className="mb-2 flex items-center justify-center md:justify-start gap-2">
            <FaEnvelope /> mumarh135@gmail.com.com
          </p>
        </div>

        <div>
          <h2 className="text-xl font-bold mb-4">Quick Links</h2>
          <div className="flex flex-col space-y-2">
            <NavLink
              to="/"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="hover:text-yellow-400"
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="hover:text-yellow-400"
            >
              About
            </NavLink>
            <NavLink
              to="/country"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="hover:text-yellow-400"
            >
              Country
            </NavLink>
            <NavLink
              to="/contact"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="hover:text-yellow-400"
            >
              Contact
            </NavLink>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-bold mb-4">Follow Us</h2>
          <div className="flex justify-center md:justify-start space-x-4 text-2xl">
            <a href="https://www.instagram.com/m_umar_hassan" target="_blank" rel="noreferrer" className="hover:text-yellow-400">
              <FaInstagram />
            </a>
            <a href="https://www.linkedin.com/in/m-umarh" target="_blank" rel="noreferrer" className="hover:text-yellow-400">
              <FaLinkedin />
            </a>
            <a href="https://www.facebook.com/muhammadumar.hassan.581" target="_blank" rel="noreferrer" className="hover:text-yellow-400">
              <FaFacebook />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-12 text-center border-t border-yellow-400 pt-4 text-sm text-gray-400">
        &copy; {new Date().getFullYear()} WorldAtlas. All rights reserved.
      </div>
    </footer>
  );
};
