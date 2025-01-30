import { FaUserCog } from 'react-icons/fa'
import Menuitem from './Menuitem';
import { BsGraphUp } from 'react-icons/bs'

const Adminmenu = () => {
    return (
       <>
        <Menuitem    icon={BsGraphUp}
                       label='Statistics'
                       address='/dashboard'></Menuitem>
       <Menuitem icon={FaUserCog} label='Manage Users' address='manage-users'></Menuitem>
       <Menuitem icon={FaUserCog} label='Manage Category' address='manage-category'></Menuitem>
       <Menuitem icon={FaUserCog} label='Manage Banner' address='manage-banner'></Menuitem>
       <Menuitem icon={FaUserCog} label='Sakles Report' address='sales-report'></Menuitem>
       </>
    );
};

export default Adminmenu;