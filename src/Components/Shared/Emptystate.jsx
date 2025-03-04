import React from 'react';
import { Link } from 'react-router-dom';

const Emptystate = ({ message, address, label }) => {
    return (
       <>
        <div className='h-screen gap-5 flex flex-col justify-center items-center pb-16 '>
      <p className='text-gray-600 text-xl lg:text-3xl'>{message}</p>
      <Link to={address}>
        <Button label={label} />
      </Link>
    </div>
       </>
    );
};

export default Emptystate;