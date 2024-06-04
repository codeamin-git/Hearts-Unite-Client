import { Link, NavLink } from 'react-router-dom';
import logo from '../../../../public/HeartsUnite.png'
import { FaEdit, FaStreetView } from "react-icons/fa";
import { MdPermContactCalendar } from "react-icons/md";

const Sidebar = () => {
    return (
        <div className='bg-purple-100 min-h-screen p-4 w-64'>
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

            {/* menu items */}
            <ul className='mt-6 space-y-4'>
                <li className='flex items-center gap-2'>
                    <FaEdit></FaEdit>
                    <NavLink to='/dashboard/editBiodata' className={({isActive}) => isActive ? 'text-xl font bold bg-blue-500 w-full': 'text-xl'}>Edit Biodata</NavLink>
                </li>
                <li className='flex items-center gap-2'>
                    <FaStreetView></FaStreetView>
                    <NavLink to='/dashboard/viewBiodata' className={({isActive}) => isActive ? 'text-xl font bold bg-blue-500 w-full': 'text-xl'}>View Biodata</NavLink>
                </li>
                <li className='flex items-center gap-2'>
                <MdPermContactCalendar />
                    <NavLink to='/dashboard/myContactRequest' className={({isActive}) => isActive ? 'text-xl font bold bg-blue-500 w-full': 'text-xl'}>My Contact Request</NavLink>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;