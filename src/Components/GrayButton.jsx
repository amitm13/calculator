import React from 'react'

export default function GrayButton({value, extrclassName, clicked}) {
  return (
    <div onClick={clicked} className={'px-4 py-5 hover:from-gray-500 hover:to-gray-600 bg-gradient-to-b from-gray-600 to-gray-700 rounded-lg shadow-lg drop-shadow-xl text-white text-xl '+extrclassName}>{value}</div>
  )
}
