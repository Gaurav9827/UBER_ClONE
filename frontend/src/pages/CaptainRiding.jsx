import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import FinishRide from "../components/FinishRide";

const CaptainRiding = () => {
  const [finishRidePanel, setFinishRidePanel] = useState(false);
  const finishRidePanelRef = useRef(null)





  useGSAP(
    function () {
      if (finishRidePanel) {
        gsap.to(finishRidePanelRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(finishRidePanelRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [finishRidePanel],
  );

  return (
    <div className="h-screen relative">
      <div className="fixed p-6 top-0 flex items-center justify-between w-screen">
        <img
          className="w-16"
          src="https://logos-world.net/wp-content/uploads/2020/05/Uber-Logo-700x394.png"
          alt=""
        />
        <Link
          to="/captain-home"
          className="h-10 w-10 bg-white flex items-center justify-center rounded-full"
        >
          <i className=" text-lg font-medium ri-logout-box-r-line"></i>
        </Link>
      </div>

      <div className="h-4/5">
        <img
          className="h-full w-full
        object-cover "
          src="https://imgs.search.brave.com/P4IXHo6p3RqPlh1--9gU65H9RjYIU1gZc822sS_BXLI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMjcv/ODI2LzIxNy9zbWFs/bC9taW5pLWNpdHkt/d2l0aC1hLXRheGkt/dHJhbnNwb3J0YXRp/b24tYmFja2dyb3Vu/ZC0zZC1yZW5kZXJp/bmctcGhvdG8uanBn"
          alt=""
        />
      </div>
      <div className="h-1/5 p-6 flex items-center justify-between bg-yellow-400 relative" 
      onClick={()=>{
        setFinishRidePanel(true)
      }}
      >
        <h5
          className="p-1 text-center w-[95%] absolute top-0"
          onClick={() => {}}
        >
          <i className="text-3xl text-gray-600 ri-arrow-up-wide-line"></i>
        </h5>

        <h4 className="text-xl font-semibold">4 KM away</h4>
        <button className="  bg-green-600  text-semibold p-3 px-8 rounded  text-white">
          Complete Ride
        </button>
      </div>
      <div
        ref={finishRidePanelRef}
        className="fixed w-full z-10 translate-y-full  bg-white bottom-0 px-3 py-10 pt-12"
      >
        <FinishRide setFinishRidePanel ={setFinishRidePanel}
          
        />
      </div>
    </div>
  );
};

export default CaptainRiding;
