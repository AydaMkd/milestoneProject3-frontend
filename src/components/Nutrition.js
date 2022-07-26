
import { useState } from 'react'


function Nutrition() {

    const [calories, setCalories] = useState('')
    const [query, setQuery] = useState('');
    // const resData = null

    async function handleSearch(e) {
        e.preventDefault()

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

    let arrays = calories.items;
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
                item1 = (Object.values(arrays)[key].carbohydrates_total_g)
                item2 = (Object.values(arrays)[key].cholesterol_mg)
                item3 = (Object.values(arrays)[key].fat_saturated_g)
                item4 = (Object.values(arrays)[key].fat_total_g)
                item5 = (Object.values(arrays)[key].fiber_g)
                item6 = (Object.values(arrays)[key].potassium_mg)
                item7 = (Object.values(arrays)[key].protein_g)
                item8 = (Object.values(arrays)[key].sodium_mg)
                item9 = (Object.values(arrays)[key].sugar_g)
            }
           

            return String("Total number of calories for a serving of " +item + " is " + sum1 +".\nServing size is " + sum + " g.\n More nutritious values: Carbohydrates_total_g: " +item1+". Cholesterol_g: "+item2 +" .Fat_saturated_g: " +item3 +" .Fat_total_g: "+item4 +"  .Fiber_g: " +item5+"  .Potassium_g: " +item6 +" .protein_g: " +item7+" .Sodium_g: "+item8+"  .Sugar_g: "+item9)
           
           
        }
    }

    let recipeCalories = totalcalories()
    let display = (
        <>
         <h4 className='nutrtion'>{recipeCalories}</h4> 
            
  
            </>
    )

    if (arrays == null) {
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
            <input className="searchbtn" type="submit" onClick={handleSearch} />
            <span>
                {display}
            </span>
        </div>
    )
}

export default Nutrition;