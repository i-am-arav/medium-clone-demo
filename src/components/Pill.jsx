import React from 'react'

const Pill = ({text, className=''}) => {
  return (
    <div className={`bg-[#f2f2f2] border-[#f2f2f2] border-1 px-4 py-1 rounded-full text-center text-sm font-light ${className}`}>{text}</div>
  )
}

export default Pill