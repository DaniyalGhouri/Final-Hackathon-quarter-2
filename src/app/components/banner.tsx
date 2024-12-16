import Image from 'next/image';
import React from 'react';

const Banner = () => {
  return (
    <div 
      className="relative w-full h-[316px] -[100px] bg-cover bg-center" 
      style={{ backgroundImage: "url('/Images/banner.png')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-10"></div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center">
        {/* Small Image in Center */}
        <div className="mb-4">
          <Image
            src="/Images/Meubel House_Logos-05.png" 
            alt="Shop Icon"
            width={100}
            height={100}
            className="object-cover rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
