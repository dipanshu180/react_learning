import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Food from './Food.jsx'
import Card from './Card.jsx'
import Button from './Button.jsx'
import Student from './Student.jsx'
import UserGreeting from './UserGreeting.jsx'
import List from './List.jsx'
import Click from './Click.jsx'
import ReactHook  from './ReactHook.jsx'
import Counter from './Counter.jsx'
import OnChange from './OnChange.jsx'
function App() {
  return(
    // <Header></Header>
    // <>
    //   {/* <Header/>
    //   <Food/>
    //   <Footer/> */}
    // </>
    <>
        <Card/>
        <Button/>
        <Card/>
        <Button/> 
        <Card/>
        <Button/>

        <Student name='Arrow' age={23} isStudent={true} />
        <Student name='Arrow' age={23} isStudent={true} />
        <Student name='Arrow' age={23} isStudent={true} />
        <Student/> 

        <UserGreeting isLoggedIn={true} username="Arrow"/>

        <List/>
        <Click/>

        <ReactHook/>
        <Counter/>
        <OnChange/>

    </>
  )  
}

export default App
