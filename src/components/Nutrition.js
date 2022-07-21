
import { useState } from 'react'


function Nutrition() {

    const [calories, setCalories] = useState('')
    const [query, setQuery] = useState('');
    // const resData = null

    async function handleSearch(e) {
        e.preventDefault()
        // const result = await fetch(
        //     `http://localhost:5000/api/recipes/value/${query}`, {

        //         headers: {
        //             'x-auth-token': localStorage.getItem('token'),
        //             'Content-Type': 'application/json'
        //         },
        //     })
        // const data = await result.json()

        // console.log(data.ingredients)
        //query= data.ingredients
        console.log(query)

        const response = await fetch(
            `https://api.calorieninjas.com/v1/nutrition?query=` + query, {
            headers: {
                'X-Api-Key': 'I3BNw6tXJkLRpwGwAizAWA==7h85UBkH3sFR1NOb',
            },
            contentType: 'application/json',
        }
        );
        const resData = await response.json()
        // if data is the same, don't update

        setCalories(resData)
    }


    console.log(calories)
    let types = typeof (calories)
    let arrays = calories.items;
    console.log(arrays)
    console.log(typeof (arrays))
    function totalcalories() {
        
        if (arrays != null) {
            let sum1 = 0;
            let sum2 = 0;
            let sum = 0;
            let item = ''

            for (const key in arrays) {
                sum1 = (Object.values(arrays)[key].calories)
                sum = (Object.values(arrays)[key].serving_size_g)
                item = (Object.values(arrays)[key].name)
            }
            sum2 = (sum * 0.035).toFixed(2);

            console.log(sum2)

            return String("Total number of calories for a serving of " + item + " is " + sum1 + " per serving.\nServing size is " + sum2 + " oz.")
        }
    }

    let recipeCalories = totalcalories()
    console.log(recipeCalories)
    let display = (
        <>
            <h3>{recipeCalories}</h3>
        </>
    )

    if (arrays = null) {
        display = (
            <>

            </>
        )
    }

    return (
        <div className="text-center">
            <input type="text" placeholder="Search for calories" onChange={(e) => setQuery(e.target.value)} value={query} />
            <input type="submit" onClick={handleSearch} />
            <span>
                {display}
            </span>
        </div>
    )
}

export default Nutrition;