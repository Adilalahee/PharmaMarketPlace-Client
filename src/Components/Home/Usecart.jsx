import { useQuery } from "@tanstack/react-query";
import Axiossecure from "../../Hooks/Axiossecure";
import { useContext } from "react";
import Authcontext from "../../Context/Authcontext";


const Usecart = () => {
    const {user}=useContext(Authcontext)
    const axiosSecure=Axiossecure();
    console.log(user)
const {data: cart=[]}=useQuery({
queryKey:['cart',user?.email],
queryFn:async()=>{
    const res=await axiosSecure(`/allorders?email=${user.email}`);
    console.log(res.data)
    return res.data
}
})
return [cart]
};

export default Usecart;