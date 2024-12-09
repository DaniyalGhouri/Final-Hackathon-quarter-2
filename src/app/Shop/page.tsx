import React from 'react';
import { SlidersHorizontal } from 'lucide-react';
import { HiOutlineViewGrid } from "react-icons/hi";
import { RxDividerVertical } from "react-icons/rx";
import { BsViewList } from "react-icons/bs";
import Image from 'next/image';
import backgroundImage from '../../../public/Images/banner.png'


export default function Page() {
  const products = [
    { id: 1, name: "Trenton modular sofa_3", price: "Rs. 25,000.00", image: "/Images/product16.jpeg" },
    { id: 2, name: "Granite dining table with dining chair", price: "Rs. 30,000.00", image: "/images/product7.jpeg" },
    { id: 3, name: "Outdoor bar table and stool", price: "Rs. 20,000.00", image: "/images/product4.jpeg" },
    { id: 4, name: "Plain console with teak mirror", price: "Rs. 15,000.00", image: "/images/product1.jpeg" },
    { id: 5, name: "Grain coffee table", price: "Rs. 40,000.00", image: "/images/product12.jpeg" },
    { id: 6, name: "Kent coffee table", price: "Rs. 18,000.00", image: "/images/product10.jpeg" },
    { id: 7, name: "Round coffee table_color 2", price: "Rs. 22,000.00", image: "/images/product11.jpeg" },
    { id: 8, name: "Reclaimed teak coffee table", price: "Rs. 19,000.00", image: "/images/product6.jpeg" },
    { id: 9, name: "Plain console_", price: "Rs. 35,000.00", image: "/images/product5.jpeg" },
    { id: 10, name: "Reclaimed teak Sideboard", price: "Rs. 29,000.00", image: "/images/product9.jpeg" },
    { id: 11, name: "SJP_0825", price: "Rs. 50,000.00", image: "/images/product8.jpeg" },
    { id: 12, name: "Bella chair and table", price: "Rs. 16,000.00", image: "/images/product3.jpeg" },
    { id: 13, name: "Granite square side table", price: "Rs. 42,000.00", image: "/images/product15.jpeg" },
    { id: 14, name: "Asgaard sofa", price: "Rs. 14,000.00", image: "/images/product2.jpeg" },
    { id: 15, name: "Maya sofa three seater", price: "Rs. 38,000.00", image: "/images/product14.jpeg" },
    { id: 16, name: "Outdoor sofa set", price: "Rs. 28,000.00", image: "/images/product13.jpeg" },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header Section */}
      <header
        className="relative bg-cover bg-center h-60"
        style={{ backgroundImage:`url${backgroundImage}` }} // Updated path for background image
      >
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <div className="relative z-10 flex items-center justify-center h-full text-black">
          <div>
            <h1 className="text-6xl font-Poppins text-center">Shop</h1>
            <p className="text-2xl mt-2">Home &gt; Shop</p>
          </div>
        </div>
      </header>

      <section className="flex justify-evenly w-full h-[100px] bg-[#FAF4F4] mt-[47px]">
        <div className="flex items-center gap-5">
          <SlidersHorizontal size={28} />
          <h6 className="text-[20px] ml-2">Filter</h6>
          <HiOutlineViewGrid size={28} />
          <BsViewList size={28} />
          <RxDividerVertical size={28} />
          <h2 className="text-[16px] font-semibold">Showing 1-16 of 32 results</h2>
        </div>
        <div className="flex items-center gap-[13px]">
          <h3 className="text-[20px]">Show</h3>
          <button className="bg-white text-[#9F9F9F] w-[55px] h-[55px]">16</button>
          <h3 className="text-[20px]">Sort by</h3>
          <button className="bg-white text-[#9F9F9F] w-[188px] h-[55px]">Default</button>
        </div>
      </section>

      {/* Products Section */}
      <main className="px-4 py-6">
        <div className="bg-white rounded-lg p-6 shadow-md">
          <h2 className="text-2xl font-bold text-black mb-4">All Products</h2>
          <div className="grid grid-cols-4 gap-6">
            {products.map((product) => (
              <div key={product.id} className="text-left">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={400}
                  height={400}
                  className="rounded-lg"
                />
                <h4 className="text-2xl font-semibold text-gray-800 mt-4">{product.name}</h4>
                <p className="text-3xl font-bold text-black">{product.price}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}