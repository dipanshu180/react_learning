import React , {useState} from 'react'

function Counter(){

    const [count , setCount] = useState(0)
    
    const increment = () => 
        {
            setCount(count+1)
        } 
    const decrement = () => 
        {
            setCount(count-1)
        } 
    const reset = () =>
    {
        setCount(0)
    }
    return(
        <div className='counter'>
            <p className='count'>{count}</p>
            <button onClick={increment} className='cnt'>Increment</button>
            <button onClick={decrement} className='cnt'>Decrement</button>
            <button onClick={reset} className='cnt'>Reset</button>

        </div>
    )
}

export default Counter