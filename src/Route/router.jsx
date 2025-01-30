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
import Home from "../Pages/Home";
import MedicineDetails from "../Pages/MedicineDetails";
import Cart from "../Pages/Cart";
import AdminRoute from "./AdminRoute";
import SellerRoute from "./SellerRoute";
import Medicines from "../Components/Home/Medicines";
import AskAdvertise from "../Pages/Dashboard/AskAdvertise";
import ManageCategory from "../Pages/Dashboard/ManageCategory";
import ManageBanner from "../Pages/Dashboard/ManageBanner";
import SalesReport from "../Pages/Dashboard/SalesReport";

const router=createBrowserRouter([
    {
        path:'/',
        element:<Mainlayout></Mainlayout>,
        errorElement:<Errorpage></Errorpage>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/medicine/:id',
                element:<MedicineDetails></MedicineDetails>
            },
            {
                path:'/medicines',
                element:<Medicines></Medicines>
            },
            {
                path:'/cart',
                element:<Cart></Cart>
            },
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
                    <SellerRoute>
                    <Addmedicines></Addmedicines>
                    </SellerRoute>
                </Privateroute>)
            },
            {
                path:'inventory-items',
                element:(<Privateroute>
                    <SellerRoute>
                    <Myinventory></Myinventory>
                    </SellerRoute>
                </Privateroute>)
            },
            {
                path:'manage-users',
                element:(<Privateroute>
                    <AdminRoute>
                    <Manageusers></Manageusers>
                    </AdminRoute>
                </Privateroute>)
            },
            {
                path:'sales-report',
                element:(<Privateroute>
                    <AdminRoute>
                    <SalesReport></SalesReport>
                    </AdminRoute>
                </Privateroute>)
            },
            {
                path:'manage-banner',
                element:(<Privateroute>
                    <AdminRoute>
                    <ManageBanner></ManageBanner>
                    </AdminRoute>
                </Privateroute>)
            },
            {
                path:'manage-category',
                element:(<Privateroute>
                    <AdminRoute>
                    <ManageCategory></ManageCategory>
                    </AdminRoute>
                </Privateroute>)
            },
            {
                path:'manage-orders',
                element:<Privateroute>
                    <SellerRoute>
                    <Manageorders></Manageorders>
                    </SellerRoute>
                </Privateroute>
            },
            {
                path:'advertise',
                element:<Privateroute>
                    <SellerRoute>
                    <AskAdvertise></AskAdvertise>
                    </SellerRoute>
                </Privateroute>
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