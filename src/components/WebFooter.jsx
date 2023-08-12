import React from 'react'

const WebFooter = () => {
    const options = ['Help', 'Status', 'Writer', 'Blog', 'Careers', 'Privacy', 'Terms', 'About', 'Text to Speech', 'Teams']
  return (
    <div className='hidden md:flex flex-wrap py-6'>{options.map((option) => <div className='cursor-pointer text-gray-500 text-sm mr-6 mb-2 font-sans'>{option}</div>)}</div>
  )
}

export default WebFooter