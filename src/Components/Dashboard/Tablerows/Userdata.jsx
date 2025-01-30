import React, { useState } from 'react';
import Updateusermodal from '../../Modal/Updateusermodal';
import Axiossecure from '../../../Hooks/Axiossecure';
import toast from 'react-hot-toast';

const Userdata = ({userdata,refetch}) => {
    const [isOpen, setIsOpen] = useState(false)
    const axiosSecure=Axiossecure()
    const {email,role,status}=userdata || {}

    const updateRole=async(selectedRole)=>{
     if(role===selectedRole) return
     try{
        const {data}= await axiosSecure.patch(`/users/role/${email}`,
          {role:selectedRole})
          toast.success('Role updated')
          refetch()
     }
     
     catch(err){
     }
     finally{
      setIsOpen(false)
     }

    }
    return (
    <>
     <tr>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <p className='text-gray-900 whitespace-no-wrap'>{email}</p>
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <p className='text-gray-900 whitespace-no-wrap'>{role}</p>
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <p className='text-red-500 whitespace-no-wrap'>{status? status:'Unavailable'}</p>
      </td>

      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <span
          onClick={() => setIsOpen(true)}
          className='relative cursor-pointer inline-block px-3 py-1 font-semibold text-green-900 leading-tight'
        >
          <span
            aria-hidden='true'
            className='absolute inset-0 bg-green-200 opacity-50 rounded-full'
          ></span>
          <span className='relative'>Update Role</span>
        </span>
        {/* Modal */}
        <Updateusermodal updateRole={updateRole} role={role} isOpen={isOpen} setIsOpen={setIsOpen}></Updateusermodal>
      </td>
    </tr>
    </>
    );
};

export default Userdata;