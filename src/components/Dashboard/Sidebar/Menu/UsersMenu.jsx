import { FaEdit, FaStreetView } from "react-icons/fa";
import { MdFavorite, MdPermContactCalendar } from "react-icons/md";
import { NavLink } from "react-router-dom";

const UsersMenu = () => {
    return (
        <>
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
        </>
    );
};

export default UsersMenu;