import React, { useContext } from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import Authcontext from '../Context/Authcontext';
import Axiossecure from '../Hooks/Axiossecure';
import Usecart from '../Components/Home/Usecart';
import Checkoutform from '../Components/Dashboard/Checkoutform';
const stripePromise=loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY)

const Checkout = () => {
    
    const axiosSecure=Axiossecure()
    const {user}=useContext(Authcontext)
    // console.log('users',user)
    const [cart]=Usecart()
    const totalprice=cart.reduce((total,item) =>total+item.price,0)
    // console.log('H,userello cart',cart)
// console.log(totalprice)
    return (
        <>
        <div>
              Hello Cart{cart.length}
              totalPrice:{totalprice}
        </div>
        <div>
        <Elements stripe={stripePromise}>
    <Checkoutform></Checkoutform>
  </Elements>
        </div>
        </>
    );
};

export default Checkout;