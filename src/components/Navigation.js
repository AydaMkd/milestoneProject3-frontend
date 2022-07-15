import { useState, useEffect, useContext } from 'react'
import { useNavigate } from "react-router";
import { CurrentUser } from '../contexts/CurrentUser';


function Navigation() {

    const history = useNavigate()

    const { currentUser } = useContext(CurrentUser)

  
    let loginActions = (
        <>
            <li style={{ float: 'right' }}>
                <a href="#" onClick={() => history.push("/sign-up")}>
                    Sign Up
                </a>
            </li>
            <li style={{ float: 'right' }}>
                <a href="#" onClick={() => history.push("/login")}>
                    Login
                </a>
            </li>
        </>
    )
    
  

    if (currentUser) {
        loginActions = (
            <li style={{ float: 'right' }}>
                Logged in as {currentUser.username}
            </li>
        )
    }

    return (
        <nav>
                Hangry Nomster
              
                
                {loginActions}
            
        </nav>
    )
}

export default Navigation;