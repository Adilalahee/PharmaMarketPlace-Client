
import { Helmet } from 'react-helmet-async'
import Vendor from "./Vendor";
import Articles from "./Articles";
import Category from "../Components/Category/Category";
import Slider from "../Components/Banner/Slider";
import Featured from './Featured';
import Contact from './contact';

const Home = () => {
    return (
     <>
         <div>
      <Helmet>
        <title> Pharma Market | Buy Your Desired Medicine</title>
      </Helmet>
      <Slider></Slider>
      <Category></Category>
      <Featured></Featured>
      <Articles></Articles>
      <Vendor></Vendor>
      <Contact></Contact>

    </div>
     </>
    );
};

export default Home;