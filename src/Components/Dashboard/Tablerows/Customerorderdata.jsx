import React, { useState } from 'react';
import Deletemodal from '../../Modal/Deletemodal';
import Axiossecure, { axiosSecure } from '../../../Hooks/Axiossecure';

const Customerorderdata = ({orderdata,refetch}) => {
    let [isOpen, setIsOpen] = useState(false)
    const axiosSecure=Axiossecure();
    const closeModal = () => setIsOpen(false)
    const {name,category,image,price,quantity,_id,status}=orderdata
    console.log('category',orderdata)
    const handleDelete=async()=>{
      try{
        await axiosSecure.delete(`/orders/${_id}`)
        refetch()
      }
      catch{err}
    }
    return (
   <>
    <tr>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <div className='flex items-center'>
          <div className='flex-shrink-0'>
            <div className='block relative'>
              <img
                alt='profile'
                src={image}
                className='mx-auto object-cover rounded h-10 w-15 '
              />
            </div>
          </div>
        </div>
      </td>

      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <p className='text-gray-900 whitespace-no-wrap'>{name}</p>
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <p className='text-gray-900 whitespace-no-wrap'>{category}</p>
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <p className='text-gray-900 whitespace-no-wrap'>${price}</p>
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <p className='text-gray-900 whitespace-no-wrap'>{quantity}</p>
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <p className='text-gray-900 whitespace-no-wrap'>{status}</p>
      </td>

      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <button
          onClick={() => setIsOpen(true)}
          className='relative disabled:cursor-not-allowed cursor-pointer inline-block px-3 py-1 font-semibold text-lime-900 leading-tight'
        >
          <span className='absolute cursor-pointer inset-0 bg-red-200 opacity-50 rounded-full'></span>
          <span className='relative cursor-pointer'>Cancel</span>
        </button>

        <Deletemodal handleDelete={handleDelete} isOpen={isOpen} closeModal={closeModal}></Deletemodal>
      </td>
    </tr>
   </>
    );
};

export default Customerorderdata;