

const Header = () => {
    return (
      <div className="h-[100px] bg-[#FBEBB5] flex flex-col items-center">
      {/* Header */}
      <header className="w-full py-4 sticky top-5">
      <div className="max-w-7xl mx-auto px-20">
        <nav className="flex justify-between items-center">
          {/* Navigation Links */}
          <ul className="flex items-center justify-center space-x-16 flex-1">
            <li className="text-[#000000] font-medium font-[poppins]">
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
            <a href="/Account">
              <img src="/images/user.png" alt="User Profile Icon" className="w-6 h-6" />
            </a>
            <a href="/search">
              <img src="/Images/searchicon.png" alt="Search Icon" className="w-6 h-6" />
            </a>
            <a href="/wishlist">
              <img src="/Images/wishicon.png" alt="Wishlist Icon" className="w-6 h-6" />
            </a>
            <a href="/cart">
              <img src="/images/cart.png" alt="Shopping Cart Icon" className="w-6 h-6" />
            </a>
          </div>
        </nav>
      </div>
    </header>
        </div>
      )
  }
  
  export default Header;