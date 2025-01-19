import { useContext } from "react"
import { Navigate, useLocation } from "react-router-dom"
import Loader from "../Components/Shared/Loader"
import Authcontext from "../Context/Authcontext"

const Privateroute = ({ children }) => {
    const { user, loading } = useContext(Authcontext)
    const location = useLocation()
  
    if (loading) return <Loader></Loader>
    if (user) return children
    return <Navigate to='/login' state={{ from: location }} replace='true' />
  }

export default Privateroute;