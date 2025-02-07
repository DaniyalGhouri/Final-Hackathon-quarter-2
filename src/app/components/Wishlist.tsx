'use client';

import React, { createContext, useContext, useState } from 'react';
import Link from 'next/link'; // Import Link component for routing
import Banner from './banner'; // Assuming Banner component is imported correctly
import Image from 'next/image';

interface Product {
  _id: string;
  name: string;
  price: number;
  imageUrl: string;
}

interface WishlistContextType {
  wishlist: Product[];
  addToWishlist: (product: Product) => void;
}

const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

export const WishlistProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [wishlist, setWishlist] = useState<Product[]>([]);

  const addToWishlist = (product: Product) => {
    if (!wishlist.find((item) => item._id === product._id)) {
      setWishlist([...wishlist, product]);
    }
  };

  return (
    <WishlistContext.Provider value={{ wishlist, addToWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => {
  const context = useContext(WishlistContext);
  if (!context) throw new Error('useWishlist must be used within a WishlistProvider');
  return context;
};

const Wishlist: React.FC = () => {
  const { wishlist } = useWishlist();

  return (
    <div className="w-full min-h-screen bg-gray-100">
      {/* Banner */}
      <header className="relative bg-cover bg-center h-70">
        <Banner />
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center mt-[221px] text-white text-center">
          <div>
            <h1 className="text-5xl font-bold">Wishlist</h1>
            <p className="text-xl mt-4">
              <Link href="/">Home</Link> &gt; Wishlist
            </p>
          </div>
        </div>
      </header>

      {/* Wishlist Table */}
      <div className="p-4 sm:p-6 bg-white rounded-lg shadow-lg mt-6 max-w-4xl mx-auto">
        <h2 className="text-xl sm:text-2xl font-bold mb-4">My Wishlist</h2>
        {wishlist.length === 0 ? (
          <p className="text-gray-500">No items in the wishlist.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full border border-gray-300">
              <thead>
                <tr className="bg-gray-200">
                  <th className="border px-2 sm:px-4 py-2 text-xs sm:text-sm">Image</th>
                  <th className="border px-2 sm:px-4 py-2 text-xs sm:text-sm">Name</th>
                  <th className="border px-2 sm:px-4 py-2 text-xs sm:text-sm">Price</th>
                </tr>
              </thead>
              <tbody>
                {wishlist.map((product) => (
                  <tr key={product._id} className="text-center">
                    <td className="border px-2 sm:px-4 py-2">
                      <Image src={product.imageUrl} alt={product.name} className="w-12 h-12 sm:w-16 sm:h-16 object-cover rounded-md" />
                    </td>
                    <td className="border px-2 sm:px-4 py-2 text-xs sm:text-sm">{product.name}</td>
                    <td className="border px-2 sm:px-4 py-2 text-xs sm:text-sm">${product.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default Wishlist;
