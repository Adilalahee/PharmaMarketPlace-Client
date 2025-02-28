
import {CardElement, useElements, useStripe} from '@stripe/react-stripe-js';

import './Tablerows/Checkout.css';
import { NavLink, useNavigate } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';

import Authcontext from '../../Context/Authcontext';
import Axiossecure, { axiosSecure } from '../../Hooks/Axiossecure';
import Usecart from '../Home/Usecart';

const Checkoutform = () => {
  const stripe = useStripe();
  const [clientSecret, setClientSecret] = useState('')
  const axiosSecure = Axiossecure();
  const elements = useElements();
  const [error, setError] = useState('')
  const [cart, refetch] = Usecart();
  const {user} = useContext(Authcontext)
  const [transactionId, setTransactionId] = useState('');
  const navigate = useNavigate()

  const totalPrice = cart.reduce((total, item) => total + item.price, 0)

  useEffect(() => {
      if (totalPrice > 0) {
          axiosSecure.post('/create-payment-intent', { price: totalPrice })
              .then(res => {
                  // console.log(res.data.clientSecret);
                  setClientSecret(res.data.clientSecret);
              })
      }

  }, [axiosSecure, totalPrice])

  const handleSubmit = async (event) => {
      event.preventDefault();

      if (!stripe || !elements) {
          return;
      }

      
      const card = elements.getElement(CardElement);

      if (card == null) {
          return;
      }


      const { error, paymentMethod } = await stripe.createPaymentMethod({
          type: 'card',
          card,
      });

      if (error) {
          setError(error.message)
          console.log('[error]', error);
      } else {
          setError('')
          console.log('[PaymentMethod]', paymentMethod);
      }
      // console.log(clientSecret);
      

      const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
          payment_method: {
              card: card,
              billing_details: {
                  email: user?.email || 'anonymous',
                  name: user?.displayName || 'anonymous'
              }
          }
      })
      if (confirmError) {
          console.log('confirm error')
      }
      else {
          // console.log('payment intent', paymentIntent)
          if (paymentIntent.status === 'succeeded') {
              // console.log('transaction id', paymentIntent.id);
              setTransactionId(paymentIntent.id);
              const totalQuantity = cart.length
              //save in the database
              const payment = {
                  buyerEmail: user?.email,
                  price: totalPrice, //TODO: convert to item price
                  transactionId: paymentIntent.id,
                  date: new Date(),  
                  cartIds: cart?.map(item => item._id),
                  productItemIds: cart?.map(item => item.productId),
                  status: 'pending',
                  quantity: totalQuantity,
                  productsName: cart?.map(item=> item?.productName),
              
                  sellerEmail: cart?.map(item => item.sellerEmail)
              }

              const res = await axiosSecure.post('/payments', payment);
              // console.log('payment saved', res.data);
              refetch();
              if (res.data?.paymentResult?.insertedId) {
                  Swal.fire({
                      position: "top-end",
                      icon: "success",
                      title: "Payment Successful",
                      showConfirmButton: false,
                      timer: 1500
                  });
                  navigate('/invoice')
              }

          }
      }
  };
  return (
   <>
    <form onSubmit={handleSubmit}>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '20px',
                            color: '#424770',
                            padding: '10px',
                            margin: '10px',
                            backgroundColor: 'slate',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            <NavLink to='/payment'><button type="submit" className='bg-[#033B4C] py-2 px-20 text-center text-white mt-10' disabled={!stripe}>
                Pay
            </button></NavLink>
            <p className='text-red-600'>{error}</p>
        </form>
   </>
  );
};


export default Checkoutform;