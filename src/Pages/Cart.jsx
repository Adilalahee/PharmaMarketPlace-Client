import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import Axiossecure from '../Hooks/Axiossecure';
import Authcontext from '../Context/Authcontext';
import Usecart from '../Components/Home/Usecart';

const Cart = () => {
    const axiosSecure=Axiossecure()
    const {user}=useContext(Authcontext)
    const {cart}=Usecart()
    console.log(cart)
console.log(user)
    return (
        <div>
            Hello Cart
        </div>
    );
};

export default Cart;