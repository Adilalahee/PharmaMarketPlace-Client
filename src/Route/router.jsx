import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../Layout/Mainlayout";
import Login from "../Authentication/Login";
import Signup from "../Authentication/Signup";
import DashboardLayout from "../Layout/DashboardLayout";
import Addmedicines from "../Pages/Dashboard/Addmedicines";
import Privateroute from "./Privateroute";
import Statistics from "../Pages/Dashboard/Statistics";

const router=createBrowserRouter([
    {
        path:'/',
        element:<Mainlayout></Mainlayout>,
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
        element:<DashboardLayout></DashboardLayout>,
        children:[
            {
                index:true,
                element:<Privateroute>
                    <Statistics></Statistics>
                </Privateroute>
            },
            {
                path:'/add-medicine',
                element:<Addmedicines></Addmedicines>
            }
        ]
    }
])
export default router;