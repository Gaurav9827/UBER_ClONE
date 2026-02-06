import React, { useState } from 'react'

export const UserDataContext = createContext()
const UserContext = ({children}) => {

  const [user,setUser] = useState({
    email:'',
    fullName:{
      firstname:'',
      lastanme:'',
    }
  })
  
  return (
    <div>
  <UserDataContext.Provider>
        {children}
  </UserDataContext.Provider>
    </div>
  )
}

export default UserContext
