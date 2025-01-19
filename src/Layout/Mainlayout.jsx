import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer";

const Mainlayout = () => {
    return (
    <>
    <Navbar></Navbar>
    <div className='pt-24 min-h-[calc(100vh-68px)]'>
    <Outlet></Outlet>
      </div>
    
    <Footer></Footer>
    </>
    );
};

export default Mainlayout;