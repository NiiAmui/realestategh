import React from 'react'
import LandlordStatSummaryCard from '@/components/landlord/dashboard/LandlordStatSummaryCard'
import LandlordPlansCard from '@/components/landlord/dashboard/LandlordPlansCard'

const page = () => {
  return (
    <div className='p-4'>
      {/* rental stats section*/}
      <div className='rentalStats grid grid-cols-3 gap-10'>
        {/* stats cards */}
        <div className='statsCards col-span-2'>
          <LandlordStatSummaryCard />
        </div>

        {/* landLordPlans */}
        <LandlordPlansCard />
      </div>

    </div>
  )
}

export default page