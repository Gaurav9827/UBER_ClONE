import React from 'react'

const RidePopUp = (props) => {
  return (
    <div>
       <h5
        className="p-1 text-center w-[93%] absolute top-0"
        onClick={() => {
          props.setRidePopupPanel(false)
        }}
      >
        <i className="text-3xl text-gray-200 ri-arrow-down-wide-line"></i>
      </h5>
      <h3 className="text-2xl font-semibold mb-5">New Ride Available! </h3>
      <div className='flex item-center bg-gray-50 rounded-lg justify-between mt-4'>
        <div  className='flex items-center gap-3 '>
          <img className="h-12 w-12 rounded-full object-cover"src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHJhbmRvbSUyMHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D" alt="" />
          <h2 className='text-lg font-medium'>Ityankant</h2>
        </div>
        <h5 className='text-lg font-semibold'>2.2km</h5>
      </div>
      <div className="flex justify-between flex-col items-center gap-2">
       
        <div className="w-full">
          <div className="flex items-center gap-5 p-3 border-b-2">
            <i className="ri-map-pin-user-fill"></i>
            <div>
              <h3 className="text-lg font-medium">562/11-A</h3>
              <p className="text-sm -mt-1 text-gray-600"></p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-3 border-b-2">
            <i className="text-lg ri-map-pin-2-fill"></i>
            <div>
              <h3 className="text-lg font-medium">562/11-A</h3>
              <p className="text-sm -mt-1 text-gray-600">
                kankariya talb.raipur
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-3">
            <i className="ri-currency-line"></i>
            <div>
              <h3 className="text-lg font-medium">₹190.34</h3>
              <p className="text-sm -mt-1 text-gray-600">Cash Cash</p>
            </div>
          </div>
        </div>
       <div className='flex w-full items-center justify-between mt-5'>
         <button
          onClick={() => {
           props.setConfirmRidePopupPanel(true)
          }}
          className="  bg-green-600  text-semibold p-3 px-8 rounded  text-white"
        >
          Accept
        </button>
        <button
          onClick={() => {
            props.setRidePopupPanel(false)
          }}
          className="mt-1 bg-gray-300  text-semibold p-3 rounded px-8 text-gray-700"
        >
          Ignore
        </button>
       </div>
      </div>
    </div>
  )
}

export default RidePopUp
