'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation'; // For routing
import Banner from '../components/banner'; // Make sure to import your Banner component
import Link from 'next/link'; // For navigation

const Search = () => {
  const router = useRouter();
  const [query, setQuery] = useState('');
  const [filteredSuggestions, setFilteredSuggestions] = useState<string[]>([]);

  // Define the list of possible pages
  const pages = [
    'checkout',
    'cart',
    'home',
    'Shop',
    'Account',
    'Blog',
    'About',
    'Contact',
    'profile',
    'customerFeedback',
    'customerReviewsRating',
    'wishlist',
    'faq&helpCenter',
    'login'
  ];

  // Function to handle input change and filter suggestions
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = event.target.value;
    setQuery(searchTerm);

    // Filter pages based on search term
    const filtered = pages.filter((page) =>
      page.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredSuggestions(filtered);
  };

  // Function to handle selecting a suggestion
  const handleSuggestionClick = (page: string) => {
    router.push(`/${page}`); // Redirect to selected page
    setQuery(''); // Clear the input after selection
    setFilteredSuggestions([]); // Clear the suggestions
  };

  return (
    <div>
      {/* Banner */}
      <header className="relative bg-cover bg-center h-70">
        <Banner />
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center mt-[221px] text-white text-center">
          <div>
            <h1 className="text-5xl font-bold">Search</h1>
            <p className="text-xl mt-4">
              <Link href="/">Home</Link> &gt; Search
            </p>
          </div>
        </div>
      </header>

      {/* Search Input and Suggestions */}
      <div className="search-container p-8">
        <input
          type="text"
          value={query}
          onChange={handleSearch} // Trigger handleSearch on change
          placeholder="Search for products or pages..."
          className="border p-2 w-full mb-4"
        />
        {/* Suggestions dropdown */}
        {filteredSuggestions.length > 0 && (
          <ul className="border border-t-0 p-2 bg-white rounded-lg shadow-md mt-2 max-h-40 overflow-y-auto">
            {filteredSuggestions.map((suggestion) => (
              <li
                key={suggestion}
                className="p-2 cursor-pointer hover:bg-gray-200"
                onClick={() => handleSuggestionClick(suggestion)}
              >
                {suggestion.charAt(0).toUpperCase() + suggestion.slice(1)}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Search;