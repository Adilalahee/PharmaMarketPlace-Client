import {
    Dialog,
    Transition,
    TransitionChild,
    DialogPanel,
    DialogTitle,
  } from '@headlessui/react'
  import { Fragment, useContext, useState } from 'react'
import Button from '../Shared/Button';
import toast from 'react-hot-toast';
import Authcontext from '../../Context/Authcontext';
import Axiossecure,{axiosSecure} from '../../Hooks/Axiossecure';
const Purchasemodal = ({ closeModal, isOpen,medicine }) => {
  const {user}=useContext(Authcontext)
  const axiosSecure =  Axiossecure()
  const {image,category,company,description,genericname,price,quantity,seller,_id}=medicine
  const [totalQuantity,setTotalQuantity]=useState(1)
  const [totalPrice,setTotalPrice]=useState(price)
  const [purchaseInfo,setPurchaseInfo]=useState({
    customer:{
      name:user?.displayName,
      email: user?.email,
      image:user?.image
    },
    medicineId:_id,
    price:totalPrice,
    quantity:totalQuantity,
    seller:{
      email:seller?.email
    },
    address:'',
    status:'Pending'
  })

  const handleQuantity=value=>{
    if(value>quantity){
      setTotalQuantity(quantity)
      return toast.error("Quantity not available")
    }
    if(value<=0){
      setTotalQuantity(1)
      return toast.error("Quantity can not be less than 0")
    }
    setTotalQuantity(value)
    setTotalPrice(value*price)
    setPurchaseInfo(prv=>{
      return {...prv,quantity: value,price: value*price}
    })
  }
  const handlePurchase=async()=>{
console.log(purchaseInfo)
try{
await axiosSecure.post('/orders',purchaseInfo)
toast.success("done completed")
}
catch(err){
  console.log(err)
}
finally{
  closeModal()
}
}
  
  return (
    <>
     <Transition appear show={isOpen} as={Fragment}>
      <Dialog as='div' className='relative z-10' onClose={closeModal}>
        <TransitionChild
          as={Fragment}
          enter='ease-out duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in duration-200'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <div className='fixed inset-0 bg-black bg-opacity-25' />
        </TransitionChild>

        <div className='fixed inset-0 overflow-y-auto'>
          <div className='flex min-h-full items-center justify-center p-4 text-center'>
            <TransitionChild
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 scale-95'
              enterTo='opacity-100 scale-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100 scale-100'
              leaveTo='opacity-0 scale-95'
            >
              <DialogPanel className='w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all'>
                <DialogTitle
                  as='h3'
                  className='text-lg font-medium text-center leading-6 text-gray-900'
                >
                  Review Info Before Purchase
                </DialogTitle>
                <div className='mt-2'>
                  <p className='text-sm text-gray-500'>Plant: {genericname}</p>
                </div>
                <div className='mt-2'>
                  <p className='text-sm text-gray-500'>Category: {category}</p>
                </div>
                <div className='mt-2'>
                  <p className='text-sm text-gray-500'>Customer: PH</p>
                </div>

                <div className='mt-2'>
                  <p className='text-sm text-gray-500'>Price:{price}</p>
                </div>
                <div className='mt-2'>
                  <p className='text-sm text-gray-500'>Available Quantity: {quantity}</p>
                </div>
                <div className='space-y-1 text-sm'>
                <label htmlFor='quantity' className='block text-gray-600'>
                  Quantity
                </label>
                <input
                value={totalQuantity}
                onChange={e=>handleQuantity(parseInt(e.target.value))}
                min={0}
                  className='w-full px-4 py-3 text-gray-800 border border-lime-300 focus:outline-lime-500 rounded-md bg-white'
                  name='quantity'
                  id='quantity'
                  type='number'
                  placeholder='Available quantity'
                  required
                />
              </div>
              <div className='space-y-1 text-sm'>
                <label htmlFor='address' className='block text-gray-600'>
                  Shipping Address
                </label>
                <input
                  className='w-full px-4 py-3 text-gray-800 border border-lime-300 focus:outline-lime-500 rounded-md bg-white'
                  name='address'
                  id='address'
                  onChange={e=>setPurchaseInfo(prv=>{
                    return {...prv,address:e.target.value}
                  })}
                  type='text'
                  placeholder='Available address'
                  required
                />
              </div>
              <div>
                <Button onClick={handlePurchase} label={`Pay${totalPrice}`}></Button>
              </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </Transition>
    </>
    );
};

export default Purchasemodal;