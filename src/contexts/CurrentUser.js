import { useEffect, createContext, useState } from "react";


export const CurrentUser = createContext()

function CurrentUserProvider({ children }) {

    const [currentUser, setCurrentUser] = useState(null)
<<<<<<< HEAD
    
    useEffect(() => {
        const getLoggedInUser = async () => {
            let response = await fetch('http://localhost:5000/authentication/profile', {
                headers: {
                    'Authorization': localStorage.getItem('token')
                }
            })
            let user = await response.json()
            setCurrentUser(user)
        }
        getLoggedInUser()
    }, [])
=======

    // useEffect(() => {
    //     const getLoggedInUser = async () => {
    //         let response = await fetch('http://localhost:5000/auth', {
    //             headers: {
    //                 'Authorization': localStorage.getItem('token')
    //             }
    //         })
    //         let user = await response.json()
    //         setCurrentUser(user)
    //     }
    //     getLoggedInUser()
    // }, [])
>>>>>>> 06f88753a761324f7b957a93fe73abaf8eae58d2
    return (
        <CurrentUser.Provider value={{ currentUser, setCurrentUser }}>
            {children}
        </CurrentUser.Provider>
    )
}

export default CurrentUserProvider