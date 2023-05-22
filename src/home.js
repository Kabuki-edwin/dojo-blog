const Home = () => {

    const handleClick = () => {
        console.log('Hello Ninjas')
    }

    const handleClickAgain = (name) => {
        console.log('Hello' + name);
    }

    return (  
        <div className="home">
            <h2>Home page</h2>
            <button onClick={handleClick}>Click Me</button>
        </div>
    );
}
 
export default Home;