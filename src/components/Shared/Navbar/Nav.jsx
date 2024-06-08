import { Link } from 'react-router-dom'
import useAuth from '../../../../hooks/useAuth'
import logo from '../../../../public/HeartsUnite.png'

import { Button, Navbar } from "flowbite-react";
import useRole from '../../../../hooks/useRole';

const Nav = () => {
  const { user, logOut } = useAuth();
  const [role] = useRole()

  const handleLogout = () => {
    logOut()
  }

  const navLinks = <>
  <Link to='/'>
  <Navbar.Link>
        Home
      </Navbar.Link>
  </Link>
      <Link to='/biodatas'><Navbar.Link>Biodatas</Navbar.Link></Link>
      <Link to='/aboutUs'><Navbar.Link>About us</Navbar.Link></Link>
      <Link to='/contactUs'><Navbar.Link>Contact us</Navbar.Link></Link>

      {
        user && role==='normal user' || role==='premium member' ? <Link to='/dashboard/editBiodata'><Navbar.Link>Dashboard</Navbar.Link></Link> : <Link to='/dashboard/adminDashboard'><Navbar.Link>Dashboard</Navbar.Link></Link>
      }
  </>

  return (
    
    <Navbar fluid rounded className='shadow-md sticky'>
    <Link to='/'>
    <Navbar.Brand>
      <img src={logo} className="mr-1 h-6 sm:h-9" />
      <p className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
        <span className='bg-gradient-to-r from-purple-400 to-purple-100 rounded-xl p-2'>HeartsUnite</span>
      </p>
    </Navbar.Brand>
    </Link>
    <div className="flex md:order-2">
      
      {
        user ? <Button onClick={handleLogout} outline gradientDuoTone="pinkToOrange">Logout</Button> : <Link to='/login'><Button outline gradientDuoTone='purpleToBlue'>Login</Button></Link>
      }
      <Navbar.Toggle />
    </div>
    <Navbar.Collapse>
      {navLinks}
      
    </Navbar.Collapse>
  </Navbar>

  )
}

export default Nav