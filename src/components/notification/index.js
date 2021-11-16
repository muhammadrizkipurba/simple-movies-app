import React from 'react'

const Notification = ({ errorMsg }) => {
  return (
    <div className='bg-red-500 text-center p-3 rounded-xl'>
      <p className='text-white text-base'>{errorMsg}</p>
    </div>
  )
}

export default Notification
