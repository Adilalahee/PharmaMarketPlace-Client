import React from 'react';

const Articles = () => {
    return (
 <>
  <section className="py-12 bg-gray-100">
      <div className="max-w-screen-xl mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-8">
          Latest Articles, News & Announcements
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="card bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transition-transform">
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-4">
                The Importance of Proper Medication Dosage
              </h3>
              <p className="text-sm text-gray-500 mb-4">
                Understanding the right dosage for your medication is critical for both effectiveness and safety. This article explores why dosage matters.
              </p>
              <div className="flex justify-between items-center">
                <span className="text-xs text-gray-400">January 20, 2025</span>
                <a href="#" className="btn bg-green-700 text-sm">
                  Read More
                </a>
              </div>
            </div>
          </div>

          <div className="card bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transition-transform">
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-4">
                New Research on Pain Relief Medications
              </h3>
              <p className="text-sm text-gray-500 mb-4">
                A new study reveals the most effective pain relief medications available today. Stay informed about the best options for managing pain.
              </p>
              <div className="flex justify-between items-center">
                <span className="text-xs text-gray-400">January 18, 2025</span>
                <a href="#" className="btn bg-green-700 text-sm">
                  Read More
                </a>
              </div>
            </div>
          </div>

          <div className="card bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transition-transform">
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-4">
                How to Choose the Right Medicine for Cough and Cold
              </h3>
              <p className="text-sm text-gray-500 mb-4">
                With so many cough and cold medications available, choosing the right one can be overwhelming. This article guides you in selecting the best option.
              </p>
              <div className="flex justify-between items-center">
                <span className="text-xs text-gray-400">January 15, 2025</span>
                <a href="#" className="btn bg-green-700 text-sm">
                  Read More
                </a>
              </div>
            </div>
          </div>

          <div className="card bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transition-transform">
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-4">
                Updates on New Regulations for Over-the-Counter Drugs
              </h3>
              <p className="text-sm text-gray-500 mb-4">
                Recent changes to the regulations surrounding over-the-counter drugs are causing a shift in how medicines are sold. Learn what it means for you.
              </p>
              <div className="flex justify-between items-center">
                <span className="text-xs text-gray-400">January 10, 2025</span>
                <a href="#" className="btn bg-green-700 text-sm">
                  Read More
                </a>
              </div>
            </div>
          </div>

          <div className="card bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transition-transform">
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-4">
                The Benefits of Herbal Medicine in Modern Healthcare
              </h3>
              <p className="text-sm text-gray-500 mb-4">
                Herbal medicine has been used for centuries, and it’s becoming increasingly popular in modern healthcare practices. Explore the benefits.
              </p>
              <div className="flex justify-between items-center">
                <span className="text-xs text-gray-400">January 5, 2025</span>
                <a href="#" className="btn bg-green-700 text-sm">
                  Read More
                </a>
              </div>
            </div>
          </div>

          <div className="card bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transition-transform">
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-4">
                How Vitamins Can Improve Your Immunity
              </h3>
              <p className="text-sm text-gray-500 mb-4">
                Vitamins are essential for maintaining good health. This article covers the best vitamins to boost immunity and keep you strong year-round.
              </p>
              <div className="flex justify-between items-center">
                <span className="text-xs text-gray-400">December 30, 2024</span>
                <a href="#" className="btn bg-green-700 text-sm">
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
 </>
    );
};

export default Articles;