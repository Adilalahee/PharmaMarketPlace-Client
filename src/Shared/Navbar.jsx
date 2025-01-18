import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import Authcontext from "../Context/Authcontext";

const Navbar = () => {
    const {user,logOut}=useContext(Authcontext);
    const links=<>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/allbooking">Shop</Link></li>
    <li><Link to="/addbooking">About Us</Link></li>
    <li><Link to="/mybooking">My Cart</Link></li>
    <li><Link to="/mybookedtutor">My Booked tutors</Link></li>
</>
    return (
        <>
      <div className="navbar text-white bg-green-800">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
     {links}
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">Pharma Market</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
{links}
    </ul>

  </div>
  <div className="navbar-end">
  {
      user && user?.email? 
      <div className='flex gap-2'>
        <div className='dropdown dropdown-end z-50'>
            <div
              tabIndex={0}
              role='button'
              className='btn btn-ghost btn-circle avatar'
            >
              <div title={user?.displayName} className='w-10 rounded-full'>
                <img
                  referrerPolicy='no-referrer'
                  alt='User Profile Photo'
                  src={user?.photoURL}
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52'
            >
              <h1>{user.displayName}</h1>
            </ul>
          </div>
        <button onClick={logOut} className='ml-3'>Log Out</button>
      </div>
      :
      <NavLink to='/login' className='btn btn-neutral' to='/login'>Join Us</NavLink>
    }
  

  </div>
</div>
      </>
    );
};

export default Navbar;