import React from 'react';

const NotFound = () => {
  return (
    <div className="h-screen w-screen bg-gray-100 flex items-center justify-center">
      <div className="container flex flex-col md:flex-row items-center justify-center px-5 text-gray-700">
        {/* Text Section */}
        <div className="max-w-md text-center md:text-left">
          <div className="text-5xl font-bold mb-4">404</div>
          <p className="text-2xl md:text-3xl font-light mb-2">Sorry, we couldn't find this page.</p>
          <p className="mb-6">
            But don't worry, you can find plenty of other things on our homepage.
          </p>
          <button
            onClick={() => window.location.href = '/'}
            className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg shadow hover:bg-blue-700 transition">
            Back to homepage
          </button>
        </div>

        {/* Image Section */}
        <div className="max-w-lg mt-10 md:mt-0 md:ml-10">
          <img
            src="https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif"
            alt="404 Illustration"
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
};  

export default NotFound;
