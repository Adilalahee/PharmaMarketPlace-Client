import React, { useContext, useState } from 'react';
import { BsFingerprint } from 'react-icons/bs'
import { GrUserAdmin } from 'react-icons/gr'
import Menuitem from './Menuitem';
import Sellerreqmodal from '../../Modal/Sellerreqmodal';
import Authcontext from '../../../Context/Authcontext';
import Axiossecure from '../../../Hooks/Axiossecure';

const Customermenu = () => {
    const [isOpen, setIsOpen] = useState(false)
    const {user}=useContext(Authcontext)
    const axiosSecure=Axiossecure()

    const closeModal = () => {
      setIsOpen(false)
    }
    const requestHandler=async ()=>{
      try{
        const {data}=await axiosSecure.patch(`/users/${user?.email}`)
      }catch(err){
        console.log("error")
      }
    }
    return (
      <>
        <Menuitem
        icon={BsFingerprint} label='My Orders' address='my-orders'></Menuitem>

<div
  onClick={() => setIsOpen(true)}
  className='flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform text-gray-600  hover:bg-gray-300   hover:text-gray-700 cursor-pointer'
>
  <GrUserAdmin className='w-5 h-5' />

  <span className='mx-4 font-medium'>Become A Seller</span>
</div>

<Sellerreqmodal requestHandler={requestHandler} closeModal={closeModal} isOpen={isOpen}></Sellerreqmodal>
</>
    );
};

export default Customermenu;