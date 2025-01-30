import React, { useState } from 'react';
import Deletemodal from '../../Modal/Deletemodal';
import Updatemedicinemodal from '../../Modal/Updatemedicinemodal';

const Cartdata = ({carts}) => {
    const {image,name,category,quantity,price}=carts
        let [isOpen, setIsOpen] = useState(false)
        const [isEditModalOpen, setIsEditModalOpen] = useState(false)
      
        function openModal() {
          setIsOpen(true)
        }
        function closeModal() {
          setIsOpen(false)
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
        <span
          onClick={openModal}
          className='relative cursor-pointer inline-block px-3 py-1 font-semibold text-green-900 leading-tight'
        >
          <span
            aria-hidden='true'
            className='absolute inset-0 bg-red-200 opacity-50 rounded-full'
          ></span>
          <span className='relative'>Delete</span>
        </span>
        <Deletemodal isOpen={isOpen} closeModal={closeModal}></Deletemodal>
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <span
          onClick={() => setIsEditModalOpen(true)}
          className='relative cursor-pointer inline-block px-3 py-1 font-semibold text-green-900 leading-tight'
        >
          <span
            aria-hidden='true'
            className='absolute inset-0 bg-green-200 opacity-50 rounded-full'
          ></span>
          <span className='relative'>Update</span>
        </span>
       <Updatemedicinemodal  isOpen={isEditModalOpen}
          setIsEditModalOpen={setIsEditModalOpen}></Updatemedicinemodal>
      </td>
    </tr>
      </>
    );
};

export default Cartdata;