import React from 'react';
import Container from '../Components/Shared/Container';

const Vendor = () => {
    return (
 <>
<Container>
<div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800">Multi-Vendor Medicine Platform</h1>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Discover a wide range of medicine from trusted vendors. Compare prices, read reviews, and order with confidence.
          </p>
        </header>

        {/* Vendor Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Vendor Card 1 */}
          <div className="card bg-gray-100  shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <figure className="px-6 pt-6">
              <img
                src="https://via.placeholder.com/300x200"
                alt="Vendor A"
                className="rounded-lg w-full h-48 object-cover"
              />
            </figure>
            <div className="card-body p-6">
              <h2 className="card-title text-2xl font-semibold text-gray-800">PharmaCare</h2>
              <p className="text-gray-600 mt-2">
                Specializes in generic medicines, wellness products, and prescription drugs.
              </p>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-gray-700 font-medium">⭐ 4.5/5</span>
                <button className="btn bg-green-700 text-white">Shop Now</button>
              </div>
            </div>
          </div>

          {/* Vendor Card 2 */}
          <div className="card bg-gray-100 shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <figure className="px-6 pt-6">
              <img
                src="https://via.placeholder.com/300x200"
                alt="Vendor B"
                className="rounded-lg w-full h-48 object-cover"
              />
            </figure>
            <div className="card-body p-6">
              <h2 className="card-title text-2xl font-semibold text-gray-800">MediLife</h2>
              <p className="text-gray-600 mt-2">
                Offers a wide range of prescription drugs, supplements, and medical equipment.
              </p>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-gray-700 font-medium">⭐ 4.7/5</span>
                <button className="btn bg-green-700 text-white">Shop Now</button>
              </div>
            </div>
          </div>

          {/* Vendor Card 3 */}
          <div className="card bg-gray-100 shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <figure className="px-6 pt-6">
              <img
                src="https://via.placeholder.com/300x200"
                alt="Vendor C"
                className="rounded-lg w-full h-48 object-cover"
              />
            </figure>
            <div className="card-body p-6">
              <h2 className="card-title text-2xl font-semibold text-gray-800">HerbalHeal</h2>
              <p className="text-gray-600 mt-2">
                Provides natural and herbal remedies for various health conditions.
              </p>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-gray-700 font-medium">⭐ 4.3/5</span>
                <button className="btn bg-green-700 text-white">Shop Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</Container>
 </>
    );
};

export default Vendor;