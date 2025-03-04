import { Helmet } from 'react-helmet-async'
import Sellerorderdata from '../../Components/Dashboard/Tablerows/Sellerorderdata';
import { useContext } from 'react';
import Authcontext from '../../Context/Authcontext';
import Axiossecure from '../../Hooks/Axiossecure';
import { useQuery } from '@tanstack/react-query';
import Loader from '../../Components/Shared/Loader';

const Manageorders = () => {
  const {user}=useContext(Authcontext)
  const axiosSecure=Axiossecure()
  const {data:orders={},isLoading,refetch}=useQuery({
    queryKey:['orders',user?.email],
    queryFn:async()=>{
      const {data}=await axiosSecure(`seller-orders/${user?.email}`)
      console.log(data)
      return data
   
    }
  })
  console.log("ord",orders)
if (isLoading) return <Loader></Loader>
    return (
        <>
        <Helmet>
          <title>Manage Orders</title>
        </Helmet>
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
                        Name
                      </th>
                      <th
                        scope='col'
                        className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                      >
                        Customer
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
                        Address
                      </th>
                      <th
                        scope='col'
                        className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                      >
                        Status
                      </th>
  
                      <th
                        scope='col'
                        className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                      >
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      orders.map(ordersData=><Sellerorderdata key={ordersData?._id} ordersData={ordersData} refetch={refetch}></Sellerorderdata>)
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

export default Manageorders;