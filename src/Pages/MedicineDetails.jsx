import { Helmet } from 'react-helmet-async'
import Container from '../Components/Shared/Container';
import Heading from '../Components/Shared/Heading';
import Purchasemodal from '../Components/Modal/Purchasemodal';
import { useState } from 'react';
const MedicineDetails = () => {
    let [isOpen, setIsOpen] = useState(false)

    const closeModal = () => {
      setIsOpen(false)
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
                src='https://i.ibb.co/DDnw6j9/1738597899-golden-money-plant.jpg'
                alt='header image'
              />
            </div>
          </div>
        </div>
        <div className='md:gap-10 flex-1'>
          {/* Plant Info */}
      <Heading
       title={'Money Plant'}
       subtitle={`Category: ${'Succulent'}`}
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
            <div>Seller: Shakil Ahmed Atik</div>

            <img
              className='rounded-full'
              height='30'
              width='30'
              alt='Avatar'
              referrerPolicy='no-referrer'
              src='https://lh3.googleusercontent.com/a/ACg8ocKUMU3XIX-JSUB80Gj_bYIWfYudpibgdwZE1xqmAGxHASgdvCZZ=s96-c'
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
              Quantity: 10 Units Left Only!
            </p>
          </div>
          <hr className='my-6' />
          <div className='flex justify-between'>
            <p className='font-bold text-3xl text-gray-500'>Price: 10$</p>
            <div>
              <Button label='Purchase' />
            </div>
          </div>
          <hr className='my-6' />

          <Purchasemodal
          closeModal={closeModal} isOpen={isOpen}></Purchasemodal>
        </div>
      </div>
    </Container>
   </>
    );
};

export default MedicineDetails;