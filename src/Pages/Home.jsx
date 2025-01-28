import Banner from "../Components/Banner/Banner";
import Medicines from "../Components/Home/Medicines";
import { Helmet } from 'react-helmet-async'
import Vendor from "./Vendor";
import Articles from "./Articles";
import Category from "../Components/Category/Category";

const Home = () => {
    return (
     <>
         <div>
      <Helmet>
        <title> PlantNet | Buy Your Desired Medicine</title>
      </Helmet>
      <Banner></Banner>
      <Category></Category>
      <Articles></Articles>
      <Vendor></Vendor>
    </div>
     </>
    );
};

export default Home;