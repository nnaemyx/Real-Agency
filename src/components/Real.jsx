import React from 'react'
import {real} from '../data'


const Real = () => {
    const {heading,items} = real
    return (
        <div className='container mx-auto'>
          <h1 className='mb-6 font-primary font-[500] text-center text-[30px]'>{ heading}</h1>
            <div className='lg:flex-row items-center flex flex-col gap-4 justify-center'>
                {items.map((item, index) => {
                    const { image, title, subtitle } = item;
                    return (
                        <div className='flex'>
                            <div className='flex'>
                                <div className=''>
                                    <img src={image.type} alt="images" className='w-[24rem]' />  
                                    <div>
                                        <h1 className='font-semibold mb-1 font-secondary'>{title}</h1>
                                        <p className='font-secondary'>{subtitle}</p>
                                    </div>
                                </div>   
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Real