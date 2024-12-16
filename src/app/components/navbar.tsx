import Image from "next/image";
import Link from "next/link";


const Header = () => {
    return (
      <div className="h-[100px] bg-amber-100 flex flex-col items-center">
      {/* Header */}
      <header className="w-full py-4 sticky top-5">
      <div className="max-w-7xl mx-auto px-20">
        <nav className="flex justify-between items-center">
          {/* Navigation Links */}
          <ul className="flex items-center justify-center space-x-16 flex-1">
            <li className="text-[#000000] font-medium ">
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
          </ul>
    
          {/* Icons */}
          <div className="flex space-x-8 items-center">
            <Link href="/Account">
              <Image src="/images/user.png" alt="User Profile Icon"  width={24} height={22} />
            </Link>
            <Link href="/search">
              <Image src="/Images/searchicon.png" alt="Search Icon"width={24} height={22} />
            </Link>
            <Link href="/wishlist">
              <Image src="/Images/wishicon.png" alt="Wishlist Icon"width={24} height={22} />
            </Link>
            <Link href="/cart">
              <Image src="/images/cart.png" alt="Shopping Cart Icon" width={24} height={22} />
            </Link>
          </div>
        </nav>
      </div>
    </header>
        </div>
      )
  }
  
  export default Header;