import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import Axiossecure from '../Hooks/Axiossecure';
import Authcontext from '../Context/Authcontext';
import Usecart from '../Components/Home/Usecart';
import Cartdata from '../Components/Dashboard/Tablerows/Cartdata';
import { NavLink } from 'react-router-dom';

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
            <NavLink to='/checkout'><button onClick={handlecart}>Check Out</button></NavLink>
        </div>
              <div className='container mx-auto px-4 sm:px-8'>
          <div className='py-8'>
            <div className='-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto'>
              <div className='inline-block min-w-full shadow rounded-lg overflow-hidden'>
                <table className='min-w-full leading-normal'>
                  <thead>
                    <tr>
                      <th
                        scope='col'
                        className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                      >
                        Image
                      </th>
                      <th
                        scope='col'
                        className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                      >
                        Name
                      </th>
                      <th
                        scope='col'
                        className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                      >
                        Category
                      </th>
                      <th
                        scope='col'
                        className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                      >
                        Price
                      </th>
                      <th
                        scope='col'
                        className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                      >
                        Quantity
                      </th>
  
                      <th
                        scope='col'
                        className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                      >
                        Delete
                      </th>
                      <th
                        scope='col'
                        className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                      >
                        Update
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                 {
                  cart.map(carts=><Cartdata key={carts._id} carts={carts}></Cartdata>)
                 }
                    
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        </>
     

    );
};

export default Cart;