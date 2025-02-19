import React from 'react';
import Container from '../Components/Shared/Container';

const Featured = () => {
    return (
   <>
<Container>
<section className="py-16 px-4 text-center bg-white">
        <h2 className="text-3xl font-bold mb-6 text-[#1A237E]">Featured Medicines</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="card bg-[#E3F2FD] shadow-xl p-6">
            <h3 className="text-xl font-semibold text-[#1A237E]">Paracetamol 500mg</h3>
            <p className="text-gray-700">Effective pain reliever</p>
            <button className="btn bg-[#1A237E] text-white mt-4">Buy Now</button>
          </div>
          <div className="card bg-[#E3F2FD] shadow-xl p-6">
            <h3 className="text-xl font-semibold text-[#1A237E]">Vitamin C Tablets</h3>
            <p className="text-gray-700">Boost your immunity</p>
            <button className="btn bg-[#1A237E] text-white mt-4">Buy Now</button>
          </div>
          <div className="card bg-[#E3F2FD] shadow-xl p-6">
            <h3 className="text-xl font-semibold text-[#1A237E]">Cough Syrup</h3>
            <p className="text-gray-700">Quick relief for sore throat</p>
            <button className="btn bg-[#1A237E] text-white mt-4">Buy Now</button>
          </div>
          <div className="card bg-[#E3F2FD] shadow-xl p-6">
            <h3 className="text-xl font-semibold text-[#1A237E]">Cough Syrup</h3>
            <p className="text-gray-700">Quick relief for sore throat</p>
            <button className="btn bg-[#1A237E] text-white mt-4">Buy Now</button>
          </div>
        </div>
      </section>
</Container>
   </> );
};

export default Featured;