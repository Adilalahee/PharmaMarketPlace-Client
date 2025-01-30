import { BsFillHouseAddFill } from 'react-icons/bs'
import { MdHomeWork, MdOutlineManageHistory } from 'react-icons/md'
import Menuitem from './Menuitem';

const Sellermenu = () => {
    return (
      <>
    <Menuitem  
    icon={BsFillHouseAddFill}
        label='Add Medicine'
        address='add-medicine'>
    </Menuitem>
      <Menuitem icon={MdHomeWork} label='Manage Medicine' address='inventory-items'></Menuitem>
    <Menuitem
     icon={MdOutlineManageHistory}
     label='Payment History'
     address='manage-orders'></Menuitem>
         <Menuitem
     icon={MdOutlineManageHistory}
     label='Advertise'
     address='advertise'></Menuitem>
      
      </>
    );
};

export default Sellermenu;