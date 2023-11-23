import React from 'react'
import UserContext from './UserContext'
import { useSelector } from 'react-redux'
const UserProvider = ({children}) => {
    const LoginStatus = useSelector((state) => {
        return state.user[0].status;
    })
  return (
    <UserContext.Provider value={LoginStatus}>{children}</UserContext.Provider>
  )
}

export default UserProvider