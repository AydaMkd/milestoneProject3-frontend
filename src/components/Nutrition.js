
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
                'X-Api-Key': process.env.REACT_APP_API_KEY,
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
            let item = '';
            let item1 = '';
            let item2 = '';
            let item3 = '';
            let item4 = '';
            let item5 = '';
            let item6 = '';
            let item7 = '';
            let item8 = '';
            let item9 = ''

            for (const key in arrays) {
                sum1 = (Object.values(arrays)[key].calories)
                sum = (Object.values(arrays)[key].serving_size_g)
                item = (Object.values(arrays)[key].name)
                item1 = (Object.values(arrays)[key].carbohydrates_total_g)*0.035.toFixed(2)
                item2 = (Object.values(arrays)[key].cholesterol_mg)*(0.035/1000).toFixed(2)
                item3 = (Object.values(arrays)[key].fat_saturated_g)*0.035.toFixed(2)
                item4 = (Object.values(arrays)[key].fat_total_g)*0.035.toFixed(2)
                item5 = (Object.values(arrays)[key].fiber_g)*0.035.toFixed(2)
                item6 = (Object.values(arrays)[key].potassium_mg)*(0.035/1000).toFixed(2)
                item7 = (Object.values(arrays)[key].protein_g)*0.035.toFixed(2)
                item8 = (Object.values(arrays)[key].sodium_mg)*(0.035/1000).toFixed(2)
                item9 = (Object.values(arrays)[key].sugar_g)*0.035.toFixed(2)
            }
            sum2 = (sum * 0.035).toFixed(2);

            console.log(sum2)

            return String("Total number of calories for a serving of " + item + " is " + sum1 +".\nServing size is " + sum2 + " oz.\n More nutritious values: Carbohydrates_total_oz: " +item1+". Cholesterol_oz: "+item2 +" .Fat_saturated_oz: " +item3 +" .Fat_total_oz: "+item4 +"  .Fiber_oz: " +item5+"  .potassium_oz: " +item6 +" .protein_g: " +item7+" .Sodium_oz: "+item8+"  .Sugar_oz: "+item9)
        }
    }

    let recipeCalories = totalcalories()
    console.log(recipeCalories)
    let display = (
        <>
            <h4 className='nutrtion'>{recipeCalories}</h4>
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
        <span>
            <h3>Enter ingredient or recipe name to search for their nutritious value </h3>
        </span>
            <input type="text" placeholder="Enter search" onChange={(e) => setQuery(e.target.value)} value={query} />
            <input type="submit" onClick={handleSearch} />
            <span>
                {display}
            </span>
        </div>
    )
}

export default Nutrition;