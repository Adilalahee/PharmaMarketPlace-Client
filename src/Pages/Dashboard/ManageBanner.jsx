import React, { useState } from 'react';

const ManageBanner = () => {
    const [bannerTitle, setBannerTitle] = useState('');
    const [bannerDescription, setBannerDescription] = useState('');
    const [bannerImage, setBannerImage] = useState('');
  
    // Handle form submission
    const handleSubmit = (e) => {
      e.preventDefault();
  
      // Validation to ensure all fields are filled
      if (!bannerTitle || !bannerDescription || !bannerImage) {
        alert('All fields are required!');
        return;
      }
  
      // Normally, you would send this data to a backend API to save the banner details.
      // For now, we will just log the form data to the console.
      console.log('Banner Title:', bannerTitle);
      console.log('Banner Description:', bannerDescription);
      console.log('Banner Image URL:', bannerImage);
  
      // Clear form fields after submission
      setBannerTitle('');
      setBannerDescription('');
      setBannerImage('');
    };
  
    return (
      <div className="max-w-md mx-auto mt-10 p-6 border rounded-lg shadow-lg bg-white">
        <h2 className="text-2xl font-semibold mb-6 text-center">Add New Banner</h2>
  
        <form onSubmit={handleSubmit}>
          {/* Banner Title Field */}
          <div className="mb-4">
            <label htmlFor="bannerTitle" className="block text-sm font-medium text-gray-700">
              Banner Title
            </label>
            <input
              type="text"
              id="bannerTitle"
              value={bannerTitle}
              onChange={(e) => setBannerTitle(e.target.value)}
              className="input input-bordered w-full mt-2"
              placeholder="Enter banner title"
            />
          </div>
  
          {/* Banner Description Field */}
          <div className="mb-4">
            <label htmlFor="bannerDescription" className="block text-sm font-medium text-gray-700">
              Banner Description
            </label>
            <textarea
              id="bannerDescription"
              value={bannerDescription}
              onChange={(e) => setBannerDescription(e.target.value)}
              className="textarea textarea-bordered w-full mt-2"
              placeholder="Enter banner description"
            />
          </div>
  
          {/* Banner Image URL Field */}
          <div className="mb-4">
            <label htmlFor="bannerImage" className="block text-sm font-medium text-gray-700">
              Banner Image URL
            </label>
            <input
              type="text"
              id="bannerImage"
              value={bannerImage}
              onChange={(e) => setBannerImage(e.target.value)}
              className="input input-bordered w-full mt-2"
              placeholder="Enter image URL"
            />
          </div>
  
          {/* Submit Button */}
          <button type="submit" className="btn btn-primary w-full mt-4">
            Add Banner
          </button>
        </form>
      </div>
    );
};

export default ManageBanner;