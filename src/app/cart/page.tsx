// import React from 'react';

// function Cart() {
//   const cartItems = [
    
//     { id: 1, name: 'Product A', price: 19.99, quantity: 2 },
    
//   ];

//   return (
//     <div className="flex flex-row">
//   <div className="w-1/2 border border-gray-200 p-4">
    
//   </div>
//   <div className="w-1/2 border border-gray-200 p-4">
    
 
//   <div className="container mx-auto">
//   <div className="flex flex-col md:flex-row">
//     <div className="w-full md:w-1/2 border border-gray-200 p-4">
      
  
//     <div className="max-w-md mx-auto bg-white p-6 shadow-md rounded-lg">
//       <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
//       <ul>
//         <li className="flex justify-between items-center mb-4 border-b pb-4">
//           <img
//             src="https://via.placeholder.com/150"
//             alt="Product A"
//             className="w-20 h-20 object-cover rounded-md"
//           />
//           <div className="flex-1 ml-4">
//             <h2 className="text-lg font-semibold">Product A</h2>
//             <p className="text-gray-500">Quantity: 2</p>
//             <p className="text-lg font-bold">$100</p>
//           </div>
//         </li>
//         <li className="flex justify-between items-center mb-4 border-b pb-4">
//           <img
//             src="https://via.placeholder.com/150"
//             alt="Product B"
//             className="w-20 h-20 object-cover rounded-md"
//           />
//           <div className="flex-1 ml-4">
//             <h2 className="text-lg font-semibold">Product B</h2>
//             <p className="text-gray-500">Quantity: 1</p>
//             <p className="text-lg font-bold">$75</p>
//           </div>
//         </li>
//         <li className="flex justify-between items-center mb-4 border-b pb-4">
//           <img
//             src="https://via.placeholder.com/150"
//             alt="Product C"
//             className="w-20 h-20 object-cover rounded-md"
//           />
//           <div className="flex-1 ml-4">
//             <h2 className="text-lg font-semibold">Product C</h2>
//             <p className="text-gray-500">Quantity: 3</p>
//             <p className="text-lg font-bold">$90</p>
//           </div>
//         </li>
//       </ul>
//     </div>
//     </div>
//     <div className="w-full md:w-1/2 border border-gray-200 p-4">
      
//       <div className="text-right">
//         <p className="text-lg font-bold text-[#B88E2F]" >Total: "Rs. 250,000.00"</p>
//         <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Checkout</button>
//       </div>
//     </div>
//   </div>
// </div>
//     </div>
//     </div>
//   );
// }

// export default Cart;
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Cart = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[60vh] bg-cover bg-center bg-shop-bg">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center">
          {/* Icon Image */}
          <div className="mb-4">
            <Image
              src="/image/shop.png"
              alt="Shop Icon"
              width={100}
              height={100}
              className="object-cover rounded-full"
            />
          </div>
          <h1 className="text-5xl font-bold">Cart</h1>
          <p className="text-xl mt-4">
            <Link href="/" className="hover:underline">
              Home
            </Link>{' '}
            &gt; Cart
          </p>
        </div>
      </section>

      {/* Cart Items Section */}
      <section className="bg-white py-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
            {/* Cart Items */}
            <div className="space-y-6 md:w-[60%] ">
              <div className="flex gap-4 bg-[#FFF9E5]">
                <button className="px-4 py-2 font-semibold border border-transparent hover:bg-amber-100 transition">
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
              <div className="grid grid-cols-5 gap-4 mt-6">
                <div className="flex justify-center items-center">
                  <Image
                    src="/images/Group 137.png"
                    alt="Asgaard Sofa"
                    width={150}
                    height={150}
                    className="object-cover rounded-md"
                  />
                </div>
                <div className="col-span-2 text-gray-700">
                  <h2 className="text-lg font-semibold">Asgaard Sofa</h2>
                </div>
                <div className="text-gray-500">
                  <p>Rs. 250,000.00</p>
                </div>
                <div>
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
            <div className="space-y-6 bg-[#FFF9E5]">
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
              <button className="w-full py-2 bg-black text-white rounded-md text-lg hover:bg-gray-800 transition mt-4">
                Checkout
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-100 py-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="text-center">
              <h2 className="text-3xl font-bold text-black">Free Delivery</h2>
              <p className="text-lg text-gray-700 mt-2">
                For all orders over $50, consectetur adipiscing elit.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="text-center">
              <h2 className="text-3xl font-bold text-black">90 Days Return</h2>
              <p className="text-lg text-gray-700 mt-2">
                If the product has an issue, consectetur adipiscing elit.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="text-center">
              <h2 className="text-3xl font-bold text-black">Secure Payments</h2>
              <p className="text-lg text-gray-700 mt-2">
                100% secure payments, consectetur adipiscing elit.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cart;
