import React, { useState } from 'react';
import Deletemodal from '../../Modal/Deletemodal';
import Axiossecure from '../../../Hooks/Axiossecure';

const Sellerorderdata = ({ordersData,refetch}) => {
  const axiosSecure=Axiossecure()
    let [isOpen, setIsOpen] = useState(false)
  const closeModal = () => setIsOpen(false)
  const {name,customer,price,quantity,address,status,_id}=ordersData
  const handleDelete=async()=>{
    try{
      await axiosSecure.delete(`/orders/${_id}`)
      refetch()
    }
    catch(err){
      console.log(err)
    }
    finally{
      setIsOpen(false)
    }
  }
    return (
    <>
    <tr>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <p className='text-gray-900 whitespace-no-wrap'>{name}</p>
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <p className='text-gray-900 whitespace-no-wrap'>{customer?.email}</p>
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <p className='text-gray-900 whitespace-no-wrap'>${price}</p>
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <p className='text-gray-900 whitespace-no-wrap'>{quantity}</p>
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <p className='text-gray-900 whitespace-no-wrap'>{address}</p>
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <p className='text-gray-900 whitespace-no-wrap'>{status}</p>
      </td>

      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <div className='flex items-center gap-2'>
          <select
            required
            className='p-1 border-2 border-lime-300 focus:outline-lime-500 rounded-md text-gray-900 whitespace-no-wrap bg-white'
            name='category'
          >
            <option value='Pending'>Pending</option>
            <option value='In Progress'>Start Processing</option>
            <option value='Delivered'>Deliver</option>
          </select>
          <button
            onClick={() => setIsOpen(true)}
            className='relative disabled:cursor-not-allowed cursor-pointer inline-block px-3 py-1 font-semibold text-green-900 leading-tight'
          >
            <span
              aria-hidden='true'
              className='absolute inset-0 bg-red-200 opacity-50 rounded-full'
            ></span>
            <span className='relative'>Cancel</span>
          </button>
        </div>
        <Deletemodal handleDelete={handleDelete} isOpen={isOpen} closeModal={closeModal}></Deletemodal>
      </td>
    </tr>
    </>
    );
};

export default Sellerorderdata;