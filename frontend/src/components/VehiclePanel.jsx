import React from "react";

const VehiclePanel = (props) => {
  return (
    <div>
      <h5
        className="p-1 text-center w-[93%] absolute top-0 "
        onClick={() => {
          props.setVehiclePanel(false);
        }}
      >
        <i className=" text-3xl text-gray-200 ri-arrow-down-wide-line"></i>
      </h5>
      <h2 className="text-2xl font-semibold mb-5">Choose a vehicle </h2>

      <div 
      onClick={()=>{
        props.setConfirmRidePanel(true)
      }}
      className="flex border-2 mb-2 active:border-black rounded-xl w-full p-3 items-center justify-between">
        <img
          className="h-10"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHM8rUS6O8QurpuIOnuQ7EFhZnRaANc2vt1XT5GCTA75ET65WWGPSeBQM&s"
          alt=""
        />
        <div className="w-1/2">
          <h4 className="font-medium text-base">
            UberGo
            <span>
              <i className="ri-user-3-fill"></i>4
            </span>
          </h4>
          <h5 className="font-normal text-xs text-gray-600">2 mins away</h5>
          <p>Affordable, compact rides</p>
        </div>
        <h2 className="text-lg font-semibold">₹193.34</h2>
      </div>
      <div 
       onClick={()=>{
        props.setConfirmRidePanel(true)
      }}
      className="flex border-2 mb-2 border-black  rounded-xl w-full p-3 items-center justify-between">
        <img
          className="h-10"
          src="https://cn-geo1.uber.com/image-proc/crop/resizecrop/udam/format=auto/width=956/height=538/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC91ZGFtLWFzc2V0cy85MjAwMTg5YS03MWMwLTRmNmQtYTlkZS0xYjZhODUyMzkwNzkucG5n"
          alt=""
        />
        <div className="w-1/2">
          <h4 className="font-medium text-base">
            Moto
            <span>
              <i className="ri-user-3-fill"></i>1
            </span>
          </h4>
          <h5 className="font-normal text-xs text-gray-600">3 mins away</h5>
          <p>Affordable, motarcycle rides</p>
        </div>
        <h2 className="text-lg font-semibold">₹65.34</h2>
      </div>
      <div
       onClick={()=>{
        props.setConfirmRidePanel(true)
      }}
      className="flex border-2 active:border-black mb-2 rounded-xl w-full p-3  items-center justify-between">
        <img
          className="h-10"
          src="https://cn-geo1.uber.com/image-proc/crop/resizecrop/udam/format=auto/width=552/height=368/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC91ZGFtLWFzc2V0cy8xZGRiOGM1Ni0wMjA0LTRjZTQtODFjZS01NmExMWEwN2ZlOTgucG5n"
          alt=""
        />
        <div className="w-1/2">
          <h4 className="font-medium text-base">
            UberAuto
            <span>
              <i className="ri-user-3-fill"></i>3
            </span>
          </h4>
          <h5 className="font-normal text-xs text-gray-600">3 mins away</h5>
          <p>Affordable, Auto rides</p>
        </div>
        <h2 className="text-lg font-semibold">₹118.34</h2>
      </div>
    </div>
  );
};

export default VehiclePanel;
