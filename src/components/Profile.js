import { useEffect, useState } from "react";

function Profile() {

    const [myrecipes, setMyrecipes] = useState(null)
    // const resData = null

    useEffect(() => {
        console.log('useEffect')
        const fetchData = async () => {
            const response = await fetch(`http://localhost:5000/api/recipes/myrecipes`, {

                headers: {
                    'x-auth-token': localStorage.getItem('token'),
                    'Content-Type': 'application/json'
                },
            })
            const resData = await response.json()
            // if data is the same, don't update
            if (resData != myrecipes) {
                setMyrecipes(resData)
            }
        }
        fetchData()
    }, [])
    console.log(myrecipes)

    if (myrecipes === null) {
        return <h1>Loading</h1>
    }

    return (<>

        {myrecipes.map((myrecipe) => {
            return (
                <div className="col-sm-6" key={new Date(myrecipe.date).getUTCMilliseconds()}>
                    <h2>
                        {myrecipe.recipename}
                    </h2>
                    <p className="text-center">
                        {myrecipe.description}
                    </p>
                    <img style={{ maxWidth: 200 }} src={myrecipe.image} alt={myrecipe.name} />
                </div>
            )
        })
        }</>)
}

export default Profile