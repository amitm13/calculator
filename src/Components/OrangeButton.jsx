import React from 'react'

export default function OrangeButton({value, clicked}) {
  return (
    <div onClick={clicked} className='px-4 py-5 hover:from-orange-400 hover:to-orange-500 bg-gradient-to-b from-orange-600 to-orange-700 rounded-lg shadow-lg drop-shadow-xl text-white text-xl'>{value}</div>
  )
}
