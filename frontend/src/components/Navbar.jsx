import React from 'react'
import {assets} from '../assets/assets'
import {Link,NavLink} from 'react-router-dom'

const Navbar = () => {

  const  [visible, setVisible] = React.useState(false);

  return (
    <div className='flex items-center justify-between py-5 font-medium'>
      
      <NavLink to="/" className='flex items-center gap-2'>
        <img src={assets.logo} alt="logo" className='w-36' />
      </NavLink>

      <ul className='roboto-normal hidden sm:flex gap-5 text-sm text-gray-700'>
        <NavLink to="/" className='flex flex-col items-center gap-1'>
          <p className='nav-text'>HOME</p>
        </NavLink>
        <NavLink to="/collection" className='flex flex-col items-center gap-1'>
          <p className='nav-text'>COLLECTION</p>
        </NavLink>
        <NavLink to="/about" className='flex flex-col items-center gap-1'>
          <p className='nav-text'>ABOUT</p>
        </NavLink>
        <NavLink to="/contact" className='flex flex-col items-center gap-1'>
          <p className='nav-text'>CONTACT</p>
        </NavLink>
      </ul> 

      <div className='flex items-center gap-6'>
        <img src={assets.search_icon} alt="search" className='w-5 cursor-pointer' />
        
        <div className='group relative'>
          <img src={assets.profile_icon} alt="profile" className='w-5 cursor-pointer' />
          <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
            <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded'>
              <p className='cursor-pointer hover:text-black'>My Profile</p>
              <p className='cursor-pointer hover:text-black'>Orders</p>
              <p className='cursor-pointer hover:text-black'>Logout</p>
            </div>
          </div>
        </div>

        <Link to="/cart" className='relative'>
          <img src={assets.cart_icon} alt="cart" className='w-5 min-w-5' />
          <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]'>0</p>
        </Link>
        <img onClick={() => setVisible(true)} src={assets.menu_icon} alt="menu" className='w-5 cursor-pointer sm:hidden' />
      </div>

      <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? 'w-full' : 'w-0'}`}>
        <div onClick={() => setVisible(false)} className='flex flex-col text-gray-600 cursor-pointer'>
          <div className='flex item-center gap-4 p-3'>
            <img src={assets.dropdown_icon} alt="dropdown icon" className='h-4 rotate-180' />
            <p>BACK</p>
          </div>
          <NavLink onClick={() => setVisible(false)} to="/" className='py-2 pl-6 border'>HOME</NavLink>
          <NavLink onClick={() => setVisible(false)} to="/collection" className='py-2 pl-6 border'>COLLECTION</NavLink>
          <NavLink onClick={() => setVisible(false)} to="/about" className='py-2 pl-6 border'>ABOUT</NavLink>
          <NavLink onClick={() => setVisible(false)} to="/contact" className='py-2 pl-6 border'>CONTACT</NavLink>
        </div>
      </div>
    </div>
  )
}

export default Navbar