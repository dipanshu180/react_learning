function Click(){

    const handleClick = (e) => e.target.textContent='OUCH😗' ;  
    // const handleClick2 = (name) => console.log(`${name} stop clicking me`); 
    
    return(
        // <button onClick={(e)=>handleClick(e)}>Click me</button>
        <button onDoubleClick={(e)=>handleClick(e)}>Click me</button>
    );
}

export default Click