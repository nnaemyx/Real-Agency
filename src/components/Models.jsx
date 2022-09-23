import React from 'react'
import { model } from '../data'

const Models = () => {
    const { image, heading, title, subtitle, buttonModel } = model;
  return (
    <div className='container mx-auto'>
        <h1>{ heading }</h1>      
        <div>
              <div>
                  <img src={image.type} alt="" />
              </div>
              <div>
                  <h1>{title}</h1>
                  <p>{subtitle}</p>
                  <button>{ buttonModel }</button>
              </div>  
        </div>
    </div>
  )
}

export default Models