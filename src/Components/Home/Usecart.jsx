import { useQuery } from "@tanstack/react-query";
import Axiossecure from "../../Hooks/Axiossecure";
import { useContext } from "react";
import Authcontext from "../../Context/Authcontext";


const Usecart = () => {
    const {user}=useContext(Authcontext)
    const axiosSecure=Axiossecure();
const {refetch, data: cart=[]}=useQuery({
queryKey:['cart',user?.email],
queryFn:async()=>{
    const res=await axiosSecure.get(`/allorders/${user?.email}`);
    return res.data
}
})
return [cart,refetch]
};

export default Usecart;