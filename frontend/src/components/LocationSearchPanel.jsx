import React from "react";

const LocationSearchPanel = (props) => {

  const locations = [
    "station road gudhiyari ",
    "machii talab",
    "ekta nagar"

  ]
  
  return (
    <div>

      {
        locations.map(function(elem,idx){
          return  <div key={idx}
          onClick={()=>{
            props.setVehiclePanel(true)
            props.setPanelOpen(false)
          }}
          className='flex gap-4 border-2 p-3 border-gray-50 active:border-black rounded-xl items-center my-2 justify-start'>
        <h2 className="bg-[#eee] h-10 w-10 rounded-full flex items-center justify-center">
          <i className="ri-map-pin-fill text-xl"></i>
        </h2>
        <h4 className="text-lg">{elem}</h4>
      </div>
        })
      }
    </div>
  );
};

export default LocationSearchPanel;
