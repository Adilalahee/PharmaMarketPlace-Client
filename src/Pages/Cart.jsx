import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import Axiossecure from '../Hooks/Axiossecure';
import Authcontext from '../Context/Authcontext';
import Usecart from '../Components/Home/Usecart';

const Cart = () => {
    const axiosSecure=Axiossecure()
    const {user}=useContext(Authcontext)
    // console.log('users',user)
    const [cart]=Usecart()
    const totalprice=cart.reduce((total,item) =>total+item.price,0)
    // console.log('H,userello cart',cart)
// console.log(totalprice)

const handlecart=()=>{

}
    return (
        <>
           <div>
            Hello Cart{cart.length}
            totalPrice:{totalprice}
            <button onClick={handlecart}>Pay Now</button>
        </div>
        <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>Address</th>
        <th>Quantity</th>
        <th>Price</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
      {
        cart.map(item => (
          <tr key={item.id}>
            <td>{item.address}</td>
            <td>{item.quantity}</td>
            <td>{item.price}</td>
            <td>{item.status}</td>
          </tr>
        ))
      }
    </tbody>
  </table>
</div>
        </>
     

    );
};

export default Cart;