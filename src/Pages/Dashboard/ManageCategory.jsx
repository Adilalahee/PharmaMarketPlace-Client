import React, { useState } from 'react';

const ManageCategory = () => {
    const [categoryName, setCategoryName] = useState('');
    const [categoryImage, setCategoryImage] = useState('');
  
    // Handle the form submission
    const handleSubmit = (e) => {
      e.preventDefault();
  
      // Check if the category name and image URL are provided
      if (!categoryName || !categoryImage) {
        alert('Both fields are required!');
        return;
      }
  
      // Normally, you would send the form data to a backend API here.
      // For now, let's log the data to the console
      console.log('Category Name:', categoryName);
      console.log('Category Image URL:', categoryImage);
  
      // Clear the form after submission
      setCategoryName('');
      setCategoryImage('');
    };
  
    return (
      <div className="max-w-md mx-auto mt-10 p-6 border rounded-lg shadow-lg bg-white">
        <h2 className="text-2xl font-semibold mb-6 text-center">Add a New Category</h2>
  
        <form onSubmit={handleSubmit}>
          {/* Category Name Field */}
          <div className="mb-4">
            <label htmlFor="categoryName" className="block text-sm font-medium text-gray-700">
              Category Name
            </label>
            <input
              type="text"
              id="categoryName"
              value={categoryName}
              onChange={(e) => setCategoryName(e.target.value)}
              className="input input-bordered w-full mt-2"
              placeholder="Enter category name"
            />
          </div>
  
          {/* Category Image URL Field */}
          <div className="mb-4">
            <label htmlFor="categoryImage" className="block text-sm font-medium text-gray-700">
              Category Image URL
            </label>
            <input
              type="text"
              id="categoryImage"
              value={categoryImage}
              onChange={(e) => setCategoryImage(e.target.value)}
              className="input input-bordered w-full mt-2"
              placeholder="Enter image URL"
            />
          </div>
  
          {/* Submit Button */}
          <button type="submit" className="btn btn-primary w-full mt-4">
            Add Category
          </button>
        </form>
      </div>
    );
};

export default ManageCategory;