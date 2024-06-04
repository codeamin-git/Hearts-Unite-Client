import { Link, NavLink } from 'react-router-dom';
import logo from '../../../../public/HeartsUnite.png'
import { FaEdit, FaStreetView } from "react-icons/fa";
import { MdFavorite, MdPermContactCalendar } from "react-icons/md";
import { Button } from 'flowbite-react';
import useAuth from '../../../../hooks/useAuth';

const Sidebar = () => {
    const {logOut} = useAuth();
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
                <li className='flex items-center gap-2'>
                <MdFavorite />
                    <NavLink to='/dashboard/favouritesBiodata' className={({isActive}) => isActive ? 'text-xl font bold bg-blue-500 w-full': 'text-xl'}>Favourites Biodata </NavLink>
                </li>
            </ul>
            </div>



            <Button onClick={handleLogOut} className='' gradientDuoTone="pinkToOrange">Logout</Button>
   

        </div>
    );
};

export default Sidebar;