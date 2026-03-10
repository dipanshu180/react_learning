// import style from './Button.module.css'

function Button(){
    const styles = {
                
                backgroundColor:  "rgb(153, 197, 255)",
                color: "rgb(130, 115, 115)" ,
                padding:"10px 20px" ,
                borderRadius: "7px",
                border: "none" ,
                cursor: "pointer", 
            
        }
    return(
        

        <button style={styles}>Click me</button>
    ) 
}

export default Button