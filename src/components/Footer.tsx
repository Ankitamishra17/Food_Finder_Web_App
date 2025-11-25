import React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-700 text-gray-300 mt-10 py-10">
      <div className="max-w-6xl mx-auto px-5 grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* Logo + About */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-3">FoodFinder</h3>
          <p className="text-sm leading-6">
           FoodFinder brings to you a collection of carefully selected foods from India.
            In our passionate search to offer food that is unique and full of flavor.
          </p>
        </div>

        {/* Company */}
        <div>
          <h4 className="text-lg text-white font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2">
            <li><Link to="/about" className="hover:text-white">About Us</Link></li>
            <li><Link to="/careers" className="hover:text-white">Careers</Link></li>
            <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h4 className="text-lg text-white font-semibold mb-3">Support</h4>
          <ul className="space-y-2">
            <li><Link to="/faq" className="hover:text-white">FAQ</Link></li>
            <li><Link to="/help" className="hover:text-white">Help Center</Link></li>
            <li><Link to="/privacy" className="hover:text-white">Privacy Policy</Link></li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h4 className="text-lg text-white font-semibold mb-3">Let's Connect</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white">Instagram</a></li>
            <li><a href="#" className="hover:text-white">Facebook</a></li>
            <li><a href="#" className="hover:text-white">Twitter</a></li>
          </ul>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm">
        © {new Date().getFullYear()} FoodFinder. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
