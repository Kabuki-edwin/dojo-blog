const Home = () => {
    let name = 'Mario';

    const handleClick = () => {
        name = 'luigi';
    }

    

    return (  
        <div className="home">
            <h2>Home page</h2>
            <p>{name}</p>
            <button onClick={handleClick}>Click Me</button>
        </div>
    );
}
 
export default Home;