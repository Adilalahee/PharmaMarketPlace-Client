import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import Axiossecure from '../Hooks/Axiossecure';
import Authcontext from '../Context/Authcontext';

const Cart = () => {
    const axiosSecure=Axiossecure()
    const {user}=useContext(Authcontext)
    console.log(user)
    const {data:cart=[]}=useQuery({
        queryKey:['cart',user?.email],
        queryFn: async()=>{
          const res=  await axiosSecure(`/allorders/${user?.email}`)
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