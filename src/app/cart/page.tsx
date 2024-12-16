
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Banner from '../components/banner';
import Feature from '../components/Feature';


const Cart = () => {
  return (
    <div className=' w-full h-[1120px] top-[512px] left-[8294px]'>
      {/* Hero Section */}

      <section className="relative h-[60vh] bg-cover bg-center ">
        <Banner/>
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center">
          {/* Icon Image */}
          <div className="mb-4">
          </div>
          <h1 className="text-5xl font-bold mt-24">Cart</h1>
          <p className="text-xl mt-4">
            <Link href="/" className="hover:underline">
              Home
            </Link>{' '}
            &gt; Cart
          </p>
        </div>
      </section>
    <div className='w-full h-[525px] top-[416px] pl-[50px] rounded'>  
      {/* Cart Items Section */}
      <section className="bg-white py-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 left-[947px] gap-56 ">
            {/* Cart Items */}
            <div className="w-[817px] h-[216px] top-[488px] left-[100px] border-spacing-1">
              <div className="flex gap-20 bg-[#FFF9E5] ">
                <button className="pl-8 py-2 font-semibold border border-transparent hover:bg-amber-100 transition">
                  Product
                </button>
                <button className="px-4 py-2 font-semibold border border-transparent hover:bg-amber-100 transition">
                  Price
                </button>
                <button className="px-4 py-2 font-semibold border border-transparent hover:bg-amber-100 transition">
                  Quantity
                </button>
                <button className="px-4 py-2 font-semibold border border-transparent hover:bg-amber-100 transition">
                  Subtotal
                </button>
              </div>

              {/* Product Details */}
              <div className="grid grid-cols-5 gap-12 mt-12">
                <div className="flex justify-center items-center">
                  <Image
                    src="/Images/Asgaard.png"
                    alt="Asgaard Sofa"
                    width={150}
                    height={150}
                    className="object-cover rounded-md mt-12 left-24"
                  />
                </div>
                <div className="col-span-1 text-gray-700 flex w-[108px] h-[24px] top-[590px] absolute ">
                  <h2 className="text-lg font-semibold flex">Asgaard Sofa</h2>
                </div>
                <div className="text-gray-500">
                  <p>Rs. 250,000.00</p>
                </div>
                <div className='w-[32px] h-[32px] top-[635px] left-[615px] rounded border-spacing-1

'>
                  <input
                    type="number"
                    defaultValue="1"
                    className="w-full p-2 border border-gray-300 rounded-md text-center"
                  />
                </div>
                <div>
                  <p className="font-semibold">Rs. 250,000.00</p>
                </div>
              </div>
            </div>

            {/* Cart Totals */}
            <div className="space-y-6 bg-[#FFF9E5] rounded w-[393px] h-[390px] top-[488px] left-[947px]">
              <h1 className="text-2xl font-bold mb-4 text-center">Cart Totals</h1>
              <div className="flex justify-between py-2 border-b">
                <span className="text-lg font-medium">Subtotal</span>
                <span className="text-lg font-medium">Rs. 250,000.00</span>
              </div>
              <div className="flex justify-between py-2 border-b">
                <span className="text-xl font-semibold">Total</span>
                <span className="text-xl font-semibold text-yellow-500">
                  Rs. 250,000.00
                </span>
              </div>
              <a href="/checkout">
              <button className="w-[222px] h-[59px]  left-[1033px] py-2 bg-[#FFF9E5] text-black rounded-md text-lg border-2 border-black hover:bg-amber-100 transition mt-4">
                Checkout
              </button></a>
            </div>
          </div>
        </div>
      </section>

      
          </div>
       <Feature/> </div>
   
  );
};

export default Cart;
