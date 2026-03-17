import React ,{ useState , useEffect } from "react";

function UseEffect(){

    const[count , setCount] = useState(0);
    
    useEffect(()=> {document.title=`Count-${count}`})   
    function addCount()
    {
        setCount(c=>c+1)
    } 
    return(

        <div>
            <h2>Count:{count}</h2>
            <button onClick={addCount}>Add</button>
        </div>
    )
}

export default UseEffect