
'use client'
import client from '@/sanity/lib/client';
import { useState } from 'react';
import Link from 'next/link';
import Banner from './banner';

export default function FeedbackForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    feedback: '',
    goalAchieved: '',
    feedbackRating: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Send data to Sanity
      await client.create({
        _type: 'feedbackForm', // The schema type you created
        ...formData,
        submittedAt: new Date().toISOString(),
      });

      setSubmitStatus('Thank you for your feedback!');
      setFormData({
        name: '',
        email: '',
        feedback: '',
        goalAchieved: '',
        feedbackRating: '',
      });
    } catch (error) {
      console.error('Error submitting feedback:', error);
      setSubmitStatus('Failed to submit feedback. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Banner */}
      <header className="relative bg-cover bg-center h-70">
        <Banner />
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center mt-[221px] text-white text-center">
          <div>
            <h1 className="text-3xl font-bold">Customer Feedback</h1>
            <p className="text-xl mt-3">
              <Link href="/">Home</Link> &gt; Customer Feedback
            </p>
          </div>
        </div>
      </header>

      {/* Feedback Form */}
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-4 border rounded-lg shadow-md mt-8 md:max-w-2xl lg:max-w-3xl xl:max-w-4xl">
        <h2 className="text-xl font-bold mb-4">Feedback Form</h2>

        <div className="mb-4">
          <label htmlFor="name" className="block mb-2">Your Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block mb-2">Your Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="feedback" className="block mb-2">Your Feedback:</label>
          <textarea
            id="feedback"
            name="feedback"
            value={formData.feedback}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
            rows={4}
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2">Did you achieve your goal?</label>
          <div>
            <label className="mr-4">
              <input
                type="radio"
                name="goalAchieved"
                value="yes"
                checked={formData.goalAchieved === 'yes'}
                onChange={handleChange}
                required
              /> Yes
            </label>
            <label className="mr-4">
              <input
                type="radio"
                name="goalAchieved"
                value="no"
                checked={formData.goalAchieved === 'no'}
                onChange={handleChange}
              /> No
            </label>
            <label>
              <input
                type="radio"
                name="goalAchieved"
                value="partially"
                checked={formData.goalAchieved === 'partially'}
                onChange={handleChange}
              /> Partially
            </label>
          </div>
        </div>

        <div className="mb-4">
          <label className="block mb-2">Choose Your Feedback:</label>
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => setFormData({ ...formData, feedbackRating: 'excellent' })}
              className={`w-full sm:w-auto py-2 rounded text-white ${formData.feedbackRating === 'excellent' ? 'bg-green-500' : 'bg-green-300'} hover:bg-green-400`}
            >
              Excellent 😀
            </button>
            <button
              type="button"
              onClick={() => setFormData({ ...formData, feedbackRating: 'good' })}
              className={`w-full sm:w-auto py-2 rounded text-white ${formData.feedbackRating === 'good' ? 'bg-yellow-500' : 'bg-yellow-300'} hover:bg-yellow-400`}
            >
              Good 🙂 
            </button>
            <button
              type="button"
              onClick={() => setFormData({ ...formData, feedbackRating: 'bad' })}
              className={`w-full sm:w-auto py-2 rounded text-white ${formData.feedbackRating === 'bad' ? 'bg-red-500' : 'bg-red-300'} hover:bg-red-400`}
            >
              Bad ☹️
            </button>
          </div>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 disabled:bg-gray-400"
        >
          {isSubmitting ? 'Submitting...' : 'Submit Review'}
        </button>

        {submitStatus && <p className="mt-4 text-center">{submitStatus}</p>}
      </form>
    </>
  );
}
