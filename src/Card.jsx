import profilePic from './assets/react.svg'
function Card()
{
    return (
        <div className='card' >
            <img className='card-image' src={profilePic} alt="Profile Picture">
            </img>
            <h2 className='pro-title' >Arrow</h2>
            <p className='card-text'>I am SomeOne who is something</p>
        </div>
    )
}

export default Card