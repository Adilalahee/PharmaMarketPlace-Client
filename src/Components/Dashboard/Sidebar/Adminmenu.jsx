import { FaUserCog } from 'react-icons/fa'
import Menuitem from './Menuitem';

const Adminmenu = () => {
    return (
       <>
       <Menuitem icon={FaUserCog} label='Manage Users' address='manage-users'></Menuitem>
       </>
    );
};

export default Adminmenu;