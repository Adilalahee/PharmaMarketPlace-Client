import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import Authcontext from "../Context/Authcontext";
import Container from "../Components/Shared/Container";
import Usecart from "../Components/Home/Usecart";

const Navbar = () => {
    const {user,logOut}=useContext(Authcontext);
    const [cart]=Usecart()
    const links=<>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/medicines">Shop</Link></li>
    <li><Link to="/about">About</Link></li>
    <li><Link to="/">Contact</Link></li>
</>
    const privatelinks=<>
    <li><Link to="/cart">My Cart</Link></li>
</>
    return (
        <>
        <div className='fixed w-full bg-[#F8F9FA] z-10 shadow-sm'>
          <div className='py-4 border-b-[1px]'>
            <Container>
            <div className="navbar text-[#008080] bg-[#F8F9FA]">
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
    <ul className="menu menu-horizontal px-1 text-xl">
{links}
{user && user?.email? [privatelinks] :''}
    </ul>

  </div>
  <div className="navbar-end">
  {
      user && user?.email?
    <div className="flex">
        <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        <div className="indicator">
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
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          <span className="badge badge-sm indicator-item text-black">{cart.length}</span>
        </div>
      </div>
      <div
        tabIndex={0}
        className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow">
        <div className="card-body">
          <span className="text-lg font-bold">8 Items</span>
          <span className="text-info">Subtotal: $999</span>
          <div className="card-actions">
            <Link to='/cart' className="btn btn-neutral">View Cart</Link>
          </div>
        </div>
      </div>
    </div>
      <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
        <img
          referrerPolicy='no-referrer'
          alt='User Profile Photo'
          src={user?.photoURL}
        />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content text-black bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
      <NavLink>Update Profile</NavLink>
      <NavLink to='/dashboard'>Dashboard</NavLink>
      <button onClick={logOut} className='ml-3'>Log Out</button>
      
      </ul>
    </div>
    </div>
      :
      <NavLink to='/login' className='btn btn-neutral'>Join Us</NavLink>
    }
  

  </div>
</div>
            </Container>
          </div>
        </div>
 
      </>
    );
};

export default Navbar;

{/* <button onClick={logOut} className='ml-3'>Log Out</button>

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

</div> 
*/}