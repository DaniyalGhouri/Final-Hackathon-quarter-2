import React from "react";
import Image from "next/image";


const Hero = () => {
  return (
    <>
  

      {/* First Section: Hero Section */}
      <section className="bg-amber-100 flex items-center justify-center h-screen md:h-[100vh] px-4">
        {/* Left Section */}
        <div className="flex flex-col items-start justify-center w-full md:w-1/2 pl-10">
          <h1 className="text-3xl md:text-4xl font-bold text-black mb-4">
            Rocket Single <br />
            Seater
          </h1>

          <a
            href="/Shop"
            className="text-black underline text-sm hover:text-gray-700 transition"
          >
            Shop Now
          </a>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-1/2 h-full flex items-center justify-center">
          <Image
            src="/Images/sofa.png"
            alt="Rocket Single Seater"
            width={500}
            height={500}
            className="object-contain"
          />
        </div>
      </section>

      {/* Second Section: Top Pick */}
      <section className="bg-[#faf4f4] text-black py-10 px-4">
        <div className="container px-20 mx-auto">
          <div className="flex flex-col md:flex-row justify-evenly">
            <div className="bg-[#faf4f4] p-4 rounded shadow-lg mb-4 md:mb-0">
              <Image
                src="/Images/product15.jpeg"
                alt="Side Table"
                width={400}
                height={400}
                className="object-contain bg-white"
              />
              <h3 className="text-3xl font-semibold mb-2">Side Table</h3>
              <a href={`/Shop`} className="underline text-sm mb-4">
                View More
              </a>
            </div>
            <div className="bg-[#faf4f4] p-4 rounded shadow-lg">
              <Image
                src="/Images/side_table_2.jpeg"
                alt="Another Side Table"
                width={400}
                height={400}
                className="object-contain"
              />
              <h3 className="text-3xl font-semibold mb-2">Side Table</h3>
              <a href="/Shop" className="underline text-sm mb-4">
                View More
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Third Section: Product Grid */}
      <section className="bg-white text-black py-10 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Top Picks For You</h2>
          <p className="text-gray-500 text-lg mb-8">
            Find a bright ideal to suit your taste with our great selection of suspension, floor, and table lights.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            <div className="text-center">
              <Image
                src="/Images/product16.jpeg"
                alt="Product 1"
                width={150}
                height={150}
                className="object-contain mx-auto"
              />
              <h3 className="text-sm font-semibold mt-2">Trenton modular sofa_3</h3>
              <p className="text-lg font-bold">Rs. 25,000.00</p>
            </div>
            <div className="text-center">
              <Image
                src="/Images/product7.jpeg"
                alt="Product 2"
                width={150}
                height={150}
                className="object-contain mx-auto"
              />
              <h3 className="text-sm font-semibold mt-2">Granite dinning table with dining chair</h3>
              <p className="text-lg font-bold">Rs. 25,000.00</p>
            </div>
            <div className="text-center">
              <Image
                src="/Images/product4.jpeg"
                alt="Product 3"
                width={150}
                height={150}
                className="object-contain mx-auto"
              />
              <h3 className="text-sm font-semibold mt-2">Outdoor bar table and stool</h3>
              <p className="text-lg font-bold">Rs. 25,000.00</p>
            </div>
            <div className="text-center">
              <Image
                src="/Images/product1.jpeg"
                alt="Product 4"
                width={150}
                height={150}
                className="object-contain mx-auto"
              />
              <h3 className="text-sm font-semibold mt-2">Plain console with teak mirror</h3>
              <p className="text-lg font-bold">Rs. 25,000.00</p>
            </div>
            <div>
              <a href="/Shop" className="text-center underline text-sm mb-4">
                View More
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Fourth Section: Image and New Arrivals */}
      <section className="bg-amber-100 py-10 px-4">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="w-full md:w-1/2 pr-4 mb-6 md:mb-0">
            <Image
              src="/Images/Asgaard.png"
              alt="Asgaard Sofa"
              width={500}
              height={500}
              className="object-contain"
            />
          </div>
          <div className="w-full md:w-1/2 text-center">
            <h3 className="text-xl font-semibold mb-6">New Arrivals</h3>
            <h2 className="text-3xl md:text-5xl font-bold text-black mb-6">Asgaard Sofa</h2>
            <a
              href="/Shop"
              className="text-center border-2 border-black text-black py-2 px-6 text-lg font-semibold rounded-md hover:bg-black hover:text-white transition"
              style={{ width: "200px", textAlign: "center" }}
            >
              Order Now
            </a>
          </div>
        </div>
      </section>

      {/* Fifth Section: Blog Posts */}
      <section className="bg-white text-black py-10 px-4">
        <div>
          <h2 className="text-3xl md:text-5xl mb-6 text-center">Our Blog</h2>
          <p className="text-center text-lg mb-8">Find a bright idea to suit your taste with our great selection.</p>
        </div>
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div className="text-center transition-transform duration-300 ease-in-out transform hover:scale-105">
          <Image
                src="/Images/Rectangle 13.png"
                alt="Blog Post 1"
                width={300}
                height={300}
                className="object-contain mx-auto"
              />
              <p className="text-lg">Going all-in with millennial design</p>
              <a href="/About" className="underline font-bold text-xl mb-4">
                Read More
              </a>
              <div className="flex justify-center gap-4">
                <span>⏰ 5 mins</span>
                <span>📅 {new Date().toLocaleDateString()}</span>
              </div>
            </div>
            <div className="text-center transition-transform duration-300 ease-in-out transform hover:scale-105">
            <Image
                src="/Images/Rectangle 14.png"
                alt="Blog Post 2"
                width={300}
                height={300}
                className="object-contain mx-auto"
              />
              <p className="text-lg">Going all-in with millennial design</p>
              <a href="/About" className="underline font-bold text-xl mb-4">
                Read More
              </a>
              <div className="flex justify-center gap-4">
                <span>⏰ 5 mins</span>
                <span>📅 {new Date().toLocaleDateString()}</span>
              </div>
            </div>
      <div className="text-center transition-transform duration-300 ease-in-out transform hover:scale-105">
              <Image
                src="/Images/Rectangle 15.png"
                alt="Blog Post 3"
                width={300}
                height={300}
                className="object-contain mx-auto"
              />
              <p className="text-lg">Going all-in with millennial design</p>
              <a href="/About" className="underline font-bold text-xl mb-4">
                Read More
              </a>
              <div className="flex justify-center gap-4">
                <span>⏰ 5 mins</span>
                <span>📅 {new Date().toLocaleDateString()}</span>
              </div>
            </div>
          </div>
          {/* View All Posts Button */}
          <div className="text-center mt-8">
            <a href="/Blog" className="underline text-sm">
              View All Posts
            </a>
          </div>
        </div>
      </section>

      {/* Sixth Section: Instagram */}
      <section className="bg-gray-100 text-black py-10 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Instagram</h2>
          <p className="text-lg mb-4">Follow our store on Instagram</p>
          <a
            href="#"
            className="border-2 border-white text-black py-2 px-6 text-lg font-semibold rounded-md hover:bg-black hover:text-white transition"
            style={{ width: "200px", textAlign: "center" }}
          >
            Follow Us
          </a>
        </div>
      </section>
    </>
  );
};

export default Hero;