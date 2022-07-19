import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router'
function Search() {

    const [menus, setMenus] = useState('')
    const [query, setQuery] = useState('');
    // const resData = null
   
    async function handleSearch(e) {
        e.preventDefault()
            const response = await fetch(`http://localhost:5000/api/recipes/search/${query}`, {

                headers: {
                    'x-auth-token': localStorage.getItem('token'),
                    'Content-Type': 'application/json'
                },
            })
            const resData = await response.json()
            // if data is the same, don't update
           
                setMenus(resData)
            
        }
    
    console.log(menus)
    console.log(query)
    let display = (
        <>
         
        </>
      );
    if (menus.length > 0) {display = (
   <>
   <ul>
  {menus.map(menu => {
    return (
      <ul>
      <li >
        {menu.recipename}
      </li>
      <li >
      <img width="200" height="200" src={menu.image} />
      </li>
      </ul>
    )
  })}
</ul>

   </>
    )
}

    return (
        <div>
            
                <input type="text" placeholder="Search recipes by ingredients" onChange={(e) => setQuery(e.target.value)} value={query} />
                <input type="submit" onClick={handleSearch} />
               
         {display}
        </div>
       
    )
}

export default Search;