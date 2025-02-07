import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="bg-white py-8 border-t border-gray-200">
      <div className="container mx-auto px-4 md:px-12">
        {/* Follow Us Section */}
        <div className="mt-8 text-center mb-6">
          <h3 className="text-gray-500 text-lg font-medium mb-4">Follow Us</h3>
          <div className="flex justify-center space-x-8">
            <div className="aspect-auto object-contain flex gap-8">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <Image src="/Images/facebook-icon.jpeg" alt="Facebook" width={48} height={48} className="transition-transform transform hover:scale-110" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <Image src="/Images/twitter-icon.jpeg" alt="Twitter" width={48} height={48} className="transition-transform transform hover:scale-110" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <Image src="/Images/insta-icon.jpeg" alt="Instagram" width={48} height={48} className="transition-transform transform hover:scale-110" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <Image src="/Images/linkedn-icon.jpeg" alt="LinkedIn" width={48} height={48} className="transition-transform transform hover:scale-110" />
            </a></div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="flex justify-between flex-wrap gap-8">
          {/* Address */}
          <div className="text-gray-600 text-sm w-full sm:w-1/2 md:w-1/4">
            <p>400 University Drive Suite 200 Coral Gables,</p>
            <p>FL 33134 USA</p>
          </div>

          {/* Links */}
          <div className="w-full sm:w-1/2 md:w-1/4">
            <h3 className="text-gray-500 text-sm font-medium mb-3">Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-800 hover:text-gray-900 transition">Home</a></li>
              <li><a href="/Shop" className="text-gray-800 hover:text-gray-900 transition">Shop</a></li>
              <li><a href="/About" className="text-gray-800 hover:text-gray-900 transition">About</a></li>
              <li><a href="/Contact" className="text-gray-800 hover:text-gray-900 transition">Contact</a></li>
            </ul>
          </div>

          {/* Help */}
          <div className="w-full sm:w-1/2 md:w-1/4">
            <h3 className="text-gray-500 text-sm font-medium mb-3">Help</h3>
            <ul>
              <li><a href="/checkout" className="text-gray-800 hover:text-gray-900 transition">Payment Options</a></li>
              <li><a href="#" className="text-gray-800 hover:text-gray-900 transition">Return</a></li>
              <li><a href="#" className="text-gray-800 hover:text-gray-900 transition">Privacy Policies</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="w-full sm:w-1/2 md:w-1/4">
            <h3 className="text-gray-500 text-sm font-medium mb-3">Newsletter</h3>
            <div className="flex items-center">
              <input type="email" placeholder="Enter Your Email Address" className="flex-1 px-4 py-2 border-gray-300 rounded-l-md focus:outline-none focus:ring-1 focus:ring-gray-400" />
              <button className="bg-black text-white px-4 py-2 rounded-r-md hover:bg-gray-800 transition">Subscribe</button>
            </div>
          </div>
        </div>

        {/* FAQ & Help Center Button */}
        <div className="mt-8 flex justify-center">
          <Link href="/faq&helpCenter">
            <button className="bg-blue-600 text-white py-2 px-6 rounded-md text-lg font-medium hover:bg-blue-700 transition shadow-md">
              FAQ & Help Center
            </button>
          </Link>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 text-center text-gray-600 text-sm">
          <hr />
          <p className="pt-4">2022 Meubel House. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;