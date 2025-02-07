'use client';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import Image from 'next/image';
import { fetchProducts } from '../../components/product';
import { useCart } from '@/app/components/cartContext';
import CartSheet from '@/app/components/sheet';
import Banner from '@/app/components/banner';

interface Product {
  _id: string;
  name: string;
  price: number;
  description: string;
  discountPercentage: number;
  imageUrl: string;
  productImage: {
    assest: {
      _ref: string;
    };
  };
  tags: string[];
}

const Detail = () => {
  const [product, setProduct] = useState<Product | null>(null);
  const [quantity, setQuantity] = useState<number>(1);
  const [notification, setNotification] = useState<string>('');
  const router = useRouter();
  const params = useParams();

  useEffect(() => {
    const getProduct = async (_id: string) => {
      const products = await fetchProducts();
      const selectedProduct = products.find((item: Product) => item._id === _id);

      if (!selectedProduct) {
        router.push('/404');
      } else {
        setProduct(selectedProduct);
      }
    };

    if (params && params.id) {
      const productId = Array.isArray(params.id) ? params.id[0] : params.id;
      getProduct(productId);
    }
  }, [params, router]);

  if (!product) {
    return <p>Loading...</p>;
  }

  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({ ...product, quantity });
  };

  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  const discountedPrice = product.price - (product.price * (product.discountPercentage / 100));

  return (
    <div className="mx-auto px-4 py-8">
      {/* Banner */}
      <header className="relative bg-cover bg-center h-70">
        <Banner />
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center mt-[221px] text-white text-center">
          <div>
            <h1 className="text-5xl font-bold"> Product Detail</h1>
            <p className="text-xl mt-4">
              <Link href="/">Home</Link> &gt;  Product Detail
            </p>
          </div>
        </div>
      </header>

      {/* Notification section */}
      {notification && (
        <div className="fixed top-0 left-0 right-0 bg-green-600 text-white py-2 text-center font-semibold">
          {notification}
        </div>
      )}

      {/* Path section */}
      <div className="py-10 lg:px-20 px-4 flex lg:text-xl text-lg items-center lg:gap-x-6 gap-x-4">
        <p className="text-gray-400"><a href="/">Home </a></p><ChevronRight />
        <p className="text-gray-400"><a href="/Shop">Shop </a></p> <ChevronRight />
        <div className="border-r-2 h-8 border-gray-500" />
        <p>{product.name}</p>
      </div>

      {/* Product detail section */}
      <div className="flex flex-col lg:flex-row lg:gap-x-20 lg:px-20 gap-y-20 lg:gap-y-0">
        <div className="flex gap-x-2 lg:gap-x-10 px-1">
          <div className="flex flex-col gap-y-5">
            <Image src={product.imageUrl} width={70} height={70} alt={product.name} className="bg-paleSkin rounded-lg py-3" />
            <Image src={product.imageUrl} width={70} height={70} alt={product.name} className="bg-paleSkin rounded-lg py-3" />
            <Image src={product.imageUrl} width={70} height={70} alt={product.name} className="bg-paleSkin rounded-lg py-3" />
            <Image src={product.imageUrl} width={70} height={70} alt={product.name} className="bg-paleSkin rounded-lg py-3" />
          </div>
          <div className="w-full mt-4">
            <Image src={product.imageUrl} width={500} height={500} alt={product.name} className="bg-paleSkin rounded-lg py-4" />
          </div>
        </div>

        <div className="flex flex-col max-w-[430px] h-auto px-2 lg:px-0 gap-y-3">
          <h3 className="text-3xl lg:text-4xl tracking-wide">{product.name}</h3>
          <p className="text-xl text-gray-500 mt-4">{product.description}</p>
          <p className="text-xl text-black">$ {product.price}</p>
          <p className="text-md font-semibold text-green-600 mt-2">
            Discount: {product.discountPercentage}%
          </p>

          {/* Size and color selection */}
          <p className="text-gray-400">Size</p>
          <div className="flex gap-x-2 flex-wrap">
            <span className="px-3 py-2 rounded-lg text-sm bg-light_skin cursor-pointer">L</span>
            <span className="px-3 py-2 rounded-lg text-sm bg-paleSkin cursor-pointer">XL</span>
            <span className="px-3 py-2 rounded-lg text-sm bg-paleSkin cursor-pointer">XS</span>
          </div>
          <p className="text-gray-400 mt-4">Color</p>
          <div className="flex gap-x-4">
            <div><span className="py-2 px-[16.5px] rounded-full bg-pBlue"></span></div>
            <div><span className="py-2 px-[16.5px] rounded-full bg-black"></span></div>
            <div><span className="py-2 px-[16.5px] rounded-full bg-pStone"></span></div>
          </div>

          {/* Add to cart section */}
          <div className="flex gap-x-8 items-center">
            <span 
              className="border border-gray-400 px-2 py-2 rounded-lg flex items-center justify-center cursor-pointer text-lg"
              onClick={handleDecrement}
            >
              <strong>-</strong>
            </span>
            <span className="text-xl font-bold">{quantity}</span>
            <span 
              className="border border-gray-400 px-2 py-2 rounded-lg flex items-center justify-center cursor-pointer text-lg"
              onClick={handleIncrement}
            >
              <strong>+</strong>
            </span>
            <div className="p-4">
              <h1 className="text-2xl font-bold flex">{product.name}</h1>
              <div className="flex gap-4 items-center">
                <p className="text-lg text-gray-500 line-through">$ {product.price}</p>
                <p className="text-xl font-semibold text-green-600">$ {discountedPrice.toFixed(2)}</p>
              </div>

              <button
                onClick={handleAddToCart}
                className="mt-4 py-2 px-4 space-x-4 rounded-lg hover:bg-amber-100 object-cover transition-transform duration-300 ease-in-out transform hover:scale-105 border font-bold border-black"
              >
                Add to Cart
              </button>

              <CartSheet />
            </div>
          </div>
        </div>
      </div>

      {/* Customer Feedback Section */}
      <div className="py-8 bg-gray-100 mt-12 text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">We Value Your Feedback!</h2>
        <p className="text-lg text-gray-600 mb-6">Your thoughts and opinions are very important to us. We strive to improve our services and products based on your valuable feedback. Please take a moment to share your thoughts, suggestions, or concerns with us. Your feedback helps us serve you better!</p>
        <Link href="/customerFeedback">
          <button className="py-3 px-6 bg-blue-500 text-white rounded-lg hover:bg-yellow-600 shadow-md transition-all duration-300">
            Leave Your Feedback
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Detail;
