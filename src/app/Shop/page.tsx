'use client';
import React, { useEffect, useState } from 'react';
import { SlidersHorizontal } from 'lucide-react';
import { HiOutlineViewGrid } from "react-icons/hi";
import { RxDividerVertical } from "react-icons/rx";
import { BsViewList } from "react-icons/bs";
import Image from 'next/image';
import Banner from '../components/banner';
import Link from 'next/link';
import Feature from '../components/Feature';
import { fetchProducts } from '../components/product';
import { useWishlist } from '../components/Wishlist';
import client from '@/sanity/lib/client';

interface Product {
  _id: string;
  name: string;
  price: number;
  description: string;
  discountPercentage: number;
  imageUrl: string;
  rating: number;
  category?: string;
}

interface Review {
  _id: string;
  rating: number;
  review: string;
  author: string;
  date: string;
}

const Shop = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [reviews, setReviews] = useState<Review[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [category, setCategory] = useState<string>('');
  const [sort, setSort] = useState<'price_low_high' | 'price_high_low'>('price_low_high');
  const { addToWishlist } = useWishlist();

  useEffect(() => {
    const getProducts = async () => {
      const data = await fetchProducts({ name: searchQuery, category, sort });
      setProducts(data);
    };
    getProducts();
  }, [searchQuery, category, sort]);

  useEffect(() => {
    const getReviews = async () => {
      const reviewData = await client.fetch('*[_type == "review"]');
      setReviews(reviewData);
    };
    getReviews();
  }, []);

  const [ratings, setRatings] = useState<{ [key: string]: number }>({});

  const handleStarClick = (productId: string, star: number, e: React.MouseEvent) => {
    e.preventDefault();
    setRatings(prevRatings => ({
      ...prevRatings,
      [productId]: star
    }));
  };

  const renderStars = (productId: string, rating: number) => {
    const totalStars = 5;
    const filledStars = Math.round(rating);
    return Array.from({ length: totalStars }, (_, i) => (
      <span
        key={i}
        onClick={(e) => handleStarClick(productId, i + 1, e)}
        className={`cursor-pointer text-xl md:text-2xl ${i < (ratings[productId] || filledStars) ? 'text-yellow-400' : 'text-gray-300'}`}
      >
        ★
      </span>
    ));
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Banner */}
      <header className="relative bg-cover bg-center h-70">
        <Banner />
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center mt-[221px] text-white text-center">
          <div>
            <h1 className="text-5xl font-bold">Shop</h1>
            <p className="text-xl mt-4">
              <Link href="/">Home</Link> &gt; Shop
            </p>
          </div>
        </div>
      </header>

      {/* Filter Section */}
      <section className="flex flex-wrap justify-between items-center px-4 md:px-6 py-4 bg-[#FAF4F4] mt-6">
        <div className="flex flex-wrap items-center gap-3 md:gap-5">
          <SlidersHorizontal size={24} className="text-gray-600" />
          <h6 className="text-[16px] md:text-[20px]">Filter</h6>
          <HiOutlineViewGrid size={24} className="text-gray-600" />
          <BsViewList size={24} className="text-gray-600" />
          <RxDividerVertical size={24} className="text-gray-600 hidden md:block" />
          <h2 className="text-[14px] md:text-[16px] font-semibold">Showing {products.length} results</h2>
        </div>

        {/* Search & Sort Options */}
        <div className="flex flex-wrap gap-3 md:gap-4">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search for a product"
            className="p-2 border rounded-lg w-40 md:w-64"
          />
          <select className="p-2 border rounded-lg" value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="">All Categories</option>
            <option value="Table">Table</option>
            <option value="Bed">Bed</option>
            <option value="Chair">Chair</option>
            <option value="Sofa">Sofa</option>
          </select>
          <select className="p-2 border rounded-lg" value={sort} onChange={(e) => setSort(e.target.value as 'price_low_high' | 'price_high_low')}>
            <option value="">Default</option>
            <option value="price_low_high">Price: Low to High</option>
            <option value="price_high_low">Price: High to Low</option>
          </select>
        </div>
      </section>

      <main className="px-4 py-6">
        <div className="bg-white rounded-lg p-4 md:p-6 shadow-md">
          <h2 className="text-xl md:text-2xl font-bold text-black mb-4">All Products</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {products.map((product) => (
              <div key={product._id} className="text-left flex flex-col items-center p-4 bg-white shadow-md rounded-lg">
                <div className="w-full h-56 md:h-72 relative">
                  <Link href={`/Shop/${product._id}`}>
                    <Image
                      src={product.imageUrl}
                      alt={product.name}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-105"
                    />
                  </Link>
                </div>
                <p className="text-xl md:text-2xl font-semibold text-gray-800 mt-4">{product.name}</p>
                <p className="text-sm md:text-lg text-gray-500 line-clamp-1">{product.description}</p>
                <p className="text-lg md:text-xl font-semibold text-black">${product.price}</p>

                <button
                  className="mt-2 p-2 bg-red-500 text-white rounded-lg"
                  onClick={(e) => { e.preventDefault(); addToWishlist(product); }}
                >
                  ♥ Add to Wishlist
                </button>

                {/* Rating Stars */}
                <div className="flex items-center mt-2">
                  {renderStars(product._id, product.rating)}
                </div>
              </div>
            ))}
          </div>

         {/* Stylish Customer Reviews Section */}
<div className="mt-10 w-full">
  <h3 className="text-lg font-semibold text-gray-800 mb-4">Customer Reviews</h3>
  <div className="flex flex-col gap-6">
    {reviews
      .filter((review) => review.rating && review.review)
      .map((review) => (
        <div key={review._id} className="border rounded-lg p-4 shadow-md bg-white">
          <div className="mb-3">
            <span className="font-semibold text-gray-800">{review.author}</span>
          </div>
          <div className="flex items-center mb-3">
            {renderStars(review._id, review.rating)}
          </div>
          <p className="text-sm text-gray-500 mb-3">{review.review}</p>
          <p className="text-xs text-gray-400">{review.date}</p>
        </div>
      ))}
  </div>
</div>

          {/* Customer Rating and Review Button */}
          <div className="mt-10 text-center">
            <h3 className="text-xl md:text-3xl font-bold text-black-600 mb-4">Customer Rating and Review</h3>
            <p className="text-sm md:text-base">"Your reviews help others make informed decisions. Thank you for sharing your experience with us!"</p>
            <Link href="/customerReviewsRating">
              <button className="mt-4 p-3 bg-blue-500 text-white rounded-lg hover:bg-yellow-600 transition duration-200">
                Go to Customer Reviews and Ratings
              </button>
            </Link>
          </div>
        </div>
      </main>

      <Feature />
    </div>
  );
};

export default Shop;
