import React from 'react';
import Axiossecure from './Axiossecure';
import { useQuery } from '@tanstack/react-query';

const UsesAdvertise = () => {
    const axiosSecure = Axiossecure()
    const { data: advertise = [], refetch, isLoading } = useQuery({
        queryKey: ['advertise'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/advertise`)
            return res.data
        }
    })
    return [advertise, refetch, isLoading]
};

export default UsesAdvertise;