import { Helmet } from 'react-helmet-async'
import Medicinedata from '../../Components/Dashboard/Tablerows/Medicinedata';
import { useContext } from 'react';
import Authcontext from '../../Context/Authcontext';
import Axiossecure from '../../Hooks/Axiossecure';
import Loader from '../../Components/Shared/Loader';
import { useQuery } from '@tanstack/react-query';
import { NavLink } from 'react-router-dom';

const Myinventory = () => {
  const {user}=useContext(Authcontext)
  console.log(user)
  const axiosSecure=Axiossecure()
  const {data:medicines={},isLoading,refetch}=useQuery({
    queryKey:['medicines',user?.email],
    queryFn:async()=>{
      const {data}=await axiosSecure(`/medicine/seller/${user?.email}`)
      console.log(data)
      return data
   
    }
  })
if (isLoading) return <Loader></Loader>
    return (
        <>
        <Helmet>
          <title>Inventory</title>
        </Helmet>
        <NavLink to='/dashboard/add-medicine' className='btn'>Add Medicine here</NavLink>
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
  
                      {/* <th
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
                      </th> */}
                    </tr>
                  </thead>
                  <tbody>
                    {
                      medicines.map(medicine=><Medicinedata key={medicine?._id} refetch={refetch} medicine={medicine}></Medicinedata>)
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

export default Myinventory;