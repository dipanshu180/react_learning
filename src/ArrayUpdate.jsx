import React , {useState} from 'react'

function ArrayUpdate()
{
    const [fruits , setFruit] = useState(["Apple","Banana","Grapes"])

    function updateFruit(){
        const newFruit = document.getElementById("fruit").value
        document.getElementById("fruit").value=""
        setFruit(f=> [...f , newFruit])
    }

    function removeFruit(index)
    {
        setFruit(fruits.filter((_default,i)=> i!==index))
    }
    return(
        <div>
            <h2>Fruits</h2>
            <ul>{fruits.map((fruit,index)=> <li key={index} onClick={()=> removeFruit(index)}>{fruit}</li>)}</ul>
            <input type="text" id='fruit' placeholder='Enter Fruit Name '></input>
            <button onClick={updateFruit}>Add Fruit</button>
        </div>
    )
}

export default ArrayUpdate