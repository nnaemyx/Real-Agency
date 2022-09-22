import React from 'react'
import Logo from '../images/logo.png'
import {navigation} from '../data'

const Navbar = () => {
  return (
    <div className='container mx-auto'>
      <div className='flex '>
        <div>
          <img src={Logo} alt="logo" className='w-20' />
        </div>
        {navigation.map((items, index) => {
          return (
            <div className='p-2' key={index}>
              <ul>
                <li>{items.name}</li>
              </ul>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Navbar