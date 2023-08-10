import React from 'react'

const Pill = ({text, textSize = 'sm', textColor='black'}) => {
  return (
    <div className={`bg-gray-200 px-2 py-[2px] rounded-full text-${textSize} text-${textColor} w-min inline text-center`}>{text}</div>
  )
}

export default Pill