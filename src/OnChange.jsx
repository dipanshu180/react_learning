import React, {useState} from 'react'

function OnChange()
{
    const [name , setName] = useState()
    const[payment , setPayment] = useState()
    function nameEventHandler(event){
        setName(event.target.value)
    }  

    function setPaymentHandler(event){
        setPayment(event.target.value)
    }
    return(
        <div>
            <input type="text" onChange={nameEventHandler} />
            <p>Name:{name}</p>

            <select onChange={setPaymentHandler} value={payment}>
                <option value="">Select</option>
                <option value="visa">Visa</option>
                <option value="UPI">UPI</option>
                <option value="Card">CArd</option>
            </select>
            <p>Payment: {payment}</p>
        </div>
    )
}

export default OnChange