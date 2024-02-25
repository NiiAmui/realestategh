import React from 'react'
import AdminPropertyCard from '/components/admin/AdminPropertyCard'

const rentals = [
    {
      image:
        "https://a0.muscache.com/im/pictures/miso/Hosting-668146487515150072/original/8ff2a532-e0cd-41a2-9164-554c4d9eb28a.jpeg?im_w=720",
      location: "Kumasi, Ahodwo",
      name: "Single room self Contain",
      rent: 500,
      downPayment: 3500,
      tenant: "Stephen Smith",
      endDate: "01-3-2025",
      id:1,
    },
    {
      image:
        "https://a0.muscache.com/im/pictures/miso/Hosting-668146487515150072/original/8ff2a532-e0cd-41a2-9164-554c4d9eb28a.jpeg?im_w=720",
      location: "Accra, Central",
      name: "3 Bedroom House in Accra",
      downPayment: 5600,
      rent: 1000,
      tenant: "Kojo Amankwah",
      endDate: "20-7-2029",
      id:2,
    },
    {
      image:
        "https://a0.muscache.com/im/pictures/miso/Hosting-668146487515150072/original/8ff2a532-e0cd-41a2-9164-554c4d9eb28a.jpeg?im_w=720",
      location: "Cape Coast, Tantri",
      name: "Single Room Self Contain",
      downPayment: 3500,
      rent: 200,
      tenant: "Kojo Amankwah",
      endDate: "20-7-205",
      id:3,
    },
    {
      image:
        "https://a0.muscache.com/im/pictures/miso/Hosting-668146487515150072/original/8ff2a532-e0cd-41a2-9164-554c4d9eb28a.jpeg?im_w=720",
      location: "Accra, East Legon",
      name: "Condo",
      rent: 700,
      downPayment: null,
      tenant: null,
      endDate: null,
      id:4,
    },
  ];

  const isLoading = false

const page = () => {
  return (
    <div className='p-4 pb-20'>
       {/* header */}
      <p className="text-lg font-medium text-center">Samuel Jackson's Properties</p>

      {/* PROPERTIES */}
      <div >
        {/* if there are properties */}
        {rentals && <div className="propertiesContainer mt-4 flex flex-col gap-4">
          {rentals.map((rental, idx) => (
            <AdminPropertyCard rental={rental} key={idx} />
          ))}
        </div>}
        {/* if there are no properties */}
        {(!rentals && !isLoading) && <div>There are no properties uploaded</div>}
        {/* if is loading */}
        {isLoading && <div>Loading...</div>}
      </div>
    </div>
  )
}

export default page