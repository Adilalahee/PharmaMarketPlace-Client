import React, { useState } from 'react';
import Loader from '../Shared/Loader';
import Container from '../Shared/Container';
import axios from 'axios';
import Card from './Card';
import { useQuery } from '@tanstack/react-query'

const Medicines = () => {
  const [filter,setFilter]=useState('');
    const [search,setSearch]=useState('');
    const { data: medicines, isLoading } = useQuery({
        queryKey: ['medicines'],
        queryFn: async () => {
          const { data } = await axios(`${import.meta.env.VITE_API_URL}/allmedicines?filter=${filter}&search=${search}`)
          console.log(data)
          return data
        },
      })
      if (isLoading) return <Loader></Loader>
    return (
   <>
            <div className='flex flex-col md:flex-row justify-center items-center gap-5 '>
          <div>
            <select
              name='category'
              id='category'
              onChange={(e)=>setFilter(e.target.value)}
              className='border p-4 rounded-lg'
            
            >
            <option value='Pfizer'>Pfizer</option>
                <option value='GlaxoSmithKline'>GlaxoSmithKline</option>
                <option value='Mylan'>Mylan</option>
                <option value='Merck'>Merck</option>
                <option value='Novartis'>Novartis</option>
                <option value='Sanofi'>Sanofi</option>
            </select>
          </div>

          <form>
            <div className='flex p-1 overflow-hidden border rounded-lg    focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300'>
              <input
                className='px-6 py-2 text-gray-700 placeholder-gray-500 bg-white outline-none focus:placeholder-transparent'
                type='text'
                name='search'
                onChange={(e)=>setSearch(e.target.value)}
                placeholder='Enter Job Title'
                aria-label='Enter Job Title'
              />

              <button className='px-1 md:px-4 py-3 text-sm font-medium tracking-wider text-gray-100 uppercase transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:bg-gray-600 focus:outline-none'>
                Search
              </button>
            </div>
          </form>
          <button className='btn'>Reset</button>
        </div>
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