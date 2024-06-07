import { Link, NavLink } from 'react-router-dom';
import logo from '../../../../public/HeartsUnite.png'
import { FaEdit, FaStreetView, FaUserCheck, FaUsers } from "react-icons/fa";
import { MdFavorite, MdPermContactCalendar, MdAdminPanelSettings, MdOutlineContactPhone } from "react-icons/md";
import { Button } from 'flowbite-react';
import useAuth from '../../../../hooks/useAuth';
import useRole from '../../../../hooks/useRole';
import UsersMenu from './Menu/UsersMenu';
import AdminMenu from './Menu/AdminMenu';


const Sidebar = () => {
    const {logOut} = useAuth();
    const [role] = useRole();
    console.log(role);
    const handleLogOut = () => {
        logOut()
    }
    return (
        <div className='bg-purple-100 min-h-screen w-auto md:w-64 p-4 flex flex-col justify-between'>
            <div>
                {/* logo */}
            <div>
                <Link to='/'>
                <div className='flex'>
                    <img src={logo} className='w-10 mr-1'/>
                    <p className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
        <span className='bg-gradient-to-r from-purple-400 to-purple-100 rounded-xl p-2'>HeartsUnite</span>
      </p>
                </div>
                </Link>
            </div>

            {/* user sidebar menu */}
            {role === 'normal user' && 
            <UsersMenu></UsersMenu>
            }

            

            {/* admin sidebar menu */}
            {
                role === 'admin' && <AdminMenu></AdminMenu>
            }

            </div>



            <Button onClick={handleLogOut} className='' gradientDuoTone="pinkToOrange">Logout</Button>
   

        </div>
    );
};

export default Sidebar;