import React, { useContext, useState } from 'react';
import Authcontext from '../../../Context/Authcontext';
import { Link } from 'react-router-dom';
import { GrLogout } from 'react-icons/gr'
import { FcSettings } from 'react-icons/fc'
import { AiOutlineBars } from 'react-icons/ai'
import Menuitem from './Menuitem';
import Customermenu from './Customermenu';
import Sellermenu from './Sellermenu';
import Adminmenu from './Adminmenu';
import logo from '../../../assets/logo_pharma_market.png'
import Userrole from '../../../Hooks/Userrole';
import cover from "../../../assets/logo_pharma_market.png"

const Sidebar = () => {
    const { logOut } = useContext(Authcontext)
    const [isActive, setActive] = useState(false)
    const [role,isLoading]=Userrole()
  
    // Sidebar Responsive Handler
    const handleToggle = () => {
      setActive(!isActive)
    }
    return (
        <>
          {/* Small Screen Navbar */}
      <div className='bg-gray-100 text-gray-800 flex justify-between md:hidden'>
        <div>
          <div className='block cursor-pointer p-4 font-bold'>
            <Link to='/'>
              <img
                // className='hidden md:block'
                src={cover}
                alt='logo'
                width='100'
                height='100'
              />
            </Link>
          </div>
        </div>

        <button
          onClick={handleToggle}
          className='mobile-menu-button p-4 focus:outline-none focus:bg-gray-200'
        >
          <AiOutlineBars className='h-5 w-5' />
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-gray-100 w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${
          isActive && '-translate-x-full'
        }  md:translate-x-0  transition duration-200 ease-in-out`}
      >
        <div>
          <div>
            <div className='w-full hidden md:flex px-4 py-2 shadow-lg rounded-lg justify-center items-center bg-lime-100 mx-auto'>
              <Link to='/'>
                <img
                  // className='hidden md:block'
                  src={logo}
                  alt='logo'
                  width='100'
                  height='100'
                />
              </Link>
            </div>
          </div>

          {/* Nav Items */}
          <div className='flex flex-col justify-between flex-1 mt-6'>
            <nav>
              {role==='Customer' && <Customermenu></Customermenu>}
              {role==='Seller' && <Sellermenu></Sellermenu>}
              {role==='Admin' && <Adminmenu></Adminmenu>}
             
             

           
              
            </nav>
          </div>
        </div>

        <div>
          <hr />

        <Menuitem
        icon={FcSettings}
        label='Profile'
        address='/dashboard/profile'></Menuitem>
          <button
            onClick={logOut}
            className='flex w-full items-center px-4 py-2 mt-5 text-gray-600 hover:bg-gray-300   hover:text-gray-700 transition-colors duration-300 transform'
          >
            <GrLogout className='w-5 h-5' />

            <span className='mx-4 font-medium'>Logout</span>
          </button>
        </div>
      </div>
        </>
    );
};

export default Sidebar;