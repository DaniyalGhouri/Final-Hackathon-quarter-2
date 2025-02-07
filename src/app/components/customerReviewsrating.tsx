// SubmitReviewPage.tsx
"use client";
import client from '@/sanity/lib/client';
import React, { useState } from 'react';
import Banner from './banner';
import Link from 'next/link';

const SubmitReviewPage = () => {
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState('');
  const [author, setAuthor] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    const reviewData = {
      _type: 'review',
      rating: Number(rating),
      review,
      author,
      date: new Date().toISOString(),
    };

    try {
      await client.create(reviewData);
      setSuccess(true);
      setRating(0);
      setReview('');
      setAuthor('');
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('An unknown error occurred');
      }
    } finally {
      setLoading(false);
    }
  };

  const handleRatingChange = (ratingValue: number) => {
    setRating(ratingValue);
  };

  const handleReviewChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setReview(e.target.value);
  };

  const handleAuthorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAuthor(e.target.value);
  };

  return (
    <div className="container mx-auto p-8">
      {/* Banner */}
      <header className="relative bg-cover bg-center h-70">
        <Banner />
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center mt-[221px] text-white text-center">
          <div>
            <h1 className="text-4xl font-bold">Customer Reviews & Ratings</h1>
            <p className="text-xl mt-4">
              <Link href="/">Home</Link> &gt; Customer Reviews & Ratings
            </p>
          </div>
        </div>
      </header>

      <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">Submit Your Review</h1>
      {success && <p className="text-green-500 mb-4">Review submitted successfully!</p>}
      {error && <p className="text-red-500 mb-4">Error: {error}</p>}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Your Name</label>
          <input
            type="text"
            value={author}
            onChange={handleAuthorChange}
            className="w-full p-2 border rounded-md"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Rating</label>
          <div className="flex space-x-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                className={`cursor-pointer ${rating >= star ? 'text-yellow-500' : 'text-gray-400'}`}
                onClick={() => handleRatingChange(star)}
              >
                ★
              </span>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Your Review</label>
          <textarea
            value={review}
            onChange={handleReviewChange}
            className="w-full p-2 border rounded-md"
            required
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 disabled:opacity-50"
        >
          {loading ? 'Submitting...' : 'Submit Review'}
        </button>
      </form>
    </div>
  );
};

export default SubmitReviewPage;
