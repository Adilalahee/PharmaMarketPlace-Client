import Medicines from "../Components/Home/Medicines";
import { Helmet } from 'react-helmet-async'

const Home = () => {
    return (
     <>
         <div>
      <Helmet>
        <title> PlantNet | Buy Your Desired Medicine</title>
      </Helmet>
      <Medicines></Medicines>
    </div>
     </>
    );
};

export default Home;