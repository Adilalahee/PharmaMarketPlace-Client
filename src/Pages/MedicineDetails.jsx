import { Helmet } from 'react-helmet-async'
import Container from '../Components/Shared/Container';
import Heading from '../Components/Shared/Heading';
import Purchasemodal from '../Components/Modal/Purchasemodal';
import { useContext, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import Loader from '../Components/Shared/Loader';
import Button from '../Components/Shared/Button';
import axios from 'axios';
import Authcontext from '../Context/Authcontext';
import Axiossecure from '../Hooks/Axiossecure';


const MedicineDetails = () => {
  const {id}=useParams();
  const {user}=useContext(Authcontext)
  const navigate = useNavigate()
  const location = useLocation()
  const axiosSecure=Axiossecure()
  console.log(id)
    let [isOpen, setIsOpen] = useState(false)
    const {data:medicine=[],isLoading,refetch}=useQuery({
      queryKey:['medicine',id],
      queryFn:async()=>{
        const { data } = await axios(`${import.meta.env.VITE_API_URL}/allmedicine/${id}`)
        return data
      }
    })
    
    const closeModal = () => {
      setIsOpen(false)
    }
    console.log(medicine)
    const {image,category,company,description,genericname,price,quantity,seller,_id}=medicine
    if(isLoading) return <Loader></Loader>
    const handleCart=e=>{
      if(user && user.email){
        const cartInfo={
          email:user.email,
          medicineId:_id,
          genericname,
          quantity,
          seller:{
            email:seller?.email
          },
          price
        }
        axiosSecure.post('/carts',cartInfo).then(res=>{
          console.log(res)
        }).catch(err=>{
          console.log(err)
        })
      }
      else{
        navigate('/login', {state:{ from: location }})
      }
    }
    return (
   <>
       <Container>
      <Helmet>
        <title>Money Plant</title>
      </Helmet>
      <div className='mx-auto flex flex-col lg:flex-row justify-between w-full gap-12'>
        {/* Header */}
        <div className='flex flex-col gap-6 flex-1'>
          <div>
            <div className='w-full overflow-hidden rounded-xl'>
              <img
                className='object-cover w-full'
                src={image}
                alt='header image'
              />
            </div>
          </div>
        </div>
        <div className='md:gap-10 flex-1'>
          {/* Plant Info */}
      <Heading
       title={'Money Plant'}
       subtitle={`Category: ${category}`}
      ></Heading>
          <hr className='my-6' />
          <div
            className='
          text-lg font-light text-neutral-500'
          >
            Professionally deliver sticky testing procedures for next-generation
            portals. Objectively communicate just in time infrastructures
            before.
          </div>
          <hr className='my-6' />

          <div
            className='
                text-xl 
                font-semibold 
                flex 
                flex-row 
                items-center
                gap-2
              '
          >
            <div>Seller: {seller?.name}</div>

            <img
              className='rounded-full'
              height='30'
              width='30'
              alt='Avatar'
              referrerPolicy='no-referrer'
              src={seller?.image}
            />
          </div>
          <hr className='my-6' />
          <div>
            <p
              className='
                gap-4 
                font-light
                text-neutral-500
              '
            >
              Quantity: {quantity}
            </p>
          </div>
          <hr className='my-6' />
          <div className='flex justify-between'>
            <p className='font-bold text-3xl text-gray-500'>Price: 10$</p>
            <div>
              {/* <Button onClick={handleCart} label={quantity>0?'Add to Cart':'Stock Out'}></Button> */}
              <Button onClick={()=>setIsOpen(true)} label={quantity>0?'Purchase':'Stock Out'}></Button>
            </div>
          </div>
          <hr className='my-6' />

          <Purchasemodal medicine={medicine}
          refetch={refetch}
          closeModal={closeModal} isOpen={isOpen}></Purchasemodal>
        </div>
      </div>
    </Container>
   </>
    );
};

export default MedicineDetails;