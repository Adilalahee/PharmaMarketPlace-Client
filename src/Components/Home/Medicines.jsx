import React from 'react';
import Loader from '../Shared/Loader';
import Container from '../Shared/Container';
import axios from 'axios';
import Card from './Card';
import { useQuery } from '@tanstack/react-query'

const Medicines = () => {
    const { data: medicines, isLoading } = useQuery({
        queryKey: ['medicines'],
        queryFn: async () => {
          const { data } = await axios(`${import.meta.env.VITE_API_URL}/allmedicines`)
          console.log(data)
          return data
        },
      })
      if (isLoading) return <Loader></Loader>
    return (
   <>
   <Container>
      {medicines && medicines.length > 0 ? (
        <div className='pt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8'>
          {medicines.map(medicine => (
            <Card key={medicine._id} medicine={medicine}></Card>
          ))}
        </div>
      ) : (
        <p>No Data Available</p>
      )}
    </Container>
   </>
    );
};

export default Medicines;