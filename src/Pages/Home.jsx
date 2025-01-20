import Banner from "../Components/Banner/Banner";
import Medicines from "../Components/Home/Medicines";
import { Helmet } from 'react-helmet-async'

const Home = () => {
    return (
     <>
         <div>
      <Helmet>
        <title> PlantNet | Buy Your Desired Medicine</title>
      </Helmet>
      <Banner></Banner>
      <Medicines></Medicines>
    </div>
     </>
    );
};

export default Home;