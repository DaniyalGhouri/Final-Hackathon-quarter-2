'use client';

import React from 'react';
import { useCart } from '../components/cartContext';
import Link from 'next/link';
import Banner from '../components/banner'; // Make sure to import your Banner component

const CartPage: React.FC = () => {
  const { cart, removeFromCart, updateQuantity, clearCart } = useCart();

  const discountedTotal = cart.reduce((total, item) => {
    const discountedPrice = item.price - (item.price * (item.discountPercentage / 100));
    return total + discountedPrice * item.quantity;
  }, 0);

  return (
    <div>
      {/* Banner */}
      <header className="relative bg-cover bg-center h-70">
        <Banner />
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center mt-[221px] text-white text-center">
          <div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">Cart</h1>
            <p className="text-sm sm:text-lg mt-4">
              <Link href="/">Home</Link> &gt; Cart
            </p>
          </div>
        </div>
      </header>

      {/* Cart Content */}
      <div className="p-6 max-w-screen-xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6">Cart</h2>
        
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Cart Items */}
            <div className="lg:w-2/3">
              <table className="min-w-full table-auto border-collapse">
                <thead>
                  <tr className="border-b">
                    <th className="px-4 py-2 text-left">Product</th>
                    <th className="px-4 py-2 text-left">Price</th>
                    <th className="px-4 py-2 text-left">Quantity</th>
                    <th className="px-4 py-2 text-left">Subtotal</th>
                    <th className="px-4 py-2"></th>
                  </tr>
                </thead>
                <tbody>
                  {cart.map((item) => {
                    const discountedPrice = item.price - (item.price * (item.discountPercentage / 100));
                    return (
                      <tr key={item._id} className="border-b">
                        <td className="px-4 py-2">
                          <div className="flex items-center">
                            <img src={item.imageUrl} alt={item.name} className="w-12 h-12 object-cover rounded-md mr-4" />
                            <span>{item.name}</span>
                          </div>
                        </td>
                        <td className="px-4 py-2">$. {item.price}</td>
                        <td className="px-4 py-2">
                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => updateQuantity(item._id, item.quantity + 1)}
                              className="px-2 py-1 bg-gray-300 rounded-md"
                            >
                              +
                            </button>
                            <span>{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item._id, item.quantity - 1)}
                              className="px-2 py-1 bg-gray-300 rounded-md"
                              disabled={item.quantity <= 1}
                            >
                              -
                            </button>
                          </div>
                        </td>
                        <td className="px-4 py-2">$. {(discountedPrice * item.quantity).toFixed(2)}</td>
                        <td className="px-4 py-2">
                          <button
                            onClick={() => removeFromCart(item._id)}
                            className="px-4 py-2 bg-red-500 text-white rounded-md w-full sm:w-auto"
                          >
                            Remove
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            {/* Cart Totals */}
            <div className="lg:w-1/3 bg-amber-100 p-4 rounded-md mt-6 lg:mt-0">
              <h3 className="text-lg sm:text-xl font-semibold mb-4">Cart Totals</h3>
              <div className="flex justify-between mb-2">
                <span className="font-medium">Subtotal</span>
                <span className="font-medium">$. {discountedTotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between mb-4">
                <span className="font-medium">Total</span>
                <span className="font-medium text-lg">$. {discountedTotal.toFixed(2)}</span>
              </div>
              <div className="flex gap-4">
                <Link href="/checkout"
                  className="w-full mt-4 py-2 px-4 text-center text-black rounded-lg hover:bg-black hover:text-white transition-transform duration-300 ease-in-out transform hover:scale-105 border font-bold border-black">
                  Checkout
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;