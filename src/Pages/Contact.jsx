import React from 'react';

const Contact = () => {
    return (
    <>
         <section className="py-16 px-4 text-center">
        <h2 className="text-3xl font-bold mb-6 text-[#1A237E]">Contact Us</h2>
        <div className="max-w-lg mx-auto">
          <input type="text" placeholder="Your Name" className="input input-bordered w-full mb-4 bg-white" />
          <input type="email" placeholder="Your Email" className="input input-bordered w-full mb-4 bg-white" />
          <textarea placeholder="Your Message" className="textarea textarea-bordered w-full mb-4 bg-white"></textarea>
          <button className="btn bg-[#1A237E] text-white w-full">Send Message</button>
        </div>
      </section>
    </>
    );
};

export default Contact;