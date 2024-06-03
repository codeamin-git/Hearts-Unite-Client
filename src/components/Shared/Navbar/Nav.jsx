import Container from '../Container'
import { AiOutlineMenu } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import useAuth from '../../../../hooks/useAuth'
import logo from '../../../../public/HeartsUnite.png'

import { Button, Navbar } from "flowbite-react";

const Nav = () => {
  const { user, logOut } = useAuth();

  const navLinks = <>
  <Link to='/'>
  <Navbar.Link>
        Home
      </Navbar.Link>
  </Link>
      <Link to='/biodatas'><Navbar.Link>Biodatas</Navbar.Link></Link>
      <Link to='/aboutUs'><Navbar.Link>About us</Navbar.Link></Link>
      <Link to='/contactUs'><Navbar.Link>Contact us</Navbar.Link></Link>

  </>

  return (
    
    <Navbar fluid rounded className='shadow-md sticky'>
    <Link to='/'>
    <Navbar.Brand>
      <img src={logo} className="mr-1 h-6 sm:h-9" alt="Flowbite React Logo" />
      <p className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
        <span className='bg-gradient-to-r from-purple-400 to-purple-100 rounded-xl p-2'>HeartsUnite</span>
      </p>
    </Navbar.Brand>
    </Link>
    <div className="flex md:order-2">
      <Button>Get started</Button>
      <Navbar.Toggle />
    </div>
    <Navbar.Collapse>
      {navLinks}
      
    </Navbar.Collapse>
  </Navbar>

  )
}

export default Nav