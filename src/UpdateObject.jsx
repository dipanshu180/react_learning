import React,{ useState } from 'react'

function UpdateObject()
{
    const [car , setCar] = useState({year:2024 , model:"Mustang"})
    function handleCarYear(event){
        setCar(c=>({...c , year:event.target.value}))
    }
    function handleCarModel(event){
        setCar(c=>({...car , model:event.target.value}) )
    }
    return(
        <div>
            <p>Your Fav car is {car.year} {car.model} </p>
            <input type="number" value={car.year} onChange={handleCarYear}></input> 
            <input type="text" value={car.model} onChange={handleCarModel}></input>
        </div>
         

    )
}

export default UpdateObject