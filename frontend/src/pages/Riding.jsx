import React from "react";
import { Link } from "react-router-dom";

const Riding = () => {
  return (
    <div className="h-screen">
      <Link to="/home" className="fixed  right-2 top-2 h-10 w-10 bg-white flex items-center justify-center rounded-full"> 
        <i className=" text-lg font-medium ri-home-5-line"></i>
      </Link>
      
      <div className="h-1/2">
        <img
          className="h-full w-full
        object-cover "
          src="https://imgs.search.brave.com/P4IXHo6p3RqPlh1--9gU65H9RjYIU1gZc822sS_BXLI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMjcv/ODI2LzIxNy9zbWFs/bC9taW5pLWNpdHkt/d2l0aC1hLXRheGkt/dHJhbnNwb3J0YXRp/b24tYmFja2dyb3Vu/ZC0zZC1yZW5kZXJp/bmctcGhvdG8uanBn"
          alt=""
        />
      </div>
      <div className="h-1/2 p-4">
        <div className="flex items-center justify-between">
          <img
            className="h-12"
            src="https://swyft.pl/wp-content/uploads/2023/05/how-many-people-can-a-uberx-take.jpg"
            alt=""
          />
          <div className="text-right">
            <h2 className="text-lg font-medium">Gaurav</h2>
            <h4 className="text-lg font-semibold -mt-1 -mb-1">CG04Ab1234</h4>
            <p className="text-sm text-gray-600">Maruti suzuki alto</p>
          </div>
        </div>

        <div className="flex justify-between flex-col items-center gap-2">
          <div className="w-full">
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
        </div>
        <button className="w-full bg-green-600  text-semibold p-2 rounded  text-white">
          Make a Payment
        </button>
      </div>
    </div>
  );
};

export default Riding;
