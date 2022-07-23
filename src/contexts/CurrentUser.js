import { useEffect, createContext, useState } from "react";

export const CurrentUser = createContext()

function CurrentUserProvider({ children }) {

    const [currentUser, setCurrentUser] = useState(null)

    useEffect(() => {
        const getLoggedInUser = async () => {
            // let response = await fetch('https://hangrynomster.herokuapp.com/api/auth', {
                let response = await fetch('http://localhost:5000/api/auth', {
                headers: {
                    'x-auth-token': localStorage.getItem('token')
                }
            })
            let user = await response.json()
            setCurrentUser(user)
        }
        getLoggedInUser()
    }, [])
    console.log(currentUser)
    return (
        <CurrentUser.Provider value={{ currentUser, setCurrentUser }}>
            {children}
        </CurrentUser.Provider>
    )
}

export default CurrentUserProvider