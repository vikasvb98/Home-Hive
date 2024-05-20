import React from 'react'
import logo from '../assets/logo-no-background.svg'
import {Link} from 'react-router-dom'
import { IoSearch } from "react-icons/io5";

const Navbar = () => {
  return (
    <header className='w-full h-16 z-10 flex items-center fixed top-0 text-gray-700 gap-6 pl-2 bg-transparent md:justify-between md:px-4'>
        <div>
            <Link to="/">
                <img src={logo} alt="logo"  className='w-24 h-16'/>
            </Link>
        </div>
        <div className='flex items-center gap-2 bg-white px-2 rounded-md'>
            <input type="text" placeholder='Search...' className='w-full outline-none ' />
            <IoSearch className='text-2xl cursor-pointer'/>
        </div>
        <div>
            <ul className='flex items-center gap-4 text-lg font-bold'>
                <Link to="/about">
                    <li className='hover:text-gray-300'>About</li>
                </Link>
                <Link to="/sign-in">
                    <button className='hidden md:flex hover:text-gray-300'>Login</button>
                </Link>
                <Link to="/sign-up">
                    <button className='hidden md:flex hover:text-gray-300'>SignUp</button>
                </Link>
            </ul>
        </div>
    </header>
  )
}

export default Navbar