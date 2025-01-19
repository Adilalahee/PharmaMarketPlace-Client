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
      <Menuitem icon={MdHomeWork} label='My Inventory' address='my-inventory'></Menuitem>
    <Menuitem
     icon={MdOutlineManageHistory}
     label='Manage Orders'
     address='manage-orders'></Menuitem>
      
      </>
    );
};

export default Sellermenu;