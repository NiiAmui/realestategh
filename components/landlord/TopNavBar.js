import React from 'react'
import LandlordProfile from './LandlordProfile'
import MessageNotification from './MessageNotification'
import OtherNotifications from './OtherNotifications'


const TopNavBar = () => {
  return (
    <div className="px-8 min-w-full text-gray-500 border-b">
      <div className="w-full flex justify-between py-4 items-center text-sm">
      {/* page title */}
      <p className=''>Dashboard</p>

      {/* Current Date */}
      <p>Today's Date</p>

        {/* Notifications and profile */}
        <div className='flex items-center gap-2.5'>
          <MessageNotification />
          <OtherNotifications />
          <LandlordProfile />
        </div>
      </div>
    </div>
  )
}

export default TopNavBar