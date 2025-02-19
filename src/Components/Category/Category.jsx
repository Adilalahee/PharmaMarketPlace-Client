import React from 'react';
import { Link } from 'react-router-dom';

const Category = () => {
    return (
       <>
    <section className="py-12 bg-green-50">
      <div className="max-w-screen-xl mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center text-green-700 mb-8">
          Browse by Category
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Category 1 */}
          <div className="card bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 hover:shadow-xl transition-transform">
            <div className="p-6">
              <h3 className="text-xl font-semibold text-green-700 mb-4">Pain Relief</h3>
              <p className="text-sm text-green-600 mb-4">
                Find effective medications for various types of pain relief, from headaches to muscle pain.
              </p>
              <Link to="/medicines" className="btn btn-success text-white text-sm">
                Explore
              </Link>
            </div>
          </div>

          {/* Category 2 */}
          <div className="card bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 hover:shadow-xl transition-transform">
            <div className="p-6">
              <h3 className="text-xl font-semibold text-green-700 mb-4">Antibiotics</h3>
              <p className="text-sm text-green-600 mb-4">
                Browse our collection of antibiotics to treat infections effectively and safely.
              </p>
              <Link to="/medicines" className="btn btn-success text-white text-sm">
                Explore
              </Link>
            </div>
          </div>

          {/* Category 3 */}
          <div className="card bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 hover:shadow-xl transition-transform">
            <div className="p-6">
              <h3 className="text-xl font-semibold text-green-700 mb-4">Vitamins</h3>
              <p className="text-sm text-green-600 mb-4">
                Discover essential vitamins to boost your immunity and maintain overall health.
              </p>
              <Link to="/medicines" className="btn btn-success text-white text-sm">
                Explore
              </Link>
            </div>
          </div>

          {/* Category 4 */}
          <div className="card bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 hover:shadow-xl transition-transform">
            <div className="p-6">
              <h3 className="text-xl font-semibold text-green-700 mb-4">Herbal Medicine</h3>
              <p className="text-sm text-green-600 mb-4">
                Explore the benefits of natural herbal remedies for various health conditions.
              </p>
              <Link to="/medicines" className="btn btn-success text-white text-sm">
                Explore
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
       </>
    );
};

export default Category;