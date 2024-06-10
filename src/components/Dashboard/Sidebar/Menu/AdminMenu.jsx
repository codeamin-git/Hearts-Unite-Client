import { FaUserCheck, FaUsers } from "react-icons/fa";
import { MdAdminPanelSettings, MdOutlineContactPhone, MdOutlineCelebration } from "react-icons/md";
import { NavLink } from "react-router-dom";

const AdminMenu = () => {
    return (
        <>
            <ul className='mt-6 space-y-4'>
                <li className='flex items-center gap-2'>
                    <MdAdminPanelSettings />
                    <NavLink to='/dashboard/adminDashboard' className={({isActive}) => isActive ? 'text-xl font bold bg-blue-500 w-full': 'text-xl'}>Admin Dashboard</NavLink>
                </li>
                <li className="flex items-center gap-2">
                    <FaUsers></FaUsers>
                    <NavLink to='/dashboard/manageUsers' className={({isActive}) => isActive ? 'text-xl font bold bg-blue-500 w-full': 'text-xl'}>Manage Users</NavLink>
                </li>
                <li className="flex items-center gap-2">
                <FaUserCheck />
                    <NavLink to='/dashboard/approvedPremium' className={({isActive}) => isActive ? 'text-xl font bold bg-blue-500 w-full': 'text-xl'}>Approved Premium</NavLink>
                </li>
                <li className="flex items-center gap-2">
                <MdOutlineContactPhone />
                    <NavLink to='/dashboard/approvedContactRequest' className={({isActive}) => isActive ? 'text-xl font bold bg-blue-500 w-full': 'text-xl'} >Approved Contact Request</NavLink>
                </li>
                <li className="flex items-center gap-2">
                <MdOutlineCelebration />
                    <NavLink to='/dashboard/success-stories' className={({isActive}) => isActive ? 'text-xl font bold bg-blue-500 w-full': 'text-xl'} >Success Stories</NavLink>
                </li>
            </ul>
        </>
    );
};

export default AdminMenu;