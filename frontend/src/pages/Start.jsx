import React from "react";

import { Link } from "react-router-dom";

const Start = () => {
  return (
    <div>
      <div className=" bg-cover bg-center bg-[url(https://plus.unsplash.com/premium_photo-1737109193379-3ecf2fd3359a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dHJhZmZpYyUyMGxpZ2h0fGVufDB8fDB8fHww)] h-screen  pt-8  flex justify-between flex-col w-full bg-red-400">
        <img
          className="w-16 ml-8"
          src="https://logos-world.net/wp-content/uploads/2020/05/Uber-Logo-700x394.png"
          alt=""
        />
        <div className="bg-white pb-7 py-4 px-4">
          <h2 className="text-3xl font-bold">Get Started with Uber</h2>
          <Link
            to="/login"
            className="flex items-center justify-center w-full bg-black text-white py-3 rounded mt-5"
          >
            Continue
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Start;
