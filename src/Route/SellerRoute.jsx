import React from 'react';
import Userrole from '../Hooks/Userrole';
import { Navigate } from 'react-router-dom';
import Loader from '../Components/Shared/Loader';

const SellerRoute = () => {
    const [role, isLoading] = Userrole()

    if(isLoading){
        return <Loader></Loader>
    }

    if (role === 'Seller') {
        return children;
    }
    return <Navigate to="/dashboard" ></Navigate>
};

export default SellerRoute;