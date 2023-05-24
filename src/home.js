import { useState } from "react";

const Home = () => {
    //let name = "Mario";
const [name, setName] = useState('Mario')  ; 
const [age, setAge] = useState(25);

    const handleClick = () => {
       setName('Luigi');
       setAge(30);
    }

    

    return (  
        <div className="home">
            <h2>Home page</h2>
            <p>{name} is {age} years old.</p>
            <button onClick={handleClick}>Click Me</button>
        </div>
    );
}
 
export default Home;