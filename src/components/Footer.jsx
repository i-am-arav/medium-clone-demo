import React from 'react'


const Footer = () => {
  return (
    <div className='md:hidden flex flex-col bg-black  text-white py-4 px-8'>
        <img src='https://miro.medium.com/max/8978/1*s986xIGqhfsN8U--09_AdA.png'  className='w-36 h-10 invert -ml-3' />
        <div className='flex space-x-6 font-extralight text-sm mt-2'>
            <div>About</div>
            <div>Help</div>
            <div>Terms</div>
            <div>Privacy</div>
        </div>
        <hr className='my-6' />
        <p className='text-sm'>Get the Medium App</p>
        <div className='flex space-x-6 mt-2 cursor-pointer -ml-1'>
        <img className='h-20 w-36' src='https://www.pngmart.com/files/10/Download-On-The-App-Store-PNG-Clipart.png'  alt='get-it-on-apple' />
        <img className='h-20 w-36 pt-3' src='https://e7.pngegg.com/pngimages/918/845/png-clipart-google-play-logo-google-play-app-store-android-google-play-text-logo.png' alt='get-it-on-google-play' />
        </div>
    </div>
  )
}

export default Footer