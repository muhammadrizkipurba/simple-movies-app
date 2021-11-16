import React from 'react'

const RatingBox = ({ label }) => {
  return (
    <div className='border border-gray-300 bg-gray-200 py-2 px-3 rounded-xl flex items-center'>
      <img alt='' src='/assets/icons/star.svg' className='h-4 pr-2' />
      <p className='mb-0'>{label}</p>
    </div>
  )
}

export default RatingBox
