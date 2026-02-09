import React from "react";

const ConfirmRide = (props) => {
  return (
    <div>
      <h5
        className="p-1 text-center w-[93%] absolute top-0"
        onClick={() => {
          props.setConfirmRidePanel(false);
        }}
      >
        <i className="text-3xl text-gray-200 ri-arrow-down-wide-line"></i>
      </h5>
      <h3 className="text-2xl font-semibold mb-5">Confirm your Ride</h3>
      <div className="flex justify-between flex-col items-center gap-2">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHM8rUS6O8QurpuIOnuQ7EFhZnRaANc2vt1XT5GCTA75ET65WWGPSeBQM&s"
          alt=""
        />
        <div className="w-full">
          <div className="flex items-center gap-5 p-3 border-b-2">
            <i className="ri-map-pin-user-fill"></i>
            <div>
              <h3 className="text-lg font-medium">562/11-A</h3>
              <p className="text-sm -mt-1 text-gray-600"></p>
            </div>
          </div>
            <div className='flex items-center gap-5 p-3 border-b-2'>
                        <i className="text-lg ri-map-pin-2-fill"></i>
                        <div>
                            <h3 className='text-lg font-medium'>562/11-A</h3>
                            <p className='text-sm -mt-1 text-gray-600'>
                              kankariya talb.raipur
                            </p>
                        </div>
                    </div>
                     <div className='flex items-center gap-5 p-3'>
                        <i className="ri-currency-line"></i>
                        <div>
                            <h3 className='text-lg font-medium'>₹190.34</h3>
                            <p className='text-sm -mt-1 text-gray-600'>Cash Cash</p>
                        </div>
                    </div>
        </div>
        <button onClick={
          ()=>{
            props.setVehicleFound(true)
            props.setConfirmRidePanel(false)
          }
        } className="w-full bg-green-600  text-semibold p-2 rounded  text-white">Confirm</button>
      </div>
    </div>
  );
};

export default ConfirmRide;
