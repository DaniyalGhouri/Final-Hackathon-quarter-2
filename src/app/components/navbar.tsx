'use client'
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="h-[100px] bg-amber-100 flex flex-col items-center justify-center">
      {/* Header */}
      <header className="w-full py-4 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 md:px-16 lg:px-20">
          <nav className="flex justify-between items-center">
            {/* Logo & Navigation Links */}
            <div className="flex items-center justify-between w-full">
              {/* Desktop and tablet navigation links */}
              <ul className="hidden md:flex items-center justify-center space-x-14 flex-1">
                <li className="text-[#000000] font-medium">
                  <a href="/">Home</a>
                </li>
                <li className="text-[#000000] font-medium">
                  <a href="/Shop">Shop</a>
                </li>
                <li className="text-[#000000] font-medium">
                  <a href="/About">About</a>
                </li>
                <li className="text-[#000000] font-medium">
                  <a href="/Contact">Contact</a>
                </li>
                {/* Profile Link */}
                <li className="text-[#000000] font-medium">
                  <Link href="/profile">Profile</Link>
                </li>
              </ul>

              {/* Mobile Hamburger Menu */}
              <div className="md:hidden flex items-center" onClick={toggleMenu}>
                <Image
                  src="/Images/hamburger-icon.jpeg"
                  alt="Hamburger Menu"
                  width={30}
                  height={30}
                />
              </div>

              {/* Icons */}
              <div className="flex space-x-6 items-center">
                <Link href="/Account">
                  <Image
                    src="/Images/user.png"
                    alt="User Profile Icon"
                    width={24}
                    height={22}
                  />
                </Link>
                {/* Search Icon */}
                <Link href="/search">
                  <Image
                    src="/Images/searchicon.png"
                    alt="Search Icon"
                    width={24}
                    height={22}
                  />
                </Link>
                <Link href="/wishlist">
                  <Image
                    src="/Images/wishicon.png"
                    alt="Wishlist Icon"
                    width={24}
                    height={22}
                  />
                </Link>
                <Link href="/cart">
                  <Image
                    src="/Images/cart.png"
                    alt="Shopping Cart Icon"
                    width={24}
                    height={22}
                  />
                </Link>
              </div>
            </div>
          </nav>
        </div>

        {/* Mobile Menu (shown when menu is toggled) */}
        {isMenuOpen && (
          <div className="md:hidden bg-amber-200 w-full py-4">
            <ul className="text-center space-y-4">
              <li className="font-medium">
                <a href="/">Home</a>
              </li>
              <li className="font-medium">
                <a href="/Shop">Shop</a>
              </li>
              <li className="font-medium">
                <a href="/About">About</a>
              </li>
              <li className="font-medium">
                <a href="/Contact">Contact</a>
              </li>
              <li className="font-medium">
                <Link href="/profile">Profile</Link>
              </li>
            </ul>
          </div>
        )}
      </header>
    </div>
  );
};

export default Header;
