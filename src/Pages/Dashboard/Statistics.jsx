import { Helmet } from 'react-helmet-async'
import Adminstatistics from '../../Components/Dashboard/Statistics/Adminstatistics';

const Statistics = () => {
    return (
    <>
     <div>
      <Helmet>
        <title>Dashboard</title>
      </Helmet>
      <Adminstatistics></Adminstatistics>
    </div>
    </>
    );
};

export default Statistics;