import { Helmet } from 'react-helmet-async'
import Customerorderdata from '../../Components/Dashboard/Tablerows/Customerorderdata';
import { useContext } from 'react';
import Authcontext from '../../Context/Authcontext';
import Axiossecure, { axiosSecure } from '../../Hooks/Axiossecure';
import { useQuery } from '@tanstack/react-query';
import Loader from '../../Components/Shared/Loader';

const Myorders = ({orderdata}) => {
  const {user}=useContext(Authcontext)
  const axiosSecure=Axiossecure()
  const {data:orders={},isLoading,refetch}=useQuery({
    queryKey:['orders',user?.email],
    queryFn:async()=>{
      const {data}=await axiosSecure(`allorders/${user?.email}`)
      console.log(data)
      return data
   
    }
  })
  console.log("orders",orders)
if (isLoading) return <Loader></Loader>
    return (
        <>
        <Helmet>
          <title>My Orders</title>
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
                      orders.map(orderdata=><Customerorderdata key={orderdata._id} orderdata={orderdata} refetch={refetch}></Customerorderdata>)
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

export default Myorders;