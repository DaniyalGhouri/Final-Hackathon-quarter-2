import React from 'react';
import CustomerFeedback from '../components/customerFeedback';

const CustomerFeedbackPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6 sm:px-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-6 sm:p-8 md:p-10 rounded-lg shadow-lg">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-center text-indigo-600 mb-6 sm:mb-8">
            We Value Your Feedback
          </h1>
          <CustomerFeedback />
        </div>
      </div>
    </div>
  );
};

export default CustomerFeedbackPage;