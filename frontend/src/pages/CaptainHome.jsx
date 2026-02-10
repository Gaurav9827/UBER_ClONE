import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import CaptainDetail from "../components/CaptainDetail";
import RidePopUp from "../components/RidePopUp";
import gsap from "gsap";
import { useGSAP } from "@gsap/react"
import ConfirmRidePopup from "../components/ConfirmRidePopup";

const CaptainHome = () => {

 const [ridePopupPanel,setRidePopupPanel]= useState(true)
 const [confirmRidePopupPanel,setConfirmRidePopupPanel]= useState(false)
 const ridePopupPanelRef =  useRef(null)
 const confirmRidePopupPanelRef =  useRef(null)


  useGSAP(
    function () {
      if (ridePopupPanel) {
        gsap.to(ridePopupPanelRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(ridePopupPanelRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [ridePopupPanel],
  );



  useGSAP(
    function () {
      if (confirmRidePopupPanel) {
        gsap.to(confirmRidePopupPanelRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(confirmRidePopupPanelRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [confirmRidePopupPanel],
  );






  return (
    <div className="h-screen">
      <div className="fixed p-6 top-0 flex items-center justify-between w-screen">
        <img
          className="w-16"
          src="https://logos-world.net/wp-content/uploads/2020/05/Uber-Logo-700x394.png"
          alt=""
        />
        <Link
          to="/captain-login"
          className="h-10 w-10 bg-white flex items-center justify-center rounded-full"
        >
          <i className=" text-lg font-medium ri-logout-box-r-line"></i>
        </Link>
      </div>

      <div className="h-3/5">
        <img
          className="h-full w-full
        object-cover "
          src="https://imgs.search.brave.com/P4IXHo6p3RqPlh1--9gU65H9RjYIU1gZc822sS_BXLI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMjcv/ODI2LzIxNy9zbWFs/bC9taW5pLWNpdHkt/d2l0aC1hLXRheGkt/dHJhbnNwb3J0YXRp/b24tYmFja2dyb3Vu/ZC0zZC1yZW5kZXJp/bmctcGhvdG8uanBn"
          alt=""
        />
      </div>
      <div className="h-2/5 p-6">
        <CaptainDetail />
      </div>

      <div ref={ridePopupPanelRef} className="fixed w-full z-10 translate-y-full  bg-white bottom-0 px-3 py-10 pt-12">
        <RidePopUp setRidePopupPanel ={setRidePopupPanel} setConfirmRidePopupPanel ={setConfirmRidePopupPanel} />
      </div>


      <div ref={confirmRidePopupPanelRef} className="fixed w-full z-10 translate-y-full  h-screen  bg-white bottom-0 px-3 py-10 pt-12">
        <ConfirmRidePopup
        setConfirmRidePopupPanel ={setConfirmRidePopupPanel} setRidePopupPanel ={setRidePopupPanel}/>
      </div>
    </div>
  );
};

export default CaptainHome;
