import React from 'react'

const Header = () => {
  return (
    <div className='w-full bg-[#FFC017] py-4  border-b border-black px-4'>
    <div className='mx-auto max-w-7xl mt-2         '>
        <div className='flex items-center justify-between'>
            <img src='https://miro.medium.com/max/8978/1*s986xIGqhfsN8U--09_AdA.png'  className='h-10'/>
            <div className='flex justify-end items-center w-full'> 
            <div className='hidden md:flex space-x-6 items-center mr-8 '>
                <div>
                    Our Story
                </div>
                <div>
                    Membership
                </div>
                <div>
                    Write
                </div>
                <div>
                    Sign In
                </div>
            
            </div>
            <button className='text-white bg-black rounded-full py-3 px-6'> Get Started </button>
            </div>
            

        </div>
        </div>


    </div>
  )
}

export default Header