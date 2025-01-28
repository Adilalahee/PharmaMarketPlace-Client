
import { Helmet } from 'react-helmet-async'
import Vendor from "./Vendor";
import Articles from "./Articles";
import Category from "../Components/Category/Category";
import Slider from "../Components/Banner/Slider";

const Home = () => {
    return (
     <>
         <div>
      <Helmet>
        <title> Pharma Market | Buy Your Desired Medicine</title>
      </Helmet>
      <Slider></Slider>
      <Category></Category>
      <Articles></Articles>
      <Vendor></Vendor>
    </div>
     </>
    );
};

export default Home;