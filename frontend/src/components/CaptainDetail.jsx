import React from 'react'

const CaptainDetail = () => {
  return (
    <div>
       <div className="flex items-center justify-between">
          <div className="flex items-center justify-start gap-3">
            <img className="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHJhbmRvbSUyMHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D" alt="" />
            <h4 className="text-lg font-medium">Ityankant </h4>
          </div>
          <div>
            <h4 className="text-xl font-semibold">₹295.30</h4>
            <p className="text-sm text-gray-400">Earned</p>
          </div>
        </div>
        <div className="flex p-3 mt-6 bg-gray-50 rounded-xl justify-center gap-5 items-start">
          <div className="text-center">
            <i className="text-3xl mb-2 font-thin ri-timer-2-line"></i>
            <h5 className="text-lg font-medium">10.2</h5>
            <p className="text-sm text-gray-600">Hours Online</p>
          </div>
          <div className="text-center">
            <i className="text-3xl mb-2 font-thin ri-speed-up-line"></i>
            <h5 className="text-lg font-medium"> 10.2</h5>
            <p className="text-sm text-gray-600">Hours Online</p>
          </div>
          <div className="text-center">
            <i className="text-3xl mb-2 font-thin ri-booklet-line"></i>
            <h5 className="text-lg font-medium">10.2</h5>
            <p className="text-sm text-gray-600">Hours Online</p>
          </div>
        </div>
    </div>
  )
}

export default CaptainDetail
