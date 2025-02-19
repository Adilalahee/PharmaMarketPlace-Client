import React from 'react';
import Container from '../Components/Shared/Container';

const Choose = () => {
    return (
 <>
 <Container>
 <div className="bg-[#E3F2FD] text-gray-900">
      {/* Why Choose Us Section */}
      <section className="py-12 px-6">
        <h2 className="text-3xl font-bold text-[#1A237E] text-center mb-6">Why Choose Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: "Fast Delivery", desc: "Get your medicines delivered within 24 hours." },
            { title: "Authentic Products", desc: "We provide only verified and high-quality medicines." },
            { title: "24/7 Support", desc: "Our customer service is available round the clock." },
          ].map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl text-center">
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="text-gray-700 mt-2">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Customer Testimonials Section */}
      <section className="py-12 px-6">
        <h2 className="text-3xl font-bold text-[#1A237E] text-center mb-6">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              name: "John Doe",
              review: "Excellent service! Got my medicines on time and in perfect condition.",
              img: "https://via.placeholder.com/100",
            },
            {
              name: "Jane Smith",
              review: "Highly recommended! Affordable prices and authentic products.",
              img: "https://via.placeholder.com/100",
            },
          ].map((customer, index) => (
            <div key={index} className="card bg-white shadow-lg rounded-xl p-6 flex items-center gap-4">
              <img src={customer.img} alt={customer.name} className="w-16 h-16 rounded-full" />
              <div>
                <h3 className="text-lg font-semibold">{customer.name}</h3>
                <p className="text-gray-700">{customer.review}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
 </Container>
 </>
    );
};

export default Choose;