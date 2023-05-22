const Home = () => {

    const handleClick = (e) => {
        console.log('Hello Ninjas', e)
    }

    const handleClickAgain = (name) => {
        console.log('Hello ' + name);
    }

    return (  
        <div className="home">
            <h2>Home page</h2>
            <button onClick={handleClick}>Click Me</button>
            <button onClick={() => handleClickAgain('Mario')}>Click me again</button>
        </div>
    );
}
 
export default Home;