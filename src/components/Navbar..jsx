import React, { useState } from "react";
import Logo from '../images/logo.png'
import { navigation } from '../data'
import { CgMenuRight, CgClose } from "react-icons/cg";
import NavMobile from "./NavMobile";



const Navbar = () => {
  const [mobileNav, setMobileNav] = useState(false);

  return (
    <div className='container mx-auto'>
      <div className='flex items-center justify-between'>
        <img src={Logo} alt="logo" className='w-20' />
          {/* menu icon */}
          <div
            onClick={() => setMobileNav(!mobileNav)}
            className="md:hidden text-2xl lg:text-3xl text-primary cursor-pointer"
          >
            {mobileNav ? <CgClose /> : <CgMenuRight />}
          </div>
        <nav className="hidden md:flex">
            <ul className="md:flex md:gap-x-12">
              {navigation.map((item, index) => {
                return (
                  <li key={index}>
                    <a
                      className="capitalize text-primary hover:border-b transition-all"
                      href={item.href}
                    >
                      {item.name}
                    </a>
                  </li>
                );
              })}
            </ul>
        </nav>
        {/* nav mobile */}
          <div
            className={`${
              mobileNav ? "left-0" : "-left-full"
            } md:hidden fixed bottom-0 w-full max-w-xs h-screen transition-all`}
          >
          <NavMobile />
          </div>
      </div>
    </div>
  )
}

export default Navbar