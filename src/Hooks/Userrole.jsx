import React, { useContext } from 'react';
import Axiossecure, { axiosSecure } from './Axiossecure';
import Authcontext from '../Context/Authcontext';
import { useQuery } from '@tanstack/react-query';

const Userrole = () => {
    const axiosSecure=Axiossecure()
    const {user}=useContext(Authcontext)
    const {data:role,isLoading}=useQuery({
        queryKey:['role',user?.email],
        queryFn:async()=>{
            const res=await axiosSecure(`/users/role/${user?.email}`);
            return res?.data?.role
        }

    })
    console.log('role',role)
    return [role,isLoading]
};

export default Userrole;