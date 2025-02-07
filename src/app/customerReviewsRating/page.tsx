'use client'; // Add this at the top of the file

import React from 'react';
import CustomerReviewsRating from '../components/customerReviewsrating';

const CustomerReviewsRatingPage = () => {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-semibold text-center mb-8">Customer Reviews and Ratings</h1>
      <CustomerReviewsRating />
    </div>
  );
};

export default CustomerReviewsRatingPage;