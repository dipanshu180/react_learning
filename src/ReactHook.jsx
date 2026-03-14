
import { renderToStaticMarkup } from "react-dom/server"
import React, {useState} from 'react' 
function ReactHook()
{
    const[name, setName] = useState("Guest");
    const[age, setAge] = useState(0);
    const updateName = () => {
        setName('Arrow');     
    }
    const IncreamentAge = () => {
        setAge(age+1);     
    }
    return(
        <div>
            <p>Name: {name}</p>
            <button onClick={updateName}>Set Name</button>
            <p>Age: {age}</p>
            <button onClick={IncreamentAge}>Increment age</button>
        </div>
    )

}
export default ReactHook