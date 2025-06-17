import React from 'react'
import { NavLink } from 'react-router'

const Loglogic = () => {
  return (
    <>
        <NavLink 
              to='/login'
              style={{textDecorationLine: "none",color: "black", whiteSpace: "nowrap"}}
              end
            >
              Log / SignIn
        </NavLink>
    </>
  )
}

export default Loglogic