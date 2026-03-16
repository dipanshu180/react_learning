import React , {useState} from 'react'

function ColorPicker(){
    const [color , setColor] = useState('#FFFFFF');

    function handleColorChange(event){
        setColor(event.target.value)
    }
    return(
        <div>
            <p>Color</p>
            <div className='cl' style={{backgroundColor:color}}>
                <p>Selected Color : {color}</p>
            </div>
            <label htmlFor="">Select Color</label>
            <input type='color' value ={color} onChange={handleColorChange}></input>
        </div>
    ) 
}

export default ColorPicker