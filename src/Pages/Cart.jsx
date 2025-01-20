import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Axiossecure from '../Hooks/Axiossecure';

const Cart = () => {
    const axiosSecure=Axiossecure()
    const {data:cart=[]}=useQuery({
        queryKey:['cart'],
        queryFn: async()=>{
          const res=  await axiosSecure.get('/allorders')
            console.log(res.data)
            return res.data
        }
    })
    return (
        <div>
            Hello Cart
        </div>
    );
};

export default Cart;