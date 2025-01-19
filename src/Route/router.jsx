import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../Layout/Mainlayout";
import Login from "../Authentication/Login";
import Signup from "../Authentication/Signup";
import DashboardLayout from "../Layout/DashboardLayout";
import Addmedicines from "../Pages/Dashboard/Addmedicines";
import Privateroute from "./Privateroute";
import Statistics from "../Pages/Dashboard/Statistics";
import Errorpage from "../Pages/Errorpage";
import Myinventory from "../Pages/Dashboard/Myinventory";
import Manageusers from "../Pages/Dashboard/Manageusers";
import Manageorders from "../Pages/Dashboard/Manageorders";
import Profile from "../Pages/Dashboard/Profile";
import Myorders from "../Pages/Dashboard/Myorders";

const router=createBrowserRouter([
    {
        path:'/',
        element:<Mainlayout></Mainlayout>,
        errorElement:<Errorpage></Errorpage>,
        children:[
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/signup',
                element:<Signup></Signup>
            }
        ]
    },
    {
        path:'/dashboard',
        element:(<Privateroute>
            <DashboardLayout></DashboardLayout>
        </Privateroute>),
        children:[
            {
                index:true,
                element:(<Privateroute>
                    <Statistics></Statistics>
                </Privateroute>)
            },
            {
                path:'add-medicine',
                element:(<Privateroute>
                    <Addmedicines></Addmedicines>
                </Privateroute>)
            },
            {
                path:'inventory-items',
                element:(<Privateroute>
                    <Myinventory></Myinventory>
                </Privateroute>)
            },{
                path:'manage-users',
                element:(<Privateroute>
                    <Manageusers></Manageusers>
                </Privateroute>)
            },
            {
                path:'manage-orders',
                element:<Manageorders></Manageorders>
            },
            {
                path:'profile',
                element:<Privateroute>
                    <Profile></Profile>
                </Privateroute>
            },
            {
                path:'my-orders',
                element:<Privateroute>
                    <Myorders></Myorders>
                </Privateroute>
            }
        ]
    }
])
export default router;