import { Helmet } from 'react-helmet-async'
import Adminstatistics from '../../Components/Dashboard/Statistics/Adminstatistics';
import Userrole from '../../Hooks/Userrole';
import { Navigate } from 'react-router-dom';
import Loader from '../../Components/Shared/Loader';

const Statistics = () => {
  const [role,isLoading]=Userrole()
  if(isLoading) return <Loader></Loader>
  if(role==='Customer') return <Navigate to='/dashboard/my-orders'></Navigate>
  if(role==='Seller') return <Navigate to='/dashboard/inventory-items'></Navigate>
    return (
    <>
     <div>
      <Helmet>
        <title>Dashboard</title>
      </Helmet>
      {role==='Admin' && <Adminstatistics></Adminstatistics>}
    </div>
    </>
    );
};

export default Statistics;