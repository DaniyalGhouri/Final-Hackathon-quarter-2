import React from 'react';
import Image from 'next/image';

interface CardProps {
  src: string;
  alt: string;
  description: string;
  price: string | number;
}

const Card: React.FC<CardProps> = ({ src, alt, description, price }) => {
  return (
    <div className="flex flex-col justify-center items-center p-4 h-[320px] sm:h-[280px] md:h-[320px] lg:h-[350px]">
      <Image
        src={src}
        width={250}
        height={250}
        alt={alt}
        className="-mt-4 object-cover sm:w-36 sm:h-36 md:w-40 md:h-40 lg:w-52 lg:h-52"
      />
      <div className="flex flex-col justify-between flex-grow mt-4">
        <div className="flex flex-col gap-y-1 text-center">
          <p className="text-sm sm:text-base md:text-lg">{description}</p>
          <h3 className="font-bold text-lg sm:text-xl">{price}</h3>
        </div>
      </div>
    </div>
  );
};

export default Card;