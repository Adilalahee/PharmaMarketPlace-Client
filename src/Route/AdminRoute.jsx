import React from 'react';
import Userrole from '../Hooks/Userrole';
import { Navigate } from 'react-router-dom';

const AdminRoute = ({children}) => {
    const [role, isloading] = Userrole()

    if(isloading){
        return <Loader></Loader>
    }

    if (role === 'Admin') {
        return children;
    }
    return <Navigate to="/dashboard/adminHome" ></Navigate>
};

export default AdminRoute;