import React from 'react';

const Entryform = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
      };
    return (
    <>
        <div className="max-w-2xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-6">Product Information</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name Field */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            className="input input-bordered w-full"
            required
          />
        </div>

        {/* Company Field */}
        <div>
          <label htmlFor="company" className="block text-sm font-medium">Company</label>
          <input
            id="company"
            name="company"
            type="text"
            className="input input-bordered w-full"
            required
          />
        </div>

        {/* Price per Unit Field */}
        <div>
          <label htmlFor="pricePerUnit" className="block text-sm font-medium">Price per Unit</label>
          <input
            id="pricePerUnit"
            name="pricePerUnit"
            type="number"
            className="input input-bordered w-full"
            required
          />
        </div>

        {/* Quantity Field */}
        <div>
          <label htmlFor="quantity" className="block text-sm font-medium">Quantity</label>
          <input
            id="quantity"
            name="quantity"
            type="number"
            className="input input-bordered w-full"
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="btn btn-primary w-full mt-4"
        >
          Submit
        </button>
      </form>
    </div>

    </>
    );
};

export default Entryform;